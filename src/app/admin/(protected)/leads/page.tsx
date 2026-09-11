import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import { effectiveLeadStatus, labelEnum, leadStatuses, verificationStatuses, websiteStatuses } from "@/lib/leads/options";
import StatusBadge from "@/components/admin/StatusBadge";

export const metadata = { title: "Leads" };

function valueOf(value: string | string[] | undefined) { return typeof value === "string" ? value : ""; }

export default async function LeadsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const params = await searchParams;
  const search = valueOf(params.q).trim(); const status = valueOf(params.status); const verification = valueOf(params.verification); const website = valueOf(params.website); const sort = valueOf(params.sort);
  const validStatus = leadStatuses.includes(status as (typeof leadStatuses)[number]) ? status as (typeof leadStatuses)[number] : null;
  const leads = await prisma.lead.findMany({
    where: {
      ...(search ? { businessName: { contains: search, mode: "insensitive" as const } } : {}),
      ...(validStatus === "DO_NOT_CONTACT" ? { OR: [{ status: "DO_NOT_CONTACT" as const }, { doNotContact: true }] } : validStatus ? { status: validStatus, doNotContact: false } : {}),
      ...(verificationStatuses.includes(verification as (typeof verificationStatuses)[number]) ? { verificationStatus: verification as (typeof verificationStatuses)[number] } : {}),
      ...(websiteStatuses.includes(website as (typeof websiteStatuses)[number]) ? { websiteStatus: website as (typeof websiteStatuses)[number] } : {}),
    },
    orderBy: sort === "score" ? [{ prospectScore: "desc" }, { updatedAt: "desc" }] : { updatedAt: "desc" },
  });
  return <>
    <div className="flex flex-col gap-5 border-b border-zinc-300 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="admin-eyebrow text-purple-700">Sales pipeline</p><h1 className="display-heading mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">Leads</h1></div><Link href="/admin/leads/new" className="admin-button">Add lead</Link></div>
    {params.deleted && <p className="mt-5 border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm text-emerald-800">Lead deleted.</p>}
    <form className="mt-7 grid gap-3 border border-zinc-300 bg-white p-4 md:grid-cols-5">
      <input className="admin-field mt-0" name="q" defaultValue={search} placeholder="Search business name" aria-label="Search business name" />
      {[{ name: "status", label: "All statuses", values: leadStatuses, selected: status }, { name: "verification", label: "All verification", values: verificationStatuses, selected: verification }, { name: "website", label: "All website statuses", values: websiteStatuses, selected: website }].map((filter) => <select key={filter.name} className="admin-field mt-0" name={filter.name} defaultValue={filter.selected} aria-label={filter.label}><option value="">{filter.label}</option>{filter.values.map((value) => <option key={value} value={value}>{labelEnum(value)}</option>)}</select>)}
      <div className="flex gap-2"><select className="admin-field mt-0" name="sort" defaultValue={sort} aria-label="Sort leads"><option value="recent">Recently updated</option><option value="score">Prospect score</option></select><button className="admin-button" type="submit">Apply</button></div>
    </form>
    <div className="mt-7 overflow-x-auto border border-zinc-300 bg-white"><table className="w-full min-w-[62rem] border-collapse text-left text-sm"><thead className="bg-zinc-950 text-white"><tr>{["Business", "Type", "Location", "Website", "Score", "Verification", "Status", "Updated"].map((head) => <th key={head} className="px-4 py-3 font-semibold">{head}</th>)}</tr></thead><tbody>{leads.map((lead) => <tr key={lead.id} className="border-t border-zinc-200 hover:bg-purple-50/50"><td className="p-4"><Link href={`/admin/leads/${lead.id}`} className="font-bold text-purple-800 hover:underline">{lead.businessName}</Link></td><td className="p-4 text-zinc-600">{lead.businessType ?? "—"}</td><td className="p-4 text-zinc-600">{lead.location ?? "—"}</td><td className="p-4"><StatusBadge value={lead.websiteStatus} /></td><td className="p-4 font-bold">{lead.prospectScore ?? "—"}</td><td className="p-4"><StatusBadge value={lead.verificationStatus} /></td><td className="p-4"><StatusBadge value={effectiveLeadStatus(lead)} /></td><td className="p-4 text-zinc-600">{lead.updatedAt.toLocaleDateString("en-GB")}</td></tr>)}</tbody></table>{!leads.length && <p className="p-8 text-center text-zinc-500">No leads match these filters.</p>}</div>
  </>;
}
