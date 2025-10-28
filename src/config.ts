export type Project = {
  slug: string;
  name: string;
  description: string;
  skills: string[];
  link?: string;
  images?: string[];
  youtubeId?: string;
};

type Experience = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

type Education = {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

type SiteConfig = {
  name: string;
  title: string;
  description: string;
  accentColor: string;
  social: {
    email: string;
    linkedin: string;
    twitter: string;
    github: string;
  };
  aboutMe: string;
  skills: string[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
};

export const siteConfig: SiteConfig = {
  name: "Nicola Fantino",
  title: "Digital Media Engineer",
  description: "Portfolio website of Nicola Fantino",
  accentColor: "#1d4ed8",
  social: {
    email: "your-email@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quos asperiores nihil consequatur tempore cupiditate architecto natus commodi corrupti quas quasi facere est, dignissimos odit nam veniam sapiente ut, vitae eligendi ipsum dolor, nostrum ullam impedit! Corrupti ratione mollitia temporibus necessitatibus, consectetur reiciendis recusandae id, dolorum quaerat, vero pariatur. Ratione!",
  skills: ["C#", "C", "Java", "React", "Javascript", "Kotlin", "SQL", "Unity", "Unreal Engine", "Git", "Blender","Substance Painter"],
  projects: [
    {
      slug: "civitas-mortis",
      name: "Civitas Mortis",
      description:
        "Prototype of a videogame developed in Unreal Engine 5, where I was tasked with creating the AI and VFX for the final boss.",
      skills: ["Unreal Engine 5", "Blueprints"],
      youtubeId: "6sMVLN6cSj"
    },
    {
      slug: "chrome-extension-mastery",
      name: "Chrome Extension Mastery: Build Full-Stack Extensions with React & Node.js",
      description:
        "Master the art of building production-ready, full-stack Chrome Extensions using modern web technologies and best practices",
      skills: ["React", "Node.js", "AWS"],
      youtubeId: "dQw4w9WgXcQ",
    },
    {
      slug: "extension-kit",
      name: "ExtensionKit",
      description:
        "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
      skills: ["React", "Node.js", "AWS"],
      images: [
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
      ],
    },
  ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
