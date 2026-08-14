import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import BookingSection from "@/components/home/BookingSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      

      <HeroSection />
      <section id="services"><ServicesSection /></section>
      <section id="contact"><BookingSection /></section>

    </div>
  );
}



// TODO:
// Hero — what Mugz.Dev does + CTA. DONE
// Services — Essentials + Custom Solutions.
// How It Works — this is especially important because you're selling a service.
// Work / portfolio — eventually client work; initially you can show the detailing site and other genuine projects as examples.
// FAQ
// Quote/contact form

// TODO: Add server-side rate-limiting and stronger validation
// - Implement a simple in-memory rate limiter or Redis-backed limiter for `/api/send-email`.
// - Add stricter validation rules server-side:
//   - `name`: required, min 2 chars, max 100 chars
//   - `email`: required, robust email validation
//   - `message`: required, min 10 chars
//   - `website`: optional, validate URL format
//   - `budget`: optional, must be one of predefined options
//   - `service`: required, must be one of allowed enums
//   - `needs`: optional array; validate against allowed list
