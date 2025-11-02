import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1668261200441-95a4667b1720?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYW11cmFpJTIwYXJtb3IlMjBpbiUyMGRyYW1hdGljfGVufDB8MHx8fDE3NjIwOTQ3Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Samurai armor in dramatic light',
  },
  {
    src: 'https://images.unsplash.com/photo-1668261200441-95a4667b1720?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYW11cmFpJTIwYXJtb3IlMjBpbiUyMGRyYW1hdGljfGVufDB8MHx8fDE3NjIwOTQ3Mzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Temple with red torii and mist',
  },
  {
    src: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?q=80&w=1887&auto=format&fit=crop',
    alt: 'Cherry blossoms at dusk',
  },
  {
    src: 'https://images.unsplash.com/photo-1761205403571-d108936e4b91?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGVycnklMjBibG9zc29tcyUyMGF0JTIwZHVza3xlbnwwfDB8fHwxNzYyMDk0NzM4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Traditional samurai sword detail',
  },
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1887&auto=format&fit=crop',
    alt: 'Golden light over Japanese mountains',
  },
  {
    src: 'https://images.unsplash.com/photo-1545104578-2cc1ae6e74fc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkZW4lMjBsaWdodCUyMG92ZXIlMjBKYXBhbmVzZXxlbnwwfDB8fHwxNzYyMDk0NzM5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Koi pond reflections',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#0a0a0c] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-700/40 bg-red-800/20 px-3 py-1 text-sm font-medium text-red-200">
            Captivating Artwork
          </div>
          <h2 className="mt-4 font-['Mona_Sans',Inter,system-ui] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Gallery
          </h2>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent p-4 text-sm text-zinc-200">
                {img.alt}
              </figcaption>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
