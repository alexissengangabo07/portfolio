export default function Stats({
  stats,
  t,
}: {
  stats: Array<{ value: string }>;
  t: any;
}) {
  const labels = [
    t.stats.exp,
    t.stats.projects,
    t.stats.quality,
    t.stats.clients,
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl border bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-800/80 shadow-lg shadow-slate-100 dark:shadow-none">
      {stats.map((stat, idx) => (
        <div key={idx} className="text-center p-3">
          <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 font-mono mb-1">
            {stat.value}
          </div>
          <div className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
            {labels[idx]}
          </div>
        </div>
      ))}
    </section>
  );
}
