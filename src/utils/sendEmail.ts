import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";
import { createQuoteEmailHtml } from "./quoteEmailTemplate";
import type { QuoteForm } from "@/types/quote";

if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = siteConfig.businessEmail;


export async function sendQuoteEmail(data: QuoteForm) {
    if (!recipient) throw new Error("Recipient email not configured");

    const html = createQuoteEmailHtml(data);


    const { data: res, error } = await resend.emails.send({
        from: siteConfig.from ?? "Mugz <hello@mugz.dev>",
        to: recipient,
        replyTo: data.email,
        subject: `New Quote Request from ${data.name}`,
        html,
    });

    if (error) {
        throw new Error(error.message);
    }

    if (!res) {
        console.error('Resend returned falsy response', res);
        throw new Error("Failed to send email");
    }

    return { success: true };
}