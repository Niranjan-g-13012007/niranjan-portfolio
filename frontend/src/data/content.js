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
    "I'm an Information Technology student at Kongu Engineering College passionate about software development, problem-solving, and building impactful digital solutions. With experience in MERN Stack development, Java, Python, databases, and data structures & algorithms, I enjoy transforming ideas into real-world applications. I am continuously learning, exploring new technologies, and creating projects that enhance my skills while solving practical challenges.",
};

export const counters = [
  { label: "Problems Solved", value: 600, suffix: "+" },
  { label: "Major Projects", value: 4, suffix: "" },
  { label: "Major Achievements", value: 4, suffix: "" },
  { label: "CGPA", value: 9.34, suffix: "", decimals: 2 },
];

// Skill categories with strategic color coding per the brief.
// colorKey maps to design tokens defined in index.css (e.g. text-skill-frontend)
export const skillCategories = [
  {
    title: "Frontend",
    colorKey: "blue",
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    colorKey: "red",
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    colorKey: "gold",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Languages",
    colorKey: "purple",
    skills: ["Java", "Python", "C++", "JavaScript"],
  },
  {
    title: "Tools",
    colorKey: "emerald",
    skills: ["Git", "GitHub", "VS Code", "Streamlit"],
  },
  {
    title: "Core Concepts",
    colorKey: "orange",
    skills: ["DSA", "OOP", "DBMS", "REST APIs"],
  },
];

// Developer Profiles, in the specified order.
export const codingProfiles = [
  {
    platform: "LinkedIn",
    description: "Professional network & career updates",
    summary: "Sharing project milestones, achievements, and connecting with the developer community.",
    url: "https://linkedin.com/in/niranjan-gobinathan",
    icon: "linkedin",
  },
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
    url: "https://leetcode.com/Niranjan_gobinathan",
    icon: "leetcode",
  },
  {
    platform: "GeeksforGeeks",
    description: "Algorithmic problem solving",
    summary: "600+ problems solved across GfG, LeetCode, and Codeforces combined — strong algorithmic foundation.",
    url: "https://www.geeksforgeeks.org/niranjavwll?tab=activity",
    icon: "gfg",
  },
  {
    platform: "Codeforces",
    description: "Competitive programming contests",
    summary: "Participating in rated contests to sharpen algorithmic thinking under time constraints.",
    url: "https://codeforces.com/profile/niranjan_gobinathan",
    icon: "codeforces",
  },
  {
    platform: "Codolio",
    description: "Unified coding profile tracker",
    summary: "Aggregated view of coding journey, contest history, and problem-solving stats across platforms.",
    url: "https://codolio.com/profile/niranjan_gobinathan",
    icon: "codolio",
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
    github: "https://github.com/Niranjan-g-13012007/Smart-home-energy-Monitoring-System",
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
    github: "https://github.com/Niranjan-g-13012007/MEDI-ROUTE---Smart-Ambulance-Traffic-Control-Alerting-System",
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
    tech: ["HTML", "CSS", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Niranjan-g-13012007/CIVIC-CONNECT---Civic-Issue-Reporting-And-Resolution-System",
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
    github: "https://github.com/Niranjan-g-13012007/Restaurant-Menu-Performance-Analysis",
    demo: null,
    accent: "gold",
  },
];

// Achievements: competitive/academic recognitions — distinct from certifications.
export const achievements = [
  {
    title: "Top 5% Merit Scholarship",
    org: "Kongu Engineering College",
    detail: "Merit Scholarship Certificate for being among the Top 5% of students based on academic performance, 2025–26.",
    year: "2025–26",
    colorKey: "gold",
  },
  {
    title: "DevForge Hackathon Winner",
    org: "Kongu Engineering College",
    detail: "First Prize — college-level hackathon win for the Smart Home Energy Monitoring System.",
    year: "2025",
    colorKey: "red",
  },
  {
    title: "Mini Hackathon Winner",
    org: "Kongu Engineering College (First-Year Exclusive)",
    detail: "First Prize, awarded for the Smart Home Energy Monitoring System.",
    year: "2025",
    colorKey: "blue",
  },
  {
    title: "IEEE National-Level Paper Presentation Finalist",
    org: "NIT Srinagar",
    detail:
      "Finalist for \u201cSmart Energy Management System: Real-Time Monitoring, Billing, and Weather-Aware Predictive Consumption Using IoT and a Web Dashboard.\u201d",
    year: "2025",
    colorKey: "emerald",
  },
];

// Certifications — placeholder URLs to be replaced manually later.
export const certifications = [
  {
    title: "Social Networks",
    issuer: "NPTEL",
    description: "Online certification covering the structure, analysis, and dynamics of social networks.",
    url: "#",
  },
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    description: "Principles of designing intuitive, accessible, and user-centered interfaces.",
    url: "#",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks",
    description: "Foundational course on MATLAB programming for engineering and data analysis.",
    url: "#",
  },
  {
    title: "Inplant Training",
    issuer: "Industry Training Program",
    description: "Hands-on industry exposure applying classroom knowledge to real-world systems.",
    url: "#",
  },
  {
    title: "Frontend Web Developer: Modern HTML, CSS & JavaScript",
    issuer: "Udemy",
    description: "Comprehensive frontend development course covering modern HTML5, CSS3, and JavaScript practices.",
    url: "#",
  },
  {
    title: "Typewriting English Lower Grade",
    issuer: "Government Technical Examination",
    description: "Certified proficiency in English typewriting at the lower grade level.",
    url: "#",
  },
  {
    title: "Typewriting English Higher Grade",
    issuer: "Government Technical Examination",
    description: "Certified proficiency in English typewriting at the higher grade level.",
    url: "#",
  },
];

export const education = [
  {
    institution: "Kongu Engineering College",
    degree: "B.Tech, Information Technology",
    score: "CGPA: 9.34",
    period: "2024 — 2028",
    location: "Erode, Tamil Nadu",
    url: "https://www.kongu.ac.in/",
  },
  {
    institution: "M.S.P Solai Nadar Memorial Higher Secondary School",
    degree: "Class XII",
    score: "84.6%",
    period: "2024",
    location: "Dindigul, Tamil Nadu",
    url: "#",
  },
  {
    institution: "M.S.P Solai Nadar Memorial Higher Secondary School",
    degree: "Class X",
    score: "68.4%",
    period: "2022",
    location: "Dindigul, Tamil Nadu",
    url: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Profiles", href: "#coding-profiles" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroKeywords = [
  "React", "JavaScript", "Node.js", "Express", "MongoDB",
  "MERN", "REST API", "Git", "GitHub", "DSA",
];
