'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Menu, Award, Trophy, Target, Star, Facebook, Instagram, Twitter, Linkedin, ChevronDown, Gamepad2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold tracking-wider">Edward Benedict</h1>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Menu"
        >
          <Menu className="w-6 h-6" />
        </motion.button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="container mx-auto px-8 pt-24 pb-20">
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
                className="pt-4"
              >
                <a
                  href="https://mail.google.com/mail/?view=cm&to=edwardbene07@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 underline transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  edwardbene07@gmail.com
                </a>
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

      {/* Resume Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <p className="text-sm text-zinc-400 tracking-widest uppercase flex items-center gap-2">
                <Star className="w-4 h-4" />
                TIMELINE & EXPERIENCE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">Work & Project Experience</h2>
            </div>

            {/* Timeline Experience */}
            <div className="max-w-4xl">
              <div className="space-y-12 relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-zinc-800"></div>
                
                {experienceData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-8 h-8 bg-[#0a0a0a] rounded-full border-2 border-zinc-700 flex items-center justify-center z-10">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.period.includes('Present')
                            ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.9)]'
                            : 'bg-zinc-500'
                        }`}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      {/* Period, Type & Company */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                            item.period.includes('Present')
                              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                              : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                          }`}
                        >
                          {item.period}
                        </span>
                        {item.type && (
                          <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300">
                            {item.type}
                          </span>
                        )}
                        <span className="text-sm font-semibold text-zinc-300">
                          • {item.company}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {item.role}
                      </h3>

                      {item.location && (
                        <p className="text-xs text-zinc-500">
                          {item.location}
                        </p>
                      )}

                      <p className="text-zinc-400 leading-relaxed max-w-2xl text-sm md:text-base">
                        {item.description}
                      </p>

                      {/* Tech stack pills */}
                      {item.technologies && item.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-1">
                          {item.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="text-xs px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800/80 text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Image if provided */}
                      {item.image && (
                        <div className="mt-4 rounded-xl overflow-hidden border border-zinc-800 relative aspect-video max-w-lg">
                          <Image
                            src={item.image}
                            alt={item.role}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Section - Below Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="pt-12"
            >
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm text-zinc-400 tracking-widest uppercase">Education</p>
                  <h3 className="text-3xl md:text-4xl font-bold">Academic Background</h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  {educationData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="group bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                            item.period.includes('Present')
                              ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                              : 'bg-zinc-800/80 border-zinc-700/50 text-zinc-400'
                          }`}>
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {item.institution}
                        </h4>
                        <p className="text-zinc-300 font-medium text-sm">{item.program}</p>
                      </div>
                      {item.detail && (
                        <p className="text-zinc-400 text-xs leading-relaxed pt-3 border-t border-zinc-800/80">
                          {item.detail}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Header */}
            <div className="space-y-4 mb-12">
              <p className="text-sm text-zinc-400 tracking-widest uppercase">My Top</p>
              <h2 className="text-4xl md:text-5xl font-bold">Skills.</h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Description */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-5 text-zinc-400 text-base leading-relaxed"
              >
                <p>
                  Saya memiliki keahlian utama di bidang game development, web development, dan mobile development. Berpengalaman membangun aplikasi interaktif, game 2D/3D, serta website dan aplikasi mobile modern dengan teknologi terkini.
                </p>
                <ul className="list-disc ml-5 space-y-2">
                  <li><b>Game Development & 3D:</b> Unity (C#), ShaderLab, Blender, gameplay mechanics, dan optimasi grafis.</li>
                  <li><b>Web Development:</b> JavaScript, Vue.js, Next.js, HTML5/CSS3, PHP, dan database modern.</li>
                  <li><b>Mobile Development:</b> Flutter & Dart, integrasi REST API, dan perancangan aplikasi responsif.</li>
                  <li><b>Data & Embedded Systems:</b> Python (NumPy, Pandas, scikit-learn), serta mikrokontroler (ESP32, Arduino).</li>
                </ul>
              </motion.div>

              {/* Right Column - GitHub Most Used Languages */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6 bg-zinc-900/40 p-6 md:p-8 rounded-2xl border border-zinc-800/80"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-sm font-semibold tracking-wider text-white">
                      Most Used Languages
                    </span>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">GitHub Stats</span>
                </div>

                {/* Combined Progress Bar (GitHub Style) */}
                <div className="w-full h-3 rounded-full overflow-hidden flex bg-zinc-800/80 gap-0.5 p-0.5">
                  {skillsData.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        width: `${skill.percentage}%`,
                        backgroundColor: skill.color,
                      }}
                      className="h-full first:rounded-l-full last:rounded-r-full"
                      title={`${skill.name}: ${skill.percentage}%`}
                    />
                  ))}
                </div>

                {/* Individual Language Progress Bars */}
                <div className="space-y-4 pt-1">
                  {skillsData.map((skill, index) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: skill.color }}
                          />
                          <span className="text-zinc-300 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-zinc-400 font-mono text-xs">{skill.percentage}%</span>
                      </div>
                      <div className="relative w-full h-1.5 bg-zinc-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 * index, ease: 'easeOut' }}
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Tech Arsenal Section from GitHub */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-16 pt-12 border-t border-zinc-800/80 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="space-y-1">
                  <p className="text-xs font-semibold tracking-widest text-red-400 uppercase flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    ARSENAL
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Technologies & Tools</h3>
                </div>
                <span className="text-xs text-zinc-500 font-mono">From GitHub Profile</span>
              </div>

              {/* Arsenal Badges Grid */}
              <div className="flex flex-wrap gap-2.5">
                {arsenalData.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/60 transition-all text-sm group"
                  >
                    <span className="text-zinc-200 font-medium group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-zinc-500 px-1.5 py-0.5 rounded bg-zinc-800/80 border border-zinc-700/50">
                      {item.category}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA & Testimonial Section */}
      <section className="py-20 bg-zinc-900/50 relative overflow-hidden">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
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
                {/* <p className="text-2xl font-semibold">www.DownloadNewThemes.com</p> */}
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
                  href="https://linkedin.com/in/your-profile"
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
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0077B5] to-[#00A0DC] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full bg-zinc-900 rounded-lg"></div>
                  </div>
                  <div className="absolute inset-0 rounded-lg border-2 border-[#0077B5]/50 group-hover:border-[#0077B5] group-hover:shadow-[0_0_20px_rgba(0,119,181,0.5)] transition-all duration-300"></div>
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <Linkedin className="w-6 h-6 text-[#0077B5] group-hover:text-white transition-colors" />
                    <div className="text-white">
                      <p className="font-semibold text-sm">LinkedIn</p>
                      <p className="text-xs text-zinc-400">Professional</p>
                    </div>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/your-username"
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
                      <p className="text-xs text-zinc-400">Projects</p>
                    </div>
                  </div>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://instagram.com/your-username"
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
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(253,29,29,0.5)] transition-all duration-300"
                       style={{ 
                         background: 'linear-gradient(#0a0a0a, #0a0a0a) padding-box, linear-gradient(135deg, #833AB4, #FD1D1D, #F77737) border-box'
                       }}></div>
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <Instagram className="w-6 h-6 text-[#FD1D1D] group-hover:text-white transition-colors" />
                    <div className="text-white">
                      <p className="font-semibold text-sm">Instagram</p>
                      <p className="text-xs text-zinc-400">Personal</p>
                    </div>
                  </div>
                </motion.a>

                {/* Twitter/X */}
                <motion.a
                  href="https://twitter.com/your-username"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ 
                    scale: 0.98,
                    x: [0, -2, 2, -2, 2, 0],
                    rotate: [0, -1, 1, -1, 1, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="relative flex items-center gap-3 p-5 bg-zinc-900/50 backdrop-blur-sm rounded-lg overflow-hidden group"
                >
                  <div className="absolute inset-0 rounded-lg border-2 border-blue-500/50 group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300"></div>
                  
                  <div className="relative z-10 flex items-center gap-3">
                    <Twitter className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors" />
                    <div className="text-white">
                      <p className="font-semibold text-sm">Twitter</p>
                      <p className="text-xs text-zinc-400">Updates</p>
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

    </div>
  );
}

function ProfileCard3D() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<{ left: number; top: number; width: number; height: number } | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-8deg', '8deg']);

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      rectRef.current = {
        left: rect.left,
        top: rect.top,
        width: rect.width,
        height: rect.height,
      };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    let rect = rectRef.current;
    if (!rect && cardRef.current) {
      rect = cardRef.current.getBoundingClientRect();
      rectRef.current = rect;
    }
    if (!rect || rect.width === 0 || rect.height === 0) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative lg:h-[600px] h-[500px] [perspective:1000px] flex items-center justify-center group select-none transform-gpu"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500/15 via-cyan-500/15 to-indigo-500/15 blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 -z-10 pointer-events-none transform-gpu"
      />

      {/* Main 3D Card */}
      <motion.div
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800/80 bg-zinc-900 shadow-2xl transition-shadow duration-300 group-hover:border-zinc-700/90 group-hover:shadow-[0_20px_50px_rgba(0,180,255,0.12)] transform-gpu will-change-transform"
      >
        {/* Profile photo */}
        <Image
          src="/Profil_baru.jpeg"
          alt="Edward Benedict"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          quality={85}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />

        {/* Soft gradient vignette at edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Badge 1: Game & XR Dev (Top Right) */}
        <div
          style={{ transform: 'translateZ(40px)' }}
          className="absolute top-4 right-4 bg-zinc-900/85 backdrop-blur-md border border-zinc-700/60 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-semibold text-zinc-200">Game & XR Dev</span>
        </div>

        {/* Floating Badge 2: UNSRAT Informatics (Bottom Left) */}
        <div
          style={{ transform: 'translateZ(40px)' }}
          className="absolute bottom-4 left-4 bg-zinc-900/85 backdrop-blur-md border border-zinc-700/60 px-3.5 py-2 rounded-xl flex items-center gap-2.5 shadow-lg"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
            <Gamepad2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-medium">Informatics</p>
            <p className="text-xs font-bold text-white">Sam Ratulangi Univ</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type?: string;
  location?: string;
  description: string;
  technologies?: string[];
  image?: string;
}

const experienceData: ExperienceItem[] = [
  {
    role: 'Teaching Assistant for Algorithms and Programming',
    company: 'Universitas Sam Ratulangi',
    period: 'Mar 2026 - Present',
    type: 'Part-time',
    location: 'Manado, North Sulawesi, Indonesia · On-site',
    description: 'Assisting lecturers in teaching algorithm and programming courses, guiding students during practical sessions, helping explain programming concepts, and supporting the evaluation of assignments and coding exercises.',
    technologies: ['Algorithms', 'Programming Logic', 'Code Review', 'Mentoring']
  },
  {
    role: 'Chairperson',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Feb 2026 - Present',
    type: 'Leadership',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: "Elected as the Chairman of UNITY (UNSRAT IT Community) for the 2026 period. Responsible for leading the organization's strategic direction, fostering a collaborative environment for IT enthusiasts, and driving innovative technology programs.",
    technologies: ['Strategic Planning', 'Leadership', 'Time Management', 'Community Building']
  },
  {
    role: 'Engineer Intern',
    company: 'PT PLN (Persero)',
    period: 'Dec 2025 - Feb 2026',
    type: 'Apprenticeship',
    location: 'Wanea, North Sulawesi, Indonesia · On-site',
    description: 'Terlibat dalam rekayasa perangkat lunak dan teknologi informasi di PT PLN (Persero), berkontribusi dalam perancangan, pengembangan sistem, serta pengujian solusi software enterprise.',
    technologies: ['Software Development', 'System Engineering', 'Enterprise IT']
  },
  {
    role: 'Project Manager (Game Programmer)',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Oct 2025 - Jan 2026',
    type: 'Project Management',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: 'Overseeing the planning and development of game projects using Unity Engine. Managing project timelines, coordinating programming team members, and ensuring technical milestones are met efficiently.',
    technologies: ['Project Management', 'Unity Engine', 'Game Programming', 'Team Coordination']
  },
  {
    role: 'Teaching Assistant (Teknologi Basis Data)',
    company: 'Universitas Sam Ratulangi',
    period: 'Oct 2025 - Nov 2025',
    type: 'Part-time',
    location: 'Manado, Sulawesi Utara, Indonesia · On-site',
    description: 'Praktikum Teknologi Basis Data untuk memberikan pemahaman mendalam mengenai implementasi dan manajemen basis data relasional dengan standar industri Oracle Database 21c (DDL, DML, hingga PL/SQL).',
    technologies: ['MySQL', 'Oracle Database 21c', 'PL/SQL', 'Database Management']
  },
  {
    role: 'Game Programming Division Coordinator',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Jan 2025 - Dec 2025',
    type: 'Coordinator',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: 'Leading and organizing the game programming division in developing projects using Unity Engine. Coordinating task distribution, monitoring progress, and ensuring gameplay mechanics meet project goals.',
    technologies: ['Game Programming', 'Unity Engine', 'Public Speaking', 'Time Management']
  },
  {
    role: 'National Ambassador Job Expo',
    company: 'Dealls – Jobs & Mentoring (YC W22)',
    period: 'Aug 2024 - Nov 2024',
    type: 'Internship',
    location: 'Indonesia · Remote',
    description: 'Selected as a National Ambassador for Dealls Job Expo (YC W22), actively connecting university students and talents with professional career opportunities, mentorship sessions, and industry networks.',
    technologies: ['Public Relations', 'Community Outreach', 'Networking', 'Communication']
  },
  {
    role: 'Member of Unity Engineer',
    company: 'UNSRAT IT Community (UNITY)',
    period: 'Feb 2024 - Dec 2024',
    type: 'Technical Member',
    location: 'Manado, North Sulawesi, Indonesia · Hybrid',
    description: 'Focused on game development using Unity Engine. Designed and implemented gameplay mechanics, interactive systems, game UI, and managed player and environment systems in Unity (C#).',
    technologies: ['Unity Engine', 'C#', 'Gameplay Mechanics', 'Game UI']
  }
];

interface EducationItem {
  institution: string;
  program: string;
  period: string;
  detail?: string;
}

const educationData: EducationItem[] = [
  {
    institution: 'Sam Ratulangi University',
    program: 'Bachelor of Informatics Engineering',
    period: '2023 - Present',
    detail: 'Faculty of Engineering · Focus on Software Engineering, Database Systems & Interactive Technology'
  },
  {
    institution: 'Senior High School 2 Manado',
    program: 'Natural Sciences (MIPA)',
    period: '2020 - 2023',
    detail: 'High School Diploma · Mathematics and Natural Science Track (SMA Negeri 2 Manado)'
  },
  {
    institution: 'Junior High School 2 Manado',
    program: 'General Education',
    period: '2017 - 2019',
    detail: 'Junior High School Diploma · Basic Sciences & General Studies (SMP Negeri 2 Manado)'
  }
];

interface LanguageStat {
  name: string;
  percentage: number;
  color: string;
}

const skillsData: LanguageStat[] = [
  { name: 'C#', percentage: 36.91, color: '#7B61FF' },
  { name: 'ShaderLab', percentage: 23.72, color: '#3A4B5C' },
  { name: 'CSS', percentage: 14.54, color: '#6B3BA6' },
  { name: 'Dart', percentage: 9.83, color: '#00B4AB' },
  { name: 'JavaScript', percentage: 8.69, color: '#F1E05A' },
  { name: 'Vue', percentage: 6.30, color: '#42B883' }
];

interface ArsenalItem {
  name: string;
  category: string;
}

const arsenalData: ArsenalItem[] = [
  // Game & 3D
  { name: 'Unity', category: 'Game Engine' },
  { name: 'C#', category: 'Language' },
  { name: 'C++', category: 'Language' },
  { name: 'ShaderLab', category: 'Graphics' },
  { name: 'Blender', category: '3D Art' },
  // Web & Frontend
  { name: 'HTML5', category: 'Web' },
  { name: 'CSS3', category: 'Web' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'PHP', category: 'Backend' },
  // Mobile
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Dart', category: 'Language' },
  // Databases
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MariaDB', category: 'Database' },
  // Tools & Version Control
  { name: 'Git', category: 'VCS' },
  { name: 'GitHub', category: 'Platform' },
  { name: 'Postman', category: 'API' },
  { name: 'Notion', category: 'Productivity' },
  { name: 'Markdown', category: 'Documentation' },
  { name: 'Terminal', category: 'CLI' },
  // Data Science & IoT
  { name: 'Python', category: 'Language' },
  { name: 'NumPy', category: 'Data Science' },
  { name: 'Pandas', category: 'Data Science' },
  { name: 'scikit-learn', category: 'Machine Learning' },
  { name: 'Arduino', category: 'IoT / Embedded' },
  { name: 'ESP32', category: 'IoT / Embedded' }
];

