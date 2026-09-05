import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCw, Sparkles, Wind, Layers, Box, Check, Compass, ChevronLeft, ChevronRight, Flame, Camera } from 'lucide-react';
import ThreeCarScene from './ThreeCarScene';
import { soundFx } from '../utils/audio';

const PAINT_OPTIONS = [
  {
    id: 'two-tone',
    name: 'Two-Tone Cashmere Silver / Black',
    description: 'Signature G70 dual-tone with obsidian roof and hood',
    body: '#D1D5DB',
    roof: '#090a0d',
    tag: 'Flagship Signature'
  },
  {
    id: 'fire-red',
    name: 'Fire Red Metallic (M-Sport Performance)',
    description: 'Aggressive crimson electric metallic with high-contrast obsidian top',
    body: '#c41528',
    roof: '#090a0d',
    tag: 'M Performance Edition'
  },
  {
    id: 'tanzanite-blue',
    name: 'Tanzanite Blue II Metallic',
    description: 'Deep royal metallic flakes with brilliant crystalline refraction',
    body: '#0d2859',
    roof: '#090a0d',
    tag: 'BMW Individual'
  },
  {
    id: 'frozen-grey',
    name: 'Frozen Pure Deep Grey',
    description: 'Silk matte finish offering sculptural stealth aesthetics',
    body: '#4a5057',
    roof: '#090a0d',
    tag: 'Matte Finish'
  },
  {
    id: 'black-sapphire',
    name: 'Black Sapphire Metallic',
    description: 'Monolithic obsidian presence with deep mirror finish',
    body: '#0b0c10',
    roof: '#0b0c10',
    tag: 'Classic M'
  },
  {
    id: 'isle-of-man',
    name: 'Isle of Man Green Metallic',
    description: 'Electrified heritage green celebrating pure performance',
    body: '#0d402d',
    roof: '#090a0d',
    tag: 'M Heritage'
  },
];

const CAMERA_PRESETS = [
  { id: 'front-quarter', label: 'Front 3/4' },
  { id: 'front-face', label: 'Front Grille' },
  { id: 'side-profile', label: 'Side Profile' },
  { id: 'rear-quarter', label: 'Rear 3/4' },
  { id: 'top-down', label: 'Top Down' },
];

const PHOTO_GALLERY = [
  {
    id: 'hero',
    title: 'Flagship Exterior Profile',
    desc: 'Two-Tone Velvet Orchid with illuminated Iconic Glow double kidney grille',
    src: '/assets/images/bmw-hero-4k.jpg',
  },
  {
    id: 'front',
    title: 'Iconic Glow Front Grille',
    desc: 'Front head-on monolith presence with Swarovski crystal split headlights',
    src: '/assets/images/bmw-front-4k.jpg',
  },
  {
    id: 'driving',
    title: 'BMW i7 M70 High-Performance',
    desc: 'Pure Black Sapphire edition delivering 660 HP and 1,100 Nm torque',
    src: '/assets/images/bmw-driving-4k.jpg',
  },
  {
    id: 'cockpit',
    title: 'Executive Cockpit & Interaction Bar',
    desc: 'BMW Curved Display, Tartufo Merino leather, and crystalline touch bar',
    src: '/assets/images/bmw-cockpit-4k.jpg',
  }
];

export default function Interactive3DShowcase() {
  const [activeTab, setActiveTab] = useState('3d'); // '3d' | 'gallery'
  const [selectedPaint, setSelectedPaint] = useState(PAINT_OPTIONS[1]); // Default to Fire Red Metallic!
  const [viewMode, setViewMode] = useState('studio'); // 'studio' | 'wireframe' | 'warp'
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [cameraPreset, setCameraPreset] = useState('front-quarter');
  const [galleryIndex, setGalleryIndex] = useState(0);

  const handlePaintSelect = (option) => {
    setSelectedPaint(option);
    soundFx.playClick(option.id === 'fire-red' ? 780 : 600);
  };

  const handleModeSelect = (mode) => {
    setViewMode(mode);
    if (mode === 'warp') {
      soundFx.playMotorSurge();
    } else {
      soundFx.playClick(720);
    }
  };

  const nextPhoto = () => {
    soundFx.playClick(520);
    setGalleryIndex((prev) => (prev + 1) % PHOTO_GALLERY.length);
  };

  const prevPhoto = () => {
    soundFx.playClick(480);
    setGalleryIndex((prev) => (prev - 1 + PHOTO_GALLERY.length) % PHOTO_GALLERY.length);
  };

  return (
    <section id="configurator" className="relative py-24 bg-gradient-to-b from-bmw-dark via-[#08090f] to-bmw-dark overflow-hidden">
      {/* Background Ambience with Fire Red & Electric Cyan Glow */}
      <div className="absolute top-1/2 left-1/4 w-[700px] h-[550px] bg-red-600/10 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[550px] bg-blue-600/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]" />
              <span className="text-xs font-mono uppercase tracking-widest text-red-400 font-bold">
                REAL-TIME 3D BMW G70 STUDIO • M-PERFORMANCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight uppercase font-display text-white">
              BMW i7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-bmw-cyan">3D CONFIGURATOR</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mt-2 font-light">
              Meticulously sculpted BMW 7 Series & i7 G70 sedan. Full 360° orbit with authentic illuminated kidney grille, split crystal headlights, and M-Sport paint options.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="mt-6 md:mt-0 flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => {
                setActiveTab('3d');
                soundFx.playClick(600);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                activeTab === '3d'
                  ? 'bg-gradient-to-r from-red-600 via-rose-500 to-bmw-cyan text-white shadow-[0_0_25px_rgba(239,68,68,0.6)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Real 3D Orbit Model</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('gallery');
                soundFx.playClick(500);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                activeTab === 'gallery'
                  ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>4K Studio Photography</span>
            </button>
          </div>
        </div>

        {/* Viewport Box */}
        <div className="relative w-full h-[540px] sm:h-[680px] rounded-3xl border border-white/15 bg-gradient-to-b from-[#0e1017]/90 via-[#08090f] to-[#040507] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-xl flex flex-col justify-between">
          
          {/* Top HUD Badges */}
          <div className="absolute top-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md pointer-events-auto">
              <Compass className="w-3.5 h-3.5 text-red-400 animate-spin-slow" />
              <span className="text-[11px] font-mono text-slate-200 uppercase tracking-wider font-semibold">
                {activeTab === '3d' ? '3D ORBIT: CLICK & DRAG 360° • SCROLL TO ZOOM' : `4K SHOT ${galleryIndex + 1}/${PHOTO_GALLERY.length}`}
              </span>
            </div>

            {activeTab === '3d' ? (
              <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
                {/* Camera Preset Buttons */}
                <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-black/85 border border-white/15">
                  <Camera className="w-3 h-3 text-slate-400 ml-1.5 mr-0.5" />
                  {CAMERA_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => {
                        setCameraPreset(preset.id);
                        soundFx.playClick(580);
                      }}
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all ${
                        cameraPreset === preset.id
                          ? 'bg-white text-black shadow-md'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* 3D View Modes */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-black/85 border border-white/15">
                  <button
                    onClick={() => handleModeSelect('studio')}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all ${
                      viewMode === 'studio' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Studio
                  </button>
                  <button
                    onClick={() => handleModeSelect('wireframe')}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all ${
                      viewMode === 'wireframe' ? 'bg-bmw-cyan text-black' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Wireframe
                  </button>
                  <button
                    onClick={() => handleModeSelect('warp')}
                    className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase font-bold transition-all ${
                      viewMode === 'warp' ? 'bg-gradient-to-r from-red-600 to-cyan-400 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Warp
                  </button>
                </div>

                {/* Auto Spin */}
                <button
                  onClick={() => {
                    soundFx.playClick(500);
                    setIsAutoRotating(!isAutoRotating);
                  }}
                  className={`px-3 py-1.5 rounded-xl border text-[11px] font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    isAutoRotating
                      ? 'bg-red-600/20 border-red-500 text-red-400'
                      : 'bg-black/85 border-white/15 text-slate-400 hover:text-white'
                  }`}
                >
                  <RotateCw className={`w-3 h-3 ${isAutoRotating ? 'animate-spin' : ''}`} />
                  <span>Spin: {isAutoRotating ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            ) : null}
          </div>

          {/* MAIN VIEWPORT CONTENT */}
          {activeTab === '3d' ? (
            /* Procedural Authentic BMW 7 Series / i7 G70 Model with Framing */
            <ThreeCarScene
              paintColor={selectedPaint}
              viewMode={viewMode}
              isAutoRotating={isAutoRotating}
              cameraPreset={cameraPreset}
            />
          ) : (
            /* 4K Studio Photo Gallery */
            <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-12 select-none">
              <button
                onClick={prevPhoto}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white hover:text-red-400 transition-all shadow-xl hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/80 hover:bg-black border border-white/20 text-white hover:text-red-400 transition-all shadow-xl hover:scale-110"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={PHOTO_GALLERY[galleryIndex].id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35 }}
                  className="relative max-w-4xl w-full flex flex-col items-center"
                >
                  <img
                    src={PHOTO_GALLERY[galleryIndex].src}
                    alt={PHOTO_GALLERY[galleryIndex].title}
                    className="max-h-[440px] w-auto object-contain rounded-2xl drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-bold font-display uppercase tracking-wide text-white">
                      {PHOTO_GALLERY[galleryIndex].title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light mt-1">
                      {PHOTO_GALLERY[galleryIndex].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* Bottom Floating Paint Finishes Bar */}
          <div className="relative z-20 m-4 sm:m-6 p-3.5 sm:p-4 rounded-2xl bg-black/90 border border-white/15 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono uppercase tracking-wider font-bold ${
                  selectedPaint.id === 'fire-red' ? 'text-red-400' : 'text-bmw-cyan'
                }`}>
                  {selectedPaint.tag}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {activeTab === '3d' ? 'CLICK SWATCH TO CUSTOMIZE BODY FINISH' : 'BMW INDIVIDUAL LACQUER PALETTE'}
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold text-white font-display uppercase tracking-wide">
                {selectedPaint.name}
              </div>
            </div>

            {/* Color Swatch Circles */}
            <div className="flex items-center gap-3">
              {PAINT_OPTIONS.map((paint) => {
                const isSelected = selectedPaint.id === paint.id;
                return (
                  <button
                    key={paint.id}
                    onClick={() => handlePaintSelect(paint)}
                    title={paint.name}
                    className={`relative w-8 h-8 sm:w-9 sm:h-9 rounded-full transition-all duration-300 flex items-center justify-center ${
                      isSelected
                        ? paint.id === 'fire-red'
                          ? 'ring-2 ring-red-500 ring-offset-2 ring-offset-black scale-110 shadow-[0_0_20px_#ef4444]'
                          : 'ring-2 ring-bmw-cyan ring-offset-2 ring-offset-black scale-110 shadow-[0_0_15px_#00f0ff]'
                        : 'opacity-70 hover:opacity-100 hover:scale-105'
                    }`}
                    style={{
                      background: paint.id === 'two-tone'
                        ? `linear-gradient(135deg, ${paint.body} 50%, ${paint.roof} 50%)`
                        : paint.body,
                      border: '1px solid rgba(255,255,255,0.3)'
                    }}
                  >
                    {isSelected && (
                      <Check className={`w-4 h-4 ${paint.id === 'two-tone' ? 'text-black' : 'text-white'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
