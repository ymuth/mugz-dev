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
            className="relative grid grid-cols-1 gap-6 rounded-2xl bg-white p-8 shadow-xl md:grid-cols-2"
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
                    className="mt-2 rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
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
                    className="mt-2 rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
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
                    className="mt-2 rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
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
                    className="mt-2 min-h-44 rounded-lg border p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
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
                    className="rounded-full bg-linear-to-r from-purple-500 to-purple-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {submitting ? "Sending…" : "Send Message"}
                </button>
            </div>
            
            <p className="md:col-span-2 text-center text-xs text-zinc-500">
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
                    className={`md:col-span-2 rounded-lg border p-4 text-center text-sm font-medium ${statusType === "success"
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