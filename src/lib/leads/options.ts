export const websiteStatuses = ["UNKNOWN", "NO_WEBSITE_FOUND", "BROKEN_OR_OFFLINE", "WEAK_EXISTING", "GOOD_EXISTING"] as const;
export const verificationStatuses = ["UNVERIFIED", "NEEDS_REVIEW", "VERIFIED", "REJECTED"] as const;
export const confidenceLevels = ["LOW", "MEDIUM", "HIGH"] as const;
export const legalEntityTypes = ["UNKNOWN", "LIMITED_COMPANY", "LLP", "SOLE_TRADER", "PARTNERSHIP", "OTHER"] as const;
export const leadStatuses = ["NEW", "READY", "DRAFTED", "CONTACTED", "REPLIED", "INTERESTED", "CALL_BOOKED", "PREVIEW_REQUESTED", "PREVIEW_SENT", "WON", "LOST", "DO_NOT_CONTACT"] as const;
export const evidenceFields = ["BUSINESS_IDENTITY", "LOCATION", "WEBSITE", "EMAIL", "PHONE", "FACEBOOK", "INSTAGRAM", "OTHER_SOCIAL", "REVIEWS", "ACTIVITY", "LEGAL_ENTITY", "OTHER"] as const;
export const evidenceSourceTypes = ["OFFICIAL_WEBSITE", "FACEBOOK", "INSTAGRAM", "GOOGLE_BUSINESS", "DIRECTORY", "COMPANIES_HOUSE", "OTHER"] as const;

export function labelEnum(value: string) {
  return value.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

export function effectiveLeadStatus(lead: { status: string; doNotContact: boolean }) {
  return lead.doNotContact ? "DO_NOT_CONTACT" : lead.status;
}
