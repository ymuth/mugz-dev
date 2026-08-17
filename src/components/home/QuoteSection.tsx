'use client'
import Link from "next/link";
import React, { useState } from "react";

const serviceOptions = [
    { value: "essentials", label: "Essentials website" },
    { value: "custom", label: "Custom website / web app" },
    { value: "not-sure", label: "Not sure" },
] as const;
type ServiceOption = typeof serviceOptions[number]["value"];

const budgetOptions = [
    { value: "under-500", label: "Under £500" },
    { value: "500-1000", label: "£500 - £1,000" },
    { value: "1000+", label: "£1,000+" },
    { value: "not-sure", label: "Not sure" },
] as const;
type BudgetOption = typeof budgetOptions[number]["value"];

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
type NeedOption = typeof needsOptions[number];

interface FormData {
    name: string;
    business: string;
    email: string;
    phone: string;
    service: ServiceOption;
    needs: NeedOption[];
    website?: string;
    message: string;
    budget?: BudgetOption;
    companyWebsite: string; // honey pot
}

// The form will POST to the server API at /api/send-email

export default function QuoteSection() {
    const [form, setForm] = useState<FormData>({
        name: "",
        business: "",
        email: "",
        phone: "",
        service: "essentials",
        needs: [],
        website: "",
        message: "",
        budget: undefined,
        companyWebsite: "", // honey pot
    });
    const [submitting, setSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);
    const [statusType, setStatusType] = useState<"success" | "error" | null>(null);

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        if (type === "checkbox" && name === "needs") {
            const need = value as NeedOption;

            setForm((prev) => {
                const next = new Set(prev.needs);
                if (checked) next.add(need);
                else next.delete(need);
                return { ...prev, needs: Array.from(next) };
            });
            return;
        }

        setForm((prev) => ({ ...prev, [name]: value } as unknown as FormData));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitting(true);
        setStatusMessage(null);
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.status === 429) {
                throw new Error(
                    "Too many requests. Please wait a few minutes and try again."
                );
            }

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send request");
            }

            setStatusMessage("Request sent. We'll be in touch soon.");
            setStatusType("success");
            setForm({
                name: "",
                business: "",
                email: "",
                phone: "",
                service: "essentials",
                needs: [],
                website: "",
                message: "",
                budget: undefined,
                companyWebsite: "", //honey pot
            });
        } catch (err) {
            console.error(err);
            setStatusMessage(
                err instanceof Error
                    ? err.message
                    : "Failed to send request. Please try again later."
            );
            setStatusType("error");

        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section className="relative overflow-x-clip w-full flex flex-col bg-zinc-950 text-white">

            <div className="absolute -left-40 bottom-0 size-96 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute right-20 bottom-50 size-96 rounded-full bg-purple-500/20 blur-3xl" />
            <div className="absolute -right-40 top-0 size-96 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="absolute -left-40 top-30 size-96 rounded-full bg-teal-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto w-full max-w-7xl px-10 py-20 md:px-20">

                <div className="mb-12 text-center">
                    <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
                        Get Started
                    </p>

                    <h2 className="text-4xl font-bold md:text-5xl">
                        Let&apos;s build something.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
                        Tell us about your project and we&apos;ll get back to you with the next steps.
                    </p>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="mx-auto max-w-3xl bg-white text-black grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl shadow-2xl"
                >
                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Name*</span>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleInputChange}
                            required
                            autoComplete="name"
                            minLength={2}
                            maxLength={100}
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Business name</span>
                        <input
                            name="business"
                            value={form.business}
                            autoComplete="off"
                            data-bwignore="true"
                            onChange={handleInputChange}
                            maxLength={150}
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Email*</span>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            maxLength={254}
                            onChange={handleInputChange}
                            required
                            autoComplete="email"
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Phone</span>
                        <input
                            name="phone"
                            value={form.phone}
                            type="tel"
                            autoComplete="tel"
                            onChange={handleInputChange}
                            maxLength={50}
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <fieldset className="md:col-span-2">
                        <legend className="text-sm font-medium text-slate-700">What are you looking for?*</legend>
                        <div className="mt-3 flex flex-col md:flex-row gap-4">
                            {serviceOptions.map((service) => (
                                <label key={service.value} className="inline-flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="service"
                                        value={service.value}
                                        checked={form.service === service.value}
                                        onChange={handleInputChange}
                                        className="w-4 h-4"
                                    />
                                    {service.label}
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset className="md:col-span-2">
                        <legend className="text-sm font-medium text-slate-700">What do you need?</legend>
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {needsOptions.map((opt) => (
                                <label key={opt} className="inline-flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        name="needs"
                                        value={opt}
                                        checked={form.needs.includes(opt)}
                                        onChange={handleInputChange}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium text-slate-700">Do you currently have a website? (URL)</span>
                        <input
                            name="website"
                            value={form.website}
                            type="url"
                            placeholder="https://..."
                            onChange={handleInputChange}
                            maxLength={500}
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium text-slate-700">Tell us about your project*</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleInputChange}
                            required
                            className="mt-2 p-3 border rounded-lg shadow-sm min-h-35 focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    {/* Honey pot */}
                    <input
                        type="text"
                        name="companyWebsite"
                        value={form.companyWebsite}
                        onChange={handleInputChange}
                        tabIndex={-1}
                        autoComplete="off"
                        data-bwignore="true"
                        aria-hidden="true"
                        className="absolute left-[-9999px]"
                    />

                    <fieldset className="md:col-span-2">
                        <legend className="text-sm font-medium text-slate-700">Approximate budget</legend>
                        <div className="mt-3 flex flex-wrap gap-4">
                            {budgetOptions.map((b) => (
                                <label key={b.value} className="inline-flex items-center gap-2">
                                    <input
                                        type="radio"
                                        name="budget"
                                        value={b.value}
                                        checked={form.budget === b.value}
                                        onChange={handleInputChange}
                                        minLength={10}
                                        maxLength={5000}
                                        className="w-4 h-4"
                                    />
                                    <span className="text-sm">{b.label}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <div className="md:col-span-2 text-center">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="p-4 shadow-lg font-semibold text-white rounded-full bg-linear-to-r from-purple-400 via-purple-500 to-purple-600 hover:opacity-90 disabled:opacity-50"
                        >
                            {submitting ? "Sending…" : "Request a Free Quote"}
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
            </div>
        </section>
    );
}


