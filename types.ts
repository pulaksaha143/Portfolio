
export interface ContactInfo {
  phone?: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  grade?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: 'Job Simulation' | 'Internship' | 'Full-time' | 'Part-time';
  details: string[];
}

export interface Project {
  title: string;
  techStack: string[];
  description: string[];
  links?: {
    demo?: string;
    repo?: string;
  };
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
