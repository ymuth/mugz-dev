import Link from "next/link";
import LeadForm from "@/components/admin/LeadForm";
import { createLeadAction } from "@/lib/leads/actions";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata = { title: "Add Lead" };

export default async function NewLeadPage() {
  await requireAdmin();
  return <><Link href="/admin/leads" className="text-sm font-bold text-purple-700">← Back to leads</Link><div className="mt-5 border-b border-zinc-300 pb-7"><p className="admin-eyebrow text-teal-700">Manual entry</p><h1 className="display-heading mt-3 text-4xl tracking-[-0.04em]">Add lead</h1></div><div className="mt-8 border border-zinc-300 bg-white p-5 sm:p-8"><LeadForm action={createLeadAction} submitLabel="Create lead" /></div></>;
}
