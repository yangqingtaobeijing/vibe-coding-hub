"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "../data/projects";
import { X, Flame, ExternalLink, User } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  lang: "en" | "zh";
  onClose: () => void;
  translations: any;
}

export default function ProjectModal({ project, lang, onClose, translations: t }: ProjectModalProps) {
  if (!project) return null;

  const title = lang === "en" ? project.titleEn : project.titleZh;
  const description = lang === "en" ? project.descriptionEn : project.descriptionZh;
  const howToVibe = lang === "en" ? project.howToVibeEn : project.howToVibeZh;
  const tags = lang === "en" ? project.tagsEn : project.tagsZh;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="glass-surface relative z-10 w-full max-w-4xl rounded-[40px] shadow-[0_32px_128px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 bg-white/10 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all z-20 backdrop-blur-md border border-white/10 active:scale-90"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Image (Full width on mobile, half on desktop) */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative shrink-0">
               <img 
                  src={project.imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
            </div>

            {/* Right: Content */}
            <div className="p-8 md:p-12 md:w-1/2 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-3 mb-6">
                 <span className="bg-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-black flex items-center gap-2 border border-accent/20">
                    <Flame className="w-3.5 h-3.5 fill-accent" />
                    VIBE SCORE: {project.vibeScore}
                  </span>
              </div>
              
              <h2 className="text-4xl font-bold tracking-tight text-white mb-6 leading-tight">{title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {tags.map(tag => (
                  <span key={tag} className="bg-white/5 text-white/70 text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">{t.overview}</h3>
                  <p className="text-muted text-lg leading-relaxed font-medium">{description}</p>
                </div>
                
                <div className="bg-white/[0.03] border border-white/5 rounded-[32px] p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 primary-gradient blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity" />
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4 flex items-center gap-2">
                    {t.howToVibe}
                  </h3>
                  <p className="text-lg leading-relaxed text-white font-medium italic">"{howToVibe}"</p>
                </div>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      <User className="w-6 h-6 text-white/40" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-muted font-bold uppercase tracking-widest">{t.creator}</span>
                      <span className="text-white font-bold">{project.author || t.anonymous}</span>
                    </div>
                  </div>
                  
                  {project.sourceUrl && (
                    <a 
                      href={project.sourceUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="primary-gradient text-white px-8 py-4 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20 flex items-center gap-2"
                    >
                      <span>{t.visitProject}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
