"use client";

import { useState } from "react";
import { projects, Project } from "../data/projects";

type Language = "en" | "zh";

const TRANSLATIONS = {
  en: {
    navDiscover: "Discover",
    navSubmit: "Submit",
    heroTitleLine1: "AI generated magic.",
    heroTitleLine2: "Zero syntax errors.",
    heroSubtitle: "A curated showcase of the most creative projects built entirely with Vibe Coding.",
    allTag: "All",
    overview: "Overview",
    howToVibe: "How it was Vibe Coded",
    creator: "Creator",
    anonymous: "Anonymous",
    visitProject: "Visit Project"
  },
  zh: {
    navDiscover: "发现",
    navSubmit: "提交",
    heroTitleLine1: "AI 生成的魔法。",
    heroTitleLine2: "零语法错误。",
    heroSubtitle: "精选展示完全通过 Vibe Coding (意念编程) 构建的最具创意的项目。",
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
    <main className="min-h-screen flex flex-col items-center selection:bg-[var(--color-accent)] selection:text-white">
      {/* Navbar */}
      <nav className="glass-nav fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center transition-all duration-300">
        <div className="font-semibold text-[22px] tracking-tight text-[var(--color-foreground)]">VibeCoding.Hub</div>
        <div className="flex items-center space-x-6 md:space-x-8">
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">{t.navDiscover}</a>
            <a href="#" className="text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors">{t.navSubmit}</a>
          </div>
          
          {/* Language Toggle Button */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold transition-colors pill-button"
          >
            {lang === "en" ? "中" : "EN"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center max-w-4xl w-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1] text-gradient">
          {t.heroTitleLine1}
          <br/>
          {t.heroTitleLine2}
        </h1>
        <p className="text-xl md:text-2xl text-[var(--color-muted)] mb-12 max-w-2xl mx-auto font-medium">
          {t.heroSubtitle}
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`pill-button px-6 py-2.5 rounded-full text-[15px] font-medium transition-all duration-300 ${
                filter === tag 
                ? "bg-[var(--color-foreground)] text-white shadow-md" 
                : "bg-[var(--color-card)] text-[var(--color-foreground)] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-gray-100"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => {
            const title = lang === "en" ? project.titleEn : project.titleZh;
            const description = lang === "en" ? project.descriptionEn : project.descriptionZh;
            const tags = lang === "en" ? project.tagsEn : project.tagsZh;

            return (
              <div 
                key={project.id} 
                className="bg-[var(--color-card)] rounded-[24px] overflow-hidden cursor-pointer group flex flex-col h-full smooth-shadow border border-gray-100/50"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden p-3 pb-0">
                  <img 
                    src={project.imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-[16px] transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-[var(--color-foreground)] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    🔥 {project.vibeScore}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold mb-3 tracking-tight text-[var(--color-foreground)]">{title}</h3>
                  <p className="text-[var(--color-muted)] text-[15px] mb-6 line-clamp-2 flex-grow leading-relaxed font-medium">{description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map(tag => (
                      <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detail Modal */}
      {selectedProject && (() => {
        const title = lang === "en" ? selectedProject.titleEn : selectedProject.titleZh;
        const description = lang === "en" ? selectedProject.descriptionEn : selectedProject.descriptionZh;
        const howToVibe = lang === "en" ? selectedProject.howToVibeEn : selectedProject.howToVibeZh;
        const tags = lang === "en" ? selectedProject.tagsEn : selectedProject.tagsZh;

        return (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div 
              className="absolute inset-0 bg-[#000000]/20 backdrop-blur-sm transition-opacity duration-300"
              onClick={() => setSelectedProject(null)}
            ></div>
            <div className="bg-[var(--color-card)] relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-300 rounded-[32px] shadow-[0_32px_64px_rgba(0,0,0,0.15)] flex flex-col">
              <button 
                className="absolute top-6 right-6 bg-gray-100/80 text-gray-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-20 backdrop-blur-md pill-button font-bold text-lg"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <div className="h-72 sm:h-96 w-full p-4 pb-0 relative shrink-0">
                 <img 
                    src={selectedProject.imageUrl} 
                    alt={title} 
                    className="w-full h-full object-cover rounded-[24px]"
                  />
              </div>
              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-foreground)]">{title}</h2>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8 items-center">
                  <span className="bg-[#ff9500]/10 text-[#ff9500] px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5">
                    🔥 Vibe Score: {selectedProject.vibeScore}
                  </span>
                  <span className="text-gray-300 mx-2">|</span>
                  {tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-sm px-4 py-1.5 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-[var(--color-foreground)]">{t.overview}</h3>
                    <p className="text-[var(--color-muted)] text-[17px] leading-relaxed font-medium">{description}</p>
                  </div>
                  
                  <div className="bg-[#f5f5f7] rounded-[24px] p-6 sm:p-8">
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-[var(--color-foreground)]">
                      ✨ {t.howToVibe}
                    </h3>
                    <p className="text-[17px] leading-relaxed text-[var(--color-foreground)] font-medium">"{howToVibe}"</p>
                  </div>

                  <div className="flex items-center justify-between pt-8">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">{t.creator}</span>
                      <span className="text-lg font-semibold text-[var(--color-foreground)]">{selectedProject.author || t.anonymous}</span>
                    </div>
                    {selectedProject.sourceUrl && (
                      <a 
                        href={selectedProject.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-full text-[15px] font-semibold hover:bg-[var(--color-accent-hover)] transition-colors pill-button shadow-lg shadow-[var(--color-accent)]/20"
                      >
                        {t.visitProject}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </main>
  );
}
