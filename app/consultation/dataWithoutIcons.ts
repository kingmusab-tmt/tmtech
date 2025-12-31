// consultation/dataWithoutIcons.ts
export const serviceOptions: Array<{ value: string; label: string }> = [
  { value: "web-development", label: "Web Development" },
  { value: "cybersecurity", label: "Cybersecurity Consultancy" },
  { value: "networking", label: "Networking Consultancy" },
  { value: "engineering", label: "Engineering Services" },
  { value: "business-services", label: "Business Services" },
  { value: "training", label: "Training Programs" },
  { value: "other", label: "Other Services" },
];

export const timelineOptions: Array<{ value: string; label: string }> = [
  { value: "immediate", label: "Immediate (1-2 weeks)" },
  { value: "short-term", label: "Short-term (1-3 months)" },
  { value: "medium-term", label: "Medium-term (3-6 months)" },
  { value: "long-term", label: "Long-term (6+ months)" },
  { value: "not-sure", label: "Not sure yet" },
];

export const budgetOptions: Array<{ value: string; label: string }> = [
  { value: "under-100k", label: "Under ₦100,000" },
  { value: "100k-500k", label: "₦100,000 - ₦500,000" },
  { value: "500k-1m", label: "₦500,000 - ₦1,000,000" },
  { value: "1m-5m", label: "₦1,000,000 - ₦5,000,000" },
  { value: "over-5m", label: "Over ₦5,000,000" },
  { value: "not-sure", label: "Not sure yet" },
];
