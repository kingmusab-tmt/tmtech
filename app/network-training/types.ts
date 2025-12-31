// app/network-training/types.ts
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

export interface Technology {
  name: string;
  category: string;
}

export interface CourseWithoutIcons {
  title: string;
  level: string;
  duration: string;
  description: string;
  objectives: string[];
  audience: string;
}

export interface BenefitWithoutIcons {
  title: string;
  description: string;
}
