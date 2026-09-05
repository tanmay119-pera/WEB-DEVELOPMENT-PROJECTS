import React, { useState } from 'react';
import { Menu, X, User, Heart, MapPin, Search, ArrowUpRight } from 'lucide-react';
import BmwLogo from './BmwLogo';
import { soundFx } from '../utils/audio';

export default function Navbar({ onOpenTestDrive, onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'All Models', href: '#find-bmw' },
    { name: 'Electric (i)', href: '#hero' },
    { name: 'Color Showroom', href: '#gallery' },
    { name: 'Cinematic', href: '#cinematic' },
    { name: 'Engineering', href: '#anatomy' },
    { name: 'Sanctuary', href: '#interior' },
    { name: 'Specifications', href: '#specs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050608]/90 backdrop-blur-xl w-full border-b border-white/10 transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Left Brand Identity (Official BMW Roundel + Links) */}
          <div className="flex items-center gap-8 lg:gap-10">
            <a
              href="#hero"
              onClick={() => soundFx.playClick(800)}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <div className="transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(0,102,177,0.4)]">
                <BmwLogo className="w-10 h-10" />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-sm font-black tracking-widest text-white uppercase font-display">
                  BMW <span className="text-[#0066B1]">i7</span>
                </span>
                <span className="text-[8px] font-bold tracking-[0.25em] text-slate-400 uppercase font-display">
                  THE FORWARDISM
                </span>
              </div>
            </a>

            {/* Official Primary Nav Links */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => soundFx.playClick(500)}
                  className="text-xs font-semibold tracking-wider text-slate-200 hover:text-white transition-all duration-200 relative py-2 group whitespace-nowrap"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#0066B1] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* 2. Right Official BMW Utility Icons & Test Drive CTA */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Account Profile Icon (Triggers BMW ID Login/Sign Up) */}
            <button
              onClick={() => {
                soundFx.playClick(600);
                if (onOpenAuth) onOpenAuth('signin');
              }}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center"
              title="My BMW ID / Sign In"
              aria-label="My BMW ID"
            >
              <User className="w-4 h-4 text-[#38bdf8] hover:text-white transition-colors" />
            </button>

            {/* Saved Favorites Icon */}
            <button
              onClick={() => soundFx.playClick(600)}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all hidden md:flex items-center justify-center"
              title="Saved Configurations"
            >
              <Heart className="w-4 h-4" />
            </button>

            {/* Dealership Locator */}
            <a
              href="#specs"
              onClick={() => soundFx.playClick(600)}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all hidden md:flex items-center justify-center"
              title="Find Dealership"
            >
              <MapPin className="w-4 h-4" />
            </a>

            {/* Test Drive CTA Button */}
            <button
              onClick={() => {
                soundFx.playMotorSurge();
                if (onOpenTestDrive) onOpenTestDrive();
              }}
              className="px-5 py-2.5 rounded-full bg-[#0066B1] hover:bg-[#0077cc] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,102,177,0.5)] hover:scale-105 flex items-center gap-2"
            >
              <span>Book Test Drive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden flex items-center ml-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/5 border border-white/10 text-white"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#050608]/98 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-3xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-3 pb-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundFx.playClick(500);
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-bold tracking-wider text-slate-200 hover:text-white uppercase p-2.5 rounded-lg bg-white/5 font-display"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenAuth) onOpenAuth('signin');
              }}
              className="w-full py-2.5 rounded-full border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <User className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>Sign In / Create BMW ID</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenTestDrive) onOpenTestDrive();
              }}
              className="w-full py-3 rounded-full bg-[#0066B1] text-white text-xs font-extrabold uppercase tracking-widest shadow-lg"
            >
              Request VIP Test Drive
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
