'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Menu, Award, Trophy, Target, Star, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

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
      <section className="min-h-screen flex items-center">
        <div className="container mx-auto px-8 pt-24">
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

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative lg:h-[600px] h-[500px]"
            >
              <div className="relative w-full h-full bg-zinc-800 rounded-lg overflow-hidden">
                {/* Profile photo */}
                <Image
                  src="/Profil_baru.jpeg"
                  alt="Profile Photo"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20">
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
                TIMELINE
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">Our journey</h2>
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
                    <div className="absolute left-0 top-0 w-8 h-8 bg-white rounded-full border-4 border-[#0a0a0a] flex items-center justify-center z-10">
                      {index === 1 && (
                        <div className="absolute inset-0 rounded-full border-2 border-zinc-600"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {item.company}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed max-w-2xl">
                        {item.description}
                      </p>
                      
                      {/* Image for specific items */}
                      {item.image && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="mt-6 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 h-64 relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/30 via-blue-400/50 to-blue-600"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <div className="text-6xl font-bold text-white">CONCEPT</div>
                          </div>
                        </motion.div>
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
                      className="group bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all"
                    >
                      <div className="space-y-3">
                        <div className="text-sm text-zinc-500">{item.period}</div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-zinc-300 transition-colors">
                          {item.institution}
                        </h4>
                        <p className="text-zinc-400 text-sm">{item.program}</p>
                      </div>
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
                className="space-y-4 text-zinc-400 text-base leading-relaxed"
              >
                <p>
                  Saya memiliki keahlian utama di bidang game development, web development, dan mobile development. Berpengalaman membangun aplikasi interaktif, game 2D/3D, serta website dan aplikasi mobile modern dengan teknologi terkini.
                </p>
                <ul className="list-disc ml-5 space-y-1">
                  <li><b>Game Development:</b> Unity (C#), animasi, scripting, deployment multi-platform, serta AR/XR.</li>
                  <li><b>Web Development:</b> Next.js, React, backend API, database modern, dan UI/UX responsif.</li>
                  <li><b>Mobile Development:</b> Flutter, React Native, integrasi API, dan publikasi ke Play Store/App Store.</li>
                </ul>
              </motion.div>

              {/* Right Column - Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {skillsData.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-400 text-sm font-medium">{skill.name}</span>
                      <span className="text-white text-sm font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="relative w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + (0.1 * index), ease: "easeOut" }}
                        className="absolute top-0 left-0 h-full bg-white rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
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

const experienceData = [
  {
    company: 'All started here',
    description: 'Everything starts with an idea. A spark that we just could not stop thinking about building.',
    image: false
  },
  {
    company: 'First concept',
    description: 'Turning ideas into visual reality. Our first mockups brought the vision to life.',
    image: true
  },
  {
    company: 'When things got serious',
    description: 'Went from just an idea to actually building something real. The journey from concept to execution.',
    image: false
  }
];

const educationData = [
  {
    institution: 'Manado Junior High School 2',
    program: 'IPA',
    period: '2017 - 2019'
  },
  {
    institution: 'Senior High School 2 Manado',
    program: 'MIPA',
    period: '2020 - 2023'
  },
  {
    institution: 'SAM RATULANGI UNIVERSITY',
    program: 'Informatics',
    period: '2023 - Present'
  }
];

const skillsData = [
  { name: 'Unity (C#)', percentage: 90 },
  { name: 'Python', percentage: 80 },
  { name: 'MongoDB, PostgreSQL, MySQL, Firebase, Supabase', percentage: 90 },
  { name: 'Unity XR, ARCore, ARKit, WebXR', percentage: 85 }
];

