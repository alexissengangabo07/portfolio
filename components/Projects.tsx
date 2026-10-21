"use client";
import { useState } from "react";
import { Layers, Sparkles, ExternalLink } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Projects({ projects, t }: { projects: any[]; t: any }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
            <Layers size={22} />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              {t.projects.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {t.projects.subtitle}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            { id: "all", label: t.projects.all },
            { id: "fullstack", label: t.projects.fullstack },
            { id: "frontend", label: t.projects.frontend },
            { id: "backend", label: t.projects.backend },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                activeTab === cat.id
                  ? "bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:border-slate-700"
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
            className="flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl group bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-none hover:border-indigo-300 dark:hover:border-indigo-500/50"
          >
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              {project.featured && (
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-indigo-600 text-white shadow-md flex items-center gap-1">
                  <Sparkles size={12} /> {t.projects.featured}
                </span>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed line-clamp-3 text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/50">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-colors border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    <GithubIcon className="w-4 h-4" /> {t.projects.code}
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                    >
                      <ExternalLink size={14} /> {t.projects.live}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
