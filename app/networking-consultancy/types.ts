// app/networking-consultancy/types.ts
export interface Service {
  title: string;
  description: string;
  deliverables: string[];
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Process {
  step: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}
