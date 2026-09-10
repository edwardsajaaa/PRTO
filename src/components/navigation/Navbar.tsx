'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Sparkles } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Handle background transition on scroll & detect active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#' || href === '#about') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-8 flex justify-between items-center">
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/#about"
            onClick={(e) => handleScrollTo(e, '#about')}
            className="text-xl md:text-2xl font-bold tracking-wider hover:text-blue-400 transition-colors flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.9)] transition-shadow" />
            Edward Benedict
          </a>
        </motion.div>

        {/* Desktop Navigation Links & Action Buttons */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 pl-4 border-l border-zinc-800">
            {/* View CV Button (CTA) */}
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-blue-600/20 text-white border border-white/15 hover:border-blue-400/50 hover:text-blue-400 transition-all hover:shadow-[0_0_16px_rgba(59,130,246,0.25)] active:scale-95"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View CV</span>
            </Link>

            {/* Get in touch CTA */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=edwardbene07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors text-white"
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Mobile Animated Drawer / Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-zinc-800 shadow-2xl p-6 flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold'
                        : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-blue-400" />}
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-3">
              {/* Mobile View CV Button */}
              <Link
                href="/resume"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-blue-400 text-white text-xs font-semibold shadow-lg transition-all"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>View & Download Curriculum Vitae</span>
              </Link>

              {/* Mobile Email CTA */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=edwardbene07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/25 transition-all"
              >
                <span>Get in Touch via Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
