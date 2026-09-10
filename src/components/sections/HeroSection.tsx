'use client';

import { motion } from 'framer-motion';
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
          </motion.div>

          {/* Right Column - 3D Interactive Profile Card */}
          <ProfileCard3D />
        </div>
      </div>
    </section>
  );
}
