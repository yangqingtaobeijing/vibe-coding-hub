"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "../data/projects";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

type Language = "en" | "zh";

const TRANSLATIONS = {
  en: {
    navDiscover: "Discover",
    navSubmit: "Submit",
    heroTitleLine1: "AI Generated Magic.",
    heroTitleLine2: "Zero Syntax Errors.",
    heroSubtitle: "A curated showcase of the most creative projects built entirely with Vibe Coding.",
    allTag: "All",
    overview: "Project Overview",
    howToVibe: "How it was Vibe Coded",
    creator: "Creator",
    anonymous: "Anonymous",
    visitProject: "Visit Project"
  },
  zh: {
    navDiscover: "探索案例",
    navSubmit: "提交案例",
    heroTitleLine1: "AI 生成的魔法",
    heroTitleLine2: "零代码实现的奇迹",
    heroSubtitle: "精选展示完全通过 Vibe Coding (意念编程) 构建的最具创意的作品。",
    allTag: "全部",
    overview: "项目简介",
    howToVibe: "它是如何被 Vibe 出来的",
    creator: "创作者",
    anonymous: "匿名",
    visitProject: "访问项目"
  }
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("All");
  const [lang, setLang] = useState<Language>("en");

  const t = TRANSLATIONS[lang];

  // Extract all tags based on current language
  const allTagsSet = new Set<string>();
  projects.forEach(p => {
    const tags = lang === "en" ? p.tagsEn : p.tagsZh;
    tags.forEach(t => allTagsSet.add(t));
  });
  
  const allTags = [t.allTag, ...Array.from(allTagsSet)];

  const filteredProjects = filter === t.allTag || filter === "All"
    ? projects 
    : projects.filter(p => {
        const tags = lang === "en" ? p.tagsEn : p.tagsZh;
        return tags.includes(filter);
      });

  const toggleLanguage = () => {
    setLang(prev => prev === "en" ? "zh" : "en");
    setFilter(lang === "en" ? TRANSLATIONS["zh"].allTag : TRANSLATIONS["en"].allTag);
  };

  return (
    <main className="min-h-screen flex flex-col items-center selection:bg-primary selection:text-white">
      <Navbar lang={lang} toggleLanguage={toggleLanguage} translations={t} />
      
      <Hero translations={t} />

      {/* Filters Section */}
      <section className="pb-12 px-6 w-full max-w-5xl">
        <div className="flex flex-wrap justify-center gap-2 p-2 glass-surface rounded-full">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                filter === tag 
                ? "primary-gradient text-white shadow-lg shadow-primary/20" 
                : "text-white/60 hover:text-white hover:bg-white/5"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-48 w-full max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id}
                project={project}
                lang={lang}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        translations={t}
      />

      {/* Footer */}
      <footer className="w-full py-24 px-6 border-t border-white/5 relative z-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-12 h-12 primary-gradient rounded-xl flex items-center justify-center font-bold text-white text-xl">V</div>
          <p className="text-muted font-medium max-w-sm">
            Curated with love by the Vibe Coding community. Built entirely with AI.
          </p>
          <div className="flex gap-8 text-sm font-bold text-white/40">
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">Discord</a>
          </div>
          <div className="mt-8 text-[10px] uppercase tracking-widest text-white/20 font-black">
            © 2026 VibeCoding.Hub Pro Max
          </div>
        </div>
      </footer>
    </main>
  );
}
