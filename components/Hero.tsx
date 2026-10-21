import { Briefcase, MapPin, Building2, Mail, Sparkles } from "lucide-react";
import { GithubIcon } from "./GithubIcon";

export default function Hero({ profileData, t }: { profileData: any; t: any }) {
  return (
    <section
      id="hero"
      className="pt-8 sm:pt-16 flex flex-col items-center text-center"
    >
      {/* Badge de disponibilité */}
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold border mb-8 animate-pulse bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
        {t.hero.badge}
      </div>

      {/* Photo de profil avec effet Halo */}
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

      {/* Titre principal avec le Gradient rétabli */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight sm:leading-none mb-6">
        {t.hero.title.includes("&") ? (
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {t.hero.title.split("&")[0]}
            </span>
            {" & "}
            <span className="text-slate-900 dark:text-white">
              {t.hero.title.split("&")[1]}
            </span>
          </>
        ) : (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {t.hero.title}
          </span>
        )}
      </h1>

      {/* Description avec prénom en dégradé */}
      <p className="text-base sm:text-lg max-w-2xl mb-10 leading-relaxed text-slate-600 dark:text-slate-400">
        {t.hero.description}{" "}
        <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-extrabold">
          {profileData.name}
        </strong>{" "}
        {t.hero.alias}{" "}
        <span className="text-indigo-500 font-mono font-semibold">
          {profileData.alias}
        </span>
        . {t.hero.founder} <strong className="text-indigo-500">KivuNex</strong>{" "}
        {t.hero.based} {profileData.location}.
      </p>

      {/* Boutons d'action */}
      <div className="flex flex-wrap justify-center items-center gap-4 w-full max-w-md">
        <a
          href="#projects"
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
        >
          <Briefcase size={18} />
          {t.hero.btnProjects}
        </a>
        <a
          href={profileData.github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-semibold border transition-all transform hover:-translate-y-0.5 active:translate-y-0 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
          {t.hero.btnGithub}
        </a>
      </div>

      {/* Badges d'information rapide */}
      <div className="flex flex-wrap justify-center items-center gap-6 mt-12 text-xs font-medium text-slate-400">
        <span className="flex items-center gap-1.5">
          <MapPin size={14} className="text-indigo-500" />{" "}
          {profileData.location}
        </span>
        <span className="flex items-center gap-1.5">
          <Building2 size={14} className="text-indigo-500" /> Founder @ KivuNex
        </span>
        <span className="flex items-center gap-1.5">
          <Mail size={14} className="text-indigo-500" /> {profileData.email}
        </span>
      </div>
    </section>
  );
}
