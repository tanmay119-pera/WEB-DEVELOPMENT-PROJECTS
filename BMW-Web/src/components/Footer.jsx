import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUp, Sparkles, ExternalLink, ShieldCheck, Zap, Lock, BookOpen, CheckCircle2 } from 'lucide-react';
import BmwLogo from './BmwLogo';
import { soundFx } from '../utils/audio';
import { AUTHOR_PROVENANCE } from '../utils/authorVerification';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Footer({ onOpenTestDrive }) {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: '-80px' });

  const scrollToTop = () => {
    soundFx.playClick(600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const marqueeItems = [
    'THE FORWARDISM',
    'SHEER DRIVING PLEASURE',
    'BMW i7 xDRIVE60',
    '544 HORSEPOWER',
    '625 KM WLTP RANGE',
    '31.3" 8K THEATRE SCREEN',
    'CARBON CORE CHASSIS',
    'SWAROVSKI CRYSTAL DRLs',
    'ICONIC GLOW GRILLE',
    'HANS ZIMMER SOUNDSCAPES',
  ];

  return (
    <footer ref={footerRef} className="relative bg-black text-white pt-0 pb-12 border-t border-white/10 overflow-hidden noise-overlay">
      {/* Animated Glow Divider */}
      <div className="section-divider-glow" />

      {/* High-Speed Kinetic Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-5 border-b border-white/10 bg-white/[0.02]">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
        <div className="flex whitespace-nowrap animate-marquee-fast">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-6 mx-4">
              <span className="text-xl sm:text-2xl font-black font-display tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-white to-slate-500">
                {text}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#0066B1] shadow-[0_0_8px_#0066B1]" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Links with Staggered Fade-In */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Brand Col */}
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="drop-shadow-[0_0_15px_rgba(0,102,177,0.4)] transition-transform hover:scale-105">
                <BmwLogo className="w-11 h-11" />
              </div>
              <span className="text-xl font-bold font-display uppercase tracking-widest text-white">
                BMW <span className="text-[#38bdf8]">7 SERIES</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-light max-w-sm leading-relaxed">
              The flagship generation of electrified mobility. Unrivaled sanctuary, Hans Zimmer acoustic soundscapes, and forward-thinking luxury design.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  soundFx.playMotorSurge();
                  if (onOpenTestDrive) onOpenTestDrive();
                }}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-[#0066B1] border border-white/20 hover:border-transparent text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg magnetic-btn"
              >
                Experience BMW i7 Today
              </button>
            </div>
          </motion.div>

          {/* Col 2 */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 mb-4">
              Electric Lineup
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li><a href="#specs" className="hover:text-[#38bdf8] transition-colors">BMW i7 eDrive50</a></li>
              <li><a href="#specs" className="hover:text-[#38bdf8] transition-colors">BMW i7 xDrive60</a></li>
              <li><a href="#specs" className="hover:text-[#38bdf8] transition-colors">BMW i7 M70 xDrive</a></li>
              <li><a href="#specs" className="hover:text-[#38bdf8] transition-colors">BMW 740i Mild Hybrid</a></li>
              <li><a href="#specs" className="hover:text-[#38bdf8] transition-colors">BMW 760i xDrive V8</a></li>
            </ul>
          </motion.div>

          {/* Col 3 */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 mb-4">
              Innovations
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li><a href="#anatomy" className="hover:text-[#38bdf8] transition-colors">CFRP Carbon Core</a></li>
              <li><a href="#anatomy" className="hover:text-[#38bdf8] transition-colors">5th-Gen eDrive Motors</a></li>
              <li><a href="#interior" className="hover:text-[#38bdf8] transition-colors">31.3" 8K Theatre Screen</a></li>
              <li><a href="#performance" className="hover:text-[#38bdf8] transition-colors">Hans Zimmer IconicSounds</a></li>
              <li><a href="#anatomy" className="hover:text-[#38bdf8] transition-colors">Level 3 Personal Pilot</a></li>
            </ul>
          </motion.div>

          {/* Col 4 */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-mono uppercase font-bold tracking-widest text-slate-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li><a href="#hero" className="hover:text-[#38bdf8] transition-colors">Hero Overview</a></li>
              <li><a href="#gallery" className="hover:text-[#38bdf8] transition-colors">Color Showroom</a></li>
              <li><a href="#anatomy" className="hover:text-[#38bdf8] transition-colors">Real Engineering</a></li>
              <li><a href="#performance" className="hover:text-[#38bdf8] transition-colors">Dynamic Road Test</a></li>
              <li><a href="#interior" className="hover:text-[#38bdf8] transition-colors">Cockpit Sanctuary</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Educational Purpose Notice & Cryptographic Salted Authorship Attribution */}
        <motion.div
          variants={itemVariants}
          className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#0d121f] via-[#090d16] to-[#04060a] border border-[#0066B1]/30 shadow-[0_10px_35px_rgba(0,102,177,0.15)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066B1]/10 blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066B1]/20 border border-[#0066B1]/50 text-[#38bdf8] text-[11px] font-mono font-bold uppercase tracking-wider">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Educational Purpose Only</span>
                </span>

                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-emerald-400 text-[10px] font-mono tracking-wider">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Salted SHA-256 Verified: {AUTHOR_PROVENANCE.saltSignature}</span>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {AUTHOR_PROVENANCE.purpose}
              </p>

              <p className="text-[11px] text-slate-400 font-light">
                This project is an independent conceptual web application created strictly for non-commercial academic research, interface design experimentation, and educational demonstration. All BMW trademarks, brand logos, and model names belong to Bayerische Motoren Werke (BMW) AG.
              </p>
            </div>

            {/* Author Credit Badge */}
            <div className="p-4 rounded-xl bg-black/70 border border-white/10 flex flex-col gap-1 min-w-[240px]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Author & Concept Architecture
              </span>
              <span className="text-sm font-bold font-mono text-white tracking-wide">
                {AUTHOR_PROVENANCE.author}
              </span>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#38bdf8] mt-1 pt-1 border-t border-white/10">
                <Lock className="w-3 h-3" />
                <span>Salt-Encoded Provenance Sealed</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <p className="text-[11px] font-mono text-slate-400">
              © {new Date().getFullYear()} BMW AG. Concept showcase for BMW 7 Series Facelift & i7 G70 EV.
            </p>
            <p className="text-[10px] font-mono text-slate-500 mt-0.5">
              Developed by {AUTHOR_PROVENANCE.author} • Non-Commercial Educational Prototype.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-[#0066B1]/20 border border-white/10 hover:border-[#0066B1]/50 text-xs font-mono text-slate-300 hover:text-white transition-all shadow-md magnetic-btn flex-shrink-0"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#0066B1]" />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
