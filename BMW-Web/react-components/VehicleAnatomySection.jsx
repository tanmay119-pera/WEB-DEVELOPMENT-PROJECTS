import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Shield, Zap, Activity, Cpu, Sparkles, Compass, CheckCircle2, ChevronRight } from 'lucide-react';
import { soundFx } from '../utils/audio';

const HARDWARE_MODULES = [
  {
    id: 'engine',
    tabName: '1: REAL BMW ENGINE',
    badge: 'Museum Cutaway',
    title: 'AUTHENTIC BMW ENGINE CUTAWAY BLOCK',
    subtitle: 'Cast Aluminum Block, Precision Pistons & Valve Timing',
    image: '/assets/images/part-engine-cutaway.jpg',
    imageAlt: 'Real BMW Engine Cutaway Block in BMW Museum',
    partLabel: 'BMW Museum Precision Engine Cutaway',
    desc: 'Actual engineering cutaway from the BMW Museum showing internal mechanical architecture: cast aluminum cylinder housing, low-friction pistons, overhead camshafts, alternator, intake runners, and flywheel.',
    specs: [
      { k: 'Material Block', v: 'High-Strength Cast Aluminum' },
      { k: 'Valve Control', v: 'BMW Double-VANOS Variable Camshaft' },
      { k: 'Power Topology', v: 'Integrated Electrified Auxiliary Drive' },
      { k: 'Cooling Loop', v: 'Split-Circuit High-Pressure System' },
    ],
  },
  {
    id: 'motor',
    tabName: '2: REAL eDRIVE MOTOR',
    badge: 'OEM Powertrain',
    title: '5TH GENERATION eDRIVE SYNCHRONOUS MOTOR',
    subtitle: 'Dual High-Output Motors (544 HP Combined) with Aluminum Subframe',
    image: '/assets/images/part-motor.jpg',
    imageAlt: 'Real BMW Electric Motor Assembly with Suspension Struts',
    partLabel: 'BMW 5th-Gen eDrive Synchronous Motor Unit',
    desc: 'Exhibition cutaway of the actual BMW electric drive unit. Excitation synchronous motor operating completely without rare earth magnets, packaged with integrated single-speed transmission and aluminum multi-link axle assembly.',
    specs: [
      { k: 'Motor Concept', v: 'Current-Excited Synchronous (No Rare Earths)' },
      { k: 'Power Output', v: '544 HP (Rear: 335 HP / Front: 255 HP)' },
      { k: 'Max Rotor Speed', v: '12,000 RPM Continuous' },
      { k: 'Inverter Tech', v: 'Silicon Carbide (SiC) Power Electronics' },
    ],
  },
  {
    id: 'chassis',
    tabName: '3: CARBON CORE CHASSIS',
    badge: 'Safety Cell',
    title: 'REAL BMW CARBON CORE MONOCOQUE CHASSIS',
    subtitle: 'Carbon-Fiber Reinforced Plastic (CFRP) Passenger Safety Cage',
    image: '/assets/images/part-chassis.jpg',
    imageAlt: 'Real BMW Carbon Core Monocoque Chassis at Petersen Museum',
    partLabel: 'Petersen Museum BMW Carbon Core Exhibition',
    desc: 'Actual museum cutaway displaying the authentic Carbon Core cell. Visible carbon-fiber composite weave integrated across B-pillars, roof bows, and side sills, slashing 130 kg while boosting rigidity by 40%.',
    specs: [
      { k: 'Structural Composite', v: 'CFRP Weave + Ultra-High-Strength Steel' },
      { k: 'Torsional Rigidity', v: '+40% Greater than Preceding 7 Series' },
      { k: 'Roof Strength Ratio', v: '5.2x Total Vehicle Gross Mass' },
      { k: 'Crash Safety', v: 'Extruded Aluminum Dual Crash Boxes' },
    ],
  },
  {
    id: 'grille',
    tabName: '4: ACTIVE ILLUMINATED GRILLE',
    badge: 'Swarovski DRLs',
    title: 'ILLUMINATED ICONIC GLOW & ACTIVE RADAR',
    subtitle: 'Monolithic Kidney Frame with Motorized Shutter Flaps (0.24 Cd)',
    image: '/assets/images/bmw-front-4k.jpg',
    imageAlt: 'Real BMW Front Grille and Swarovski Crystal Headlights',
    partLabel: 'BMW Iconic Glow Monolith Grille Unit',
    desc: 'Authentic front vehicle assembly highlighting the illuminated kidney contour, dual motorized air flaps that actuate only when cooling is needed, and Swarovski crystal glass daytime running elements.',
    specs: [
      { k: 'Aerodynamic Drag', v: '0.24 Cd (Class-Leading Sedan Efficiency)' },
      { k: 'Lighting Tech', v: 'Swarovski Crystal Glass Facets' },
      { k: 'Sensor Cluster', v: 'Solid-State LIDAR + 8MP Forward Stereo Cameras' },
      { k: 'Autonomous Level', v: 'SAE Level 3 Personal Pilot Capability' },
    ],
  },
  {
    id: 'interior',
    tabName: '5: EXECUTIVE COCKPIT',
    badge: 'First Class',
    title: 'EXECUTIVE CURVED DISPLAY & INTERACTION BAR',
    subtitle: 'Tartufo Merino Leather & Multifaceted Crystalline Touch Strip',
    image: '/assets/images/bmw-cockpit-4k.jpg',
    imageAlt: 'Real BMW Executive Steering Wheel and Curved Display',
    partLabel: 'BMW Executive Cockpit Architecture',
    desc: 'Real interior photography centered on the two-spoke executive steering wheel with authentic BMW Roundel, curved floating dual display, and the illuminated crystalline BMW Interaction Bar across the dash.',
    specs: [
      { k: 'Curved Display', v: '12.3" Driver Cluster + 14.9" Central Touchscreen' },
      { k: 'Audio Array', v: '36 Bowers & Wilkins Diamond 4D Speakers (1,965W)' },
      { k: 'Theatre Screen', v: 'Dropdown 31.3" 8K Panoramic Display (32:9)' },
      { k: 'Upholstery', v: 'BMW Individual Tartufo Merino Fine Leather' },
    ],
  },
];

export default function VehicleAnatomySection() {
  const [activeModuleId, setActiveModuleId] = useState('engine');

  const currentModule = HARDWARE_MODULES.find((m) => m.id === activeModuleId) || HARDWARE_MODULES[0];

  const handleModuleClick = (id) => {
    setActiveModuleId(id);
    soundFx.playClick(650);
  };

  return (
    <section id="anatomy" className="relative py-28 bg-[#050608] overflow-hidden border-t border-white/10">
      {/* Deep Blue Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[550px] bg-[#0066B1]/10 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#0066B1] animate-pulse shadow-[0_0_8px_#0066B1]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#0066B1] uppercase font-display">
                REAL ENGINEERING HARDWARE • BMW G70
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase font-display text-white tracking-tight">
              REAL ENGINE & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#0066B1]">SUB-ASSEMBLIES</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 font-light max-w-xl">
              Inspect the authentic mechanical components: real cutaway engine, real dual eDrive motors, and museum Carbon Core chassis.
            </p>
          </div>
        </div>

        {/* Module Selection Navigation Buttons */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {HARDWARE_MODULES.map((mod) => {
            const isSelected = mod.id === activeModuleId;
            return (
              <button
                key={mod.id}
                onClick={() => handleModuleClick(mod.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-[0.15em] font-display transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#0066B1] text-white border-[#0066B1] shadow-[0_0_25px_rgba(0,102,177,0.6)] scale-105'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/30 hover:bg-white/10'
                }`}
              >
                <span>{mod.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* Master Real Hardware Showcase Card */}
        <div className="relative w-full rounded-3xl border border-white/20 bg-gradient-to-b from-[#0e121c] via-[#080a12] to-[#040507] p-6 sm:p-10 overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: High-Resolution Real Part Image */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentModule.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-[360px] sm:h-[460px]"
                >
                  <img
                    src={currentModule.image}
                    alt={currentModule.imageAlt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 pointer-events-none" />

                  {/* Bottom Verification Badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2 rounded-xl bg-black/85 border border-white/15 backdrop-blur-md">
                    <span className="text-xs font-bold font-display text-white uppercase tracking-wider">
                      {currentModule.partLabel}
                    </span>
                    <span className="text-[10px] font-mono text-[#0066B1] font-bold px-2 py-0.5 rounded bg-[#0066B1]/20 border border-[#0066B1]/40">
                      VERIFIED OEM HARDWARE
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Technical Specs & Engineering Analysis */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-[#0066B1] mb-2">
                  <Wrench className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase font-bold tracking-widest">
                    {currentModule.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase font-display text-white tracking-tight leading-tight">
                  {currentModule.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-400 mt-1 uppercase tracking-wider font-display">
                  {currentModule.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 font-light mt-4 leading-relaxed">
                  {currentModule.desc}
                </p>
              </div>

              {/* Technical Spec Grid */}
              <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10">
                {currentModule.specs.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-medium">{item.k}</div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">{item.v}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
