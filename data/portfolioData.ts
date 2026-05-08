import { Profile, Project, Experience } from "../types";

export const profileData: Profile = {
  name: "Alex Developer",
  role: "Full Stack Software Engineer",
  bio: "I'm a passionate software engineer with experience in building scalable web applications. I love working with modern technologies like React, Next.js, Node.js, and TypeScript. When I'm not coding, you can find me exploring the outdoors or reading a good book.",
  email: "hello@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Framer Motion",
    "Git",
    "Docker"
  ]
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, Stripe, and a headless CMS. Includes user authentication, cart management, and order processing.",
    image: "https://images.unsplash.com/photo-1557821552-1710515302a9?q=80&w=3174&auto=format&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Features drag-and-drop kanban boards, team workspaces, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2939&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    liveUrl: "https://example.com/tasks",
    githubUrl: "https://github.com/example/tasks"
  },
  {
    id: "3",
    title: "AI Writing Assistant",
    description: "An AI-powered writing tool that helps users draft, edit, and optimize content. Integrates with OpenAI API for generation and NLP.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3132&auto=format&fit=crop",
    technologies: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://example.com/ai-writer",
    githubUrl: "https://github.com/example/ai-writer"
  }
];

export const experienceData: Experience[] = [
  {
    id: "1",
    role: "Senior Frontend Engineer",
    company: "TechNova Solutions",
    period: "2023 - Present",
    description: "Led the migration of a legacy SPA to Next.js 14, improving initial load times by 40%. Mentored junior developers and established frontend coding standards."
  },
  {
    id: "2",
    role: "Full Stack Developer",
    company: "Creative Cloud Apps",
    period: "2020 - 2023",
    description: "Developed and maintained multiple client-facing applications using the MERN stack. Implemented CI/CD pipelines reducing deployment time by 60%."
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "Digital Horizons",
    period: "2018 - 2020",
    description: "Assisted in building responsive landing pages and integrating RESTful APIs. Worked closely with the design team to ensure pixel-perfect implementation."
  }
];
