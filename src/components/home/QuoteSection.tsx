'use client'
import Link from "next/link";
import React, { useState } from "react";

const serviceOptions = [
    { value: "essentials", label: "Simple business website" },
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

            setStatusMessage("Request sent. I'll be in touch soon.");
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
        <section className="relative overflow-hidden bg-[#e8e5df] text-zinc-950">
            <div className="site-shell section-space relative z-10">
                <div className="mb-12 grid gap-8 border-b border-zinc-400/70 pb-10 lg:grid-cols-[0.7fr_1.3fr]">
                    <p className="eyebrow text-purple-700">Start a project</p>
                    <div>
                        <h2 className="display-heading section-heading max-w-4xl">Tell me about your business.</h2>
                        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">Already have a site, starting from scratch, or just have an idea? Send over what you need and I&apos;ll tell you the best route.</p>
                    </div>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className="ml-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-7 border border-zinc-300 bg-white p-6 text-black shadow-[12px_12px_0_#6d28d9] sm:p-8 md:grid-cols-2 lg:p-10"
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
                            className="form-field"
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
                            className="form-field"
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
                            className="form-field"
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
                            className="form-field"
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
                                        className="size-4 accent-purple-700"
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
                                        className="size-4 accent-purple-700"
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
                            className="form-field"
                        />
                    </label>

                    <label className="flex flex-col md:col-span-2">
                        <span className="text-sm font-medium text-slate-700">Tell us about your project*</span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleInputChange}
                            required
                            minLength={10}
                            maxLength={5000}
                            className="form-field min-h-40 resize-y"
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
                                        className="size-4 accent-purple-700"
                                    />
                                    <span className="text-sm">{b.label}</span>
                                </label>
                            ))}
                        </div>
                    </fieldset>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="button bg-zinc-950 text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {submitting ? "Sending…" : "Send project details"}
                        </button>
                    </div>
                    <p className="md:col-span-2 text-xs leading-5 text-zinc-500">
                        I&apos;ll use the information you provide to respond to your enquiry.
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


