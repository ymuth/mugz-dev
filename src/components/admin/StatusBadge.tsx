import { labelEnum } from "@/lib/leads/options";

const positive = new Set(["VERIFIED", "WON", "INTERESTED", "READY"]);
const warning = new Set(["NEEDS_REVIEW", "WEAK_EXISTING", "BROKEN_OR_OFFLINE"]);
const danger = new Set(["REJECTED", "DO_NOT_CONTACT", "LOST"]);

export default function StatusBadge({ value }: { value: string }) {
  const tone = positive.has(value) ? "border-emerald-300 bg-emerald-50 text-emerald-800" : warning.has(value) ? "border-amber-300 bg-amber-50 text-amber-900" : danger.has(value) ? "border-red-300 bg-red-50 text-red-800" : "border-zinc-300 bg-zinc-100 text-zinc-700";
  return <span className={`inline-flex border px-2 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.08em] ${tone}`}>{labelEnum(value)}</span>;
}
