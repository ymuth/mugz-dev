import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import QuoteSection from "@/components/home/QuoteSection";
import ExplainSection from "@/components/home/ExplainSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">


      <HeroSection />
      <section id="services"><ServicesSection /></section>
      <section id="explanation"><ExplainSection /></section>
      <section id="FAQ"><FAQSection /></section>
      <section id="quote"><QuoteSection /></section>

    </div>
  );
}



// TODO:
// Make the email response look nicer, html
// When replying to customer see if you can remove the the html display that the business was sent first.
// MAYBE? send an email to customer confirming we've recieved an email?

// TODO:
// Work / portfolio — eventually client work; initially you can show the detailing site and other genuine projects as examples.


