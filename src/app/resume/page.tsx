'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Printer, FileText, Eye, Mail, Phone, MapPin, Linkedin, Github, Instagram } from 'lucide-react';
import { experienceData, educationData } from '@/data';

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState<'web' | 'pdf'>('web');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-200 py-10 px-4 md:px-8">
      {/* Top Floating Control Bar */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        {/* View Switcher Tabs */}
        <div className="flex items-center p-1 bg-zinc-900 border border-zinc-800 rounded-xl">
          <button
            onClick={() => setActiveTab('web')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'web'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Resume</span>
          </button>
          <button
            onClick={() => setActiveTab('pdf')}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 'pdf'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>PDF Preview</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all text-xs font-medium"
            title="Print Resume"
          >
            <Printer className="w-4 h-4" />
            <span className="hidden sm:inline">Print</span>
          </button>
          <a
            href="/CV_Edward_Benedict.pdf"
            download="CV_Edward_Benedict.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all text-xs font-semibold shadow-lg shadow-blue-500/25"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* Main Resume Container */}
      <div className="max-w-4xl mx-auto">
        {activeTab === 'web' ? (
          <div className="bg-zinc-900/60 border border-zinc-800/90 rounded-2xl p-6 sm:p-10 md:p-14 shadow-2xl backdrop-blur-md print:bg-white print:text-black print:p-0 print:border-none print:shadow-none">
            {/* Resume Header */}
            <header className="border-b border-zinc-800 pb-8 print:border-zinc-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white print:text-black">
                    Edward Benedict
                  </h1>
                  <p className="text-blue-400 font-medium text-sm mt-1 print:text-blue-700">
                    Informatics Engineering Student & Software / Game Developer
                  </p>
                </div>
              </div>

              {/* Contact Meta */}
              <div className="mt-4 flex flex-wrap gap-y-2 gap-x-5 text-xs text-zinc-400 print:text-zinc-600">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  Manado, North Sulawesi
                </span>
                <a href="tel:+6289529175850" className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  +62 895 2917 5850
                </a>
                <a href="mailto:edwardbene07@gmail.com" className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  edwardbene07@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-3 flex flex-wrap gap-4 text-xs">
                <a
                  href="https://www.linkedin.com/in/edwardbenedict"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0077B5]" />
                  <span>linkedin.com/in/edwardbenedict</span>
                </a>
                <a
                  href="https://github.com/edwardsajaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-zinc-400" />
                  <span>github.com/edwardsajaaa</span>
                </a>
                <a
                  href="https://instagram.com/edwardsajaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-zinc-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#FD1D1D]" />
                  <span>@edwardsajaaa</span>
                </a>
              </div>
            </header>

            {/* Summary */}
            <section className="py-7 border-b border-zinc-800/80 print:border-zinc-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-3 print:text-zinc-700">
                Summary
              </h2>
              <p className="text-sm text-zinc-300 leading-relaxed print:text-zinc-800">
                I am an undergraduate student of Informatics Engineering at Sam Ratulangi University. I am an
                organized, self-motivated, reliable, responsible, and hardworking person. I am a mature team worker
                and adaptable to all challenging situations. I can work well in a team environment as well as on my
                own initiative. I am able to work well under pressure and adhere to tight deadlines.
              </p>
            </section>

            {/* Education */}
            <section className="py-7 border-b border-zinc-800/80 print:border-zinc-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5 print:text-zinc-700">
                Education
              </h2>
              <div className="space-y-5">
                {educationData.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <div>
                      <h3 className="text-base font-semibold text-white print:text-black">
                        {edu.institution}
                      </h3>
                      <p className="text-sm text-zinc-300 print:text-zinc-700">
                        {edu.program}
                      </p>
                      {edu.detail && (
                        <p className="text-xs text-zinc-400 mt-1 print:text-zinc-600">
                          {edu.detail}
                        </p>
                      )}
                    </div>
                    <span className="text-xs font-mono text-zinc-500 whitespace-nowrap print:text-zinc-600">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Experience */}
            <section className="py-7 border-b border-zinc-800/80 print:border-zinc-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-5 print:text-zinc-700">
                Experience & Projects
              </h2>
              <div className="space-y-6">
                {experienceData.map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                      <div>
                        <h3 className="text-base font-semibold text-white print:text-black">
                          {item.role}
                        </h3>
                        <p className="text-xs text-blue-400 font-medium print:text-blue-700">
                          {item.company} {item.location ? `— ${item.location}` : ''}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-zinc-500 whitespace-nowrap print:text-zinc-600">
                        {item.period}
                      </span>
                    </div>

                    {item.points && (
                      <ul className="list-disc ml-5 space-y-1 text-xs text-zinc-300 print:text-zinc-800">
                        {item.points.map((pt, ptIdx) => (
                          <li key={ptIdx} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.technologies && item.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.technologies.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 border border-zinc-700/50 print:border-zinc-300 print:bg-zinc-100 print:text-black"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills & Competencies */}
            <section className="pt-7 grid sm:grid-cols-2 gap-6">
              {/* Hard Skills */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 print:text-zinc-700">
                  Technical Skills
                </h2>
                <ul className="space-y-1.5 text-xs text-zinc-300 print:text-zinc-800">
                  <li><strong>Languages:</strong> C#, C++, Python, JavaScript, Dart, ShaderLab, PHP</li>
                  <li><strong>Frameworks:</strong> Next.js, Vue.js, Flutter, Tailwind CSS</li>
                  <li><strong>Databases:</strong> PostgreSQL, MySQL, Oracle 21c, SQLite</li>
                  <li><strong>Tools & Engines:</strong> Unity Engine, Blender, Git, GitHub, Figma, VS Code</li>
                </ul>
              </div>

              {/* Soft Skills & Languages */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 print:text-zinc-700">
                  Soft Skills & Languages
                </h2>
                <ul className="space-y-1.5 text-xs text-zinc-300 print:text-zinc-800">
                  <li><strong>Leadership & Management:</strong> Strategic planning, team coordination, conflict resolution</li>
                  <li><strong>Personal:</strong> Adaptability, problem solving, critical thinking, work under pressure</li>
                  <li><strong>Languages:</strong> Indonesian (Native), English (Basic to Intermediate)</li>
                </ul>
              </div>
            </section>
          </div>
        ) : (
          /* PDF Viewer Embed */
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl p-2">
            <div className="p-3 bg-zinc-950 flex items-center justify-between border-b border-zinc-800 text-xs text-zinc-400">
              <span>Previewing: CV_Edward_Benedict.pdf</span>
              <a
                href="/CV_Edward_Benedict.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Open in new tab ↗
              </a>
            </div>
            <iframe
              src="/CV_Edward_Benedict.pdf#toolbar=1"
              className="w-full h-[900px] border-0 rounded-b-xl bg-white"
              title="Edward Benedict CV PDF"
            />
          </div>
        )}
      </div>
    </div>
  );
}
