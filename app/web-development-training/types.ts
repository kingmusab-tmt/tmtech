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
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export interface Technology {
  name: string;
  category: string;
}
