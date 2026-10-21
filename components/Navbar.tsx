"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, ArrowUpRight, Menu, X, Globe } from "lucide-react";

interface NavbarProps {
  profileData: any;
  lang: string;
  setLang: (lang: string) => void;
  t: any;
}

export default function Navbar({ profileData, lang, setLang, t }: NavbarProps) {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    setDarkMode(nextMode);
    if (nextMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
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
    <header className="fixed top-4 inset-x-0 z-50 max-w-6xl mx-auto px-4">
      <nav className="flex items-center justify-between px-6 py-3.5 rounded-full border shadow-lg backdrop-blur-md transition-all bg-white/80 dark:bg-slate-900/80 border-slate-200/80 dark:border-slate-800 shadow-slate-200/50 dark:shadow-indigo-950/20">
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

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["about", "skills", "projects", "experience", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize transition-colors hover:text-indigo-500 text-slate-600 dark:text-slate-300"
              >
                {t.nav[item]}
              </button>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === "en" ? "fr" : "en")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-semibold transition-all bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700"
            title="Changer de langue / Change language"
          >
            <Globe size={14} className="text-indigo-500" />
            <span>{lang.toUpperCase()}</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full border transition-all bg-slate-100 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700"
            title="Toggle theme"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-indigo-600 text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500 transition-all active:scale-95"
          >
            {t.nav.cta}
            <ArrowUpRight size={14} />
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-700/50 text-slate-400 hover:text-white"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mt-2 p-4 rounded-2xl border shadow-xl backdrop-blur-xl md:hidden bg-white/95 dark:bg-slate-900/95 border-slate-200 dark:border-slate-800">
          <div className="flex flex-col gap-3">
            {["about", "skills", "projects", "experience", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200"
                >
                  {t.nav[item]}
                </button>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
