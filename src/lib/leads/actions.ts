"use server";

import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import { evidenceSchema, formObject, parseLeadForm, recordIdSchema, type LeadFormState } from "@/lib/leads/validation";

function validationState(error: { flatten(): { fieldErrors: Record<string, string[]> } }): LeadFormState {
  return { error: "Review the highlighted fields and try again.", errors: error.flatten().fieldErrors };
}

function verifiedRecordId(id: string) {
  const parsed = recordIdSchema.safeParse(id);
  if (!parsed.success) notFound();
  return parsed.data;
}

export async function createLeadAction(_state: LeadFormState, formData: FormData): Promise<LeadFormState> {
  await requireAdmin();
  const parsed = parseLeadForm(formData);
  if (!parsed.success) return validationState(parsed.error);

  let lead: { id: string };
  try {
    lead = await prisma.lead.create({ data: parsed.data, select: { id: true } });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return { error: "A lead already uses that external place ID." };
    }
    throw error;
  }

  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  redirect(`/admin/leads/${lead.id}?saved=created`);
}

export async function updateLeadAction(id: string, _state: LeadFormState, formData: FormData): Promise<LeadFormState> {
  await requireAdmin();
  const leadId = verifiedRecordId(id);
  const current = await prisma.lead.findUnique({ where: { id: leadId }, select: { status: true, doNotContact: true } });
  if (!current) notFound();
  const parsed = parseLeadForm(formData, current);
  if (!parsed.success) return validationState(parsed.error);

  try {
    await prisma.lead.update({ where: { id: leadId }, data: parsed.data });
  } catch (error) {
    if (error instanceof Error && error.message.includes("Unique constraint")) {
      return { error: "A lead already uses that external place ID." };
    }
    throw error;
  }

  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  revalidatePath(`/admin/leads/${leadId}`);
  redirect(`/admin/leads/${leadId}?saved=updated`);
}

export async function deleteLeadAction(id: string, _formData?: FormData) {
  void _formData;
  await requireAdmin();
  const leadId = verifiedRecordId(id);
  const result = await prisma.lead.deleteMany({ where: { id: leadId } });
  if (result.count === 0) notFound();
  revalidatePath("/admin");
  revalidatePath("/admin/leads");
  redirect("/admin/leads?deleted=1");
}

export async function createEvidenceAction(leadId: string, formData: FormData) {
  await requireAdmin();
  const safeLeadId = verifiedRecordId(leadId);
  const parsed = evidenceSchema.safeParse(formObject(formData));
  if (!parsed.success) {
    redirect(`/admin/leads/${safeLeadId}?evidenceError=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Invalid evidence")}`);
  }
  const lead = await prisma.lead.findUnique({ where: { id: safeLeadId }, select: { id: true } });
  if (!lead) notFound();
  await prisma.evidence.create({ data: { ...parsed.data, leadId: safeLeadId } });
  revalidatePath(`/admin/leads/${safeLeadId}`);
  redirect(`/admin/leads/${safeLeadId}?saved=evidence-added`);
}

export async function updateEvidenceAction(leadId: string, evidenceId: string, formData: FormData) {
  await requireAdmin();
  const safeLeadId = verifiedRecordId(leadId);
  const safeEvidenceId = verifiedRecordId(evidenceId);
  const parsed = evidenceSchema.safeParse(formObject(formData));
  if (!parsed.success) {
    redirect(`/admin/leads/${safeLeadId}?evidenceError=${encodeURIComponent(parsed.error.issues[0]?.message ?? "Invalid evidence")}`);
  }
  const result = await prisma.evidence.updateMany({ where: { id: safeEvidenceId, leadId: safeLeadId }, data: parsed.data });
  if (result.count === 0) notFound();
  revalidatePath(`/admin/leads/${safeLeadId}`);
  redirect(`/admin/leads/${safeLeadId}?saved=evidence-updated`);
}

export async function deleteEvidenceAction(leadId: string, evidenceId: string, _formData?: FormData) {
  void _formData;
  await requireAdmin();
  const safeLeadId = verifiedRecordId(leadId);
  const safeEvidenceId = verifiedRecordId(evidenceId);
  const result = await prisma.evidence.deleteMany({ where: { id: safeEvidenceId, leadId: safeLeadId } });
  if (result.count === 0) notFound();
  revalidatePath(`/admin/leads/${safeLeadId}`);
  redirect(`/admin/leads/${safeLeadId}?saved=evidence-deleted`);
}
