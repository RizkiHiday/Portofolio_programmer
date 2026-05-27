"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the About section to create beautiful parallax offsets
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Slowly translate the spec card on desktop scroll
  const yCard = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const yBlob = useTransform(scrollYProgress, [0, 1], [-20, 60]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative py-24 w-full bg-[#F5F5F7] px-6 sm:px-12 border-y border-neutral-200/30 overflow-hidden"
    >
      {/* Decorative Parallax Background Blob */}
      <motion.div 
        style={{ y: yBlob }}
        className="absolute -right-16 top-1/4 w-72 h-72 rounded-full bg-blue-500/[0.02] blur-[80px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-1"
        >
          <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">01 / About Me</span>
          <h2 className="text-2xl sm:text-4xl font-poppins font-bold text-neutral-900">Who I Am</h2>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="md:col-span-2 flex flex-col gap-4"
          >
            <p className="text-lg sm:text-xl font-inter font-light text-neutral-800 leading-relaxed">
              Saya lulusan Informatika yang fokus di pengembangan aplikasi Web menggunakan Laravel dan Mobile menggunakan Flutter. Saya senang membangun aplikasi yang sederhana, rapi, dan mudah digunakan, serta terbiasa memanfaatkan <span className="text-neutral-900 font-semibold">AI</span> untuk membantu proses pengembangan agar lebih cepat dan efisien.
            </p>
          </motion.div>

          {/* Quick Metrics / Specs with Parallax Motion */}
          <motion.div
            style={{ y: yCard }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
            className="p-6 rounded-2xl bg-white border border-neutral-200/50 shadow-sm flex flex-col gap-5 md:mt-0"
          >
            <div>
              <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase block mb-1">Education</span>
              <p className="text-sm font-inter text-neutral-950 font-bold">S1 Informatika</p>
              <p className="text-xs font-inter text-neutral-500">Univ. Teknologi Yogyakarta</p>
              <p className="text-xs font-inter text-neutral-400 mt-1 font-medium">IPK 3.42 / 4.00</p>
            </div>
            
            <hr className="border-neutral-100" />

            <div>
              <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase block mb-1">Current Focus</span>
              <p className="text-sm font-inter text-neutral-950 font-bold">Web &amp; Mobile Solutions</p>
              <p className="text-xs font-inter text-neutral-500">Laravel (Full-stack) &amp; Flutter</p>
            </div>

            <hr className="border-neutral-100" />

            <div>
              <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase block mb-1">Methodology</span>
              <p className="text-sm font-inter text-neutral-950 font-bold">AI-Assisted (Vibe Coding)</p>
              <p className="text-xs font-inter text-neutral-500">Cursor IDE, Copilot, Clean Archetype</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
