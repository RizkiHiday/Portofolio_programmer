"use client";

import { useRef } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { 
  SiLaravel, 
  SiFlutter, 
  SiKotlin, 
  SiPhp, 
  SiPython, 
  SiDart, 
  SiJavascript, 
  SiMysql, 
  SiHtml5, 
  SiCss, 
  SiGithubcopilot 
} from "react-icons/si";

// HTML & CSS Combined Icon Component using clean react-icons imports
const HtmlCssIcon = ({ className, size = 18 }: { className?: string; size?: number }) => (
  <div className="flex items-center gap-1 justify-center">
    <SiHtml5 size={size} className="text-[#E34F26] transition-transform duration-300 group-hover:scale-110" />
    <SiCss size={size} className="text-[#1572B6] transition-transform duration-300 group-hover:scale-110" />
  </div>
);

const SKILLS = [
  { name: "Laravel", desc: "Full-stack Web Framework", icon: SiLaravel, color: "#FF2D20" },
  { name: "Flutter", desc: "Mobile Application Framework", icon: SiFlutter, color: "#02569B" },
  { name: "Kotlin", desc: "Modern Android Development", icon: SiKotlin, color: "#7F52FF" },
  { name: "PHP", desc: "Back-End Web Development", icon: SiPhp, color: "#777BB4" },
  { name: "Python", desc: "Automation & Scripting Logic", icon: SiPython, color: "#3776AB" },
  { name: "Dart", desc: "Mobile Programming Logic", icon: SiDart, color: "#0175C2" },
  { name: "JavaScript", desc: "Modern ES6+ Interactive Logic", icon: SiJavascript, color: "#F7DF1E" },
  { name: "SQL Databases", desc: "MySQL & PostgreSQL Integration", icon: SiMysql, color: "#00758F" },
  { name: "HTML & CSS", desc: "Native Web Structural Layouts", icon: HtmlCssIcon, color: "" },
  { name: "AI-Assisted Tools", desc: "Cursor IDE, Copilot, Prompt Eng.", icon: SiGithubcopilot, color: "#24292E" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yBlob1 = useTransform(scrollYProgress, [0, 1], [-50, 70]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 120 }
    },
  };

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="relative py-24 w-full bg-white px-6 sm:px-12 overflow-hidden"
    >
      <motion.div 
        style={{ y: yBlob1 }}
        className="absolute top-10 left-10 w-[350px] h-[350px] rounded-full bg-blue-400/[0.03] blur-[90px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: yBlob2 }}
        className="absolute bottom-10 right-10 w-[380px] h-[380px] rounded-full bg-purple-400/[0.03] blur-[100px] pointer-events-none" 
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-1"
        >
          <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">02 / Capabilities</span>
          <h2 className="text-2xl sm:text-4xl font-poppins font-bold text-neutral-900">Skills &amp; Toolkit</h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-5 rounded-2xl bg-neutral-50/60 border border-neutral-200/50 hover:bg-white hover:border-neutral-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.03)] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 border border-neutral-950/[0.02] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200/70 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:bg-neutral-950 group-hover:border-neutral-950">
                    {skill.color ? (
                      <Icon 
                        size={20} 
                        className="transition-all duration-300 group-hover:rotate-6 group-hover:!text-white" 
                        style={{ color: skill.color }} 
                      />
                    ) : (
                      <Icon size={20} className="transition-all duration-300 group-hover:rotate-6" />
                    )}
                  </div>

                  <div>
                    <h3 className="text-sm font-poppins font-bold text-neutral-900 mb-0.5 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-xs font-inter text-neutral-500 leading-normal">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
