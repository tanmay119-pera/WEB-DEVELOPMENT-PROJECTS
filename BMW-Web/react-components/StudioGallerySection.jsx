import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Sparkles, ChevronLeft, ChevronRight, Check, Palette, ArrowRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

const COLOR_VARIANTS = [
  {
    id: 'oxide-grey',
    name: 'Oxide Grey Metallic (Two-Tone)',
    tag: 'Executive Showroom',
    colorHex: '#9ca3af',
    roofHex: '#111215',
    image: '/assets/images/bmw-color-grey.jpg',
    headline: 'PURE ARCHITECTURAL SERENITY',
    description: 'Two-Tone Oxide Grey Metallic with high-gloss obsidian roof. Accented with the monumental illuminated BMW Iconic Glow double kidney grille and 21-inch aerodynamic turbine wheels.',
    paintCode: 'BMW Individual C4A',
    finish: 'Metallic Gloss',
  },
  {
    id: 'night-city',
    name: 'Midnight Blue — Night City Edition',
    tag: 'Urban Nocturnal',
    colorHex: '#1a3050',
    roofHex: '#0a0e14',
    image: '/assets/images/bmw-night-city.jpg',
    headline: 'NOCTURNAL METROPOLITAN DOMINANCE',
    description: 'Deep midnight blue metallic reflects the neon-soaked urban landscape. Rain-kissed surfaces create prismatic light refractions across the sculpted bodywork.',
    paintCode: 'BMW Individual B12',
    finish: 'Deep Metallic',
  },
  {
    id: 'velvet-orchid',
    name: 'Two-Tone Velvet Orchid / Obsidian Black',
    tag: 'Flagship Signature',
    colorHex: '#8e627d',
    roofHex: '#090a0d',
    image: '/assets/images/bmw-hero-4k.jpg',
    headline: 'BESPOKE CONTRAST SCULPTURE',
    description: 'High-contrast Velvet Orchid lower body divided by precision coachlines from the Obsidian Black hood and greenhouse.',
    paintCode: 'BMW Individual Velvet Special',
    finish: 'Deep Metallic Dual-Tone',
  },
  {
    id: 'dravit-grey',
    name: 'Dravit Grey Metallic M-Sport',
    tag: 'M-Sport Presence',
    colorHex: '#2b2e35',
    roofHex: '#18191c',
    image: '/assets/images/bmw-color-white.jpg',
    headline: 'DYNAMIC METALLIC FLAKE PIGMENTATION',
    description: 'Golden mineral flakes suspended in deep grey lacquer shimmer under direct light. M-Sport aerodynamic enhancements.',
    paintCode: 'BMW Individual C36',
    finish: 'Mineral Flake Metallic',
  },
  {
    id: 'rear-night',
    name: 'Black Sapphire — Crimson Signature',
    tag: 'LED Lightbar Night',
    colorHex: '#0c0c0e',
    roofHex: '#0c0c0e',
    image: '/assets/images/bmw-rear-taillights.jpg',
    headline: 'CONTINUOUS CRIMSON LED SIGNATURE',
    description: 'A razor-thin crimson LED strip spans the full width of the trunk creating an unmistakable light identity. Black Sapphire finish absorbs all ambient light.',
    paintCode: 'BMW M 475',
    finish: 'Mirror Gloss Metallic',
  },
  {
    id: 'highway-silver',
    name: 'Silver Metallic — Alpine Edition',
    tag: 'Mountain Highway',
    colorHex: '#b0b5bd',
    roofHex: '#787c84',
    image: '/assets/images/bmw-highway-speed.jpg',
    headline: 'ALPINE VELOCITY IN MOTION',
    description: 'Silver Metallic glints under twilight Alpine skies, carving through mountain passes with rear-axle steering and two-axle air suspension.',
    paintCode: 'BMW A83',
    finish: 'Classic Metallic',
  },
  {
    id: 'front-illumination',
    name: 'Iconic Glow Front Illumination',
    tag: 'Swarovski Crystal',
    colorHex: '#e2e8f0',
    roofHex: '#090a0d',
    image: '/assets/images/bmw-front-4k.jpg',
    headline: 'CRYSTALLINE LIGHTING ARCHITECTURE',
    description: 'Head-on showcasing the illuminated kidney contour and razor-thin split Swarovski crystal daytime running lamps.',
    paintCode: 'Iconic Glow Light Suite',
    finish: 'Illuminated Architecture',
  },
  {
    id: 'interior-theatre',
    name: 'Executive First-Class Theatre',
    tag: '31.3" 8K Display',
    colorHex: '#8B4513',
    roofHex: '#1e2026',
    image: '/assets/images/bmw-interior-theatre.jpg',
    headline: 'FIRST-CLASS REAR ENTERTAINMENT',
    description: '31.3-inch 8K panoramic theatre screen unfolds from the headliner above Tartufo Merino massage seats with Sky Lounge starlight fiber optic roof.',
    paintCode: 'BMW Individual Merino VAU',
    finish: 'Leather & Crystal',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function StudioGallerySection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const currentVariant = COLOR_VARIANTS[selectedIdx];

  const handleNext = () => {
    soundFx.playClick(620);
    setSelectedIdx((prev) => (prev + 1) % COLOR_VARIANTS.length);
  };

  const handlePrev = () => {
    soundFx.playClick(500);
    setSelectedIdx((prev) => (prev - 1 + COLOR_VARIANTS.length) % COLOR_VARIANTS.length);
  };

  const handleSelect = (idx) => {
    soundFx.playClick(580);
    setSelectedIdx(idx);
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative py-28 bg-[#040507] overflow-hidden border-t border-white/10 noise-overlay"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-[#0066B1]/10 blur-[190px] pointer-events-none" />

      {/* Animated section divider line */}
      <div className="absolute top-0 left-0 right-0 section-divider-glow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Section Header with Staggered Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066B1] shadow-[0_0_10px_#0066B1] animate-pulse-glow" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0066B1] uppercase font-display">
                BMW COLOR & FINISH SHOWROOM
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl font-black uppercase font-display text-white tracking-tight"
            >
              EXPLORE BMW i7{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#0066B1]">
                IN EVERY FINISH
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-slate-300 text-sm sm:text-base max-w-xl mt-2 font-light">
              Swipe through 8 authentic exterior lacquers, crystal lighting, and first-class interior configurations.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold font-mono tracking-widest text-slate-300"
          >
            <Palette className="w-4 h-4 text-[#0066B1]" />
            <span>
              FINISH <span className="text-white">{selectedIdx + 1}</span> / {COLOR_VARIANTS.length}
            </span>
          </motion.div>
        </div>

        {/* Master Showcase Card */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-3xl border border-white/20 bg-gradient-to-b from-[#0e121c] via-[#080a12] to-[#040507] p-4 sm:p-8 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)] hover:border-[#0066B1]/40 transition-colors duration-500"
        >
          {/* Main Visual Display */}
          <div className="relative w-full h-[420px] sm:h-[580px] rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center">
            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/80 hover:bg-[#0066B1] border border-white/20 text-white transition-all hover:scale-110 shadow-2xl magnetic-btn"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/80 hover:bg-[#0066B1] border border-white/20 text-white transition-all hover:scale-110 shadow-2xl magnetic-btn"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Animated Image Crossfade */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentVariant.id}
                initial={{ opacity: 0, scale: 0.96, rotateY: -5 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotateY: 5 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full flex items-center justify-center relative"
              >
                <img
                  src={currentVariant.image}
                  alt={currentVariant.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-5 left-5 sm:top-6 sm:left-6 px-4 py-1.5 rounded-full bg-black/85 border border-white/15 backdrop-blur-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0066B1] animate-pulse" />
                  <span className="text-xs font-bold font-display uppercase tracking-widest text-white">
                    {currentVariant.tag}
                  </span>
                </div>

                {/* Bottom Paint Code */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 px-3.5 py-1.5 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md">
                  <span className="text-[11px] font-mono text-slate-300 font-semibold">
                    {currentVariant.paintCode} • {currentVariant.finish}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <motion.div
                key={currentVariant.id + '-text'}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-2 text-[#0066B1] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-mono font-bold uppercase tracking-widest">
                    {currentVariant.headline}
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-black uppercase font-display text-white tracking-wide">
                  {currentVariant.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-2 leading-relaxed">
                  {currentVariant.description}
                </p>
              </motion.div>
            </div>

            {/* Color Swatches */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                Select Finish:
              </span>
              <div className="flex items-center gap-2.5 flex-wrap">
                {COLOR_VARIANTS.map((item, idx) => {
                  const isSelected = idx === selectedIdx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelect(idx)}
                      title={item.name}
                      className={`relative w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 flex items-center justify-center ${
                        isSelected
                          ? 'ring-2 ring-[#0066B1] ring-offset-2 ring-offset-black scale-110 shadow-[0_0_20px_rgba(0,102,177,0.9)]'
                          : 'opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{
                        background:
                          item.roofHex !== item.colorHex
                            ? `linear-gradient(135deg, ${item.colorHex} 50%, ${item.roofHex} 50%)`
                            : item.colorHex,
                        border: '1.5px solid rgba(255,255,255,0.4)',
                      }}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Marquee Text Ticker */}
        <div className="mt-12 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#040507] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#040507] to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <span
                key={i}
                className="text-6xl sm:text-7xl font-black uppercase font-display text-white/[0.04] tracking-tight mx-8 select-none"
              >
                THE FORWARDISM • BMW i7 xDRIVE60 • ELECTRIFIED LUXURY • ICONIC GLOW •
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
