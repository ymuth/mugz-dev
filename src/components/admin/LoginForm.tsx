"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError("");
    const data = new FormData(event.currentTarget);
    const result = await authClient.signIn.email({
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    });
    if (result.error) {
      setError("The email or password was not accepted.");
      setPending(false);
      return;
    }
    router.replace("/admin");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-5" noValidate>
      <label className="block text-sm font-semibold text-zinc-700">
        Email
        <input className="admin-field" type="email" name="email" autoComplete="email" required />
      </label>
      <label className="block text-sm font-semibold text-zinc-700">
        Password
        <input className="admin-field" type="password" name="password" autoComplete="current-password" required minLength={12} />
      </label>
      {error && <p role="alert" className="border-l-4 border-red-600 bg-red-50 p-3 text-sm text-red-800">{error}</p>}
      <button className="admin-button w-full" type="submit" disabled={pending}>{pending ? "Signing in…" : "Sign in"}</button>
    </form>
  );
}
