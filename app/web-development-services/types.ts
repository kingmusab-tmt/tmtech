// app/web-development-services/types.ts
export interface Service {
  title: string;
  icon: React.ReactElement;
  description: string;
  features: string[];
  technologies: string[];
}

export interface Benefit {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Technology {
  name: string;
  category: string;
}
