import Link from "next/link";
import { notFound } from "next/navigation";
import ConfirmSubmit from "@/components/admin/ConfirmSubmit";
import EvidenceForm from "@/components/admin/EvidenceForm";
import StatusBadge from "@/components/admin/StatusBadge";
import UpRightArrowIcon from "@/components/ui/UpRightArrowIcon";
import { requireAdmin } from "@/lib/admin-auth";
import { prisma } from "@/lib/db";
import { createEvidenceAction, deleteEvidenceAction, deleteLeadAction, updateEvidenceAction } from "@/lib/leads/actions";
import { effectiveLeadStatus, labelEnum } from "@/lib/leads/options";

const missing = <span className="text-zinc-400">Not recorded</span>;
function Item({ label, children }: { label: string; children: React.ReactNode }) { return <div className="border-b border-zinc-200 py-4"><dt className="admin-eyebrow text-zinc-500">{label}</dt><dd className="mt-2 whitespace-pre-wrap leading-7 text-zinc-800">{children || missing}</dd></div>; }
function safeExternalHref(href: string | null) {
  if (!href) return null;
  try {
    const url = new URL(href);
    return url.protocol === "http:" || url.protocol === "https:" ? href : null;
  } catch {
    return null;
  }
}
function External({ href, label, fallback = missing }: { href: string | null; label?: string; fallback?: React.ReactNode }) {
  const safeHref = safeExternalHref(href);
  return safeHref ? <a href={safeHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 break-all font-semibold text-purple-700 hover:underline">{label ?? safeHref}<UpRightArrowIcon className="size-4 shrink-0" /></a> : fallback;
}
function Block({ title, children }: { title: string; children: React.ReactNode }) { return <section className="border border-zinc-300 bg-white p-5 sm:p-7"><h2 className="display-heading text-2xl">{title}</h2><dl className="mt-3">{children}</dl></section>; }

export default async function LeadDetailPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const { id } = await params; const query = await searchParams;
  const lead = await prisma.lead.findUnique({ where: { id }, include: { evidence: { orderBy: { updatedAt: "desc" } } } });
  if (!lead) notFound();
  return <>
    <Link href="/admin/leads" className="text-sm font-bold text-purple-700">← Back to leads</Link>
    {lead.doNotContact && <div className="mt-5 border-2 border-red-700 bg-red-50 p-5 text-red-900"><strong className="admin-eyebrow text-red-800">Do not contact</strong><p className="mt-2 font-semibold">{lead.doNotContactReason ?? "No reason recorded."}</p></div>}
    <header className="mt-5 border-b border-zinc-300 pb-7"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><div><p className="admin-eyebrow text-teal-700">Lead detail</p><h1 className="display-heading mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">{lead.businessName}</h1><p className="mt-3 text-zinc-600">{lead.businessType ?? "Business type not recorded"} · {lead.location ?? "Location not recorded"}</p></div><div className="flex flex-wrap gap-3"><Link href={`/admin/leads/${id}/edit`} className="admin-button">Edit lead</Link><a href="#add-evidence" className="admin-button bg-purple-700">Add evidence</a></div></div><div className="mt-6 flex flex-wrap gap-3"><StatusBadge value={lead.verificationStatus} /><StatusBadge value={effectiveLeadStatus(lead)} /><span className="border border-zinc-300 bg-white px-3 py-1 text-xs font-bold">Score: {lead.prospectScore ?? "—"}</span></div></header>
    {query.saved && <p className="mt-5 border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm text-emerald-800">Changes saved.</p>}
    {query.evidenceError && <p className="mt-5 border-l-4 border-red-600 bg-red-50 p-3 text-sm text-red-800">{String(query.evidenceError)}</p>}
    <div className="mt-8 grid gap-5 xl:grid-cols-2">
      <Block title="Business"><Item label="Business type">{lead.businessType ?? missing}</Item><Item label="Location">{lead.location ?? missing}</Item><Item label="Description">{lead.description ?? missing}</Item><Item label="Legal entity">{labelEnum(lead.legalEntityType)}</Item></Block>
      <Block title="Website"><Item label="Status"><StatusBadge value={lead.websiteStatus} /></Item><Item label="Website URL"><External href={lead.websiteUrl} /></Item><Item label="Problem noticed">{lead.problemNoticed ?? missing}</Item><Item label="Potential solution">{lead.potentialSolution ?? missing}</Item></Block>
      <Block title="Contact"><Item label="Email">{lead.email ? <a className="font-semibold text-purple-700" href={`mailto:${lead.email}`}>{lead.email}</a> : missing}</Item><Item label="Email confidence">{lead.emailConfidence ? <StatusBadge value={lead.emailConfidence} /> : missing}</Item><Item label="Phone">{lead.phone ?? missing}</Item><Item label="Phone confidence">{lead.phoneConfidence ? <StatusBadge value={lead.phoneConfidence} /> : missing}</Item><Item label="Best method">{lead.bestContactMethod ?? missing}</Item></Block>
      <Block title="Socials"><Item label="Facebook"><External href={lead.facebookUrl} /></Item><Item label="Instagram"><External href={lead.instagramUrl} /></Item><Item label="Other socials">{lead.otherSocials ?? missing}</Item></Block>
      <Block title="Activity / reputation"><Item label="Rating">{lead.rating?.toString() ?? missing}</Item><Item label="Review count">{lead.reviewCount ?? missing}</Item><Item label="Last activity">{lead.lastActivityAt?.toLocaleDateString("en-GB") ?? missing}</Item></Block>
      <Block title="Qualification / pipeline"><Item label="Outreach angle">{lead.outreachAngle ?? missing}</Item><Item label="Notes">{lead.notes ?? missing}</Item><Item label="External place ID">{lead.externalPlaceId ?? missing}</Item><Item label="Last updated">{lead.updatedAt.toLocaleString("en-GB")}</Item></Block>
    </div>
    <section className="mt-10 border-t border-zinc-400 pt-8" id="evidence"><p className="admin-eyebrow text-purple-700">Verification record</p><h2 className="display-heading mt-2 text-3xl">Evidence</h2><div className="mt-5 space-y-4">{lead.evidence.map((item) => <article key={item.id} className="border border-zinc-300 bg-white p-5"><div className="flex flex-wrap items-start justify-between gap-3"><div><StatusBadge value={item.field} /><h3 className="mt-3 text-lg font-bold">{item.value}</h3><p className="mt-1 text-sm text-zinc-500">{labelEnum(item.confidence)} confidence · {labelEnum(item.sourceType)}</p></div><External href={item.sourceUrl} label="Open source" fallback={null} /></div><dl className="mt-4 grid gap-x-5 sm:grid-cols-2"><Item label="Source title">{item.sourceTitle ?? missing}</Item><Item label="Checked">{item.checkedAt?.toLocaleDateString("en-GB") ?? missing}</Item><Item label="Notes">{item.notes ?? missing}</Item></dl><details className="mt-5 border-t border-zinc-200 pt-4"><summary className="cursor-pointer text-sm font-bold text-purple-700">Edit evidence</summary><EvidenceForm action={updateEvidenceAction.bind(null, id, item.id)} values={item} submitLabel="Save evidence" /><form action={deleteEvidenceAction.bind(null, id, item.id)} className="mt-4"><ConfirmSubmit label="Delete evidence" message="Permanently delete this evidence record?" className="text-sm font-bold text-red-700 hover:underline" /></form></details></article>)}{!lead.evidence.length && <p className="border border-dashed border-zinc-400 p-6 text-zinc-500">No evidence recorded yet.</p>}</div></section>
    <section id="add-evidence" className="mt-8 border border-zinc-300 bg-white p-5 sm:p-7"><h2 className="display-heading text-2xl">Add evidence</h2><p className="mt-2 text-sm text-zinc-600">Record the source supporting a specific fact about this lead.</p><EvidenceForm action={createEvidenceAction.bind(null, id)} submitLabel="Add evidence" /></section>
    <section className="mt-12 border-t-2 border-red-700 pt-6"><h2 className="font-bold text-red-800">Danger area</h2><p className="mt-2 max-w-2xl text-sm text-zinc-600">Permanent deletion also removes this lead’s evidence records. Pipeline statuses never delete records automatically.</p><form action={deleteLeadAction.bind(null, id)} className="mt-4"><ConfirmSubmit label="Permanently delete lead" message={`Permanently delete ${lead.businessName} and all associated evidence?`} className="border border-red-700 px-4 py-3 text-sm font-bold text-red-700 hover:bg-red-700 hover:text-white" /></form></section>
  </>;
}
