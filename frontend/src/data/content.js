// Centralized content for the portfolio. Edit here to update site copy/data.

export const profile = {
  name: "Niranjan G",
  initials: "NG",
  role: "Third-Year Information Technology Student",
  tagline: "MERN Stack Developer | Problem Solver | Full-Stack Enthusiast",
  rolesTypewriter: [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Problem Solver",
    "Software Engineer",
    "Tech Enthusiast",
  ],
  description:
    "Passionate about building scalable web applications, intelligent software solutions, and impactful digital products using modern technologies.",
  email: "niranjan13012007@gmail.com",
  phone: "+91 8825905640",
  location: "Dindigul, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/niranjan-gobinathan",
  github: "https://github.com/Niranjan-g-13012007",
  resumeUrl: "/Niranjan_G_Resume.pdf",
};

export const about = {
  college: "Kongu Engineering College",
  cgpa: "9.34",
  description:
    "Passionate MERN Stack Developer with strong foundations in Data Structures, Algorithms, Database Management Systems, and Full-Stack Development. Experienced in building scalable web applications, AI-powered solutions, and IoT-based systems. Dedicated to solving real-world problems through clean architecture, modern technologies, and user-centric development.",
};

export const counters = [
  { label: "Problems Solved", value: 500, suffix: "+" },
  { label: "Major Projects", value: 4, suffix: "" },
  { label: "Major Achievements", value: 3, suffix: "" },
  { label: "CGPA", value: 9.34, suffix: "", decimals: 2 },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Streamlit"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOP", "DBMS", "REST APIs"],
  },
];

export const codingProfiles = [
  {
    platform: "GitHub",
    description: "Open-source contributions & project repositories",
    summary: "Active repositories showcasing full-stack, IoT, and AI-powered projects with clean commit history.",
    url: "https://github.com/Niranjan-g-13012007",
    icon: "github",
  },
  {
    platform: "LeetCode",
    description: "Competitive programming & DSA practice",
    summary: "Consistent problem-solving practice across arrays, trees, graphs, and dynamic programming.",
    url: "https://leetcode.com/",
    icon: "leetcode",
  },
  {
    platform: "GeeksforGeeks",
    description: "Algorithmic problem solving",
    summary: "500+ problems solved across GfG, LeetCode, and Codeforces combined — strong algorithmic foundation.",
    url: "https://www.geeksforgeeks.org/",
    icon: "gfg",
  },
  {
    platform: "LinkedIn",
    description: "Professional network & career updates",
    summary: "Sharing project milestones, achievements, and connecting with the developer community.",
    url: "https://linkedin.com/in/niranjan-gobinathan",
    icon: "linkedin",
  },
];

export const projects = [
  {
    title: "Smart Home Energy Monitoring System",
    description:
      "An IoT-based system that helps modern homes monitor and manage energy usage in real time, from a unified web dashboard.",
    features: [
      "Real-time monitoring",
      "Energy forecasting",
      "Cost analytics",
      "Remote appliance control",
    ],
    tech: ["IoT", "ESP32", "React", "Dashboard"],
    github: "https://github.com/Niranjan-g-13012007",
    demo: null,
    accent: "gold",
  },
  {
    title: "MediRoute",
    description:
      "A smart ambulance traffic control and alerting system creating green corridors using GPS and IoT-enabled signal automation.",
    features: [
      "Smart ambulance routing",
      "GPS integration",
      "Traffic automation",
      "Hospital communication",
    ],
    tech: ["GPS", "IoT", "Real-time Dashboard"],
    github: "https://github.com/Niranjan-g-13012007",
    demo: null,
    accent: "red",
  },
  {
    title: "Civic Connect",
    description:
      "A full-stack civic issue reporting and resolution platform connecting citizens with local authorities for faster resolution.",
    features: [
      "Issue reporting",
      "Issue tracking",
      "Authority dashboard",
      "MongoDB integration",
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Niranjan-g-13012007",
    demo: null,
    accent: "blue",
  },
  {
    title: "Restaurant Menu Performance Analysis",
    description:
      "A data-driven analytics application evaluating restaurant menu performance through interactive dashboards.",
    features: [
      "Analytics dashboard",
      "Revenue insights",
      "Data visualization",
      "Business intelligence",
    ],
    tech: ["Python", "Pandas", "Streamlit", "SQL"],
    github: "https://github.com/Niranjan-g-13012007",
    demo: null,
    accent: "gold",
  },
];

export const achievements = [
  {
    title: "Top 5% Student",
    org: "Kongu Engineering College",
    detail: "Merit Scholarship Certificate for academic performance, 2025–26.",
    year: "2025–26",
  },
  {
    title: "First Prize — Mini Hackathon",
    org: "Kongu Engineering College (First-Year Exclusive)",
    detail: "Awarded for the Smart Home Energy Monitoring System.",
    year: "2025",
  },
  {
    title: "First Prize — DevForge Hackathon",
    org: "Kongu Engineering College",
    detail: "College-level hackathon win for the Smart Energy Monitoring System.",
    year: "2025",
  },
  {
    title: "IEEE National-Level Paper Presentation Finalist",
    org: "NIT Srinagar",
    detail:
      "Finalist for \u201cSmart Energy Management System: Real-Time Monitoring, Billing, and Weather-Aware Predictive Consumption Using IoT and a Web Dashboard.\u201d",
    year: "2025",
  },
];

export const education = [
  {
    institution: "Kongu Engineering College",
    degree: "B.Tech, Information Technology",
    score: "CGPA: 9.34",
    period: "2024 — 2028",
  },
  {
    institution: "M.S.P Solai Nadar Memorial Higher Secondary School",
    degree: "Class XII",
    score: "84.6%",
    period: "2024",
  },
  {
    institution: "M.S.P Solai Nadar Memorial Higher Secondary School",
    degree: "Class X",
    score: "68.4%",
    period: "2022",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Coding Profiles", href: "#coding-profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroKeywords = [
  "React", "JavaScript", "Node.js", "Express", "MongoDB",
  "MERN", "REST API", "Git", "GitHub", "DSA",
];
