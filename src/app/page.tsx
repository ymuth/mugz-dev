import Image from "next/image";
import HeroSection from "../components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import BookingSection from "@/components/home/BookingSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      

      <HeroSection />
      <section id="services"><ServicesSection /></section>
      <BookingSection />

    </div>
  );
}

// TODO: Add server-side rate-limiting and stronger validation
// - Implement a simple in-memory rate limiter or Redis-backed limiter for `/api/send-email`.
//   Make it configurable via environment (e.g. REDIS_URL) and tuneable (requests per minute, burst).
// - Add stricter validation rules server-side:
//   - `name`: required, min 2 chars, max 100 chars
//   - `email`: required, robust email validation
//   - `message`: required, min 10 chars
//   - `website`: optional, validate URL format
//   - `budget`: optional, must be one of predefined options
//   - `service`: required, must be one of allowed enums
//   - `needs`: optional array; validate against allowed list
// - Consider CAPTCHA or abuse-detection alongside rate limiting, and add structured logging/monitoring.
