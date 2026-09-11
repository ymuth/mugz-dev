"use client";

import { useActionState, useState } from "react";
import { confidenceLevels, labelEnum, leadStatuses, legalEntityTypes, verificationStatuses, websiteStatuses } from "@/lib/leads/options";
import type { LeadFormState } from "@/lib/leads/validation";

export type LeadFormValues = Record<string, string | number | boolean | null | undefined>;
type Action = (state: LeadFormState, formData: FormData) => Promise<LeadFormState>;

function Field({ label, name, defaultValue, error, type = "text", min, max, step, required }: { label: string; name: string; defaultValue?: string | number | null; error?: string[]; type?: string; min?: number; max?: number; step?: number; required?: boolean }) {
  return <label className="block text-sm font-semibold text-zinc-700">{label}<input className="admin-field" name={name} type={type} defaultValue={defaultValue ?? ""} min={min} max={max} step={step} required={required} />{error?.map((item) => <span key={item} className="mt-1 block text-xs text-red-700">{item}</span>)}</label>;
}

function TextArea({ label, name, defaultValue, error, rows = 4 }: { label: string; name: string; defaultValue?: string | null; error?: string[]; rows?: number }) {
  return <label className="block text-sm font-semibold text-zinc-700 sm:col-span-2">{label}<textarea className="admin-field resize-y" name={name} defaultValue={defaultValue ?? ""} rows={rows} />{error?.map((item) => <span key={item} className="mt-1 block text-xs text-red-700">{item}</span>)}</label>;
}

function Select({ label, name, values, defaultValue, optional = false, value, onValueChange }: { label: string; name: string; values: readonly string[]; defaultValue?: string | null; optional?: boolean; value?: string; onValueChange?: (value: string) => void }) {
  const selection = value === undefined
    ? { defaultValue: defaultValue ?? "" }
    : { value, onChange: (event: React.ChangeEvent<HTMLSelectElement>) => onValueChange?.(event.target.value) };
  return <label className="block text-sm font-semibold text-zinc-700">{label}<select className="admin-field" name={name} {...selection}>{optional && <option value="">Not recorded</option>}{values.map((option) => <option value={option} key={option}>{labelEnum(option)}</option>)}</select></label>;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return <fieldset className="border-t border-zinc-300 pt-7"><legend className="admin-eyebrow pr-4 text-purple-700">{title}</legend><div className="mt-5 grid gap-5 sm:grid-cols-2">{children}</div></fieldset>;
}

export default function LeadForm({ action, values = {}, submitLabel }: { action: Action; values?: LeadFormValues; submitLabel: string }) {
  const [state, formAction, pending] = useActionState(action, {});
  const errors = state.errors ?? {};
  const initiallyRestricted = Boolean(values.doNotContact) || values.status === "DO_NOT_CONTACT";
  const [status, setStatus] = useState(initiallyRestricted ? "DO_NOT_CONTACT" : (values.status as string) ?? "NEW");
  const [doNotContact, setDoNotContact] = useState(initiallyRestricted);

  function changeStatus(nextStatus: string) {
    setStatus(nextStatus);
    setDoNotContact(nextStatus === "DO_NOT_CONTACT");
  }

  function changeDoNotContact(checked: boolean) {
    setDoNotContact(checked);
    if (checked) setStatus("DO_NOT_CONTACT");
    else if (status === "DO_NOT_CONTACT") setStatus("NEW");
  }

  return (
    <form action={formAction} className="space-y-10" noValidate>
      {state.error && <p role="alert" className="border-l-4 border-red-600 bg-red-50 p-4 text-sm text-red-800">{state.error}</p>}
      <Section title="Business">
        <Field label="Business name" name="businessName" defaultValue={values.businessName as string} error={errors.businessName} required />
        <Field label="Business type" name="businessType" defaultValue={values.businessType as string} />
        <Field label="Location" name="location" defaultValue={values.location as string} />
        <Select label="Legal entity type" name="legalEntityType" values={legalEntityTypes} defaultValue={(values.legalEntityType as string) ?? "UNKNOWN"} />
        <TextArea label="Description" name="description" defaultValue={values.description as string} />
      </Section>
      <Section title="Website / contact">
        <Select label="Website status" name="websiteStatus" values={websiteStatuses} defaultValue={(values.websiteStatus as string) ?? "UNKNOWN"} />
        <Field label="Website URL" name="websiteUrl" type="url" defaultValue={values.websiteUrl as string} error={errors.websiteUrl} />
        <Field label="Email" name="email" type="email" defaultValue={values.email as string} error={errors.email} />
        <Select label="Email confidence" name="emailConfidence" values={confidenceLevels} defaultValue={values.emailConfidence as string} optional />
        <Field label="Phone" name="phone" type="tel" defaultValue={values.phone as string} />
        <Select label="Phone confidence" name="phoneConfidence" values={confidenceLevels} defaultValue={values.phoneConfidence as string} optional />
      </Section>
      <Section title="Social">
        <Field label="Facebook URL" name="facebookUrl" type="url" defaultValue={values.facebookUrl as string} error={errors.facebookUrl} />
        <Field label="Instagram URL" name="instagramUrl" type="url" defaultValue={values.instagramUrl as string} error={errors.instagramUrl} />
        <TextArea label="Other social profiles" name="otherSocials" defaultValue={values.otherSocials as string} rows={3} />
      </Section>
      <Section title="Activity / reputation">
        <Field label="Rating (0–5)" name="rating" type="number" min={0} max={5} step={0.1} defaultValue={values.rating as number} error={errors.rating} />
        <Field label="Review count" name="reviewCount" type="number" min={0} step={1} defaultValue={values.reviewCount as number} error={errors.reviewCount} />
        <Field label="Last activity date" name="lastActivityAt" type="date" defaultValue={values.lastActivityAt as string} error={errors.lastActivityAt} />
      </Section>
      <Section title="Qualification">
        <Field label="Prospect score (0–100)" name="prospectScore" type="number" min={0} max={100} step={1} defaultValue={values.prospectScore as number} error={errors.prospectScore} />
        <Select label="Verification status" name="verificationStatus" values={verificationStatuses} defaultValue={(values.verificationStatus as string) ?? "UNVERIFIED"} />
        <TextArea label="Problem noticed" name="problemNoticed" defaultValue={values.problemNoticed as string} />
        <TextArea label="Potential solution" name="potentialSolution" defaultValue={values.potentialSolution as string} />
        <TextArea label="Outreach angle" name="outreachAngle" defaultValue={values.outreachAngle as string} />
        <Field label="Best contact method" name="bestContactMethod" defaultValue={values.bestContactMethod as string} />
        <Field label="External place ID" name="externalPlaceId" defaultValue={values.externalPlaceId as string} />
      </Section>
      <Section title="Pipeline">
        <Select label="Lead status" name="status" values={leadStatuses} value={status} onValueChange={changeStatus} />
        <label className="flex items-center gap-3 self-end border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800"><input type="checkbox" name="doNotContact" checked={doNotContact} onChange={(event) => changeDoNotContact(event.target.checked)} className="size-4 accent-red-700" />Do not contact</label>
        <TextArea label="Do not contact reason" name="doNotContactReason" defaultValue={values.doNotContactReason as string} error={errors.doNotContactReason} rows={3} />
        <TextArea label="Notes" name="notes" defaultValue={values.notes as string} rows={6} />
      </Section>
      <div className="flex justify-end border-t border-zinc-300 pt-7"><button className="admin-button" type="submit" disabled={pending}>{pending ? "Saving…" : submitLabel}</button></div>
    </form>
  );
}
