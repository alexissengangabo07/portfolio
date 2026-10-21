import { Clock, Building2 } from "lucide-react";

export default function Experience({
  experiences,
  t,
}: {
  experiences: any[];
  t: any;
}) {
  return (
    <section id="experience" className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
          <Clock size={22} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">
            {t.experience.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t.experience.subtitle}
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-indigo-500/30 ml-4 sm:ml-6 space-y-8 pl-6 sm:pl-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-slate-950 group-hover:scale-125 transition-transform"></div>

            <div className="p-6 rounded-3xl border transition-all bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-indigo-500 px-2.5 py-1 rounded-md bg-indigo-500/10 inline-block mb-1">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold">{exp.role}</h3>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                  <Building2 size={14} /> {exp.company} • {exp.location}
                </div>
              </div>

              <p className="text-xs sm:text-sm mb-4 leading-relaxed text-slate-600 dark:text-slate-400">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((s: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs font-mono px-2 py-0.5 rounded border bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
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
  );
}
