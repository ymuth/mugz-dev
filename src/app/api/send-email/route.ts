import { NextResponse } from "next/server";
import { sendBookingEmail, BookingForm } from "@/utils/sendEmail";

const serviceOptions = ["essentials", "custom", "not-sure"] as const;
const budgetOptions = ["under-500", "500-1000", "1000+", "not-sure"] as const;

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

    const name = String(raw.name ?? "").trim();
    const email = String(raw.email ?? "").trim();
    const message = String(raw.message ?? "").trim();

    const service = serviceOptions.includes(
      raw.service as (typeof serviceOptions)[number]
    )
      ? (raw.service as (typeof serviceOptions)[number])
      : "not-sure";

    const budget = budgetOptions.includes(
      raw.budget as (typeof budgetOptions)[number]
    )
      ? (raw.budget as (typeof budgetOptions)[number])
      : undefined;

    const data: BookingForm = {
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

      needs: Array.isArray(raw.needs)
        ? raw.needs
            .filter((value): value is string => typeof value === "string")
            .slice(0, 20)
        : [],

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

    // Length limits
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

    await sendBookingEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-email error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}