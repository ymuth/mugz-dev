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

export default function BookingSection() {
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
        <section className="relative w-full flex flex-col bg-linear-to-br from-zinc-100 via-zinc-200 to-slate-300">
            <div className="p-10 md:p-20 max-w-7xl w-full mx-auto">
                <h2 className="text-5xl text-black mx-auto text-center font-bold w-fit pb-3 mb-10">
                    Request a Free Quote
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl text-black mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-2xl"
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


