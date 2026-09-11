"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { requireAdmin } from "@/lib/admin-auth";

export async function logoutAction() {
  await requireAdmin();
  await auth.api.signOut({ headers: await headers() });
  redirect("/admin/login");
}
