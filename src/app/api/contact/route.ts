import { NextResponse } from "next/server";
import { sendContactEmail } from "@/utils/sendEmail";
import { ContactForm } from "@/types/contact"

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

    const name =
      typeof raw.name === "string"
        ? raw.name.trim()
        : "";

    const email =
      typeof raw.email === "string"
        ? raw.email.trim()
        : "";

    const subject =
      typeof raw.subject === "string"
        ? raw.subject.trim()
        : "";

    const message =
      typeof raw.message === "string"
        ? raw.message.trim()
        : "";

    const data: ContactForm = {
      name,

      email,

      subject,

      message,
    };

    // Required fields
    if (!data.name || !data.email || !data.subject || !data.message) {
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

    if (data.subject.length < 3) {
      return NextResponse.json(
        { error: "Subject must be at least 3 characters" },
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
      data.subject.length > 150 ||
      data.message.length > 5000
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


    await sendContactEmail(data);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("contact error:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}