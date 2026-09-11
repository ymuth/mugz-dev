import Link from "next/link";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import { effectiveLeadStatus, labelEnum } from "@/lib/leads/options";

export const metadata = { title: "Dashboard" };

export default async function AdminDashboardPage() {
  await requireAdmin();
  const [total, ready, needsReview, contacted, interested, won, recent] = await Promise.all([
    prisma.lead.count(), prisma.lead.count({ where: { status: "READY", doNotContact: false } }), prisma.lead.count({ where: { verificationStatus: "NEEDS_REVIEW" } }), prisma.lead.count({ where: { status: "CONTACTED", doNotContact: false } }), prisma.lead.count({ where: { status: "INTERESTED", doNotContact: false } }), prisma.lead.count({ where: { status: "WON", doNotContact: false } }), prisma.lead.findMany({ orderBy: { updatedAt: "desc" }, take: 8 }),
  ]);
  const counts = [["Total leads", total], ["Ready", ready], ["Needs review", needsReview], ["Contacted", contacted], ["Interested", interested], ["Won", won]];
  return <>
    <div className="flex flex-col gap-5 border-b border-zinc-300 pb-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="admin-eyebrow text-purple-700">Overview</p><h1 className="display-heading mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">Dashboard</h1></div><Link href="/admin/leads/new" className="admin-button">Add lead</Link></div>
    <section className="mt-7 grid border-l border-t border-zinc-300 sm:grid-cols-2 xl:grid-cols-6">{counts.map(([label, value]) => <div key={label} className="border-b border-r border-zinc-300 bg-white p-5"><p className="text-sm font-semibold text-zinc-500">{label}</p><p className="display-heading mt-3 text-3xl">{value}</p></div>)}</section>
    <section className="mt-10"><div className="flex items-end justify-between"><div><p className="admin-eyebrow text-teal-700">Pipeline</p><h2 className="display-heading mt-2 text-2xl">Recent leads</h2></div><Link href="/admin/leads" className="text-sm font-bold text-purple-700">View all</Link></div><div className="mt-5 border-t border-zinc-300">{recent.length ? recent.map((lead) => <Link href={`/admin/leads/${lead.id}`} key={lead.id} className="grid gap-2 border-b border-zinc-300 py-4 hover:bg-white sm:grid-cols-[1fr_0.7fr_auto] sm:px-3"><strong>{lead.businessName}</strong><span className="text-sm text-zinc-600">{lead.location ?? "Not recorded"}</span><span className="text-xs font-bold text-purple-700">{labelEnum(effectiveLeadStatus(lead))}</span></Link>) : <p className="border-b border-zinc-300 py-8 text-zinc-500">No leads yet. Add the first one to begin.</p>}</div></section>
  </>;
}
