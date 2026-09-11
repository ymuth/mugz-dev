import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";

export default function PublicLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="min-w-0 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
