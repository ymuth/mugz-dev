import Link from "next/link";
import LoginForm from "@/components/admin/LoginForm";
import { redirectAuthenticatedAdmin } from "@/lib/admin-auth";

export const metadata = { title: "Sign in" };

export default async function AdminLoginPage() {
  await redirectAuthenticatedAdmin();
  return (
    <main className="grid min-h-screen place-items-center px-4 py-12">
      <section className="w-full max-w-md border border-zinc-300 bg-white p-7 shadow-[10px_10px_0_#6d28d9] sm:p-10">
        <p className="admin-eyebrow text-teal-700">Private system</p>
        <h1 className="display-heading mt-4 text-4xl tracking-[-0.04em]">MUGZ Admin</h1>
        <p className="mt-3 leading-7 text-zinc-600">Sign in with an authorised administrator account.</p>
        <LoginForm />
        <Link className="mt-6 inline-block text-sm font-semibold text-zinc-500 hover:text-purple-700" href="/">← Return to website</Link>
      </section>
    </main>
  );
}
