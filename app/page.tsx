"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  profileData,
  skills,
  projects,
  experiences,
} from "@/data/portfolioData";
import { dict } from "@/data/dictionary";

export default function Page() {
  // Langue par défaut : Anglais ("en")
  const [lang, setLang] = useState("en");

  // 1. Charger la langue sauvegardée dans localStorage au démarrage
  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio_lang");
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  // 2. Fonction pour changer la langue et persister la valeur dans localStorage
  const handleSetLang = (newLang: string) => {
    setLang(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  // Sélection du dictionnaire actif
  const t = dict[lang as keyof typeof dict] || dict.en;

  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 bg-indigo-400 dark:bg-indigo-600"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 bg-blue-300 dark:bg-blue-600"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-15 bg-emerald-300 dark:bg-emerald-600"></div>
      </div>

      <Navbar
        profileData={profileData}
        lang={lang}
        setLang={handleSetLang}
        t={t}
      />

      <main className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-28">
        <Hero profileData={profileData} t={t} />
        <Stats stats={profileData.stats} t={t} />
        <About profileData={profileData} t={t} />
        <Skills skills={skills} t={t} />
        <Projects projects={projects} t={t} />
        <Experience experiences={experiences} t={t} />
        <Contact profileData={profileData} t={t} />
      </main>

      <Footer profileData={profileData} t={t} />
    </div>
  );
}
