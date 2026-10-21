import { User } from "lucide-react";

export default function About({
  profileData,
  t,
}: {
  profileData: any;
  t: any;
}) {
  return (
    <section id="about" className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
          <User size={22} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{t.about.title}</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t.about.subtitle}
          </p>
        </div>
      </div>

      <div className="p-8 rounded-3xl border leading-relaxed space-y-6 bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
        <p className="text-slate-700 dark:text-slate-300">{t.about.p1}</p>
        <p className="text-slate-700 dark:text-slate-300">{t.about.p2}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800/30">
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">
              {t.about.specBack}
            </span>
            <span className="text-sm font-semibold">
              {t.about.specBackDesc}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">
              {t.about.specFront}
            </span>
            <span className="text-sm font-semibold">
              {t.about.specFrontDesc}
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-xs text-slate-400 block">{t.about.db}</span>
            <span className="text-sm font-semibold">{t.about.dbDesc}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
