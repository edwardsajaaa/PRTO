'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { experienceData, educationData } from '@/data';

export function ExperienceSection() {
  return (
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
  );
}
