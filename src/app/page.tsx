import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      

      <HeroSection />
      <section id="services"><ServicesSection /></section>

    </div>
  );
}
