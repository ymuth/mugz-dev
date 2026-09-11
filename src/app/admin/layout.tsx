import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Admin", template: "%s | MUGZ Admin" },
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-[#f3f1ed] text-zinc-950">{children}</div>;
}
