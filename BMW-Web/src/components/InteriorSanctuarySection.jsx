import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Tv,
  Sparkles,
  Volume2,
  Film,
  SunDim,
  Star,
  Gem,
  Palette,
  Armchair,
} from 'lucide-react';
import { soundFx } from '../utils/audio';

/* ─────────────────────────────────────────────
   Animation Variants
   ───────────────────────────────────────────── */

const sectionFade = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const labelReveal = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/* ─────────────────────────────────────────────
   Luxury Feature Data
   ───────────────────────────────────────────── */

const LUXURY_FEATURES = [
  {
    id: 'theatre-screen',
    title: '31.3" 8K Theatre Screen',
    subtitle: 'REAR ENTERTAINMENT',
    description:
      'Ultra-wide 32:9 aspect ratio display with Amazon Fire TV integration and Dolby Vision HDR. Cinema-grade visuals for the ultimate private viewing experience.',
    image: '/assets/images/bmw-interior-theatre.jpg',
    icon: Tv,
    accentColor: '#A855F7',
    stat: '8K',
    statLabel: 'Resolution',
  },
  {
    id: 'bw-surround',
    title: 'Bowers & Wilkins Diamond 4D Surround',
    subtitle: '36 SPEAKERS • 1,965W',
    description:
      '36 hand-tuned diamond-dome tweeters with 4D bass exciters integrated into seat backrests for tactile acoustic immersion.',
    image: null,
    icon: Volume2,
    accentColor: '#0066B1',
    stat: '1,965',
    statLabel: 'Watts',
  },
  {
    id: 'starlight-roof',
    title: 'Sky Lounge Panoramic Starlight Roof',
    subtitle: 'AMBIENT CONSTELLATION',
    description:
      'Over 15,000 laser-etched points of light create a bespoke starfield pattern across the full glass panoramic roof with six selectable lighting themes.',
    image: null,
    icon: Star,
    accentColor: '#F59E0B',
    stat: '15K+',
    statLabel: 'Star Points',
  },
  {
    id: 'executive-seating',
    title: 'Executive Lounge Seating with Massage',
    subtitle: 'FIRST-CLASS COMFORT',
    description:
      'Power-adjustable rear seats recline up to 42.5° with integrated calf rests, 10-program massage, ventilation, and Merino leather headrests.',
    image: null,
    icon: Armchair,
    accentColor: '#10B981',
    stat: '42.5°',
    statLabel: 'Max Recline',
  },
  {
    id: 'crystal-idrive',
    title: 'Crystal Glass iDrive Controller',
    subtitle: 'CRAFTED PRECISION',
    description:
      'Hand-cut Swarovski crystal elements adorn the iDrive rotary controller, gear selector, start/stop button, and volume dial — a tactile masterpiece.',
    image: null,
    icon: Gem,
    accentColor: '#06B6D4',
    stat: '∞',
    statLabel: 'Crystal Facets',
  },
  {
    id: 'ambient-lighting',
    title: 'Ambient Lighting',
    subtitle: '15+ COLORS • INTERACTION BAR',
    description:
      'Multifaceted crystalline BMW Interaction Bar extends across the dashboard with dynamic, customizable ambient backlighting in over 15 color themes.',
    image: null,
    icon: Palette,
    accentColor: '#EC4899',
    stat: '15+',
    statLabel: 'Colors',
  },
];

/* ─────────────────────────────────────────────
   3D Tilt Feature Card Component
   ───────────────────────────────────────────── */

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playClick(440 + index * 40);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const Icon = feature.icon;

  return (
    <motion.div
      ref={cardRef}
      variants={cardReveal}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 800,
        transformStyle: 'preserve-3d',
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className={`relative h-full rounded-2xl border bg-gradient-to-br from-[#0a0c14] via-[#080a10] to-[#040507] overflow-hidden transition-shadow duration-500 ${
          isHovered
            ? 'border-[#0066B1]/60 shadow-[0_0_40px_rgba(0,102,177,0.35),0_0_80px_rgba(0,102,177,0.15)]'
            : 'border-white/10 shadow-xl'
        }`}
      >
        {/* Glow border overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${feature.accentColor}15 0%, transparent 50%, ${feature.accentColor}10 100%)`,
          }}
        />

        {/* Image section (if image exists) */}
        {feature.image && (
          <div className="relative w-full h-44 overflow-hidden">
            <motion.img
              src={feature.image}
              alt={feature.title}
              loading="lazy"
              animate={{ scale: isHovered ? 1.12 : 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040507] via-[#040507]/40 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 p-6 ${feature.image ? 'pt-0 -mt-6' : ''}`}>
          {/* Icon + Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${feature.accentColor}20` }}
            >
              <Icon
                className="w-4 h-4"
                style={{ color: feature.accentColor }}
              />
            </div>
            <span
              className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold"
              style={{ color: feature.accentColor }}
            >
              {feature.subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white text-base sm:text-lg font-extrabold uppercase font-display tracking-wide leading-tight mb-2">
            {feature.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-xs leading-relaxed font-light mb-4">
            {feature.description}
          </p>

          {/* Stat Pill */}
          <div className="flex items-end gap-2">
            <span
              className="text-2xl font-extrabold font-display"
              style={{ color: feature.accentColor }}
            >
              {feature.stat}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-mono font-bold pb-1">
              {feature.statLabel}
            </span>
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
          style={{
            background: `linear-gradient(90deg, transparent, ${feature.accentColor}, transparent)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section Component
   ───────────────────────────────────────────── */

export default function InteriorSanctuarySection() {
  const [theatreModeActive, setTheatreModeActive] = useState(false);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cockpitRef = useRef(null);
  const gridRef = useRef(null);

  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isCockpitInView = useInView(cockpitRef, { once: true, amount: 0.2 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.1 });

  const toggleTheatreMode = () => {
    const nextState = !theatreModeActive;
    setTheatreModeActive(nextState);
    if (nextState) {
      soundFx.playMotorSurge();
    } else {
      soundFx.playClick(480);
    }
  };

  return (
    <section
      id="interior"
      ref={sectionRef}
      className="relative py-28 bg-[#040507] overflow-hidden border-t border-white/10"
    >
      {/* ── Background Ambience ── */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          theatreModeActive ? 'bg-[#020106]' : 'bg-[#040507]'
        }`}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#0066B1]/8 blur-[200px] pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isSectionInView ? { opacity: 0.6 } : { opacity: 0 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute bottom-1/4 left-1/6 w-[400px] h-[400px] bg-purple-600/6 blur-[160px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ══════════════════════════════════════════
            Section Header
            ══════════════════════════════════════════ */}
        <motion.div
          ref={headerRef}
          variants={staggerContainer}
          initial="hidden"
          animate={isHeaderInView ? 'visible' : 'hidden'}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <motion.div
              variants={labelReveal}
              className="flex items-center gap-2 mb-3"
            >
              <span className="w-2 h-2 rounded-full bg-[#0066B1] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#0066B1] font-bold">
                FIRST-CLASS EXECUTIVE SANCTUARY
              </span>
            </motion.div>

            <motion.h2
              variants={headingReveal}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase font-display text-white leading-[1.1]"
            >
              INTERIOR{' '}
              <span className="bg-gradient-to-r from-[#0066B1] via-[#3399DD] to-[#0066B1] bg-clip-text text-transparent">
                SANCTUARY
              </span>
            </motion.h2>

            <motion.p
              variants={cardReveal}
              className="text-slate-400 text-sm sm:text-base max-w-xl mt-4 font-light leading-relaxed"
            >
              A meticulous composition of hand-finished Merino leather, crystalline
              glass controls, and a 31.3″ 8K Theatre Screen — the BMW i7 interior
              transcends automotive convention.
            </motion.p>
          </div>

          {/* Theatre Mode Toggle */}
          <motion.div variants={cardReveal} className="mt-8 md:mt-0">
            <button
              onClick={toggleTheatreMode}
              className={`px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-500 border font-display ${
                theatreModeActive
                  ? 'bg-gradient-to-r from-purple-700 via-[#0066B1] to-purple-700 text-white border-transparent shadow-[0_0_40px_rgba(0,102,177,0.6)]'
                  : 'bg-white/5 hover:bg-white/10 text-white border-white/20 shadow-lg hover:shadow-[0_0_25px_rgba(0,102,177,0.2)]'
              }`}
            >
              <Film
                className={`w-4 h-4 ${
                  theatreModeActive ? 'animate-spin-slow text-white' : ''
                }`}
              />
              <span>
                {theatreModeActive
                  ? 'Theatre Mode Active'
                  : 'Activate 31" Theatre'}
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            Cockpit Hero Image
            ══════════════════════════════════════════ */}
        <motion.div
          ref={cockpitRef}
          variants={imageReveal}
          initial="hidden"
          animate={isCockpitInView ? 'visible' : 'hidden'}
          className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a0c14] via-[#060810] to-[#040507] p-2 sm:p-4 overflow-hidden shadow-2xl mb-20"
        >
          {/* Cockpit Image */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-black/60">
            <motion.img
              src="/assets/images/bmw-cockpit-4k.jpg"
              alt="BMW 7 Series Cockpit — Curved Display and Two-Spoke Steering Wheel"
              className={`w-full max-h-[580px] object-cover rounded-xl transition-all duration-700 ${
                theatreModeActive
                  ? 'brightness-[0.65] contrast-125 saturate-[1.1]'
                  : ''
              }`}
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Theatre Mode Ambient Overlay */}
            <AnimatePresence>
              {theatreModeActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.55 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#0066B1]/40 via-purple-900/25 to-transparent pointer-events-none mix-blend-screen"
                />
              )}
            </AnimatePresence>

            {/* 31.3" 8K Theatre Screen Drop-Down */}
            <AnimatePresence>
              {theatreModeActive && (
                <motion.div
                  initial={{ y: -220, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -220, opacity: 0, scale: 0.9 }}
                  transition={{
                    type: 'spring',
                    damping: 22,
                    stiffness: 90,
                    mass: 1.2,
                  }}
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[78%] max-w-2xl rounded-2xl bg-black/95 border-2 border-[#0066B1]/50 p-4 sm:p-6 shadow-[0_0_60px_rgba(0,102,177,0.5)] z-30 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Tv className="w-4 h-4 text-[#0066B1]" />
                      <span className="text-xs font-mono text-[#3399DD] font-bold uppercase tracking-[0.2em]">
                        BMW THEATRE SCREEN • 31.3″ 8K
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 font-bold">
                      DOLBY ATMOS 4D
                    </span>
                  </div>

                  <div className="relative aspect-[32/9] rounded-xl overflow-hidden bg-gradient-to-r from-[#040507] via-[#0a1628] to-[#040507] border border-white/5 flex items-center justify-center text-center p-4">
                    <motion.img
                      src="/assets/images/bmw-interior-theatre.jpg"
                      alt="BMW Theatre Screen Experience"
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                      loading="lazy"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                    <div className="relative z-10">
                      <h4 className="text-lg sm:text-2xl font-extrabold text-white font-display uppercase tracking-[0.15em]">
                        PRIVATE REAR CINEMA
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 font-light">
                        Amazon Fire TV • 36 Bowers & Wilkins Diamond Speakers
                        (1,965W)
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-3"
            >
              <Sparkles className="w-4 h-4 text-[#0066B1]" />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0066B1] font-bold">
                  BMW INTERACTION BAR
                </p>
                <p className="text-[9px] text-slate-400 font-light">
                  Crystalline Glass Dashboard
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quick Feature Pills Below Cockpit */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isCockpitInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4"
          >
            {[
              {
                icon: Sparkles,
                label: 'BMW Interaction Bar',
                desc: 'Crystalline glass surface with dynamic ambient backlighting.',
                color: '#06B6D4',
              },
              {
                icon: SunDim,
                label: 'Two-Spoke Steering Wheel',
                desc: 'Hand-stitched leather with vertical crystal center spoke.',
                color: '#F59E0B',
              },
              {
                icon: Volume2,
                label: 'Bowers & Wilkins 4D',
                desc: '36 speakers with bass exciters for tactile acoustic resonance.',
                color: '#A855F7',
              },
            ].map((pill) => (
              <motion.div
                key={pill.label}
                variants={cardReveal}
                whileHover={{
                  scale: 1.02,
                  borderColor: `${pill.color}40`,
                  boxShadow: `0 0 20px ${pill.color}15`,
                }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <pill.icon
                    className="w-4 h-4"
                    style={{ color: pill.color }}
                  />
                  <span
                    className="text-xs font-mono uppercase font-bold tracking-[0.15em]"
                    style={{ color: pill.color }}
                  >
                    {pill.label}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {pill.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            Luxury Feature Grid
            ══════════════════════════════════════════ */}
        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={isGridInView ? 'visible' : 'hidden'}
        >
          {/* Grid Section Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            className="mb-12 text-center"
          >
            <motion.span
              variants={labelReveal}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#0066B1] font-bold block mb-3"
            >
              CURATED LUXURY APPOINTMENTS
            </motion.span>
            <motion.h3
              variants={headingReveal}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase font-display text-white"
            >
              THE{' '}
              <span className="bg-gradient-to-r from-[#0066B1] to-[#3399DD] bg-clip-text text-transparent">
                EXPERIENCE
              </span>{' '}
              WITHIN
            </motion.h3>
            <motion.div
              variants={cardReveal}
              className="w-20 h-[2px] bg-gradient-to-r from-transparent via-[#0066B1] to-transparent mx-auto mt-5"
            />
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isGridInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {LUXURY_FEATURES.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </motion.div>
        </motion.div>

        {/* ══════════════════════════════════════════
            Bottom Cinematic Divider
            ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 h-px bg-gradient-to-r from-transparent via-[#0066B1]/40 to-transparent"
        />
      </div>
    </section>
  );
}
