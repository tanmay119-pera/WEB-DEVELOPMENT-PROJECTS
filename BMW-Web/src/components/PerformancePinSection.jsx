import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Zap, Wind, Sparkles, Radio, ChevronLeft, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

const SLIDES = [
  {
    badge: 'BMW i7 M70 xDRIVE • 660 HP • 1,100 Nm',
    title: 'EXECUTIVE DRIVE PRO',
    desc: 'Active roll stabilization continuously adapts using electromechanical anti-roll bars. Integral Active Steering delivers effortless precision at any velocity.',
    image: '/assets/images/bmw-driving-4k.jpg',
    imageAlt: 'BMW i7 M70 High-Performance Driving',
    wide: true,
    metrics: [
      { label: 'Torque Instant', value: '1,100 Nm', color: 'text-white' },
      { label: '0-100 KM/H', value: '3.7 s', color: 'text-[#38bdf8]' },
      { label: 'Top Speed', value: '250 km/h', color: 'text-white' },
    ],
  },
  {
    badge: 'NIGHT CITY PRESENCE • TOKYO EDITION',
    title: 'NOCTURNAL DOMINANCE',
    desc: 'The BMW i7 commands every metropolitan landscape. Rain-soaked neon reflections dance across the deep metallic finish as the illuminated kidney contour pierces the darkness.',
    image: '/assets/images/bmw-night-city.jpg',
    imageAlt: 'BMW i7 in Tokyo Night City Rain',
    wide: true,
    metrics: [
      { label: 'Iconic Glow', value: 'Illuminated', color: 'text-[#38bdf8]' },
      { label: 'Visibility', value: '360° Sensors', color: 'text-emerald-400' },
      { label: 'Autonomous', value: 'SAE Level 3', color: 'text-white' },
    ],
  },
  {
    badge: 'ALPINE VELOCITY • MOUNTAIN ROADS',
    title: 'DYNAMIC HANDLING BRILLIANCE',
    desc: 'Rear-axle steering delivers a turning circle comparable to compact sedans, while two-axle air suspension absorbs every Alpine contour in executive composure.',
    image: '/assets/images/bmw-highway-speed.jpg',
    imageAlt: 'BMW 7 Series on Alpine Mountain Highway',
    wide: true,
    metrics: [
      { label: 'Rear Steering', value: '±3.5°', color: 'text-[#38bdf8]' },
      { label: 'Air Suspension', value: 'Two-Axle Adaptive', color: 'text-white' },
      { label: 'Road Scan', value: 'Forward Camera', color: 'text-emerald-400' },
    ],
  },
  {
    badge: 'CRIMSON SIGNATURE • NIGHTTIME',
    title: 'CONTINUOUS LED LIGHTBAR',
    desc: 'A slim, razor-thin crimson LED strip spans the full width of the trunk, creating an unmistakable light signature visible from over 800 meters at night.',
    image: '/assets/images/bmw-rear-taillights.jpg',
    imageAlt: 'BMW 7 Series Rear LED Taillights at Night',
    wide: true,
    metrics: [
      { label: 'Taillight Span', value: 'Full-Width', color: 'text-red-400' },
      { label: 'Technology', value: '3D LED OLED', color: 'text-white' },
      { label: 'Exhaust', value: 'M Twin Aerodynamic', color: 'text-slate-300' },
    ],
  },
  {
    badge: 'HANS ZIMMER ACOUSTIC ENGINEERING',
    title: 'BMW ICONICSOUNDS ELECTRIC',
    desc: 'Academy Award winner Hans Zimmer composed bespoke acoustic soundscapes for every driving mode — creating an emotional auditory bond between driver and machine.',
    image: null,
    wide: false,
    isAcoustic: true,
  },
];

export default function PerformancePinSection() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll positions
  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 20);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20);

    // Approximate active index based on scroll position
    const card = el.querySelector('.perf-card');
    const cardWidth = card ? card.clientWidth : 600;
    const current = Math.round(el.scrollLeft / (cardWidth + 24));
    setActiveIndex(Math.min(Math.max(0, current), SLIDES.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

  const scrollToSlide = (idx) => {
    soundFx.playClick(600);
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.perf-card');
    if (cards[idx]) {
      cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(idx);
    }
  };

  const handlePrev = () => {
    const nextIdx = Math.max(0, activeIndex - 1);
    scrollToSlide(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = Math.min(SLIDES.length - 1, activeIndex + 1);
    scrollToSlide(nextIdx);
  };

  return (
    <section
      id="performance"
      className="relative py-20 sm:py-28 bg-[#040507] overflow-hidden border-t border-white/5"
    >
      {/* Subtle Background Glow & Pattern */}
      <div className="absolute inset-0 bmw-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0066B1]/10 blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#38bdf8]/5 blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Dedicated Section Header — Completely Separate from Cards, No Text Overlap */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0066B1] animate-pulse shadow-[0_0_10px_#0066B1]" />
              <span className="text-xs font-mono tracking-[0.25em] text-[#38bdf8] uppercase font-bold">
                DYNAMIC ROAD EXPERIENCE • M70 xDRIVE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-display text-white tracking-tight leading-tight">
              THE ART OF{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#38bdf8] to-[#0066B1]">
                SILENT ACCELERATION
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 font-light max-w-2xl leading-relaxed">
              Experience the breathtaking intersection of executive serenity and ruthless electric performance.
              Explore all 5 dynamics modules below.
            </p>
          </div>

          {/* Interactive Navigation Controls */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Slide Index Badge */}
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-bold text-slate-300">
              <span className="text-[#38bdf8]">0{activeIndex + 1}</span>
              <span className="text-slate-600 mx-1.5">/</span>
              <span>0{SLIDES.length}</span>
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={!canScrollLeft && activeIndex === 0}
                className={`p-3 rounded-full border transition-all ${
                  canScrollLeft || activeIndex > 0
                    ? 'bg-white/10 border-white/20 text-white hover:bg-[#0066B1] hover:border-[#0066B1] shadow-lg hover:scale-105'
                    : 'bg-white/5 border-white/5 text-slate-600 cursor-not-allowed'
                }`}
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                disabled={!canScrollRight && activeIndex === SLIDES.length - 1}
                className={`p-3 rounded-full border transition-all ${
                  canScrollRight || activeIndex < SLIDES.length - 1
                    ? 'bg-white/10 border-white/20 text-white hover:bg-[#0066B1] hover:border-[#0066B1] shadow-lg hover:scale-105'
                    : 'bg-white/5 border-white/5 text-slate-600 cursor-not-allowed'
                }`}
                aria-label="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fluid Horizontal Scroll Carousel — No Jarring Vertical Lock/Pin, Ultra-Fast 60fps */}
      <div className="relative mt-8 sm:mt-12">
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 sm:px-8 lg:px-12 pb-6 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className={`perf-card snap-center flex-shrink-0 flex flex-col justify-between rounded-3xl border transition-all duration-300 relative overflow-hidden group shadow-[0_20px_60px_rgba(0,0,0,0.85)] ${
                activeIndex === idx
                  ? 'border-[#0066B1] ring-1 ring-[#0066B1]/40 shadow-[0_0_40px_rgba(0,102,177,0.3)]'
                  : 'border-white/15 hover:border-white/30'
              } ${
                slide.wide
                  ? 'w-[88vw] sm:w-[580px] md:w-[680px] lg:w-[740px] p-6 sm:p-8'
                  : 'w-[84vw] sm:w-[480px] md:w-[540px] p-6 sm:p-8'
              } ${
                slide.isAcoustic
                  ? 'bg-gradient-to-br from-[#121624] via-[#090b14] to-[#040507]'
                  : 'bg-[#080a12]'
              }`}
              style={{ minHeight: '500px' }}
            >
              {/* Background Image with High-Contrast Dark Gradient */}
              {slide.image && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    className="w-full h-full object-cover object-center opacity-70 transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Heavy dark gradient ensure 100% crystal-clear text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/75" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/40" />
                </div>
              )}

              {/* Card Header & Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 mb-4">
                  {slide.isAcoustic ? (
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066B1]/20 border border-[#0066B1]/50 text-[#38bdf8] text-[11px] font-mono font-bold tracking-wider">
                      <Radio className="w-3.5 h-3.5 animate-pulse" />
                      <span>{slide.badge}</span>
                    </div>
                  ) : (
                    <span className="inline-block text-[11px] font-mono text-[#38bdf8] uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-black/80 border border-white/20 font-bold backdrop-blur-md">
                      {slide.badge}
                    </span>
                  )}
                  <span className="text-xs font-mono font-bold text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black uppercase font-display text-white tracking-tight leading-tight drop-shadow-md">
                  {slide.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-xl drop-shadow-sm">
                  {slide.desc}
                </p>
              </div>

              {/* Card Footer: Metrics Grid or Acoustic Profile Specs */}
              <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
                {slide.isAcoustic ? (
                  <div className="space-y-3">
                    <span className="block text-[10px] font-mono text-slate-400 uppercase font-semibold tracking-wider">
                      ACOUSTIC SOUND SIGNATURES BY HANS ZIMMER
                    </span>
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-md">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase">PROFILE 01</span>
                        <span className="text-sm font-bold font-mono text-[#38bdf8]">EXPRESSIVE</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-md">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase">PROFILE 02</span>
                        <span className="text-sm font-bold font-mono text-white">RELAX</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-md">
                        <span className="block text-[10px] font-mono text-slate-400 uppercase">PROFILE 03</span>
                        <span className="text-sm font-bold font-mono text-emerald-400">EFFICIENT</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                    {slide.metrics.map((m, mi) => (
                      <div
                        key={mi}
                        className="p-3 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-md group-hover:border-[#0066B1]/40 transition-colors"
                      >
                        <span className="block text-[10px] font-mono text-slate-400 uppercase font-semibold tracking-wider">
                          {m.label}
                        </span>
                        <div className={`text-base sm:text-xl font-black font-mono mt-0.5 ${m.color}`}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'w-8 bg-[#0066B1] shadow-[0_0_10px_#0066B1]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
