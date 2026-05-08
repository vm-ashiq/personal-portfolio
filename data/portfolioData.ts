import { Profile, Project, Experience } from "../types";

export const profileData: Profile = {
  name: "Dr. Ashiq V M",
  role: "Assistant Professor & AI Researcher",
  bio: "PhD-qualified Assistant Professor with over six years of teaching, research, and academic leadership experience in Computer Science. Specialized in Artificial Intelligence, Natural Language Processing, Deep Learning, and Computer Vision. Demonstrated expertise in hybrid machine learning architectures, OCR systems, and applied industrial AI.",
  email: "vmashiqofficial@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  skills: [
    "Artificial Intelligence",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Python",
    "C Programming",
    "CNN Architectures",
    "Data Preprocessing",
    "Information Extraction & OCR"
  ]
};

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Arabic Handwritten Character Recognition (OCR)",
    description: "Designed a multiphase OCR framework integrating Ensemble Feature Selection, Fuzzy KNN Classification, and Enhanced CNN models achieving ~99% classification accuracy.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=3174&auto=format&fit=crop",
    technologies: ["Deep Learning", "CNN", "Fuzzy KNN", "Python", "Computer Vision"],
    liveUrl: "https://orcid.org/0009-0007-4510-032X",
    githubUrl: ""
  },
  {
    id: "2",
    title: "Rail Transportation Property Management AI",
    description: "Patent pending: A System & Method for Rail Transportation Property Management using AI & ML. Enhances infrastructure monitoring utilizing advanced AI techniques.",
    image: "https://images.unsplash.com/photo-1473520844621-3990b7e289f3?q=80&w=2939&auto=format&fit=crop",
    technologies: ["Machine Learning", "AI", "IoT", "Data Science"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "3",
    title: "Social Media Sentiment Analysis",
    description: "Deep learning approaches for natural language processing and sentiment analysis in social media. Published in IEEE International Conference (IC3I).",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3132&auto=format&fit=crop",
    technologies: ["NLP", "Deep Learning", "Data Mining", "Python"],
    liveUrl: "https://orcid.org/0009-0007-4510-032X",
    githubUrl: ""
  }
];

export const experienceData: Experience[] = [
  {
    id: "1",
    role: "Assistant Professor",
    company: "Malabar College of Advanced Studies",
    period: "2020 - Present",
    description: "Teaching Advanced Computer Science courses including Artificial Intelligence, Data Science, Data Structures, and Python Programming with over 6 years of academic experience."
  },
  {
    id: "2",
    role: "Chief Technical Officer - IEDC",
    company: "Malabar College",
    period: "2024 - Present",
    description: "Guiding the Innovation and Entrepreneurship Development Centre (IEDC), promoting AI awareness, and mentoring undergraduate students in applied ML projects."
  },
  {
    id: "3",
    role: "AI & ML Researcher (Ph.D.)",
    company: "Karpagam Academy of Higher Education",
    period: "2018 - 2025",
    description: "Conducted Ph.D. research under Dr. E. J. Thomson Fredrick. Developed an optimization-based feature selection technique using PSO variants and addressed deep learning segmentation challenges."
  }
];
