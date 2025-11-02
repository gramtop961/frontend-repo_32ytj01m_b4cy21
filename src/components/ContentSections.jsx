import React from 'react';
import { motion } from 'framer-motion';

export function SectionWrapper({ id, title, kicker, children }) {
  return (
    <section id={id} className="relative scroll-mt-24 bg-[#0a0a0c] py-20 text-zinc-200">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {kicker && (
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-300">
              <span>{kicker}</span>
            </div>
          )}
          <h2 className="mt-4 font-['Mona_Sans',Inter,system-ui] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {children}
        </div>
      </div>
    </section>
  );
}

export function HistorySection() {
  return (
    <SectionWrapper id="history" title="Origins and Code" kicker="History">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="md:col-span-7"
      >
        <p className="leading-relaxed text-zinc-300">
          Emerging in the late Heian period and flourishing through the Sengoku and Edo eras, samurai defined Japan’s political and cultural landscape. Their ethos was shaped by <span className="text-amber-300">Bushidō</span>—the “way of the warrior”—emphasizing loyalty, discipline, and honor unto death. Beyond the battlefield, samurai studied poetry, ink painting, and philosophy, embodying a union of martial prowess and refined artistry.
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-3 text-zinc-300 sm:grid-cols-2">
          <li className="rounded-lg border border-red-900/30 bg-red-900/10 p-4">
            • Emergence of warrior clans and shogunal rule
          </li>
          <li className="rounded-lg border border-red-900/30 bg-red-900/10 p-4">
            • Codification of Bushidō across schools and domains
          </li>
          <li className="rounded-lg border border-red-900/30 bg-red-900/10 p-4">
            • Influence on literature, tea ceremony, and Zen aesthetics
          </li>
          <li className="rounded-lg border border-red-900/30 bg-red-900/10 p-4">
            • Transition from mounted archer to sword-bearing retainer
          </li>
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.1, duration: 0.7, ease: 'easeOut' }}
        className="md:col-span-5"
      >
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6 shadow-2xl">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" aria-hidden />
          <h3 className="text-xl font-semibold text-amber-300">Bushidō Virtues</h3>
          <div className="mt-4 grid grid-cols-2 gap-3 text-zinc-200">
            {['Rectitude','Courage','Benevolence','Respect','Honesty','Honor','Loyalty'].map((v) => (
              <div key={v} className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3">
                {v}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}

export function FiguresSection() {
  const figures = [
    {
      name: 'Miyamoto Musashi',
      desc: 'Peerless swordsman and strategist, author of The Book of Five Rings.',
    },
    {
      name: 'Tomoe Gozen',
      desc: 'Legendary onna-bugeisha celebrated for valor and mastery of the bow and sword.',
    },
    {
      name: 'Oda Nobunaga',
      desc: 'Daimyō who ignited the unification of Japan with bold tactics and innovation.',
    },
    {
      name: 'Uesugi Kenshin',
      desc: 'The Dragon of Echigo, famed rival of Takeda Shingen and paragon of warrior virtue.',
    },
  ];
  return (
    <SectionWrapper id="figures" title="Famous Figures" kicker="Icons of the Age">
      <div className="md:col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {figures.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="group relative overflow-hidden rounded-2xl border border-red-800/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-6"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-red-700/20 blur-3xl transition group-hover:scale-110" aria-hidden />
            <h3 className="text-xl font-semibold text-white">{f.name}</h3>
            <p className="mt-2 text-zinc-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function WeaponsSection() {
  const weapons = [
    {
      name: 'Katana',
      detail: 'Curved, single-edged sword—an emblem of the samurai spirit and craftsmanship.',
    },
    {
      name: 'Yumi',
      detail: 'Asymmetrical longbow used by mounted archers in early samurai warfare.',
    },
    {
      name: 'Naginata',
      detail: 'Polearm with a curved blade, versatile in reach and control.',
    },
    {
      name: 'Yari',
      detail: 'Straight-bladed spear favored for formation combat.',
    },
  ];

  return (
    <SectionWrapper id="weapons" title="Traditional Weapons" kicker="Arms & Craft">
      <div className="md:col-span-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {weapons.map((w, i) => (
          <motion.div
            key={w.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05, duration: 0.6 }}
            className="relative overflow-hidden rounded-xl border border-amber-500/30 bg-gradient-to-br from-zinc-900 to-zinc-950 p-5"
          >
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rotate-12 rounded-full bg-amber-500/10 blur-3xl" aria-hidden />
            <h4 className="text-lg font-semibold text-amber-300">{w.name}</h4>
            <p className="mt-2 text-zinc-300">{w.detail}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
