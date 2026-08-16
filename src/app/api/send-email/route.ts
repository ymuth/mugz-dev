import { NextResponse } from "next/server";
import { sendConfirmationEmail, sendQuoteEmail } from "@/utils/sendEmail";
import { QuoteForm } from "@/types/quote"

const serviceOptions = [
  "essentials",
  "custom",
  "not-sure",
] as const;

const budgetOptions = [
  "under-500",
  "500-1000",
  "1000+",
  "not-sure",
] as const;

const needsOptions = [
  "New website",
  "Website redesign",
  "Additional pages",
  "Booking system",
  "Admin dashboard",
  "Customer/staff accounts",
  "Database",
  "Email automation",
  "Other",
] as const;

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    const raw = body as Record<string, unknown>;

    // Honeypot
    if (
      typeof raw.companyWebsite === "string" &&
      raw.companyWebsite.trim()
    ) {
      return NextResponse.json({ success: true });
    }

    const name = String(raw.name ?? "").trim();
    const email = String(raw.email ?? "").trim();
    const message = String(raw.message ?? "").trim();

    const service =
      typeof raw.service === "string" &&
        serviceOptions.includes(
          raw.service as (typeof serviceOptions)[number]
        )
        ? (raw.service as (typeof serviceOptions)[number])
        : null;

    const budget =
      typeof raw.budget === "string" &&
        budgetOptions.includes(
          raw.budget as (typeof budgetOptions)[number]
        )
        ? (raw.budget as (typeof budgetOptions)[number])
        : undefined;

    const needs = Array.isArray(raw.needs)
      ? [
        ...new Set(
          raw.needs.filter(
            (value): value is (typeof needsOptions)[number] =>
              typeof value === "string" &&
              needsOptions.includes(
                value as (typeof needsOptions)[number]
              )
          )
        ),
      ].slice(0, needsOptions.length)
      : [];

    if (!service) {
      return NextResponse.json(
        { error: "Invalid service" },
        { status: 400 }
      );
    }

    const data: QuoteForm = {
      name,

      business:
        typeof raw.business === "string"
          ? raw.business.trim()
          : undefined,

      email,

      phone:
        typeof raw.phone === "string"
          ? raw.phone.trim()
          : undefined,

      service,

      needs,

      website:
        typeof raw.website === "string"
          ? raw.website.trim()
          : undefined,

      message,

      budget,
    };

    // Required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Minimum lengths
    if (data.name.length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters" },
        { status: 400 }
      );
    }

    if (data.message.length < 10) {
      return NextResponse.json(
        { error: "Please provide a little more information about your project" },
        { status: 400 }
      );
    }

    // Maximum lengths
    if (
      data.name.length > 100 ||
      data.email.length > 254 ||
      data.message.length > 5000 ||
      (data.business?.length ?? 0) > 150 ||
      (data.phone?.length ?? 0) > 50 ||
      (data.website?.length ?? 0) > 500
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long" },
        { status: 400 }
      );
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Website URL
    if (data.website) {
      try {
        new URL(data.website);
      } catch {
        return NextResponse.json(
          { error: "Invalid website URL" },
          { status: 400 }
        );
      }
    }

    await sendQuoteEmail(data);
    
    try {
      await sendConfirmationEmail(data);
    } catch (error) {
      console.error("Failed to send quote confirmation:", error);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("send-email error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}