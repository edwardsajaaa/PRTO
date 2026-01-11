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
          <h1 className="text-2xl font-bold tracking-wider">PORTFOLIO</h1>
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
                  I Create Digital<br />Future.
                </h2>
              </div>

              <div className="space-y-4 text-zinc-400 text-base leading-relaxed max-w-lg">
                <p>
                  Passion saya adalah menciptakan produk digital yang berdampak dan mudah digunakan. Saya selalu berusaha menggabungkan kreativitas, teknologi, dan user experience dalam setiap project yang saya kerjakan.
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
                  href="mailto:hi@domain.com" 
                  className="text-white hover:text-zinc-300 transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  hi@domain.com
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
                  src="/PROFIL.jpeg"
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
            className="space-y-12"
          >
            {/* Section Header */}
            <div className="space-y-4">
              <p className="text-sm text-zinc-400 tracking-widest uppercase">Experience & Education</p>
              <h2 className="text-4xl md:text-5xl font-bold">My Resume</h2>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Experience Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-semibold mb-8">Experience</h3>
                <div className="space-y-8">
                  {experienceData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-zinc-300 transition-colors">
                          {item.company}
                        </h4>
                        <span className="text-sm text-zinc-500">{item.period}</span>
                      </div>
                      <p className="text-zinc-400 text-sm">{item.position}</p>
                      <div className="h-px bg-zinc-800 mt-6"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <h3 className="text-2xl font-semibold mb-8">Education</h3>
                <div className="space-y-8">
                  {educationData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="group"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-white group-hover:text-zinc-300 transition-colors">
                          {item.institution}
                        </h4>
                        <span className="text-sm text-zinc-500">{item.period}</span>
                      </div>
                      <p className="text-zinc-400 text-sm">{item.program}</p>
                      <div className="h-px bg-zinc-800 mt-6"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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
                  Pellentesque magna magna semper dignibus felis nisl orci etiam.
                  Nulla. Pellentesque habitant morbi tristique senectus et netus
                  malesuada fames ac turpis egestas.
                </p>
                <p>
                  Nullam ac dui eget turpis pulvinar porta et at libero. Morbi
                  hendrerit justo ac tortor pellentesque dictum.
                </p>
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
                Need help with professional<br />
                support? Let's work together!
              </h2>
              <div className="space-y-3">
                <a 
                  href="mailto:info@domain.com" 
                  className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  info@domain.com
                </a>
                <p className="text-2xl font-semibold">www.DownloadNewThemes.com</p>
              </div>
            </motion.div>

            {/* Right - Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 text-black"
            >
              <h3 className="text-2xl font-bold mb-4">What Are Clients Saying?</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                Don etlentesque magna magna semper dignibus felis nisl orci etiam.
                Neco etiam risus morbi. Tristique senectus et netus malesuada fames
                ac turpis egestas. Nullam nisl muis ehmet metus sit turpis dictum.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center overflow-hidden">
                  <span className="text-lg font-semibold text-zinc-600">EB</span>
                </div>
                <div>
                  <p className="font-semibold">Emily Brown</p>
                  <p className="text-sm text-zinc-500">Project Owner</p>
                </div>
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

      {/* Footer */}
      <footer className="bg-zinc-950 py-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Get in touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-semibold mb-2">Get in touch</h4>
              <a href="mailto:info@domain.com" className="text-zinc-400 text-sm hover:text-white transition-colors">
                info@domain.com
              </a>
            </motion.div>

            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-2">Locations</h4>
              <p className="text-zinc-400 text-sm">San Francisco — California</p>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 md:justify-end"
            >
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-full flex items-center justify-center transition-colors"
                  aria-label={`Social ${index + 1}`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const experienceData = [
  {
    company: 'H&M Space Inc.',
    position: 'UI/UX Designer',
    period: '2020 - Present'
  },
  {
    company: 'Robinhood Inc.',
    position: 'Web Developer',
    period: '2018 - 2020'
  },
  {
    company: 'Rosan Software Inc.',
    position: 'Senior Developer',
    period: '2015 - 2018'
  }
];

const educationData = [
  {
    institution: 'Stanford University',
    program: 'of California',
    period: '2013 - 2016'
  },
  {
    institution: 'Specialization Course',
    program: 'MIT University',
    period: '2011 - 2013'
  },
  {
    institution: 'Local High School',
    program: 'San Francisco',
    period: '2009 - 2011'
  }
];

const skillsData = [
  { name: 'Design', percentage: 90 },
  { name: 'Branding', percentage: 80 },
  { name: 'Web Design', percentage: 95 },
  { name: 'Social Media', percentage: 85 }
];

