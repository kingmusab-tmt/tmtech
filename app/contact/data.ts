// contact/data.ts
import React from "react";
import { LocationOn, Phone, Email, CalendarToday } from "@mui/icons-material";

export const contactInfo = [
  {
    type: "location" as const,
    title: "Location",
    value:
      "BM39 Baba Musami Plaza, Post Office, Maiduguri, Borno State, Nigeria",
    icon: React.createElement(LocationOn, { sx: { color: "white" } }),
  },
  {
    type: "phone" as const,
    title: "Phone",
    value: "+234 816 255 2901",
    icon: React.createElement(Phone, { sx: { color: "white" } }),
  },
  {
    type: "email" as const,
    title: "Email",
    value: "info@triplemtechnology.com",
    icon: React.createElement(Email, { sx: { color: "white" } }),
  },
  {
    type: "registration" as const,
    title: "Registration",
    value: "CAC BN 2875632",
    additional: "Registered April 29, 2019",
    icon: React.createElement(CalendarToday, { sx: { color: "white" } }),
  },
];

export const businessHours = {
  mondayFriday: "Monday - Friday: 8:00 AM - 5:00 PM",
  saturday: "Saturday: 9:00 AM - 5:00 PM",
  sunday: "Sunday: Based on appointment",
};
