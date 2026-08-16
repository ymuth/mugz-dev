import { Resend } from "resend";
import { siteConfig } from "@/lib/siteConfig";
import { createQuoteEmailHtml } from "./quoteEmailTemplate";
import { createConfirmationEmailHtml } from "./confirmationEmailTemplate";
import type { QuoteForm } from "@/types/quote";

if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not set in environment variables");
}

const resend = new Resend(process.env.RESEND_API_KEY);
const businessEmail = siteConfig.businessEmail;


export async function sendQuoteEmail(data: QuoteForm) {
    if (!businessEmail) throw new Error("Business email not configured");

    const html = createQuoteEmailHtml(data);


    const { data: res, error } = await resend.emails.send({
        from: siteConfig.from ?? "Mugz <hello@mugz.dev>",
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

export async function sendConfirmationEmail(data: QuoteForm) {
    if (!businessEmail) throw new Error("Business email not configured");

    const html = createConfirmationEmailHtml(data);


    const { data: res, error } = await resend.emails.send({
        from: siteConfig.from ?? "Mugz.Dev <hello@mugz.dev>",
        to: data.email,
        replyTo: businessEmail,
        subject: `"We've received your quote request | Mugz.Dev`,
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