import { confidenceLevels, evidenceFields, evidenceSourceTypes, labelEnum } from "@/lib/leads/options";

type Values = { field?: string; value?: string; sourceUrl?: string | null; sourceTitle?: string | null; sourceType?: string; confidence?: string; notes?: string | null; checkedAt?: Date | null };

export default function EvidenceForm({ action, values = {}, submitLabel }: { action: (formData: FormData) => void | Promise<void>; values?: Values; submitLabel: string }) {
  return <form action={action} className="mt-5 grid gap-4 sm:grid-cols-2">
    <label className="text-sm font-semibold">Field<select name="field" className="admin-field" defaultValue={values.field ?? "BUSINESS_IDENTITY"}>{evidenceFields.map((value) => <option key={value} value={value}>{labelEnum(value)}</option>)}</select></label>
    <label className="text-sm font-semibold">Confidence<select name="confidence" className="admin-field" defaultValue={values.confidence ?? "MEDIUM"}>{confidenceLevels.map((value) => <option key={value} value={value}>{labelEnum(value)}</option>)}</select></label>
    <label className="text-sm font-semibold sm:col-span-2">Value<input name="value" className="admin-field" defaultValue={values.value ?? ""} required /></label>
    <label className="text-sm font-semibold">Source type<select name="sourceType" className="admin-field" defaultValue={values.sourceType ?? "OTHER"}>{evidenceSourceTypes.map((value) => <option key={value} value={value}>{labelEnum(value)}</option>)}</select></label>
    <label className="text-sm font-semibold">Checked date<input type="date" name="checkedAt" className="admin-field" defaultValue={values.checkedAt ? values.checkedAt.toISOString().slice(0, 10) : ""} /></label>
    <label className="text-sm font-semibold">Source title<input name="sourceTitle" className="admin-field" defaultValue={values.sourceTitle ?? ""} /></label>
    <label className="text-sm font-semibold">Source URL<input type="url" name="sourceUrl" className="admin-field" defaultValue={values.sourceUrl ?? ""} /></label>
    <label className="text-sm font-semibold sm:col-span-2">Notes<textarea name="notes" className="admin-field resize-y" rows={3} defaultValue={values.notes ?? ""} /></label>
    <div className="sm:col-span-2"><button className="admin-button" type="submit">{submitLabel}</button></div>
  </form>;
}
