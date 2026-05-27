"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // GPU-friendly parallax transformations
  const yBlob1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const yBlob2 = useTransform(scrollY, [0, 1000], [0, -180]);
  const textY = useTransform(scrollY, [0, 800], [0, 100]);
  const textOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yWindow = useTransform(scrollY, [0, 1000], [50, -150]);
  const imageY = useTransform(scrollY, [0, 1000], [0, 100]);

  // Container variant for stagger entry
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  // Child variants using GPU-friendly translate3d & opacity transitions
  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 150,
      },
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-24 sm:pt-20"
    >
      {/* Full Background Image with Parallax & Soft Overlay */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <img 
          src="/Section/TXC_6803.jpg" 
          alt="Rizki Hidayat" 
          className="w-full h-full object-cover object-center md:object-[4%_center] scale-[1.15] md:scale-[1.95] origin-center md:origin-left"
        />
        {/* Soft, ultra-premium responsive glassmorphic overlay (further optimized: tuned to 60% middle opacity on desktop and 20% on mobile for ultimate background image clarity while keeping text readable) */}
        <div className="absolute inset-0 bg-white/20 md:bg-transparent bg-gradient-to-b md:bg-gradient-to-r from-white/30 md:from-white via-white/20 md:via-white/60 to-white md:to-transparent" />
      </motion.div>

      {/* Premium Ambient Background Globs - Parallax movement */}
      <motion.div 
        style={{ y: yBlob1 }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-blue-400/[0.03] blur-[100px] pointer-events-none z-10" 
      />
      <motion.div 
        style={{ y: yBlob2 }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-400/[0.02] blur-[120px] pointer-events-none z-10" 
      />

      {/* Floating Vibe Coder Glassmorphic IDE Preview */}
      <motion.div
        style={{ y: yWindow, opacity: textOpacity }}
        initial={{ opacity: 0, scale: 0.95, y: 60 }}
        animate={{ opacity: 0.85, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.8, type: "spring", stiffness: 100 }}
        className="absolute bottom-10 lg:bottom-12 right-[2%] sm:right-[3%] lg:right-[3%] w-[80%] max-w-[290px] rounded-2xl bg-white/85 border border-neutral-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-md px-3 sm:px-4 py-4 font-mono text-[10px] sm:text-[11px] text-neutral-900 pointer-events-none z-10 hidden md:block"
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-2.5 pb-1.5 border-b border-neutral-200/30">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <span className="text-[8px] sm:text-[9px] text-neutral-400 font-inter select-none">RizkiHidayat.tsx</span>
        </div>
        {/* Code Content */}
        <div className="space-y-0.5 leading-relaxed text-neutral-800 font-medium">
          <p><span className="text-blue-600 font-bold">const</span> <span className="text-purple-600 font-semibold">developer</span> = &#123;</p>
          <p className="pl-3.5">name: <span className="text-emerald-700 font-semibold">&quot;Rizki Hidayat&quot;</span>,</p>
          <p className="pl-3.5">role: <span className="text-emerald-700 font-semibold">&quot;Full Stack Developer&quot;</span>,</p>
          <p className="pl-3.5">philosophy: <span className="text-emerald-700 font-semibold">&quot;Stay Hungry Stay Foolish&quot;</span>,</p>
          <p className="pl-3.5">skills: [<span className="text-amber-700 font-semibold">&quot;Laravel&quot;</span>, <span className="text-amber-700 font-semibold">&quot;Flutter&quot;</span>, <span className="text-amber-700 font-semibold">&quot;Python&quot;</span>],</p>
          <p className="pl-3.5">passionate: <span className="text-blue-600 font-bold">true</span></p>
          <p>&#125;;</p>
          <p className="mt-2 text-neutral-500 font-inter text-[9px] italic">// Crafting experiences...</p>
        </div>
      </motion.div>

      {/* Parallax Content Container */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="max-w-4xl w-full text-center md:text-left flex flex-col items-center md:items-start z-10 md:mr-auto md:max-w-xl md:pl-6 lg:pl-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Info Tag */}
        <motion.div
          variants={childVariants}
          className="mb-6 px-4 py-1.5 rounded-full border border-neutral-200/60 bg-neutral-50/60 backdrop-blur-sm text-[10px] sm:text-xs font-inter font-semibold text-neutral-500 tracking-widest uppercase flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Graduated on 11 April
        </motion.div>

        {/* Large Name */}
        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-poppins font-extrabold tracking-tight text-neutral-900 mb-4 select-none leading-none"
        >
          Rizki Hidayat
        </motion.h1>

        {/* Subtitle / Role */}
        <motion.h2
          variants={childVariants}
          className="text-base sm:text-xl md:text-2xl font-inter font-semibold text-neutral-950 tracking-wide mb-6"
        >
          Full Stack Developer
        </motion.h2>

        {/* Short Description */}
        <motion.p
          variants={childVariants}
          className="text-xs sm:text-sm md:text-base font-inter text-neutral-900 font-medium max-w-lg leading-relaxed mb-8 sm:mb-10"
        >
          A fresh graduate with a strong passion for learning web programming and full-stack development. Enthusiastic about building applications from both frontend and backend perspectives, while continuously improving skills to create functional, efficient, and user-friendly systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={childVariants} className="flex flex-wrap gap-4 items-center justify-center md:justify-start relative z-10">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-neutral-950 text-white font-inter font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:bg-neutral-800 shadow-md hover:shadow-lg"
          >
            View Projects
          </a>
          <a
            href="/CV/RIzki Hidayat- CV - NEW.pdf"
            download="Rizki Hidayat - CV.pdf"
            className="px-6 py-3 rounded-full border border-neutral-200 text-neutral-700 bg-white hover:bg-neutral-50 font-inter font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-sm"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-neutral-200 text-neutral-700 bg-neutral-50 hover:bg-neutral-100 font-inter font-semibold text-xs sm:text-sm transition-all duration-300 hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <span className="text-[9px] font-inter text-neutral-400 tracking-widest uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={12} className="text-neutral-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
