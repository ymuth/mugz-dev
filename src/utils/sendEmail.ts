import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";

if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = siteConfig.businessEmail;

export type BookingForm = {
    name: string;
    business?: string;
    email: string;
    phone?: string;
    service: "essentials" | "custom" | "not-sure";
    needs: string[];
    website?: string;
    message: string;
    budget?: string;
};

export async function sendBookingEmail(data: BookingForm) {
    if (!recipient) throw new Error("Recipient email not configured");

    const escapeHtml = (s: string | undefined) =>
      (s ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");

    const needsHtml = data.needs && data.needs.length
      ? `<ul>${data.needs.map((n) => `<li>${escapeHtml(n)}</li>`).join("")}</ul>`
      : "<p>None specified</p>";

    const html = `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${escapeHtml(data.name)}</p>
        <p><b>Business:</b> ${escapeHtml(data.business ?? "-")}</p>
        <p><b>Email:</b> ${escapeHtml(data.email)}</p>
        <p><b>Phone:</b> ${escapeHtml(data.phone ?? "-")}</p>
        <p><b>Service:</b> ${escapeHtml(data.service)}</p>
        <p><b>Needs:</b> ${needsHtml}</p>
        <p><b>Website:</b> ${escapeHtml(data.website ?? "-")}</p>
        <p><b>Budget:</b> ${escapeHtml(data.budget ?? "-")}</p>
        <h3>Message</h3>
        <p>${escapeHtml(data.message)}</p>
    `;

    const res = await resend.emails.send({
        from: siteConfig.from ?? "Mugz <hello@mugz.dev>",
        to: recipient,
        replyTo: data.email,
        subject: `New Quote Request from ${escapeHtml(data.name)}`,
        html,
    });

    // Resend SDK typically throws on failure. Some SDK responses may not include
    // an `id` field depending on version — treat a truthy response as success.
    if (!res) {
      console.error('Resend returned falsy response', res);
      throw new Error("Failed to send email");
    }

    return { success: true };
}