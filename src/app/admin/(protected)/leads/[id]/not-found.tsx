import Link from "next/link";

export default function LeadNotFound() {
  return <div className="py-20"><p className="admin-eyebrow text-red-700">Not found</p><h1 className="display-heading mt-3 text-4xl">Lead not found.</h1><p className="mt-4 text-zinc-600">The record may have been deleted or the link is invalid.</p><Link href="/admin/leads" className="admin-button mt-6">Return to leads</Link></div>;
}
