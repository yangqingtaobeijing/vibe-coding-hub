"use client";

import { motion } from "framer-motion";
import { Project } from "../data/projects";
import { Flame, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  lang: "en" | "zh";
  onClick: () => void;
}

export default function ProjectCard({ project, lang, onClick }: ProjectCardProps) {
  const title = lang === "en" ? project.titleEn : project.titleZh;
  const description = lang === "en" ? project.descriptionEn : project.descriptionZh;
  const tags = lang === "en" ? project.tagsEn : project.tagsZh;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="glass-surface rounded-[32px] overflow-hidden cursor-pointer group glow-border h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden m-4 rounded-[24px]">
        <img 
          src={project.imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 shadow-xl">
          <Flame className="w-3.5 h-3.5 text-accent animate-pulse" />
          {project.vibeScore}
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
            <ArrowUpRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="p-8 pt-2 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted text-[15px] mb-6 line-clamp-2 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="bg-white/5 border border-white/10 text-white/60 text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full font-bold">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
