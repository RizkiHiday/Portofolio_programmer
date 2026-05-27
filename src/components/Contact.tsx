"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Github, Instagram, ArrowUpRight } from "lucide-react";

const CONTACT_LINKS = [
  {
    name: "Email",
    label: "rizkihidayat110011@gmail.com",
    href: "mailto:rizkihidayat110011@gmail.com",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    label: "+62 853-2070-5807",
    href: "https://wa.me/6285320705807",
    icon: MessageCircle,
  },
  {
    name: "Instagram",
    label: "@ulat.ngesot",
    href: "https://instagram.com/ulat.ngesot",
    icon: Instagram,
  },
  {
    name: "GitHub",
    label: "github.com/RizkiHiday",
    href: "https://github.com/RizkiHiday",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 w-full bg-[#F5F5F7] px-6 sm:px-12 border-t border-neutral-200/30 overflow-hidden">
      {/* Background large bottom ambient shadow glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-neutral-950/[0.01] blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-8 flex flex-col gap-1"
        >
          <span className="text-[10px] font-mono text-neutral-400 tracking-widest uppercase">05 / Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-neutral-950 leading-tight">
            Let&apos;s build something<br />great together.
          </h2>
        </motion.div>

        {/* Short Text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="text-xs sm:text-sm md:text-base font-inter text-neutral-500 max-w-sm leading-relaxed mb-12"
        >
          Saya selalu terbuka untuk berdiskusi tentang proyek website, peluang kerja sama, atau sekadar berbagi pengalaman seputar dunia coding.
        </motion.p>

        {/* Contact Cards Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left mb-16"
        >
          {CONTACT_LINKS.map((link) => {
            const LinkIcon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200/60 hover:border-neutral-300 hover:shadow-md transition-all duration-300 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-50 border border-neutral-200/50 flex items-center justify-center text-neutral-700 group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950 transition-all duration-300">
                    <LinkIcon size={16} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-neutral-400 tracking-wider uppercase font-semibold block">{link.name}</span>
                    <span className="text-xs sm:text-sm font-inter text-neutral-900 font-bold">{link.label}</span>
                  </div>
                </div>
                
                <ArrowUpRight size={13} className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </a>
            );
          })}
        </motion.div>

        {/* Footer info */}
        <div className="w-full border-t border-neutral-200/60 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-[11px] sm:text-xs font-inter text-neutral-400">
            &copy; {new Date().getFullYear()} Rizki Hidayat. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
