import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Compass, Sparkles, Gauge, Zap, ShieldCheck } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function HeroSection({ onOpenGallery, onOpenTestDrive }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.95;
    }
  }, []);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
      soundFx.playClick(400);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
      soundFx.playClick(600);
    }
  };

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black"
    >
      {/* ── 1. Real Official BMW Cinematic Background Video ── */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
          style={{
            transform: `scale(1.05) translate(${mouseOffset.x * -15}px, ${mouseOffset.y * -15}px)`,
          }}
        >
          <source src="/assets/videos/bmw-hero-driving.webm" type="video/webm" />
        </video>

        {/* Cinematic Vignette Overlays matching official BMW aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
      </div>

      {/* ── 2. Top Spacer for Fixed Header ── */}
      <div className="h-28" />

      {/* ── 3. Main Hero Overlay Content (Matches official BMW site layout) ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto py-12">
        <div className="max-w-2xl">
          
          {/* Eyebrow: T H E  N E W */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="text-xs sm:text-sm font-bold tracking-[0.45em] text-white/90 uppercase font-display">
              T H E &nbsp; N E W
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0066B1] animate-pulse" />
          </motion.div>

          {/* Monumental Official Heading: i7 */}
          <motion.div
            style={{
              transform: `perspective(1000px) rotateY(${mouseOffset.x * 6}deg) rotateX(${-mouseOffset.y * 6}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.15s ease-out',
            }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-7xl sm:text-9xl md:text-[10rem] font-black tracking-tight text-white uppercase font-display leading-[0.85] select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            >
              i7
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.2em] text-white uppercase font-display mt-2"
            >
              LONG WHEELBASE
            </motion.div>
          </motion.div>

          {/* Pricing & Telemetry Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg text-slate-200 font-light"
          >
            Price starting at <span className="font-semibold text-white">₹2,03,00,000*</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-2 text-xs sm:text-sm text-slate-300 font-light max-w-lg leading-relaxed"
          >
            Electrified luxury in its purest architectural form. Featuring the illuminated BMW Iconic Glow kidney grille, Swarovski crystal headlights, and 31.3" 8K panoramic theatre screen.
          </motion.p>

          {/* CTA Action Buttons matching official BMW site */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {/* Outline "Know more" Button */}
            <button
              onClick={() => {
                soundFx.playClick(600);
                if (onOpenGallery) onOpenGallery();
              }}
              className="px-8 py-3.5 rounded-lg border border-white text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              Discover More
            </button>

            {/* Primary "Book Test Drive" Button */}
            <button
              onClick={() => {
                soundFx.playMotorSurge();
                if (onOpenTestDrive) onOpenTestDrive();
              }}
              className="px-8 py-3.5 rounded-lg bg-[#0066B1] hover:bg-[#0077cc] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(0,102,177,0.6)] hover:scale-105 flex items-center gap-2"
            >
              <span>Book a test drive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

        </div>
      </div>

      {/* ── 4. Bottom Controls & Telemetry Bar ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-8 z-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/15">
          
          {/* 3 Quick Performance Highlights */}
          <div className="grid grid-cols-3 gap-6 sm:gap-10">
            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                ACCELERATION
              </span>
              <div className="text-xl sm:text-2xl font-black font-mono text-white mt-0.5">
                4.7 s <span className="text-xs font-normal text-slate-400">0-100</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                PEAK POWER
              </span>
              <div className="text-xl sm:text-2xl font-black font-mono text-white mt-0.5">
                544 HP <span className="text-xs font-normal text-[#38bdf8]">xDrive</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold tracking-wider">
                WLTP RANGE
              </span>
              <div className="text-xl sm:text-2xl font-black font-mono text-[#38bdf8] mt-0.5">
                625 km
              </div>
            </div>
          </div>

          {/* Official BMW Video Playback Controls (Matches bottom right in screenshot) */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleVideoPlay}
              className="p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white transition-all hover:scale-110 shadow-lg backdrop-blur-md flex items-center justify-center"
              title={isVideoPlaying ? 'Pause Video' : 'Play Video'}
            >
              {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-[#0066B1]" />}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
