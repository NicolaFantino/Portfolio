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
    email: "Nicola.Fantino@outlook.com",
    linkedin: "https://www.linkedin.com/in/nicola-fantino/",
    twitter: "",
    github: "https://github.com/NicolaFantino",
  },
  aboutMe:
    "I am a recent graduate with a Master’s degree in Cinema and Media Engineering from the Polytechnic University of Turin. I am eager to further develop my expertise in computer graphics by pursuing roles such as Technical Artist, Graphics Programmer, Gameplay Programmer, 3D Animator, or similar positions.",
  skills: ["C#", "C", "Java", "React", "Javascript", "Kotlin", "SQL", "Unity", "Unreal Engine", "Git", "Blender","Substance Painter"],
  projects: [
    {
      slug: "virtual-reality-training-system",
      name: "Multiplayer Virtual Reality Training System for an industrial 3D printer",
      description:
        "Master’s thesis project carried out at SynArea Consultants. The system was implemented starting from the VR Multiplayer Template, employing Netcode for GameObjects for data synchronization and the XR Interaction Toolkit for managing immersive interactions.The core of the system lies in a modular architecture structured around procedures divided into sequential steps, which can be executed in two distinct modes: a guided mode, featuring visual aids that assist the user step by step, and an evaluation mode, aimed at assessing the trainee’s level of learning and autonomy. Furthermore, multiple users can launch and perform different procedures simultaneously, fostering collaboration and enabling participants to support each other during the execution. The virtual environment was developed with a strong emphasis on performance optimization for standalone headsets such as the Oculus Quest 2.",
      skills: ["Unity", "C#","Netcode for Gameobjects","XR Interaction Toolkit"],
      youtubeId: "D3kJmbJioKc"
    },
    {
      slug: "civitas-mortis",
      name: "Civitas Mortis",
      description:
        "Prototype of a videogame developed in Unreal Engine 5, where I was tasked with creating the AI and VFX for the final boss.",
      skills: ["Unreal Engine 5", "Blueprints"],
      youtubeId: "6sMVLN6cSjI"
    },
    {
      slug: "japanese-traditional-house",
      name: "Japanese traditional house",
      description:
        "3D environment created with Blender and Substance Painter. I modeled the exterior and some assets for the interior rooms. The project is also accompanied by an OpenGL application where it is possible to play Gomoku in local multiplayer.",
      skills: ["Blender 3D Modeling", "Substance Painter", "OpenGL"],
      link: "https://ficsy.itch.io/gomokuopengl",
      images: [
        "/Portfolio//images/TotaleGiardinoCorretto.png",
        "/Portfolio//images/DettaglioFontana1.png",
        "/Portfolio//images/Render1.png",
        "/Portfolio//images/Render2.png",
        "/Portfolio//images/Render3.png",
      ],
    },
    {
      slug: "sci-fi-city-compositing",
      name: "Sci-fi city compositing",
      description:
        "Compositing of live footage with a 3D environment. I handled the camera tracking and the animation of the foreground elements.",
      skills: ["Da Vinci Resolve", "Blender 3D Animation"],
      youtubeId: "0wVfc3fsuQ4",
    },
    {
      slug: "flatville-spot-remake",
      name: "Flatville spot remake",
      description:
        "Animation exercise consisting of recreating the Flatville commercial. The video contains all the scenes animated by me.",
      skills: ["Blender 3D Animation"],
      youtubeId: "G5f_IlZyL2c",
    },
    {
      slug: "aware",
      name: "Aware",
      description:
        "Unity real-time application where I was tasked with implementing the Microsoft Rocketbox Avatar library, sound effects, managing lighting, and modelling part of the 3D assets.",
      skills: ["Unity", "C#", "Blender 3D Modeling"],
      link: "https://fabrizio-sulpizio.itch.io/aware",
    },
    {
      slug: "city-alley-environment",
      name: "City alley environment",
      description:
        "3D environment created with Blender and Substance Painter.",
      skills: ["Blender 3D Modeling", "Substance Painter"],
      images: [
        "/Portfolio//images/RenderFrontale.png",
        "/Portfolio//images/RenderIngressoTradizionale_senzariflesso.png",
        "/Portfolio//images/Sgabello+Portaombrelli_colornoritaglio.jpg",
      ],
    },
  ],
  experience: [
    /*
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
    },*/
  ],
  education: [/*
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
    },*/
  ],
};
