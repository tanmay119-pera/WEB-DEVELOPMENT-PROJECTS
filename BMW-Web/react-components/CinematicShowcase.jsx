import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Compass, Zap, ShieldCheck, Eye, Film, Layers, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

const SCENES = [
  {
    id: 'neon-charge',
    number: '01',
    chapter: 'BMW i7 #BORNELECTRIC',
    title: 'HIGH-POWERED DC RAPID CHARGING',
    location: 'BMW HIGH-POWER HUB • 195 kW DC FAST CHARGING',
    image: '/assets/images/bmw-neon-charge.jpg',
    description:
      'The BMW i7 xDrive60 connected via high-power DC rapid charger with illuminated charging status port. Delivering up to 195 kW DC charging speed, recharging from 10% to 80% capacity in just 34 minutes.',
    stats: [
      { label: 'CHARGING SPEED', value: '195 kW DC' },
      { label: '10% TO 80%', value: '34 Minutes' },
      { label: 'RANGE GAINED', value: '170 km in 10m' },
    ],
    accent: '#0066B1',
    glowColor: 'rgba(0,102,177,0.35)',
  },
  {
    id: 'night-city',
    number: '02',
    chapter: 'TOKYO NOCTURNE',
    title: 'NOCTURNAL METROPOLITAN COMMAND',
    location: 'SHINJUKU BOULEVARD • RAIN REFLECTIONS',
    image: '/assets/images/bmw-night-city.jpg',
    description:
      'Illuminated Iconic Glow kidney contours and Swarovski crystal daytime running lamps carve through midnight rain. Dual electric motors deliver 544 horsepower of instantaneous silent surge.',
    stats: [
      { label: 'PEAK OUTPUT', value: '544 HP' },
      { label: 'INSTANT TORQUE', value: '745 Nm' },
      { label: '0–100 KM/H', value: '4.7 Seconds' },
    ],
    accent: '#38bdf8',
    glowColor: 'rgba(56,189,248,0.35)',
  },
  {
    id: 'monaco-villa',
    number: '03',
    chapter: 'MONACO SANCTUARY',
    title: 'MEDITERRANEAN ARCHITECTURAL GRACE',
    location: 'MONACO CLIFFSIDE VILLA • TWILIGHT HORIZON',
    image: '/assets/images/bmw-monaco-villa.jpg',
    description:
      'Resting beside an illuminated infinity pool as the Mediterranean sunset fades to deep violet and amber. The long 5.39-meter executive wheelbase reflects pure architectural symmetry.',
    stats: [
      { label: 'WHEELBASE', value: '3,215 mm' },
      { label: 'OVERALL LENGTH', value: '5,391 mm' },
      { label: 'AERODYNAMIC DRAG', value: '0.24 Cd' },
    ],
    accent: '#f59e0b',
    glowColor: 'rgba(245,158,11,0.35)',
  },
  {
    id: 'highway-speed',
    number: '04',
    chapter: 'ALPINE VELOCITY',
    title: 'HIGH-ALTITUDE SUMMIT PASS',
    location: 'SWISS ALPS • AUTONOMIC CRUISE',
    image: '/assets/images/bmw-highway-speed.jpg',
    description:
      'Gliding through high mountain passes with adaptive two-axle air suspension and Integral Active Steering. Rear wheels steer up to 3.5 degrees for sports-car agility in an executive limousine.',
    stats: [
      { label: 'WLTP RANGE', value: '625 km' },
      { label: 'STEERING ANGLE', value: '±3.5° Rear' },
      { label: 'AIR SUSPENSION', value: 'Two-Axle Self-Level' },
    ],
    accent: '#0066B1',
    glowColor: 'rgba(0,102,177,0.35)',
  },
  {
    id: 'rear-taillights',
    number: '05',
    chapter: 'CRIMSON SIGNATURE',
    title: 'FULL-WIDTH 3D LED LIGHTBAR',
    location: 'NIGHTTIME PROMENADE • DARK HARBOR',
    image: '/assets/images/bmw-rear-taillights.jpg',
    description:
      'An ultra-thin horizontal crimson LED ribbon spans the rear trunk deck. Integrated with dark chrome M-Performance aerodynamic diffusers to guide clean airflow off the trailing edge.',
    stats: [
      { label: 'TAILLIGHT SPAN', value: 'Full Width 3D' },
      { label: 'AERO PROFILE', value: 'M Sport Diffuser' },
      { label: 'LIGHT ELEMENTS', value: 'OLED Precision' },
    ],
    accent: '#ef4444',
    glowColor: 'rgba(239,68,68,0.35)',
  },
  {
    id: 'interior-theatre',
    number: '06',
    chapter: '8K THEATRE LOUNGE',
    title: 'FIRST-CLASS PRIVATE SCREENING',
    location: 'EXECUTIVE REAR CABIN • 32:9 PANORAMA',
    image: '/assets/images/bmw-interior-theatre.jpg',
    description:
      'The ceiling-mounted 31.3-inch 8K BMW Theatre Screen folds gracefully down. Tartufo Merino leather lounge seating and 36 Bowers & Wilkins Diamond 4D speakers create an acoustic concert hall.',
    stats: [
      { label: 'DISPLAY SIZE', value: '31.3" 8K (32:9)' },
      { label: 'AUDIO SYSTEM', value: '36 Spk / 1,965W' },
      { label: 'ROOF AMBIENCE', value: 'Sky Lounge Starlight' },
    ],
    accent: '#a855f7',
    glowColor: 'rgba(168,85,247,0.35)',
  },
];

// Single Parallax Scroll Card
function ParallaxSceneCard({ scene, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scroll parallax tracking for image inside container
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const cardScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.94, 1, 1, 0.96]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      style={{ scale: cardScale }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl border border-white/15 bg-gradient-to-b from-[#0e121c] via-[#080a12] to-[#040507] p-4 sm:p-7 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9)] group"
    >
      {/* 3D Parallax Tilt Container */}
      <motion.div
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 4}deg) rotateX(${-mousePos.y * 4}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.15s ease-out',
        }}
        className="relative w-full h-[420px] sm:h-[560px] md:h-[620px] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl"
      >
        {/* Parallax Moving Image */}
        <motion.div
          style={{ y: imageY }}
          className="absolute -top-[10%] -bottom-[10%] left-0 right-0 w-full h-[120%]"
        >
          <img
            src={scene.image}
            alt={scene.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </motion.div>

        {/* Cinematic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none z-[1]" />

        {/* Top Header Badge */}
        <div className="absolute top-5 left-5 sm:top-8 sm:left-8 z-20 flex items-center gap-3">
          <div className="px-4 py-2 rounded-full bg-black/85 border border-white/15 backdrop-blur-md flex items-center gap-2.5 shadow-lg">
            <span
              className="w-2.5 h-2.5 rounded-full animate-pulse shadow-md"
              style={{ backgroundColor: scene.accent }}
            />
            <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
              CHAPTER {scene.number}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-[11px] font-bold font-display uppercase tracking-wider text-slate-300">
              {scene.chapter}
            </span>
          </div>
        </div>

        {/* Top Right Location Tag */}
        <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/10 backdrop-blur-md">
          <span className="text-[10px] font-mono font-semibold text-slate-300 uppercase tracking-wider">
            {scene.location}
          </span>
        </div>

        {/* Bottom Hero Overlay */}
        <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 max-w-3xl">
          <div className="inline-block mb-2">
            <span
              className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md"
              style={{ color: scene.accent }}
            >
              {scene.chapter}
            </span>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase font-display text-white tracking-tight leading-tight drop-shadow-md">
            {scene.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-2xl drop-shadow-sm">
            {scene.description}
          </p>

          {/* Telemetry Metric Cards */}
          <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3 max-w-xl">
            {scene.stats.map((s, si) => (
              <div
                key={si}
                className="p-3 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md flex flex-col justify-between hover:border-white/40 transition-colors"
              >
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                  {s.label}
                </span>
                <span className="text-xs sm:text-base font-bold font-mono text-white mt-0.5">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function CinematicShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('scroll'); // 'scroll' (parallax feed) or 'theater' (single stage)
  const headerRef = useRef(null);

  const activeScene = SCENES[activeTab];

  const handleTabClick = (idx) => {
    soundFx.playClick(550 + idx * 40);
    setActiveTab(idx);
  };

  const handleNext = () => {
    soundFx.playClick(620);
    setActiveTab((prev) => (prev + 1) % SCENES.length);
  };

  const handlePrev = () => {
    soundFx.playClick(500);
    setActiveTab((prev) => (prev - 1 + SCENES.length) % SCENES.length);
  };

  return (
    <section
      id="cinematic"
      className="relative py-28 sm:py-36 bg-[#040507] overflow-hidden border-t border-white/10"
    >
      {/* Dynamic Ambient Background Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[#0066B1]/10 blur-[220px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 mb-4 backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066B1] animate-pulse shadow-[0_0_10px_#0066B1]" />
              <span className="text-xs font-bold tracking-[0.25em] text-[#0066B1] uppercase font-display">
                CINEMATIC WORLDS • 6 BESPOKE ATMOSPHERES
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-display text-white tracking-tight leading-tight"
            >
              BMW i7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#0066B1]">CINEMATIC JOURNEY</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3 text-sm sm:text-base text-slate-300 font-light max-w-xl leading-relaxed"
            >
              Scroll through 6 high-definition environments created for the BMW i7 — from neon-drenched charging plazas and Tokyo rain to Monaco sunsets and private 8K cinema.
            </motion.p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                soundFx.playClick(600);
                setViewMode('scroll');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                viewMode === 'scroll'
                  ? 'bg-[#0066B1] border-[#0066B1] text-white shadow-[0_0_18px_rgba(0,102,177,0.6)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>SCROLL FEED (6 SCENES)</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick(650);
                setViewMode('theater');
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider border transition-all ${
                viewMode === 'theater'
                  ? 'bg-[#0066B1] border-[#0066B1] text-white shadow-[0_0_18px_rgba(0,102,177,0.6)]'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>THEATER STAGE</span>
            </button>
          </div>
        </div>

        {/* MODE 1: BUTTERY-SMOOTH PARALLAX SCROLL FEED (6 SCENES) */}
        {viewMode === 'scroll' && (
          <div className="space-y-12 sm:space-y-16">
            {SCENES.map((scene, idx) => (
              <ParallaxSceneCard key={scene.id} scene={scene} index={idx} />
            ))}
          </div>
        )}

        {/* MODE 2: CINEMATIC THEATER STAGE WITH QUICK TAB SCRUBBING */}
        {viewMode === 'theater' && (
          <div className="relative w-full rounded-3xl border border-white/20 bg-gradient-to-b from-[#0e121c] via-[#080a12] to-[#040507] p-4 sm:p-7 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
            
            {/* Main Stage Screen */}
            <div className="relative w-full h-[420px] sm:h-[580px] md:h-[640px] rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-2xl">
              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/80 hover:bg-[#0066B1] border border-white/20 text-white transition-all hover:scale-110 shadow-2xl backdrop-blur-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/80 hover:bg-[#0066B1] border border-white/20 text-white transition-all hover:scale-110 shadow-2xl backdrop-blur-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScene.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={activeScene.image}
                    alt={activeScene.title}
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 flex items-center gap-3">
                    <div className="px-4 py-2 rounded-full bg-black/85 border border-white/15 backdrop-blur-md flex items-center gap-2.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full animate-pulse"
                        style={{ backgroundColor: activeScene.accent }}
                      />
                      <span className="text-xs font-mono font-bold text-white uppercase tracking-widest">
                        SCENE {activeScene.number} • {activeScene.chapter}
                      </span>
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 z-20 max-w-2xl">
                    <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase font-display text-white tracking-tight drop-shadow-lg">
                      {activeScene.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-200 font-light leading-relaxed drop-shadow-md">
                      {activeScene.description}
                    </p>

                    <div className="mt-5 grid grid-cols-3 gap-2.5 sm:gap-3">
                      {activeScene.stats.map((s, si) => (
                        <div
                          key={si}
                          className="p-3 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md flex flex-col"
                        >
                          <span className="text-[9px] font-mono uppercase text-slate-400 font-bold">
                            {s.label}
                          </span>
                          <span className="text-xs sm:text-sm font-bold font-mono text-white mt-0.5">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom 6 Chapter Thumbnails */}
            <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {SCENES.map((scene, idx) => {
                const isSelected = idx === activeTab;
                return (
                  <button
                    key={scene.id}
                    onClick={() => handleTabClick(idx)}
                    className={`p-3 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white/15 border-white/40 shadow-[0_0_20px_rgba(0,102,177,0.4)] scale-105'
                        : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className="text-[10px] font-mono font-bold"
                        style={{ color: isSelected ? scene.accent : '#64748b' }}
                      >
                        {scene.number}
                      </span>
                      {isSelected && (
                        <span
                          className="w-2 h-2 rounded-full animate-ping"
                          style={{ backgroundColor: scene.accent }}
                        />
                      )}
                    </div>
                    <span className="text-[11px] font-bold uppercase font-display text-white line-clamp-1">
                      {scene.chapter}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
