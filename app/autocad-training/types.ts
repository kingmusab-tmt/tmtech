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

export interface Industry {
  name: string;
  icon: React.ReactElement;
  description: string;
}
