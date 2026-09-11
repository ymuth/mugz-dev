import Link from "next/link";
import { notFound } from "next/navigation";
import LeadForm, { type LeadFormValues } from "@/components/admin/LeadForm";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { updateLeadAction } from "@/lib/leads/actions";

export const metadata = { title: "Edit Lead" };

export default async function EditLeadPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) notFound();
  const values: LeadFormValues = {
    ...lead,
    rating: lead.rating?.toString(),
    lastActivityAt: lead.lastActivityAt?.toISOString().slice(0, 10),
    createdAt: undefined,
    updatedAt: undefined,
  };
  return <><Link href={`/admin/leads/${id}`} className="text-sm font-bold text-purple-700">← Back to lead</Link><div className="mt-5 border-b border-zinc-300 pb-7"><p className="admin-eyebrow text-teal-700">Lead record</p><h1 className="display-heading mt-3 text-4xl tracking-[-0.04em]">Edit {lead.businessName}</h1></div><div className="mt-8 border border-zinc-300 bg-white p-5 sm:p-8"><LeadForm action={updateLeadAction.bind(null, id)} values={values} submitLabel="Save changes" /></div></>;
}
