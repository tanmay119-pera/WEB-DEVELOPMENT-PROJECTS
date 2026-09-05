import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { soundFx } from '../utils/audio';

// Custom SVG minimalist BMW line art icons exactly matching official BMW style
function TwoCarsIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Background Car */}
      <path d="M18 20L23 11H37L42 20" opacity="0.5" />
      <rect x="14" y="20" width="32" height="12" rx="3" opacity="0.5" />
      {/* Foreground Car */}
      <path d="M12 36L18 25H46L52 36" />
      <rect x="8" y="36" width="48" height="18" rx="4" />
      {/* Wheels */}
      <circle cx="18" cy="54" r="5" />
      <circle cx="46" cy="54" r="5" />
      {/* Headlights */}
      <circle cx="16" cy="42" r="2.5" />
      <circle cx="48" cy="42" r="2.5" />
      <path d="M26 44H38" />
    </svg>
  );
}

function CarSearchIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Car Body */}
      <path d="M10 36L16 25H42" />
      <rect x="6" y="36" width="40" height="18" rx="4" />
      <circle cx="16" cy="54" r="5" />
      <circle cx="36" cy="54" r="5" />
      <circle cx="14" cy="42" r="2.5" />
      <path d="M22 44H30" />
      {/* Magnifying Glass */}
      <circle cx="46" cy="24" r="9" strokeWidth="2.6" />
      <path d="M53 31L60 38" strokeWidth="3" />
    </svg>
  );
}

function CarBuildIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      {/* Car Body */}
      <path d="M12 36L18 25H46L52 36" />
      <rect x="8" y="36" width="48" height="18" rx="4" />
      <circle cx="18" cy="54" r="5" />
      <circle cx="46" cy="54" r="5" />
      <circle cx="16" cy="42" r="2.5" />
      <circle cx="48" cy="42" r="2.5" />
      <path d="M26 44H38" />
      {/* Plus Badge */}
      <path d="M50 14V24" strokeWidth="3" />
      <path d="M45 19H55" strokeWidth="3" />
    </svg>
  );
}

function ActionCard({ icon: Icon, title, buttonText, onAction, delay }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col items-center text-center p-8 sm:p-10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#0066B1]/60 transition-all duration-300 group shadow-lg"
      style={{
        transform: `perspective(800px) rotateY(${mousePos.x * 8}deg) rotateX(${-mousePos.y * 8}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Minimalist Line Icon */}
      <div className="w-20 h-20 flex items-center justify-center text-white/80 group-hover:text-[#0066B1] transition-all duration-300 group-hover:scale-110 mb-6">
        <Icon className="w-16 h-16" />
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-8 tracking-wide">
        {title}
      </h3>

      {/* Outline Action Button */}
      <button
        onClick={() => {
          soundFx.playClick(600);
          if (onAction) onAction();
        }}
        className="w-full max-w-[240px] py-3 px-6 rounded-lg border border-white/30 group-hover:border-white text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
      >
        {buttonText}
      </button>
    </motion.div>
  );
}

export default function FindYourBmwSection({ onOpenTestDrive, onOpenGallery }) {
  return (
    <section id="find-bmw" className="relative py-24 sm:py-28 bg-[#07090e] border-y border-white/10 overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0066B1]/8 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading matching official BMW site */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white font-display">
            Find your BMW.
          </h2>
        </motion.div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ActionCard
            icon={TwoCarsIcon}
            title="Find a new car."
            buttonText="Search now"
            onAction={onOpenGallery}
            delay={0.1}
          />

          <ActionCard
            icon={CarSearchIcon}
            title="Book a test drive."
            buttonText="Request a test drive"
            onAction={onOpenTestDrive}
            delay={0.2}
          />

          <ActionCard
            icon={CarBuildIcon}
            title="Build your own."
            buttonText="Configure & Price"
            onAction={onOpenGallery}
            delay={0.3}
          />
        </div>

      </div>
    </section>
  );
}
