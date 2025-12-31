// consultation/types.ts
export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  projectDetails: string;
  timeline: string;
  budget: string;
}

export interface ServiceOption {
  value: string;
  label: string;
}

export interface TimelineOption {
  value: string;
  label: string;
}

export interface BudgetOption {
  value: string;
  label: string;
}
