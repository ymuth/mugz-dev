import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";
import { createQuoteEmailHtml } from "./quoteEmailTemplate";
import { createConfirmationEmailHtml } from "./confirmationEmailTemplate";
import { createContactEmailHtml } from "./contactEmailTemplate";
import type { QuoteForm } from "@/types/quote";
import type { ContactForm } from "@/types/contact";

if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const businessEmail = siteConfig.businessEmail;

// INTERNAL
export async function sendQuoteEmail(data: QuoteForm) {
    if (!businessEmail) throw new Error("Business email not configured");

    const html = createQuoteEmailHtml(data);


    const { data: res, error } = await resend.emails.send({
        from: siteConfig.from_internal ?? "MUGZ Forms <hello@mugz.dev>",
        to: businessEmail,
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

// EXTERNAL
export async function sendConfirmationEmail(data: QuoteForm) {
    if (!businessEmail) throw new Error("Business email not configured");

    const html = createConfirmationEmailHtml(data);


    const { data: res, error } = await resend.emails.send({
        from: siteConfig.from ?? "MUGZ <hello@mugz.dev>",
        to: data.email,
        replyTo: businessEmail,
        subject: "We've received your quote request | MUGZ",
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

// INTERNAL
export async function sendContactEmail(data: ContactForm) {
    if (!businessEmail) throw new Error("Business email not configured");

    const html = createContactEmailHtml(data);


    const { data: res, error } = await resend.emails.send({
        from: siteConfig.from_internal ?? "MUGZ Forms <hello@mugz.dev>",
        to: businessEmail,
        replyTo: data.email,
        subject: `New Enquiry from ${data.name}`,
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
