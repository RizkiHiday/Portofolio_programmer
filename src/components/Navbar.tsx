"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-350 ${
        scrolled 
          ? "py-3 bg-white/85 backdrop-blur-lg border-b border-neutral-200/40 shadow-sm" 
          : "py-5 bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="font-poppins font-bold text-lg tracking-wider text-neutral-900 flex items-center gap-1 group">
          RH<span className="w-1.5 h-1.5 rounded-full bg-neutral-900 group-hover:scale-150 transition-transform duration-300"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-inter font-medium text-neutral-500 hover:text-neutral-950 transition-colors duration-300 tracking-wide"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/CV/RIzki Hidayat- CV - NEW.pdf"
            download="Rizki Hidayat - CV.pdf"
            className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-inter font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-950 hover:text-white transition-all duration-300 shadow-sm"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full border border-neutral-200 text-xs font-inter font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-950 hover:text-white transition-all duration-300"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="block md:hidden text-neutral-800 focus:outline-none p-1 hover:bg-neutral-100 rounded-md transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-white/95 backdrop-blur-lg border-b border-neutral-200 overflow-hidden shadow-md"
          >
            <div className="px-6 py-5 flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-inter font-medium text-neutral-600 hover:text-neutral-950 py-2 border-b border-neutral-100 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/CV/RIzki Hidayat- CV - NEW.pdf"
                download="Rizki Hidayat - CV.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full text-center px-4 py-2.5 rounded-full border border-neutral-200 text-xs font-inter font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-950 hover:text-white transition-all"
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center px-4 py-2.5 rounded-full border border-neutral-200 text-xs font-inter font-semibold text-neutral-800 bg-neutral-50 hover:bg-neutral-950 hover:text-white transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
