"use client";

import { useState, useEffect } from "react";

export default function Footer({ profileData }: { profileData: any }) {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t py-12 bg-slate-100 dark:bg-slate-950 border-slate-200 dark:border-slate-800/80">
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
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              {profileData.name} ({profileData.alias})
            </p>
            <p>© {year} KivuNex. Tous droits réservés.</p>
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
        </div>
      </div>
    </footer>
  );
}
