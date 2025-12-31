// app/security-training/types.ts
export interface Course {
  title: string;
  level: string;
  duration: string;
  description: string;
  objectives: string[];
  audience: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}
