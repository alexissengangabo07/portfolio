import {
  Code2,
  Layers,
  Cpu,
  Server,
  Terminal,
  MessageSquare,
  Database,
} from "lucide-react";

export const profileData = {
  name: "Alexis Senga Ngabo",
  alias: "Dr. Code",
  role: "Full-Stack Web Developer & Founder at KivuNex",
  location: "Goma, DRC",
  photo:
    "https://alexissenga.vercel.app/static/media/alexis.83835ea58cc34f55634d.jpeg",
  github: "https://github.com/alexissengangabo07",
  email: "alexxngabo@gmail.com",
  about:
    "Développeur Web Full-Stack passionné et fondateur de KivuNex, spécialisé dans la conception d'applications web scalables, d'APIs REST robustes et de solutions logicielles sur mesure. Fort d'une expertise reconnue sur l'écosystème JS/TypeScript (React, Next.js, Node.js, Express) et les bases de données SQL/NoSQL.",
  stats: [
    { label: "Années d'Expérience", value: "4+" },
    { label: "Projets Déployés", value: "20+" },
    { label: "Code Quality", value: "100%" },
    { label: "Clients & Partenaires", value: "15+" },
  ],
};

export const skills = [
  {
    name: "React / Next.js",
    category: "frontend",
    level: "Expert",
    icon: "Code2",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    level: "Expert",
    icon: "Layers",
  },
  { name: "Redux / Query", category: "frontend", level: "Avancé", icon: "Cpu" },
  {
    name: "Node.js / Express",
    category: "backend",
    level: "Expert",
    icon: "Server",
  },
  {
    name: "RESTful APIs / JWT",
    category: "backend",
    level: "Expert",
    icon: "Terminal",
  },
  {
    name: "Socket.io (Realtime)",
    category: "backend",
    level: "Avancé",
    icon: "MessageSquare",
  },
  {
    name: "MySQL & Sequelize ORM",
    category: "database",
    level: "Expert",
    icon: "Database",
  },
  {
    name: "MongoDB & Mongoose",
    category: "database",
    level: "Avancé",
    icon: "Database",
  },
  {
    name: "Git / GitHub & Scripting",
    category: "tools",
    level: "Avancé",
    icon: "Terminal",
  },
];

export const projects = [
  {
    id: "hospital-pharmacy",
    title: "Hospital & Pharmacy Management System",
    category: "fullstack",
    description:
      "Système complet de gestion hospitalière et de pharmacie intégrant la gestion des stocks, la facturation en direct, l'impression des reçus, la sécurité d'accès multi-rôles et le suivi en temps réel des inventaires.",
    tags: ["Node.js", "Express", "MySQL", "Sequelize ORM", "React", "Tailwind"],
    github: "https://github.com/alexissengangabo07",
    live: "#",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "easychat",
    title: "MERN Real-Time Chat App (easyChat)",
    category: "fullstack",
    description:
      "Application de messagerie instantanée en temps réel basée sur la pile MERN et Socket.io. Comprend le statut d'envoi, l'authentification JWT sécurisée et une interface fluide et réactive.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind"],
    github: "https://github.com/alexissengangabo07/easyChat",
    live: "#",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "kivunex",
    title: "KivuNex Digital Platform & Agency",
    category: "frontend",
    description:
      "Plateforme officielle et identité numérique de KivuNex, fournissant des solutions logicielles, des identités visuelles et un hébergement sur mesure pour les entreprises émergentes.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    github: "https://github.com/alexissengangabo07",
    live: "https://kivunex.com",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "crud-dashboard",
    title: "CRUD Express & EJS Admin Dashboard",
    category: "backend",
    description:
      "Panneau de gestion back-office construit avec Express.js et le moteur de rendu EJS, connecté à MySQL pour la gestion dynamique des données métier.",
    tags: ["Express.js", "EJS", "MySQL", "Bootstrap / Tailwind"],
    github: "https://github.com/alexissengangabo07",
    live: "#",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
];

export const experiences = [
  {
    period: "2023 - Présent",
    role: "Fondateur & Développeur Full-Stack Lead",
    company: "KivuNex",
    location: "Goma, DRC",
    description:
      "Direction technique de l'agence. Conception et déploiement d'applications web et de systèmes d'information complets pour des clients locaux et internationaux.",
    skills: ["Next.js", "Node.js", "MySQL", "Architectures Cloud"],
  },
  {
    period: "Mai 2022 - Fév 2023",
    role: "Développeur Web Full-Stack",
    company: "KivuGreen",
    location: "Goma, DRC",
    description:
      "Développement d'outils numériques pour le secteur agritech, optimisation des requêtes de bases de données et conception d'interfaces réactives.",
    skills: ["React", "Express.js", "MongoDB", "REST API"],
  },
  {
    period: "2021 - Présent",
    role: "Développeur Logiciel Freelance",
    company: "SnapTech DRC",
    location: "Goma, DRC",
    description:
      "Création de sites sur-mesure, maintenance logicielle et développement d'automatisations de réseau pour entreprises.",
    skills: ["Full-stack JS", "VBS Automation", "CORS Network Config"],
  },
];
