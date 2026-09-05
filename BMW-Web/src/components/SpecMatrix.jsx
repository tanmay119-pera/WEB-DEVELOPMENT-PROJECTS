import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Check, ArrowRight, Gauge, Battery, Shield } from 'lucide-react';
import { soundFx } from '../utils/audio';

const MODELS = [
  {
    id: 'edrive50',
    name: 'BMW i7 eDrive50',
    subtitle: 'Pure Rear-Wheel Precision',
    power: '455 HP / 335 kW',
    torque: '650 Nm',
    acceleration: '5.5 s',
    range: '611 km',
    drivetrain: 'Rear-Wheel Drive (RWD)',
    battery: '101.7 kWh Usable',
    charging: '195 kW DC (10-80% in 34 min)',
    price: 'Starting at $105,700',
    featured: false,
  },
  {
    id: 'xdrive60',
    name: 'BMW i7 xDrive60',
    subtitle: 'Dual-Motor All-Wheel Authority',
    power: '544 HP / 400 kW',
    torque: '745 Nm',
    acceleration: '4.7 s',
    range: '625 km',
    drivetrain: 'Intelligent All-Wheel Drive',
    battery: '101.7 kWh Usable',
    charging: '195 kW DC (10-80% in 34 min)',
    price: 'Starting at $124,200',
    featured: true,
    tag: 'Flagship Edition'
  },
  {
    id: 'm70',
    name: 'BMW i7 M70 xDrive',
    subtitle: 'The Most Powerful All-Electric M',
    power: '660 HP / 485 kW',
    torque: '1,100 Nm (M Launch)',
    acceleration: '3.7 s',
    range: '560 km',
    drivetrain: 'M xDrive Electric AWD',
    battery: '101.7 kWh Usable',
    charging: '195 kW DC (10-80% in 34 min)',
    price: 'Starting at $168,500',
    featured: false,
    tag: 'M Performance'
  },
];

export default function SpecMatrix({ onOpenTestDrive }) {
  const [selectedModel, setSelectedModel] = useState(MODELS[1]);

  return (
    <section id="specs" className="relative py-28 bg-[#040507] overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-bmw-cyan animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-bmw-cyan uppercase">
              TECHNICAL SPECIFICATION MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase font-display tracking-tight text-white">
            CHOOSE YOUR <span className="text-bmw-cyan">LEVEL OF POWER</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-light">
            Compare output, torque delivery, and electric range across the 7 Series electric line-up.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MODELS.map((model) => {
            const isFeatured = model.featured;
            return (
              <div
                key={model.id}
                onMouseEnter={() => soundFx.playClick(500)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 group ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#161a29] via-[#0d0f18] to-[#08090f] border-2 border-bmw-cyan shadow-[0_0_40px_rgba(0,102,255,0.3)] md:-translate-y-3'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-bmw-cyan text-black font-mono font-bold text-[10px] uppercase tracking-widest shadow-lg">
                    {model.tag}
                  </div>
                )}

                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                    {model.subtitle}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display uppercase tracking-wide text-white">
                    {model.name}
                  </h3>

                  <div className="mt-6 pt-6 border-t border-white/10 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black font-display text-white">
                      {model.acceleration}
                    </span>
                    <span className="text-xs font-mono text-slate-400 uppercase">0 – 100 km/h</span>
                  </div>

                  {/* Spec List */}
                  <div className="mt-6 space-y-4 text-xs">
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 font-mono uppercase">Horsepower</span>
                      <span className="font-bold text-white font-mono">{model.power}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 font-mono uppercase">Torque</span>
                      <span className="font-bold text-bmw-cyan font-mono">{model.torque}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 font-mono uppercase">Electric Range</span>
                      <span className="font-bold text-emerald-400 font-mono">{model.range}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 font-mono uppercase">Battery Usable</span>
                      <span className="font-bold text-white font-mono">{model.battery}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/5">
                      <span className="text-slate-400 font-mono uppercase">Drivetrain</span>
                      <span className="font-bold text-white font-mono">{model.drivetrain}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <button
                    onClick={() => {
                      soundFx.playMotorSurge();
                      if (onOpenTestDrive) onOpenTestDrive(model);
                    }}
                    className={`w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? 'bg-gradient-to-r from-bmw-electric to-bmw-cyan text-white shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)]'
                        : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    data-cursor="SELECT"
                  >
                    <span>Configure {model.name.split(' ')[2]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
