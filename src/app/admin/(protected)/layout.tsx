import Link from "next/link";
import UpRightArrowIcon from "@/components/ui/UpRightArrowIcon";
import { requireAdmin } from "@/lib/admin-auth";
import { logoutAction } from "@/app/admin/actions";

const links = [{ href: "/admin", label: "Dashboard" }, { href: "/admin/leads", label: "Leads" }];

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[15rem_minmax(0,1fr)]">
      <aside className="hidden border-r border-zinc-800 bg-[#101014] p-6 text-white lg:flex lg:flex-col">
        <Link href="/admin" className="display-heading text-xl font-bold">MUGZ <span className="text-teal-300">ADMIN</span></Link>
        <nav className="mt-12 flex flex-col gap-1">{links.map((link) => <Link key={link.href} href={link.href} className="border-l-2 border-transparent px-3 py-3 text-sm font-semibold text-zinc-300 hover:border-purple-400 hover:bg-white/5 hover:text-white">{link.label}</Link>)}</nav>
        <div className="mt-auto border-t border-white/10 pt-6 text-sm">
          <p className="truncate text-zinc-400">{session.user.email}</p>
          <Link href="/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 font-semibold hover:text-teal-300">View website<UpRightArrowIcon className="size-4 shrink-0" /></Link>
          <form action={logoutAction}><button className="mt-4 font-semibold text-zinc-300 hover:text-white">Logout</button></form>
        </div>
      </aside>
      <div className="min-w-0">
        <header className="border-b border-zinc-300 bg-white px-4 py-4 lg:hidden">
          <details>
            <summary className="flex cursor-pointer list-none items-center justify-between font-bold"><span>MUGZ <span className="text-purple-700">ADMIN</span></span><span className="text-sm">Menu</span></summary>
            <nav className="mt-4 flex flex-col border-t border-zinc-200 pt-3">{links.map((link) => <Link key={link.href} href={link.href} className="py-3 font-semibold">{link.label}</Link>)}<Link href="/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 py-3 font-semibold">View website<UpRightArrowIcon className="size-4 shrink-0" /></Link><form action={logoutAction}><button className="py-3 font-semibold">Logout</button></form></nav>
          </details>
        </header>
        <main className="mx-auto w-full max-w-[94rem] p-4 sm:p-7 lg:p-10">{children}</main>
      </div>
    </div>
  );
}
