'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import { ProfileCard3D } from './ProfileCard3D';

export function HeroSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative">
      <div className="container mx-auto px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-sm text-zinc-400 tracking-widest uppercase">About Me</p>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                I Build <span className="glow-text">Meaningful</span> Digital Experiences.<br />Future.
              </h2>
            </div>

            <div className="space-y-4 text-zinc-400 text-base leading-relaxed max-w-lg">
              <p>
                Saya merancang dan mengembangkan produk digital yang fokus pada kegunaan, estetika, dan pengalaman pengguna. Menggabungkan teknologi dan kreativitas untuk menghadirkan solusi yang nyata, bukan sekadar tampilan.
              </p>
              <p>
                Saya selalu berusaha menggabungkan kreativitas, teknologi, dan user experience dalam setiap project yang saya kerjakan.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=edwardbene07@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 underline transition-colors inline-flex items-center gap-2 text-sm"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                edwardbene07@gmail.com
              </a>

              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-lg shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <FileText className="w-3.5 h-3.5" />
                View Full CV / Resume
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Interactive Profile Card */}
          <ProfileCard3D />
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer group z-20"
        onClick={() => {
          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[10px] tracking-widest uppercase text-zinc-500 group-hover:text-blue-400 transition-colors font-semibold">
          Scroll Down
        </span>
        <div className="w-5 h-8 rounded-full border border-zinc-700 group-hover:border-blue-400 transition-colors flex items-start justify-center p-1 bg-zinc-900/40 backdrop-blur-sm">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [1, 0.2, 1]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        </div>
        <motion.div
          animate={{
            y: [0, 3, 0]
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
