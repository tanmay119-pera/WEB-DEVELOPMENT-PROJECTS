import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FindYourBmwSection from './components/FindYourBmwSection';
import StudioGallerySection from './components/StudioGallerySection';
import CinematicShowcase from './components/CinematicShowcase';
import VehicleAnatomySection from './components/VehicleAnatomySection';
import PerformancePinSection from './components/PerformancePinSection';
import InteriorSanctuarySection from './components/InteriorSanctuarySection';
import SpecMatrix from './components/SpecMatrix';
import Footer from './components/Footer';
import TestDriveModal from './components/TestDriveModal';
import BmwAuthModal from './components/BmwAuthModal';
import { soundFx } from './utils/audio';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [testDriveOpen, setTestDriveOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState('signin');
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef(null);

  // Initialize smooth Lenis scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (e) => {
      if (e.progress !== undefined) {
        setScrollProgress(e.progress);
      }
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el && lenisRef.current) {
      lenisRef.current.scrollTo(el);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040507] text-slate-100 selection:bg-[#0066B1] selection:text-white">
      {/* Deep Bavarian Blue Scroll Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-black/40 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#0066B1] via-[#0088ff] to-[#38bdf8] shadow-[0_0_12px_#0066B1] transition-all duration-75"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>

      {/* Floating Deep Blue Ambient Lighting Orbs */}
      <div className="fixed top-1/4 right-10 w-[600px] h-[600px] bg-[#0066B1]/8 blur-[190px] pointer-events-none" />
      <div className="fixed bottom-1/4 left-10 w-[600px] h-[600px] bg-[#002b66]/12 blur-[190px] pointer-events-none" />

      {/* Navigation matching official BMW site layout */}
      <Navbar
        onOpenTestDrive={() => setTestDriveOpen(true)}
        onOpenAuth={(mode = 'signin') => {
          setAuthModalMode(mode);
          setAuthModalOpen(true);
        }}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* 1. Hero with Real Official BMW Driving Video Background */}
        <HeroSection
          onOpenGallery={() => scrollToSection('gallery')}
          onOpenTestDrive={() => setTestDriveOpen(true)}
        />

        {/* 2. Official "Find your BMW." Quick Concierge Section */}
        <FindYourBmwSection
          onOpenTestDrive={() => setTestDriveOpen(true)}
          onOpenGallery={() => scrollToSection('gallery')}
        />

        {/* 3. Color & Finish Showroom (8 Real BMW Lacquers) */}
        <StudioGallerySection />

        {/* 4. Cinematic Journey (6 Bespoke Environments with Parallax) */}
        <CinematicShowcase />

        {/* 5. Real BMW Engineering & Mechanical Cutaways */}
        <VehicleAnatomySection />

        {/* 6. Dynamic Road Experience */}
        <PerformancePinSection />

        {/* 7. First-Class Interior Sanctuary with 3D Tilt Cards */}
        <InteriorSanctuarySection />

        {/* 8. Technical Specifications Matrix */}
        <SpecMatrix onOpenTestDrive={() => setTestDriveOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenTestDrive={() => setTestDriveOpen(true)} />

      {/* Test Drive VIP Modal */}
      <TestDriveModal
        isOpen={testDriveOpen}
        onClose={() => setTestDriveOpen(false)}
      />

      {/* Official BMW ID Customer Account Login & Registration Modal */}
      <BmwAuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authModalMode}
      />
    </div>
  );
}
