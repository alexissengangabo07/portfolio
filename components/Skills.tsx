"use client";
import { useState } from "react";
import {
  Code2,
  Layers,
  Cpu,
  Server,
  Terminal,
  MessageSquare,
  Database,
} from "lucide-react";

// Dictionnaire pour lier le nom de l'icône au composant Lucide réel
const iconMap: Record<string, any> = {
  Code2,
  Layers,
  Cpu,
  Server,
  Terminal,
  MessageSquare,
  Database,
};

export default function Skills({ skills }: { skills: any[] }) {
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");

  const filteredSkills =
    activeSkillCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeSkillCategory);

  return (
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
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Technologies et outils maîtrisés
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
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
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Code2;
          return (
            <div
              key={index}
              className="p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-md dark:hover:bg-slate-900"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <IconComponent size={20} />
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-md border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
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
  );
}
