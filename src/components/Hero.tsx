"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface HeroProps {
  translations: any;
}

export default function Hero({ translations: t }: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 100 } }
  } as const;

  return (
    <section className="relative pt-48 pb-24 px-6 overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div 
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary font-semibold text-sm mb-8 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 fill-primary/20" />
          <span>The Future of Creation</span>
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-gradient"
        >
          {t.heroTitleLine1}
          <br />
          <span className="text-white">{t.heroTitleLine2}</span>
        </motion.h1>

        <motion.p 
          variants={item}
          className="text-xl md:text-2xl text-muted max-w-2xl mx-auto font-medium leading-relaxed"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.div 
          variants={item}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {/* Decorative element or primary CTA could go here */}
          <div className="w-32 h-1 primary-gradient rounded-full opacity-30" />
        </motion.div>
      </motion.div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full -z-10 opacity-50" />
    </section>
  );
}
