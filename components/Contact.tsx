"use client";
import { useState, useTransition } from "react";
import { Mail, MapPin, CheckCircle2, Send, Loader2 } from "lucide-react";
import { GithubIcon } from "./GithubIcon";
import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact({
  profileData,
  t,
}: {
  profileData: any;
  t: any;
}) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    startTransition(async () => {
      const result = await sendEmail(data);
      if (result.success) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        setErrorMessage(result.error || "Une erreur est survenue.");
      }
    });
  };

  return (
    <section id="contact" className="space-y-8 pt-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-500">
          <Mail size={22} />
        </div>
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold">{t.contact.title}</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Coordonnées directes */}
        <div className="lg:col-span-2 p-8 rounded-3xl border flex flex-col justify-between space-y-6 bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
          <div className="space-y-6">
            <h3 className="text-xl font-bold">{t.contact.directTitle}</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {t.contact.directDesc}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl border transition-colors bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <div className="p-3 rounded-xl bg-indigo-600 text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {t.contact.emailLabel}
                  </span>
                  <span className="text-sm font-medium">
                    {profileData.email}
                  </span>
                </div>
              </a>

              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border transition-colors bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <div className="p-3 rounded-xl bg-slate-800 text-white border border-slate-700">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {t.contact.githubLabel}
                  </span>
                  <span className="text-sm font-medium">
                    @alexissengangabo07
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl border bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50">
                <div className="p-3 rounded-xl bg-emerald-600 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">
                    {t.contact.locationLabel}
                  </span>
                  <span className="text-sm font-medium">
                    {profileData.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-400">
            ⚡ {t.contact.responseTime}
          </div>
        </div>

        {/* Formulaire interactif */}
        <div className="lg:col-span-3 p-8 rounded-3xl border bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none">
          {formSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
              <div className="p-4 rounded-full bg-emerald-500/20 text-emerald-400 animate-bounce">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold">{t.contact.successTitle}</h3>
              <p className="text-sm text-slate-400 max-w-md">
                {t.contact.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.contact.emailInputLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-4 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
              >
                {isPending ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {isPending ? "Envoi en cours..." : t.contact.sendBtn}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
