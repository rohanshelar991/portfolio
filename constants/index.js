export const baseskills = [
  { name: "HTML", percentage: 96 },
  { name: "CSS", percentage: 94 },
  { name: "JAVASCRIPT", percentage: 93 },
  { name: "JAVA", percentage: 90 },
  { name: "PYTHON", percentage: 82 },
  { name: "C++", percentage: 80 },
];

export const coreskills = [
  { name: "REACT JS", percentage: 94 },
  { name: "TAILWIND CSS", percentage: 95 },
  { name: "NODE JS", percentage: 86 },
  { name: "EXPRESS JS", percentage: 84 },
  { name: "FLUTTER", percentage: 88 },
  { name: "ANDROID (JAVA)", percentage: 85 },
];

export const databaseskills = [
  { name: "MONGODB", percentage: 84 },
  { name: "MYSQL", percentage: 90 },
  { name: "SQLITE", percentage: 82 },
  { name: "FIRESTORE", percentage: 78 },
];

export const toolskills = [
  { name: "GIT", percentage: 90 },
  { name: "POSTMAN", percentage: 84 },
  { name: "FIGMA", percentage: 82 },
  { name: "VS CODE", percentage: 95 },
  { name: "FIREBASE", percentage: 84 },
];

export const experience = [
  {
    title: "School Foundation",
    subtitle: "SSC Completion",
    description:
      "Completed secondary school with 90.80 percent and built a strong academic foundation before moving into technical education.",
    date: "May 2022",
    category: "Education",
  },
  {
    title: "Diploma in Computer Engineering",
    subtitle: "Vidyalankar Polytechnic",
    description:
      "Graduated with 90.47 percent while strengthening fundamentals in DBMS, C++, applied programming, and practical software development.",
    date: "Jul 2022 - Jul 2025",
    category: "Education",
  },
  {
    title: "Cybersecurity Intern",
    subtitle: "Acmegrade",
    description: "Performed hands-on cybersecurity lab exercises, including Windows XP/7 exploitation with Metasploit, payload creation, and technical documentation.",
    date: "Jun 2024 - Aug 2024",
    category: "Internship",
    details: ["Performed hands-on cybersecurity lab exercises.", "Worked on Windows XP/7 exploitation using Metasploit.", "Created payloads and prepared technical documentation."],
    technologies: ["Cybersecurity", "Metasploit", "msfvenom"],
  },
  {
    title: "Web Development Intern",
    subtitle: "Codeterna Private Limited (CodeInfinity)",
    description: "Developed web pages using PHP, implemented backend functionality and data fetching, and gained practical web development experience.",
    date: "Jun 2024 - Jul 2024",
    category: "Internship",
    details: ["Developed web pages using PHP.", "Implemented backend functionality and data fetching.", "Gained practical experience in web development."],
    technologies: ["PHP", "MySQL", "Web Development"],
  },
  {
    title: "Industrial Hackathon Winner",
    subtitle: "Desk Time Activity Tracker",
    description:
      "Won the Industrial Hackathon 2025 at Vidyalankar Polytechnic by building the Desk Time Activity Tracker productivity system.",
    date: "2025",
    category: "Achievement",
  },
  {
    title: "Java Development Intern",
    subtitle: "ShadowFox",
    description: "Developed Java-based console applications, applied OOP concepts and Core Java fundamentals, and strengthened problem-solving and programming logic.",
    date: "Jun 2025 - Jul 2025",
    category: "Internship",
    details: ["Developed Java-based console applications.", "Applied OOP concepts and Core Java fundamentals.", "Improved problem-solving and programming logic."],
    technologies: ["Java", "Core Java", "OOP"],
  },
  {
    title: "Research Publication",
    subtitle: "AI-Driven Multimedia Storytelling Platform",
    description:
      "Published research in the International Journal of Research Publication and Reviews, extending work into AI-assisted storytelling systems.",
    date: "2025",
    category: "Research",
  },
  {
    title: "CSE Data Science Journey",
    subtitle: "A. P. Shah Institute of Technology",
    description:
      "Currently pursuing B.E. in Computer Science and Engineering (Data Science) while building depth in Java, DSA, and product-focused engineering.",
    date: "Sep 2025 - Present",
    category: "Education",
  },
  {
    title: "Full Stack Developer Intern",
    subtitle: "Vhiron Technologies",
    description: "Developed PulsePOS features using PHP and Laravel, worked on backend development and MySQL database management, and handled debugging, testing, and feature implementation.",
    date: "Apr 2026 - Jul 2026",
    category: "Internship",
    details: ["Developed PulsePOS features using PHP and Laravel.", "Worked on backend development and MySQL database management.", "Performed debugging, testing, and feature implementation."],
    technologies: ["PHP", "Laravel", "MySQL"],
  },
  {
    title: "Technical Team Lead",
    subtitle: "Data Science Student Association",
    description: "Led technical initiatives and student learning activities, conducted two technical teaching sessions, and supported mentoring, collaboration, and practical skill development.",
    category: "Leadership & Community",
    details: ["Led technical initiatives and student learning activities.", "Conducted two technical teaching sessions.", "Supported peer learning, mentoring, and collaboration.", "Helped students develop practical technical skills."],
    technologies: ["Technical Leadership", "Mentoring", "Teaching", "Team Collaboration", "Data Science"],
  },
];

export const projects = [
  {
    name: "Collabathon",
    description:
      "Collabathon is an AI-powered, skill-driven platform designed to help students form balanced and effective teams during hackathons. It solves the common problem of finding reliable teammates with complementary skills by using prompt-based AI matching instead of random or manual selection.",
    tags: ["AI Matching", "Hackathons", "Student Teams", "Skill-Based Matching"],
    image: "/images/projects/collabathon.svg",
    url: "https://collabthon.vercel.app",
    github: "https://github.com/rohanshelar991/collabthon",
    category: "AI Team Formation",
    year: "2026",
    outcome: "Helps students form balanced hackathon teams through AI-powered skill matching.",
  },
  {
    name: "DataWeb LLM",
    description:
      "A web-based application that lets users explore and analyze datasets using natural language. It supports CSV, Excel, and JSON uploads or URL imports, using Groq to convert user questions into SQL queries executed through DuckDB. Built with React, Vite, and FastAPI, it handles authentication, dataset storage, and data querying.",
    tags: ["React", "Vite", "FastAPI", "Groq", "DuckDB"],
    image: "/images/projects/dataweb-llm.svg",
    url: "https://datawebllm-zvq8.vercel.app/",
    github: "https://github.com/rohanshelar991/datawebllm",
    category: "AI Data Analytics",
    year: "2026",
    outcome: "Turns natural language questions into SQL for interactive dataset exploration.",
  },
  {
    name: "BizBill",
    description:
      "A Flutter and Firebase billing app for small businesses with invoice generation and GST-aware totals for faster day-to-day operations.",
    tags: ["Flutter", "Firebase", "GST"],
    image: "/images/projects/gst-billing.svg",
    url: "https://drive.google.com/drive/folders/1gc0LOl9m9GDus5ojK65Thjlra87r5Btw",
    category: "Mobile Utility",
    year: "2024",
    outcome: "Focused on everyday business speed with invoice workflows and tax-aware totals.",
  },
  {
    name: "AirScope Intelligence",
    description:
      "A global air quality and weather dashboard that combines city-level AQI and weather data to highlight high-risk locations, track trends, compare countries, and surface alerts. It helps teams review environmental conditions and prioritize where attention may be needed.",
    tags: ["Air Quality", "Weather Data", "Dashboard", "Vercel"],
    image: "/images/projects/airscope-intelligence.svg",
    url: "https://air-scope-intelligence.vercel.app/",
    github: "https://github.com/rohanshelar991/AirScope_Intelligence",
    category: "Environmental Intelligence",
    year: "2026",
    outcome: "Helps teams spot high-risk locations and prioritize environmental attention.",
  },
];

export const achievements = [
  "Winner of Industrial Hackathon 2025 at Vidyalankar Polytechnic for building the Desk Time Activity Tracker.",
  "Published research on an AI-Driven Multimedia Storytelling Platform in the International Journal of Research Publication and Reviews.",
  "Built web, mobile, and productivity products across React, Flutter, Node.js, AI workflows, and backend systems.",
];

export const certifications = [
  {
    name: "Java Development Internship Completion",
    issuer: "ShadowFox",
  },
  {
    name: "Cybersecurity Internship Completion",
    issuer: "Acmegrade",
  },
  {
    name: "Backend Development Internship Completion",
    issuer: "CodeInfinity Software Solutions",
  },
];

export const services = [
  {
    title: "Frontend Builds",
    summary: "Responsive interfaces with strong visual polish, motion, and recruiter-friendly storytelling.",
  },
  {
    title: "Full-Stack Projects",
    summary: "Backend-connected products with APIs, forms, and deployment-ready application flows.",
  },
  {
    title: "Mobile and Student Projects",
    summary: "Android and Flutter builds for hackathons, academic work, and practical utility systems.",
  },
];

export const quickHighlights = [
  "Flagship portfolio built with premium motion and interactive storytelling.",
  "Hands-on across web, mobile, backend systems, and hackathon delivery.",
  "Open to internships, freelance projects, collaborations, and real product work.",
];

export const faqs = [
  {
    question: "What opportunities are you open to?",
    answer: "I am open to internships, collaborative builds, frontend and full-stack projects, and opportunities that help me grow through real product work.",
  },
  {
    question: "Which technologies do you work with most often?",
    answer: "My strongest hands-on work is around React, Tailwind CSS, Node.js, Flutter, Java, PHP, Firebase, MySQL, and MongoDB.",
  },
  {
    question: "How should someone contact you?",
    answer: "The fastest route is the contact form on the site. Sharing the role, scope, timeline, and expected deliverable helps me respond more usefully.",
  },
];

export const education = [
  {
    institution: "A. P. Shah Institute of Technology (APSIT)",
    degree: "B.E. in Computer Science and Engineering (Data Science)",
    period: "Sep 2025 - Sep 2028",
    detail: "Currently building depth in Java, DSA, and data-driven systems.",
  },
  {
    institution: "Vidyalankar Polytechnic",
    degree: "Diploma in Computer Engineering",
    period: "Jul 2022 - Jul 2025",
    detail: "Graduated with 90.47 percent and strong foundations in DBMS, C++, and applied development.",
  },
  {
    institution: "BSM's English Medium School",
    degree: "Secondary School Certificate (SSC)",
    period: "Jun 2014 - May 2022",
    detail: "Completed SSC with 90.80 percent and a consistent academic record.",
  },
];
