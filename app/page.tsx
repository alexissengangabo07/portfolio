import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  profileData,
  skills,
  projects,
  experiences,
} from "@/data/portfolioData";

export default function Page() {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Dynamic Background Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-20 bg-indigo-400 dark:bg-indigo-600"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full blur-3xl opacity-20 bg-blue-300 dark:bg-blue-600"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-15 bg-emerald-300 dark:bg-emerald-600"></div>
      </div>

      <Navbar profileData={profileData} />

      <main className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 space-y-28">
        <Hero profileData={profileData} />
        <Stats stats={profileData.stats} />
        <About profileData={profileData} />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experiences={experiences} />
        <Contact profileData={profileData} />
      </main>

      <Footer profileData={profileData} />
    </div>
  );
}
