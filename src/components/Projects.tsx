"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Code, Layers, Smartphone, CreditCard, Globe, Fingerprint } from "lucide-react";

const PROJECTS = [
  {
    title: "PresensiKu - Intelligent Biometric Attendance System",
    desc: "Platform absensi karyawan berbasis AI Face Recognition untuk HR modern dengan presisi biometrik tinggi dan UI/UX premium.",
    tech: ["Flutter", "AI Face Recognition", "REST API", "State Management"],
    icon: Fingerprint,
    github: "https://github.com/RizkiHiday/PresensiKu",
    demo: "#",
    badge: "AI & Biometrics Solution",
    image: "/projects/presensiku.png",
    status: "Work in Progress"
  },
  {
    title: "Sistem Monitoring Siswa",
    desc: "Aplikasi pemantauan kehadiran dan perilaku siswa dengan panel admin Vue.js serta aplikasi mobile Flutter.",
    tech: ["Vue.js", "Flutter", "MySQL", "Vibe Coding"],
    icon: Layers,
    github: "#",
    demo: "#",
    badge: "Academic Project",
    image: "/projects/monitoring.png",
    status: "Private Project"
  },
  {
    title: "Platform E-Ticketing",
    desc: "Sistem reservasi tiket digital dengan integrasi pembayaran QRIS dinamis secara real-time.",
    tech: ["Laravel", "REST API", "QRIS Integration", "MySQL"],
    icon: CreditCard,
    github: "#",
    demo: "#",
    badge: "Digital Payment Project",
    image: "/projects/e-ticketing.png",
    status: "Work in Progress"
  },
  {
    title: "Portofolio Digital",
    desc: "Website portofolio digital interaktif (SPA) dengan animasi halus Framer Motion dan responsivitas penuh.",
    tech: ["React JS", "Tailwind CSS", "Framer Motion", "Netlify"],
    icon: Code,
    github: "https://github.com/RizkiHiday",
    demo: "https://rizkillua-porto.netlify.app/",
    badge: "Personal Branding",
    image: "/projects/porto.png",
    status: "Completed"
  },
  {
    title: "Website Compro",
    desc: "Website Company Profile (Compro) native menggunakan teknologi HTML, CSS, dan JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript Native"],
    icon: Globe,
    github: "#",
    demo: "https://www.jogjacreativepro.com/",
    badge: "Client Project",
    image: "/projects/compro.png",
    status: "Completed"
  }
];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const ProjectIcon = project.icon;
  const isEven = index % 2 === 0;

  // Hook scroll for this specific card
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Asymmetric translations
  const yGraphic = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const yDetails = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <div
      ref={cardRef}
      className="w-full flex flex-col md:flex-row gap-8 items-center p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/50 hover:border-neutral-300 hover:shadow-md transition-all duration-300 overflow-hidden relative group"
    >
      {/* Visual Tech Graphic Column with Parallax and Premium Grid */}
      <motion.div
        style={{ y: yGraphic }}
        className={`w-full md:w-5/12 h-56 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex flex-col justify-center items-center gap-3 relative overflow-hidden transition-colors duration-300 group-hover:bg-neutral-100/50 shrink-0 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        {project.image ? (
          <>
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover object-top opacity-60 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500 pointer-events-none z-0" 
            />
            {/* Elegant glass overlay mask */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90 group-hover:from-white/60 group-hover:via-white/40 group-hover:to-white/60 transition-colors duration-500 z-0" />
          </>
        ) : (
          <>
            {/* Subtle grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:12px_12px] pointer-events-none" />
            
            {/* Decorative glass elements */}
            <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-blue-500/[0.02] blur-xl pointer-events-none group-hover:bg-blue-500/[0.04] transition-colors duration-500" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-purple-500/[0.02] blur-xl pointer-events-none group-hover:bg-purple-500/[0.04] transition-colors duration-500" />
          </>
        )}

        <div className="w-14 h-14 rounded-full bg-white/90 border border-neutral-200/50 flex items-center justify-center text-neutral-800 shadow-sm relative z-10 backdrop-blur-sm">
          <ProjectIcon size={24} className="group-hover:scale-110 transition-transform duration-300" />
        </div>
        
        <div className="w-1/3 h-[1px] bg-neutral-200 relative z-10" />
        
        <div className="text-[9px] font-mono text-neutral-400 tracking-widest uppercase font-semibold relative z-10 bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm">
          {project.badge}
        </div>
      </motion.div>

      {/* Project Details Column */}
      <motion.div
        style={{ y: yDetails }}
        className={`w-full md:w-7/12 flex flex-col justify-center gap-3 relative z-10 ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase font-semibold block">
          {project.badge}
        </span>
        
        <h3 className="text-lg sm:text-xl font-poppins font-bold text-neutral-900 leading-tight">
          {project.title}
        </h3>
        
        <p className="text-xs sm:text-sm font-inter text-neutral-500 leading-relaxed">
          {project.desc}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full border border-neutral-200/50 bg-neutral-50 text-[10px] font-mono text-neutral-600"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-3">
          {project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-inter font-semibold text-neutral-600 hover:text-neutral-900 transition-colors duration-300 border border-neutral-200 px-4 py-2 rounded-full bg-white hover:bg-neutral-50 shadow-sm"
            >
              <Github size={13} />
              Source Code
            </a>
          )}
          {project.demo !== "#" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-inter font-semibold text-white transition-colors duration-300 px-4 py-2 rounded-full bg-neutral-950 hover:bg-neutral-800 shadow-sm"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          ) : (
            project.github === "#" && (
              <span className="flex items-center gap-2 text-xs font-inter font-medium text-neutral-400 border border-neutral-200/60 px-4 py-2 rounded-full bg-neutral-50/50 cursor-default select-none">
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                  project.status === "Private Project" ? "bg-rose-400" : "bg-amber-500"
                }`} />
                {project.status}
              </span>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 w-full bg-[#F5F5F7] px-6 sm:px-12 border-y border-neutral-200/30 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-1"
        >
          <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">03 / Works</span>
          <h2 className="text-2xl sm:text-4xl font-poppins font-bold text-neutral-900">Featured Projects</h2>
        </motion.div>

        {/* Project Layout (Robust, Clean, Non-overlapping, Parallax-driven) */}
        <div className="flex flex-col gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
