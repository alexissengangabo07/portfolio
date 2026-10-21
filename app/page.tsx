import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Mail,
  ExternalLink,
  MapPin,
  Briefcase,
  Code2,
  Database,
  Layers,
  Terminal,
  Server,
  Send,
  CheckCircle2,
  ChevronUp,
  Cpu,
  User,
  Sparkles,
  Download,
  Menu,
  X,
  MessageSquare,
  Building2,
  Clock,
  ArrowUpRight,
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235.191 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle theme toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const profileData = {
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

  const skills = [
    {
      name: "React / Next.js",
      category: "frontend",
      level: "Expert",
      icon: Code2,
    },
    {
      name: "Tailwind CSS",
      category: "frontend",
      level: "Expert",
      icon: Layers,
    },
    { name: "Redux / Query", category: "frontend", level: "Avancé", icon: Cpu },
    {
      name: "Node.js / Express",
      category: "backend",
      level: "Expert",
      icon: Server,
    },
    {
      name: "RESTful APIs / JWT",
      category: "backend",
      level: "Expert",
      icon: Terminal,
    },
    {
      name: "Socket.io (Realtime)",
      category: "backend",
      level: "Avancé",
      icon: MessageSquare,
    },
    {
      name: "MySQL & Sequelize ORM",
      category: "database",
      level: "Expert",
      icon: Database,
    },
    {
      name: "MongoDB & Mongoose",
      category: "database",
      level: "Avancé",
      icon: Database,
    },
    {
      name: "Git / GitHub & Scripting",
      category: "tools",
      level: "Avancé",
      icon: Terminal,
    },
  ];

  const projects = [
    {
      id: "hospital-pharmacy",
      title: "Hospital & Pharmacy Management System",
      category: "fullstack",
      description:
        "Système complet de gestion hospitalière et de pharmacie intégrant la gestion des stocks, la facturation en direct, l'impression des reçus, la sécurité d'accès multi-rôles et le suivi en temps réel des inventaires.",
      tags: [
        "Node.js",
        "Express",
        "MySQL",
        "Sequelize ORM",
        "React",
        "Tailwind",
      ],
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

  const experiences = [
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

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const filteredSkills =
    activeSkillCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeSkillCategory);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 4000);
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div
          className={`absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? "bg-indigo-600" : "bg-indigo-400"}`}
        ></div>
        <div
          className={`absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 ${darkMode ? "bg-blue-600" : "bg-blue-300"}`}
        ></div>
        <div
          className={`absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-15 ${darkMode ? "bg-emerald-600" : "bg-emerald-300"}`}
        ></div>
      </div>

      {/* Floating Header */}
      <header className="fixed top-4 inset-x-0 z-50 max-w-6xl mx-auto px-4">
        <nav
          className={`flex items-center justify-between px-6 py-3.5 rounded-full border shadow-lg backdrop-blur-md transition-all ${
            darkMode
              ? "bg-slate-900/80 border-slate-800 shadow-indigo-950/20"
              : "bg-white/80 border-slate-200/80 shadow-slate-200/50"
          }`}
        >
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 text-left"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500/50 shadow-md">
              <img
                src={profileData.photo}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-bold tracking-tight block text-sm sm:text-base leading-tight">
                Alexis Senga{" "}
                <span className="text-indigo-500 font-mono text-xs font-semibold px-1.5 py-0.5 rounded bg-indigo-500/10 ml-1">
                  Dr. Code
                </span>
              </span>
              <span className="text-xs text-slate-400 hidden sm:block">
                Full-Stack Developer
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {["about", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-indigo-500 ${
                    darkMode ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {item === "about"
                    ? "À propos"
                    : item === "skills"
                      ? "Compétences"
                      : item === "projects"
                        ? "Projets"
                        : item === "experience"
                          ? "Parcours"
                          : "Contact"}
                </button>
              ),
            )}
          </div>

          {/* Controls & CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-full border transition-all ${
                darkMode
                  ? "bg-slate-800/80 border-slate-700 text-amber-400 hover:bg-slate-700"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
              }`}
              title="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 transition-all active:scale-95"
            >
              Me contacter
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-slate-700/50 text-slate-400 hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            className={`mt-2 p-4 rounded-2xl border shadow-xl backdrop-blur-xl md:hidden ${
              darkMode
                ? "bg-slate-900/95 border-slate-800"
                : "bg-white/95 border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-3">
              {["about", "skills", "projects", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      darkMode
                        ? "hover:bg-slate-800 text-slate-200"
                        : "hover:bg-slate-100 text-slate-800"
                    }`}
                  >
                    {item === "about"
                      ? "À propos"
                      : item === "skills"
                        ? "Compétences"
                        : item === "projects"
                          ? "Projets"
                          : item === "experience"
                            ? "Parcours"
                            : "Contact"}
                  </button>
                ),
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-28">
        {/* HERO SECTION */}
        <section
          id="hero"
          className="pt-8 sm:pt-16 flex flex-col items-center text-center"
        >
          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold border mb-8 animate-pulse ${
              darkMode
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                : "bg-emerald-50 border-emerald-200 text-emerald-700"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Disponible pour nouveaux projets & collaborations
          </div>

          {/* Profile Photo with Ambient Glow */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-slate-950 shadow-2xl">
              <img
                src={profileData.photo}
                alt={profileData.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />
            </div>
            <div
              className="absolute bottom-1 right-1 p-2 rounded-full bg-indigo-600 text-white shadow-lg border-2 border-slate-950"
              title="Full-Stack Verified"
            >
              <Sparkles size={16} />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight sm:leading-none mb-6">
            Concepteur de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400">
              solutions web scalables
            </span>{" "}
            & d'applications modernes
          </h1>

          <p
            className={`text-base sm:text-lg max-w-2xl mb-10 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
          >
            Moi c'est{" "}
            <strong className={darkMode ? "text-white" : "text-slate-900"}>
              {profileData.name}
            </strong>{" "}
            alias{" "}
            <span className="text-indigo-500 font-mono font-semibold">
              {profileData.alias}
            </span>
            . Développeur Web Full-Stack & Fondateur de{" "}
            <strong className="text-indigo-500">KivuNex</strong> basé à{" "}
            {profileData.location}.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-md">
            <button
              onClick={() => scrollToSection("projects")}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Briefcase size={18} />
              Voir mes projets
            </button>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border transition-all transform hover:-translate-y-0.5 active:translate-y-0 ${
                darkMode
                  ? "bg-slate-900 border-slate-800 text-slate-200 hover:bg-slate-800"
                  : "bg-white border-slate-200 text-slate-800 hover:bg-slate-100 shadow-sm"
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
          </div>

          {/* Quick info badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-xs font-medium text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-indigo-500" />{" "}
              {profileData.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 size={14} className="text-indigo-500" /> Fondateur @
              KivuNex
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-indigo-500" /> {profileData.email}
            </span>
          </div>
        </section>

        {/* STATS BAR */}
        <section
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl border ${
            darkMode
              ? "bg-slate-900/50 border-slate-800/80"
              : "bg-white border-slate-200 shadow-lg shadow-slate-100"
          }`}
        >
          {profileData.stats.map((stat, idx) => (
            <div key={idx} className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-mono mb-1">
                {stat.value}
              </div>
              <div
                className={`text-xs sm:text-sm font-medium ${darkMode ? "text-slate-400" : "text-slate-600"}`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
              <User size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                À propos de moi
              </h2>
              <p
                className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Découvrez mon profil et ma vision de l'ingénierie web
              </p>
            </div>
          </div>

          <div
            className={`p-8 rounded-3xl border leading-relaxed space-y-6 ${
              darkMode
                ? "bg-slate-900/40 border-slate-800"
                : "bg-white border-slate-200 shadow-sm"
            }`}
          >
            <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
              {profileData.about}
            </p>
            <p className={darkMode ? "text-slate-300" : "text-slate-700"}>
              À travers ma structure{" "}
              <strong className="text-indigo-500">KivuNex</strong> et mes
              missions indépendantes, j'accompagne les entreprises dans la
              numérisation de leurs activités en créant des applications sur
              mesure, fiables et optimisées pour la performance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800/30">
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block">
                  Spécialité Back-End
                </span>
                <span className="text-sm font-semibold">
                  APIs RESTful & Express/Node
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block">
                  Spécialité Front-End
                </span>
                <span className="text-sm font-semibold">
                  React, Next.js & Tailwind
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs text-slate-400 block">
                  Base de données
                </span>
                <span className="text-sm font-semibold">
                  MySQL (Sequelize) & MongoDB
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Code2 size={22} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Stack & Compétences
                </h2>
                <p
                  className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  Technologies et outils maîtrisés
                </p>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-900/40 border border-slate-800 text-xs font-semibold">
              {[
                { id: "all", label: "Tout" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "database", label: "Bases de données" },
                { id: "tools", label: "Outils" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSkillCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-xl transition-all ${
                    activeSkillCategory === tab.id
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${
                    darkMode
                      ? "bg-slate-900/50 border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900"
                      : "bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon size={20} />
                    </div>
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-md border ${
                        darkMode
                          ? "bg-slate-800 border-slate-700 text-slate-300"
                          : "bg-slate-100 border-slate-200 text-slate-600"
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                  <h3 className="font-semibold text-base mb-1">{skill.name}</h3>
                  <p className="text-xs text-slate-400 capitalize">
                    {skill.category}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
                <Layers size={22} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">Projets Clés</h2>
                <p
                  className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
                >
                  Sélection de réalisations récentes
                </p>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "Tous les projets" },
                { id: "fullstack", label: "Full-Stack" },
                { id: "frontend", label: "Front-End" },
                { id: "backend", label: "Back-End" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    activeTab === cat.id
                      ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                      : darkMode
                        ? "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className={`flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl group ${
                  darkMode
                    ? "bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/50"
                    : "bg-white border-slate-200 shadow-md hover:shadow-indigo-100"
                }`}
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  {project.featured && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-md flex items-center gap-1">
                      <Sparkles size={12} /> Vedette
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className={`text-xs font-mono px-2.5 py-1 rounded-lg ${
                            darkMode
                              ? "bg-slate-800 text-indigo-300"
                              : "bg-slate-100 text-indigo-600"
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 pt-3 border-t border-slate-800/50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                          darkMode
                            ? "border-slate-700 hover:bg-slate-800 text-slate-300"
                            : "border-slate-200 hover:bg-slate-100 text-slate-700"
                        }`}
                      >
                        <GithubIcon className="w-4 h-4" /> Code Source
                      </a>
                      {project.live !== "#" && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                        >
                          <ExternalLink size={14} /> Démo Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section id="experience" className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Clock size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Parcours & Expériences
              </h2>
              <p
                className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Mon itinéraire professionnel
              </p>
            </div>
          </div>

          <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-950 group-hover:scale-125 transition-transform"></div>

                <div
                  className={`p-6 rounded-3xl border transition-all ${
                    darkMode
                      ? "bg-slate-900/40 border-slate-800 hover:border-slate-700"
                      : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-indigo-500 px-2.5 py-1 rounded-md bg-indigo-500/10 inline-block mb-1">
                        {exp.period}
                      </span>
                      <h3 className="text-lg font-bold">{exp.role}</h3>
                    </div>
                    <div className="text-xs text-slate-400 font-medium flex items-center gap-1">
                      <Building2 size={14} /> {exp.company} • {exp.location}
                    </div>
                  </div>

                  <p
                    className={`text-xs sm:text-sm mb-4 leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                  >
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`text-xs font-mono px-2 py-0.5 rounded border ${
                          darkMode
                            ? "bg-slate-800 border-slate-700 text-slate-300"
                            : "bg-slate-100 border-slate-200 text-slate-600"
                        }`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-8 pt-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
              <Mail size={22} />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Me Contacter</h2>
              <p
                className={`text-xs sm:text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}
              >
                Un projet en vue ? Discutons-en !
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info Card */}
            <div
              className={`lg:col-span-2 p-8 rounded-3xl border flex flex-col justify-between space-y-6 ${
                darkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              <div className="space-y-6">
                <h3 className="text-xl font-bold">Coordonnées Directes</h3>
                <p
                  className={`text-xs sm:text-sm leading-relaxed ${darkMode ? "text-slate-400" : "text-slate-600"}`}
                >
                  N'hésitez pas à me contacter directement par e-mail ou via les
                  réseaux sociaux pour toute opportunité de collaboration ou de
                  projet sur-mesure.
                </p>

                <div className="space-y-4">
                  <a
                    href={`mailto:${profileData.email}`}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${
                      darkMode
                        ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="p-3 rounded-xl bg-indigo-600 text-white">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Email direct
                      </span>
                      <span className="text-sm font-medium">
                        {profileData.email}
                      </span>
                    </div>
                  </a>

                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${
                      darkMode
                        ? "bg-slate-800/50 border-slate-700/50 hover:bg-slate-800"
                        : "bg-slate-50 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    <div className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700">
                      <GithubIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">
                        GitHub Profile
                      </span>
                      <span className="text-sm font-medium">
                        @alexissengangabo07
                      </span>
                    </div>
                  </a>

                  <div
                    className={`flex items-center gap-4 p-4 rounded-2xl border ${
                      darkMode
                        ? "bg-slate-800/50 border-slate-700/50"
                        : "bg-slate-50 border-slate-200"
                    }`}
                  >
                    <div className="p-3 rounded-xl bg-emerald-600 text-white">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="text-xs text-slate-400 block">
                        Localisation
                      </span>
                      <span className="text-sm font-medium">
                        {profileData.location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400">
                ⚡ Temps de réponse moyen : <strong>Moins de 24h</strong>
              </div>
            </div>

            {/* Interactive Form */}
            <div
              className={`lg:col-span-3 p-8 rounded-3xl border ${
                darkMode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white border-slate-200 shadow-sm"
              }`}
            >
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                  <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-400 animate-bounce">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold">Message Envoyé !</h3>
                  <p className="text-sm text-slate-400 max-w-md">
                    Merci pour votre message. Alexis (Dr. Code) vous
                    recontactera dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Nom Complet
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ex: Jean Dupont"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          darkMode
                            ? "bg-slate-950 border-slate-800 text-white"
                            : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Adresse Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="jean@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                          darkMode
                            ? "bg-slate-950 border-slate-800 text-white"
                            : "bg-slate-50 border-slate-200 text-slate-900"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Votre Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Décrivez votre projet ou votre besoin..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        darkMode
                          ? "bg-slate-950 border-slate-800 text-white"
                          : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <Send size={16} /> Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className={`border-t py-12 ${darkMode ? "bg-slate-950 border-slate-800/80" : "bg-slate-100 border-slate-200"}`}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700">
              <img
                src={profileData.photo}
                alt={profileData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="font-semibold text-slate-200">
                {profileData.name} ({profileData.alias})
              </p>
              <p>© {new Date().getFullYear()} KivuNex. Tous droits réservés.</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-indigo-400 transition-colors"
            >
              Email
            </a>
            <button
              onClick={() => scrollToSection("hero")}
              className="p-2 rounded-full border border-slate-700 hover:bg-slate-800 transition-colors"
              title="Retour en haut"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
