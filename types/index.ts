export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  skills: string[];
}
