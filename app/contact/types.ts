// contact/types.ts
export interface ContactForm {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface ContactInfo {
  type: "location" | "phone" | "email" | "registration";
  title: string;
  value: string;
  additional?: string;
}

export interface BusinessHours {
  mondayFriday: string;
  saturday: string;
  sunday: string;
}
