import { z } from "zod";
import { confidenceLevels, evidenceFields, evidenceSourceTypes, leadStatuses, legalEntityTypes, verificationStatuses, websiteStatuses } from "@/lib/leads/options";

export const recordIdSchema = z.string().min(1).max(128).regex(/^[A-Za-z0-9_-]+$/);

const optionalText = (max = 5000) => z.preprocess(
  (value) => typeof value === "string" && value.trim() === "" ? null : value,
  z.string().trim().max(max).nullable().optional(),
);

const webUrl = z.url("Enter a complete, valid URL.").max(1000).refine(
  (value) => {
    const protocol = new URL(value).protocol;
    return protocol === "http:" || protocol === "https:";
  },
  "Only http:// or https:// URLs are allowed.",
);

const optionalUrl = z.preprocess(
  (value) => typeof value === "string" && value.trim() === "" ? null : value,
  webUrl.nullable().optional(),
);

const optionalNumber = (minimum: number, maximum: number) => z.preprocess(
  (value) => typeof value === "string" && value.trim() === "" ? null : Number(value),
  z.number().min(minimum).max(maximum).nullable().optional(),
);

const optionalInteger = (minimum: number, maximum: number) => z.preprocess(
  (value) => typeof value === "string" && value.trim() === "" ? null : Number(value),
  z.number().int().min(minimum).max(maximum).nullable().optional(),
);

const optionalDate = z.preprocess(
  (value) => typeof value === "string" && value.trim() === "" ? null : value,
  z.iso.date().transform((value) => new Date(`${value}T12:00:00.000Z`)).nullable().optional(),
);

const leadInputSchema = z.object({
  businessName: z.string().trim().min(1, "Business name is required.").max(200),
  businessType: optionalText(200),
  location: optionalText(200),
  description: optionalText(),
  websiteStatus: z.enum(websiteStatuses),
  websiteUrl: optionalUrl,
  email: z.preprocess((value) => typeof value === "string" && value.trim() === "" ? null : value, z.email("Enter a valid email address.").max(254).nullable().optional()),
  emailConfidence: z.preprocess((value) => value === "" ? null : value, z.enum(confidenceLevels).nullable().optional()),
  phone: optionalText(80),
  phoneConfidence: z.preprocess((value) => value === "" ? null : value, z.enum(confidenceLevels).nullable().optional()),
  facebookUrl: optionalUrl,
  instagramUrl: optionalUrl,
  otherSocials: optionalText(2000),
  rating: optionalNumber(0, 5),
  reviewCount: optionalInteger(0, 10000000),
  lastActivityAt: optionalDate,
  legalEntityType: z.enum(legalEntityTypes),
  prospectScore: optionalInteger(0, 100),
  verificationStatus: z.enum(verificationStatuses),
  problemNoticed: optionalText(),
  potentialSolution: optionalText(),
  outreachAngle: optionalText(),
  bestContactMethod: optionalText(200),
  status: z.enum(leadStatuses),
  notes: optionalText(10000),
  doNotContact: z.preprocess((value) => value === "on" || value === true, z.boolean()),
  doNotContactReason: optionalText(1000),
  externalPlaceId: optionalText(300),
});

export type LeadContactRestriction = {
  status: (typeof leadStatuses)[number];
  doNotContact: boolean;
};

export function normalizeLeadContactRestriction<T extends LeadContactRestriction>(
  lead: T,
  current?: LeadContactRestriction,
): T {
  if (lead.doNotContact) {
    return { ...lead, status: "DO_NOT_CONTACT", doNotContact: true };
  }

  if (lead.status === "DO_NOT_CONTACT") {
    if (current?.status === "DO_NOT_CONTACT" && current.doNotContact) {
      return { ...lead, status: "NEW", doNotContact: false };
    }
    return { ...lead, status: "DO_NOT_CONTACT", doNotContact: true };
  }

  return { ...lead, doNotContact: false };
}

export const leadSchema = leadInputSchema.superRefine((lead, context) => {
  if (lead.doNotContact && !lead.doNotContactReason) {
    context.addIssue({ code: "custom", path: ["doNotContactReason"], message: "Record a reason when Do Not Contact is enabled." });
  }
});

export function parseLeadForm(formData: FormData, current?: LeadContactRestriction) {
  const input = leadInputSchema.safeParse(formObject(formData));
  if (!input.success) return input;
  return leadSchema.safeParse(normalizeLeadContactRestriction(input.data, current));
}

export const evidenceSchema = z.object({
  field: z.enum(evidenceFields),
  value: z.string().trim().min(1, "Evidence value is required.").max(2000),
  sourceUrl: optionalUrl,
  sourceTitle: optionalText(300),
  sourceType: z.enum(evidenceSourceTypes),
  confidence: z.enum(confidenceLevels),
  notes: optionalText(5000),
  checkedAt: optionalDate,
});

export function formObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export type LeadFormState = { error?: string; errors?: Record<string, string[]> };
