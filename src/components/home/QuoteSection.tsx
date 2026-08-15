'use client'
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
];

interface FormData {
    name: string;
    business: string;
    email: string;
    phone: string;
    service: ServiceOption;
    needs: string[];
    website?: string;
    message: string;
    budget?: BudgetOption;
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
    });
    const [submitting, setSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState<string | null>(null);

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        if (type === "checkbox" && name === "needs") {
            setForm((prev) => {
                const next = new Set(prev.needs);
                if (checked) next.add(value);
                else next.delete(value);
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

            if (!res.ok) throw new Error('Network response was not ok');

            setStatusMessage("Request sent. We'll be in touch soon.");
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
            });
        } catch (err) {
            console.error(err);
            setStatusMessage("Failed to send request. Please try again later.");
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
                        Let's build something.
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-zinc-300">
                        Tell us about your project and we'll get back to you with the next steps.
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
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Business name</span>
                        <input
                            name="business"
                            value={form.business}
                            onChange={handleInputChange}
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Email*</span>
                        <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-300"
                        />
                    </label>

                    <label className="flex flex-col">
                        <span className="text-sm font-medium text-slate-700">Phone</span>
                        <input
                            name="phone"
                            value={form.phone}
                            type="tel"
                            onChange={handleInputChange}
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

                    {statusMessage && <p className="md:col-span-2 text-center italic mt-2">{statusMessage}</p>}
                </form>
            </div>
        </section>
    );
}


