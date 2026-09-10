'use client';

import { motion } from 'framer-motion';
import { skillsData, arsenalData } from '@/data';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
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
  );
}
