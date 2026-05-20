"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
    { href: "#events", label: "Events" },
    { href: "#awards", label: "Awards" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100" : "bg-white/80 backdrop-blur-sm"}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between" style={{ paddingTop: '16px', paddingBottom: '16px' }}>
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-14 h-14 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img src="/images/logo.png" alt="Rotaract Club of Pune Pristine Paradise" className="w-full h-full object-contain" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-display font-bold text-rotaract-dark leading-tight">Rotaract Club</h1>
              <p className="text-xs text-rotaract-pink font-semibold tracking-wider">Pune Pristine Paradise</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="px-4 py-2 text-sm font-semibold text-rotaract-dark hover:text-rotaract-pink transition-colors duration-300 rounded-lg hover:bg-rotaract-pink/5">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#join" style={{ padding: '12px 28px', fontSize: '14px' }} className="inline-flex items-center justify-center gap-2 gradient-bg text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Join Us →
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-rotaract-pink/10 text-rotaract-pink hover:bg-rotaract-pink/20 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }} className="lg:hidden border-t border-gray-100">
            <div className="py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-4 py-3 text-sm font-semibold text-rotaract-dark hover:bg-rotaract-pink/10 hover:text-rotaract-pink rounded-lg transition-colors">
                  {link.label}
                </a>
              ))}
              <a href="#join" onClick={() => setIsMenuOpen(false)} style={{ padding: '12px 28px', fontSize: '14px' }} className="mt-2 inline-flex items-center justify-center gap-2 gradient-bg text-white font-bold rounded-full shadow-md">
                Join Us →
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
