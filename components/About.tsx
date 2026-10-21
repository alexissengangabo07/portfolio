import { User } from "lucide-react";

export default function About({ profileData }: { profileData: any }) {
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
          <User size={22} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">À propos de moi</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Découvrez mon profil et ma vision de l'ingénierie web
          </p>
        </div>
      </div>

      <div className="p-8 rounded-3xl border leading-relaxed space-y-6 bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
        <p className="text-slate-700 dark:text-slate-300">
          {profileData.about}
        </p>
        <p className="text-slate-700 dark:text-slate-300">
          À travers ma structure{" "}
          <strong className="text-indigo-500">KivuNex</strong> et mes missions
          indépendantes, j'accompagne les entreprises dans la numérisation de
          leurs activités en créant des applications sur mesure, fiables et
          optimisées pour la performance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/30">
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
  );
}
