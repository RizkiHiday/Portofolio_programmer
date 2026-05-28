"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const EXPERIENCES = [
  {
    period: "2020",
    title: "Magang IT Support",
    org: "CV. ADHISAKTI COMPUTER",
    desc: "Melakukan pemeliharaan dan perbaikan perangkat keras (hardware), perangkat lunak (software), printer, serta instalasi dan troubleshooting jaringan komputer."
  },
  {
    period: "2021",
    title: "Magang Teknisi Jaringan",
    org: "PT Karya Internet Indonesia",
    desc: "Melakukan instalasi serta pemeliharaan infrastruktur jaringan wifi RT/RW Net untuk memastikan konektivitas yang stabil dan efisien."
  },
  {
    period: "2022 - 2026",
    title: "S1 Informatika",
    org: "Universitas Teknologi Yogyakarta",
    desc: "Memfokuskan studi pada pengembangan aplikasi Web (Laravel) dan Mobile (Flutter). Berhasil lulus dengan IPK 3.42 / 4.00 serta memiliki kompetensi mendalam dalam perancangan sistem bersih, aman, dan efisien."
  },
  {
    period: "2024 - Present",
    title: "AI-Assisted Developer (Vibe Coder)",
    org: "Academic & Personal Projects",
    desc: "Mengimplementasikan alur kerja pengembangan modern berbasis AI (vibe coding) menggunakan Cursor IDE dan GitHub Copilot."
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll of the experience timeline section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out scroll progress using springs
  const scaleY = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 280,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="experience" className="relative py-24 w-full bg-white px-6 sm:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 flex flex-col gap-1"
        >
          <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">04 / Journey</span>
          <h2 className="text-2xl sm:text-4xl font-poppins font-bold text-neutral-900">My Experience</h2>
        </motion.div>

        {/* Timeline Structure (Pristine Light Theme with Scroll-driven Drawing Line) */}
        <div className="relative ml-4 md:ml-32 pl-8 md:pl-12 flex flex-col gap-12">
          
          {/* Vertical timeline base track (Static Gray) */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-neutral-200 pointer-events-none" />
          
          {/* Vertical timeline active progress (Dynamic Black) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-2 bottom-2 w-[1px] bg-neutral-950 pointer-events-none" 
          />

          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating Period Badge on Left for Desktop */}
              <div className="hidden md:block absolute right-full mr-20 top-0.5 text-right w-24">
                <span className="text-xs font-mono font-bold text-neutral-500 tracking-wider block">
                  {exp.period}
                </span>
              </div>

              {/* Timeline dot with micro-animation */}
              <motion.div 
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", damping: 15, stiffness: 200 }}
                className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-neutral-900 flex items-center justify-center shadow-sm z-10"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 animate-pulse" />
              </motion.div>

              {/* Card Content */}
              <div className="flex flex-col gap-1.5">
                {/* Period on mobile */}
                <span className="md:hidden text-[9px] font-mono text-neutral-500 tracking-wider font-semibold block">
                  {exp.period}
                </span>
                
                <h3 className="text-base sm:text-lg font-poppins font-bold text-neutral-950 leading-tight">
                  {exp.title}
                </h3>
                
                <span className="text-[10px] font-inter text-neutral-400 font-bold uppercase tracking-wider block">
                  {exp.org}
                </span>
                
                <p className="text-xs sm:text-sm font-inter text-neutral-500 leading-relaxed max-w-2xl mt-1">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
