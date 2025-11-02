import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import PetalCanvas from './PetalCanvas';

export default function HeroSection() {
  const [offset, setOffset] = useState(0);
  const layerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0b0b0d]">
      {/* Subtle animated gradient backdrop */}
      <div
        ref={layerRef}
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 600px at 10% 10%, rgba(190, 0, 10, 0.25), transparent 60%), radial-gradient(900px 600px at 90% 30%, rgba(255, 215, 0, 0.18), transparent 60%), radial-gradient(800px 800px at 50% 100%, rgba(255, 0, 55, 0.15), transparent 60%)',
          transform: `translateY(${offset * -0.08}px)`,
          transition: 'transform 0.2s ease-out',
        }}
        aria-hidden
      />

      {/* Decorative rising sun behind silhouette */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[70vh] w-[70vh] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(220,0,30,0.4), rgba(120,0,15,0.15) 60%, transparent 70%)',
          filter: 'blur(12px)',
          transform: `translateY(${offset * 0.05}px)`,
        }}
        aria-hidden
      />

      {/* Petals */}
      <PetalCanvas />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-['Mona_Sans',Inter,system-ui] text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-7xl"
        >
          The Way of the Samurai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="mt-5 max-w-2xl text-lg text-zinc-300 sm:text-xl"
        >
          Immerse yourself in the mystique, honor, and artistry of Japan's legendary warriors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#history"
            className="rounded-full bg-gradient-to-r from-red-700 to-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-red-900/40 ring-1 ring-red-500/50 transition hover:from-red-600 hover:to-red-500 hover:shadow-red-800/50"
          >
            Explore the Legacy
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-amber-500/40 bg-amber-500/10 px-6 py-3 text-base font-semibold text-amber-300/90 backdrop-blur-sm transition hover:bg-amber-500/20"
          >
            View the Gallery
          </a>
        </motion.div>
      </div>

      {/* Stylized samurai composition */}
      <SamuraiSilhouette scrollOffset={offset} />
    </section>
  );
}

function SamuraiSilhouette({ scrollOffset = 0 }) {
  // Simple vector-based samurai with armor + katana, animated subtly
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-1/2 z-[1] h-[72vh] -translate-x-1/2 select-none opacity-90"
      viewBox="0 0 600 800"
      style={{ transform: `translate(-50%, 0) translateY(${scrollOffset * 0.06}px)` }}
      aria-hidden
    >
      <defs>
        <linearGradient id="armor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1f1f26" />
          <stop offset="100%" stopColor="#0f0f14" />
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd66b" />
          <stop offset="100%" stopColor="#caa03a" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Kabuto helmet */}
      <g filter="url(#glow)">
        <path d="M300 140c70 0 120 40 140 90-45-10-100 0-140 20-40-20-95-30-140-20 20-50 70-90 140-90z" fill="url(#armor)" />
        {/* Maedate crest */}
        <path d="M300 110c20-40 60-70 100-80-25 30-45 70-50 110-20-10-35-20-50-30z" fill="url(#gold)" opacity="0.9" />
        <path d="M300 110c-20-40-60-70-100-80 25 30 45 70 50 110 20-10 35-20 50-30z" fill="url(#gold)" opacity="0.9" />
      </g>

      {/* Do chest armor */}
      <rect x="210" y="230" width="180" height="160" rx="14" fill="url(#armor)" stroke="#caa03a" strokeOpacity="0.5" />
      {/* Sode shoulder guards */}
      <rect x="150" y="240" width="60" height="120" rx="10" fill="url(#armor)" opacity="0.95" />
      <rect x="390" y="240" width="60" height="120" rx="10" fill="url(#armor)" opacity="0.95" />

      {/* Kusazuri skirt */}
      <g fill="url(#armor)">
        <rect x="200" y="390" width="40" height="120" />
        <rect x="245" y="390" width="40" height="120" />
        <rect x="290" y="390" width="40" height="120" />
        <rect x="335" y="390" width="40" height="120" />
        <rect x="380" y="390" width="40" height="120" />
      </g>

      {/* Katana with subtle sway */}
      <g>
        <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="-3 480 500" to="3 480 500" dur="6s" repeatCount="indefinite" values="-3 480 500;3 480 500;-3 480 500" keyTimes="0;0.5;1" />
        <rect x="475" y="500" width="10" height="180" fill="#22232a" />
        <rect x="470" y="480" width="120" height="8" rx="4" fill="#caa03a" />
        <rect x="470" y="480" width="120" height="3" rx="2" fill="#ffe39a" opacity="0.8" />
      </g>

      {/* Stand/base with reflection */}
      <ellipse cx="300" cy="650" rx="210" ry="28" fill="rgba(0,0,0,0.5)" />
    </svg>
  );
}
