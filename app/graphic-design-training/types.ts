// app/graphic-design-training/types.ts
export interface Course {
  title: string;
  level: string;
  duration: string;
  icon: React.ReactElement;
  description: string;
  objectives: string[];
  audience: string;
}

export interface Benefit {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface Software {
  name: string;
  category: string;
}
