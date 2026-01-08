
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  imageUrl: string;
  link?: string;
  github?: string;
  features: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}
