import React from 'react';
import HeroSection from './components/HeroSection';
import PetalCanvas from './components/PetalCanvas';
import Gallery from './components/Gallery';
import { HistorySection, FiguresSection, WeaponsSection } from './components/ContentSections';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero with immersive animated background */}
      <HeroSection />

      {/* Rich content sections */}
      <HistorySection />
      <FiguresSection />
      <WeaponsSection />

      {/* Artwork gallery */}
      <Gallery />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0a0c] py-10 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          Crafted with respect for tradition and a love of modern design.
        </div>
      </footer>

      {/* Additional petals very subtly for depth on long pages */}
      <div className="relative h-0">
        <PetalCanvas className="h-[150vh] opacity-60" />
      </div>
    </div>
  );
}
