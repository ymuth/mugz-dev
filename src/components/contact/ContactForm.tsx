"use client";

import Link from "next/link";
import { useState } from "react";

type ContactFormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    companyWebsite: string; // honeypot
};

export default function ContactForm() {
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
        companyWebsite: "",
    });

    const [submitting, setSubmitting] = useState(false);

    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    const [statusType, setStatusType] =
        useState<"success" | "error" | null>(null);


    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    }


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setSubmitting(true);
        setStatusMessage(null);
        setStatusType(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (response.status === 429) {
                throw new Error(
                    "Too many requests. Please wait a few minutes and try again."
                );
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to send your message."
                );
            }

            setStatusMessage(
                "Message sent successfully. We'll get back to you soon."
            );

            setStatusType("success");

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
                companyWebsite: "",
            });

        } catch (error) {
            setStatusMessage(
                error instanceof Error
                    ? error.message
                    : "Something went wrong. Please try again later."
            );

            setStatusType("error");

        } finally {
            setSubmitting(false);
        }
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="relative grid grid-cols-1 gap-x-8 gap-y-7 border border-zinc-300 bg-white p-6 shadow-[12px_12px_0_#6d28d9] sm:p-8 md:grid-cols-2 lg:p-10"
        >

            {/* Name */}
            <label className="flex flex-col">
                <span className="text-sm font-medium text-slate-700">
                    Name*
                </span>

                <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    autoComplete="name"
                    className="form-field"
                />
            </label>


            {/* Email */}
            <label className="flex flex-col">
                <span className="text-sm font-medium text-slate-700">
                    Email*
                </span>

                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    autoComplete="email"
                    className="form-field"
                />
            </label>


            {/* Subject */}
            <label className="flex flex-col md:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                    Subject*
                </span>

                <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    minLength={3}
                    maxLength={150}
                    placeholder="What can we help with?"
                    className="form-field"
                />
            </label>


            {/* Message */}
            <label className="flex flex-col md:col-span-2">
                <span className="text-sm font-medium text-slate-700">
                    Message*
                </span>

                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                    data-bwignore="true"
                    minLength={10}
                    maxLength={5000}
                    placeholder="Tell us how we can help..."
                    className="form-field min-h-44 resize-y"
                />
            </label>


            {/* Honeypot */}
            <input
                type="text"
                name="companyWebsite"
                value={form.companyWebsite}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                data-bwignore="true"
                aria-hidden="true"
                className="absolute left-[-9999px]"
            />


            {/* Submit */}
            <div className="md:col-span-2">
                <button
                    type="submit"
                    disabled={submitting}
                    className="button bg-zinc-950 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {submitting ? "Sending…" : "Send Message"}
                </button>
            </div>
            
            <p className="md:col-span-2 text-xs leading-5 text-zinc-500">
                We&apos;ll use the information you provide to respond to your enquiry.
                See our{" "}
                <Link
                    href="/privacy"
                    className="font-medium underline hover:text-zinc-800"
                >
                    Privacy Policy
                </Link>
                .
            </p>


            {/* Status */}
            {statusMessage && (
                <div
                    role="status"
                    className={`md:col-span-2 border p-4 text-sm font-medium ${statusType === "success"
                        ? "border-green-300 bg-green-50 text-green-800"
                        : "border-red-300 bg-red-50 text-red-800"
                        }`}
                >
                    {statusMessage}
                </div>
            )}

        </form>
    );
}
