'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Gamepad2 } from 'lucide-react';

export function ProfileCard3D() {
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
