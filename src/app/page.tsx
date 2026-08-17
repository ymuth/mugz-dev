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


// TODO: Create the services page including:
//       - Services offered (websites [essentails, custom], other custom software for internal managment etc)
// TODO: make seperate email for example form@mugz.dev so it doesnt say me on my mugz.dev, this is for the from part of email's sent to hello@mugz.dev.
// TODO: Final touches; sitemap & robot, seo, other things like layout - opengraph metadata description etc;
//       do i have to register with google etc. how do i get my website showing first

// TODO:
// Work / portfolio — eventually client work; initially you can show the detailing site and other genuine projects as examples.


