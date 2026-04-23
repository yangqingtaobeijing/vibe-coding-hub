"use client";

import { motion } from "framer-motion";
import { Globe, PlusCircle, Compass } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface NavbarProps {
  lang: "en" | "zh";
  toggleLanguage: () => void;
  translations: any;
}

export default function Navbar({ lang, toggleLanguage, translations: t }: NavbarProps) {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 25, stiffness: 200 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-5xl"
    >
      <div className="glass-surface rounded-full px-6 py-3 flex justify-between items-center shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center font-bold text-white text-lg">V</div>
          <span className="font-bold text-lg tracking-tight hidden sm:block">VibeCoding.Hub</span>
        </div>

        <div className="flex items-center gap-1 sm:gap-6">
          <div className="flex items-center gap-1">
            <NavLink icon={<Compass className="w-4 h-4" />} label={t.navDiscover} active />
            <NavLink icon={<PlusCircle className="w-4 h-4" />} label={t.navSubmit} />
          </div>
          
          <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block" />

          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white/80 px-4 py-2 rounded-full text-xs font-bold transition-all hover:scale-105 active:scale-95 border border-white/5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang === "en" ? "中文" : "EN"}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ icon, label, active }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
        active 
          ? "bg-white/10 text-white" 
          : "text-white/60 hover:text-white hover:bg-white/5"
      )}
    >
      {icon}
      <span className="hidden md:block">{label}</span>
    </a>
  );
}
