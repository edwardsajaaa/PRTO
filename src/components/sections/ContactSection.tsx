'use client';

import { motion } from 'framer-motion';
import { Linkedin, Instagram, Phone, Award, Trophy, Target, Star } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-zinc-900/50 relative overflow-hidden">
      {/* Background Pattern/Texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Butuh bantuan dengan dukungan profesional?<br />
              Ayo bekerja sama!
            </h2>
            <div className="space-y-3">
              <a
                href="mailto:edwardbene07@gmail.com"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                <span className="w-2 h-2 bg-white rounded-full"></span>
                edwardbene07@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Right - Social Media Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-3xl md:text-4xl font-bold">Connect With Me</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Jangan ragu untuk terhubung dengan saya melalui platform media sosial dan profesional di bawah ini.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/in/edwardbenedict"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{
                  scale: 0.98,
                  x: [0, -2, 2, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center gap-3 p-5 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                {/* Glowing border effect */}
                <div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0077B5] to-[#00A0DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ padding: '2px' }}
                >
                  <div className="w-full h-full bg-zinc-900 rounded-lg"></div>
                </div>
                <div className="absolute inset-0 rounded-lg border-2 border-[#0077B5]/50 group-hover:border-[#0077B5] group-hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] transition-all duration-300"></div>

                <div className="relative z-10 flex items-center gap-3">
                  <Linkedin className="w-6 h-6 text-[#0077B5] group-hover:text-white transition-colors" />
                  <div className="text-white">
                    <p className="font-semibold text-sm">LinkedIn</p>
                    <p className="text-xs text-zinc-400">@edwardbenedict</p>
                  </div>
                </div>
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/edwardsajaaa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{
                  scale: 0.98,
                  x: [0, -2, 2, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center gap-3 p-5 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 rounded-lg border-2 border-zinc-500/50 group-hover:border-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-all duration-300"></div>

                <div className="relative z-10 flex items-center gap-3">
                  <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <div className="text-white">
                    <p className="font-semibold text-sm">GitHub</p>
                    <p className="text-xs text-zinc-400">@edwardsajaaa</p>
                  </div>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/edwardsajaaa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{
                  scale: 0.98,
                  x: [0, -2, 2, -2, 2, 0],
                  y: [0, 2, -2, 2, -2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center gap-3 p-5 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div
                  className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(253,29,29,0.5)] transition-all duration-300"
                  style={{
                    background: 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #833AB4, #FD1D1D, #F77737) border-box'
                  }}
                />

                <div className="relative z-10 flex items-center gap-3">
                  <Instagram className="w-6 h-6 text-[#FD1D1D] group-hover:text-white transition-colors" />
                  <div className="text-white">
                    <p className="font-semibold text-sm">Instagram</p>
                    <p className="text-xs text-zinc-400">@edwardsajaaa</p>
                  </div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/6289529175850"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{
                  scale: 0.98,
                  x: [0, -2, 2, -2, 2, 0],
                  transition: { duration: 0.3 }
                }}
                className="relative flex items-center gap-3 p-5 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group"
              >
                <div className="absolute inset-0 rounded-lg border-2 border-emerald-500/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all duration-300"></div>

                <div className="relative z-10 flex items-center gap-3">
                  <Phone className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
                  <div className="text-white">
                    <p className="font-semibold text-sm">WhatsApp</p>
                    <p className="text-xs text-zinc-400">+62 895 2917 5850</p>
                  </div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Achievement Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-12 py-12 border-y border-zinc-800"
        >
          {[
            { icon: Award, label: 'Awards' },
            { icon: Trophy, label: 'Projects' },
            { icon: Target, label: 'Goals' },
            { icon: Star, label: 'Reviews' }
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center gap-2 group"
            >
              <item.icon className="w-8 h-8 text-zinc-400 group-hover:text-white transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
