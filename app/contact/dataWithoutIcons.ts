// contact/dataWithoutIcons.ts
export const contactInfo = [
  {
    type: "location" as const,
    title: "Location",
    value:
      "BM39 Baba Musami Plaza, Post Office, Maiduguri, Borno State, Nigeria",
  },
  {
    type: "phone" as const,
    title: "Phone",
    value: "+234 816 255 2901",
  },
  {
    type: "email" as const,
    title: "Email",
    value: "info@triplemtechnology.com",
  },
  {
    type: "registration" as const,
    title: "Registration",
    value: "CAC BN 2875632",
    additional: "Registered April 29, 2019",
  },
];

export const businessHours = {
  mondayFriday: "Monday - Friday: 8:00 AM - 5:00 PM",
  saturday: "Saturday: 9:00 AM - 5:00 PM",
  sunday: "Sunday: Based on appointment",
};
