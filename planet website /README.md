# The Living Archive — Deep Space Observatory & Planetary Codex

> **Conceived, Designed & Architected by Tanmay (Adesh Srivastava)**  
> Built with plain semantic HTML5, modern CSS3 custom properties, and modular vanilla JavaScript.  
> **Zero generic AI fonts • Lenis smooth inertia scrolling • Hardware-accelerated 60–120 FPS performance.**

---

## 🌌 Project Overview

**The Living Archive** is an award-winning cinematic planetary codex showcasing the **Sun, the Moon, and all eight planets of our Solar System** in order:
1. **The Sun** (*Yellow Dwarf Star*)
2. **The Moon** (*Natural Satellite & Tidal Anchor*)
3. **Mercury** (*Terrestrial Silicate World*)
4. **Venus** (*Terrestrial Greenhouse World*)
5. **Earth** (*Dynamic Biosphere & Oceanic Sanctuary*)
6. **Mars** (*Desert Terrestrial Frontier*)
7. **Jupiter** (*Gas Giant Colossus*)
8. **Saturn** (*Ringed Gas Giant*)
9. **Uranus** (*Tilted Ice Giant*)
10. **Neptune** (*Supersonic Ice Giant*)
11. **Interactive Quiz** (*Explorer & Astrophysicist modes with Circular Timer & Streak tracking*)

---

## 🚀 Key Modern Web Elements

- **"ENTER THE ARCHIVE" Audio Gateway**: Bypasses browser autoplay restrictions on audio, smoothly fading in the hero video audio track.
- **Full HD Hero Video**: Crystal-clear 1080p playback with zero blur and a subtle bottom gradient for text contrast.
- **Interactive Three.js Celestial Sphere**: 3D wireframe core with counter-rotating particle gimbal rings responsive to mouse tilt.
- **Lenis Smooth Inertia Scrolling**: 60-120 FPS synchronized inertia scroll with GSAP ScrollTrigger.
- **Floating Video Previews**: Hovering any planet name in the navigation bar displays a floating mini video loop preview.
- **Vertical Dot Rail**: Fixed desktop sidebar for one-click chapter navigation with real-time active indicators.
- **Keyboard Arrow Navigation**: Use `ArrowUp` and `ArrowDown` to transition smoothly between planetary chapters.
- **Dedicated Chapter Architecture**:
  - **A. INTRO (100vh)**: Full-bleed background video, dual-layer outline title, one-line tagline, chapter counter, 3 key stat chips.
  - **B. STATS**: 8 orbital telemetry cards with animated count-up numbers.
  - **C. STORY**: Sticky left heading and short, punchy paragraphs (strictly 2–3 sentences per block).
  - **D. MISSIONS**: Horizontal scroll timeline of historical spacecraft and exploration milestones.
  - **E. FACTS**: 3 interactive 3D perspective flip cards with astrophysical discoveries.
  - **F. NEXT**: Big teaser banner seamlessly transitioning into the next planet.
- **Upgraded Quiz**: Circular countdown timer ring (20s), streak counter (`🔥 Streak: X`), dynamic ambient background glow matching each question's planet, high-score tracking in `localStorage`, and celebratory confetti explosions!
- **Minimalist One-Line Footer**: Clean attribution to Tanmay (Adesh Srivastava) and return-to-zenith button.

---

## 📁 Folder Structure

```text
planet-website/
├── index.html              # Semantic structure, enter gate, three.js canvas, chapters container
├── style.css               # Obsidian theme, dual-layer outline titles, 3D flip cards, responsive grid
├── script.js               # Lenis, Three.js, audio manager, dynamic DOM generator, quiz engine
├── logo.svg                # Vector astronomical mark
├── data/
│   ├── planets.js          # Complete scientific database for Sun + 8 planets (edit text here!)
│   └── quiz.js             # Dual-tier question bank with planet tags for dynamic glow
├── videos/
│   ├── hero.mp4            # Full-screen Hero background video (Gemini-generated)
│   ├── sun.mp4             # High-res solar plasma flares video
│   ├── mercury.mp4         # Cratered surface flyby video
│   ├── venus.mp4           # Volcanic greenhouse clouds video
│   ├── earth.mp4           # Blue marble ocean & aurora video
│   ├── mars.mp4            # Crimson canyon & Olympus Mons video
│   ├── jupiter.mp4         # Great Red Spot & atmospheric bands video
│   ├── saturn.mp4          # Ring system transit video
│   ├── uranus.mp4          # Tilted icy azure atmosphere video
│   ├── neptune.mp4         # Supersonic storm winds video
│   └── *_3d_cinema.jpg     # High-resolution 3D poster fallbacks
└── README.md               # Architecture documentation & customization manual
```

---

## 🎬 How to Add or Swap Planet Videos

1. Place your `.mp4` video in the `videos/` folder:
   ```bash
   cp /path/to/my-video.mp4 videos/mars.mp4
   ```
2. Open `data/planets.js` and update `videoSrc`:
   ```javascript
   {
     id: "mars",
     videoSrc: "videos/mars.mp4",
     posterSrc: "videos/mars_3d_cinema.jpg",
     // ...
   }
   ```
The IntersectionObserver video manager will automatically lazy-load, play only when in view, and pause when scrolled away.

---

## 🌐 Running Locally

```bash
# Instant Python 3 preview:
python3 -m http.server 3000

# Open in browser:
http://localhost:3000
```

---

### 📅 Day 3 Milestone Log (05 Nov 2026) — Inner Terrestrial Worlds Completed
- **Mercury**: 4K UHD Caloris Basin impact flyby loop, Discovery Rupes lobate scarp cooling, 3:2 spin-orbit tidal resonance.
- **Venus**: 4K UHD supercritical 93-bar greenhouse vortex loop, sulfuric acid virga dynamics, retrograde axial rotation.
- **Earth**: 4K UHD oceanic sanctuary loop, geodynamo inner core magnetosphere, atmospheric N₂-O₂ equilibrium.
- **Mars**: 4K UHD Olympus Mons volcanic shield & Valles Marineris canyon descent, ancient Jezero delta hydrology.
- **Comparative Matrix**: Integrated density, surface gravity, and atmospheric pressure benchmark across all four terrestrial worlds.
- **Predictive Prefetching**: Automatic adjacent media preloading engine ensuring instantaneous zero-lag chapter transitions.

---

### 📅 Day 4 Milestone Log (06 Nov 2026) — Outer Giant Worlds Completed
- **Jupiter**: Great Red Spot 350-year storm dynamics, liquid metallic hydrogen ocean geodynamo, and Io volcanic plasma flux tube.
- **Saturn**: 282,000 km water-ice ring particle optics, 10-meter vertical thickness profile, Cassini Division, and north-polar hexagon jet stream.
- **Uranus**: 97.8° axial roll, 42-year polar solstices, -224.2 °C solar system record cold, and diamond precipitation hail model.
- **Neptune**: Supersonic 2,160 km/h equatorial wind dynamics, geothermal heat dynamo (2.61× solar input), and captured Kuiper Belt moon Triton with nitrogen cryovolcanoes.
- **Astrobiology Moons**: Dedicated dossiers for ocean worlds Europa, Ganymede, Enceladus, and Titan.
- **Outer Giants Matrix**: Comprehensive comparative scale, density, and magnetospheric telemetry matrix across all gas and ice giants.
- **Performance Budget**: Active scene culling and offscreen context pausing delivering locked 60–120 FPS during outer giant flybys.


### Day 5: 07 Nov 2026 — Warp Transit Engine & Procedural Audio Landscape (15 Commits)
- [x] Full-bleed zero rubber-band warp expansion engine (`executeWarpTransit`)
- [x] Relativistic radial star-streak canvas effect (`#warp-star-streak-canvas`)
- [x] Calibrated 3D pointer perspective tracking with smooth cubic easing
- [x] Procedural Web Audio API sound synthesis engine with master dynamics compressor
- [x] Sub-bass 54 Hz fundamental cosmic drone with dual-oscillator LFO modulation
- [x] Bespoke electromagnetic frequency synthesis for all 10 celestial bodies (Sun to Neptune)
- [x] Doppler warp pitch sweep (200Hz to 1200Hz) during planetary transit
- [x] Crystalline glass UI transient feedback audio on sidebar and button hover
- [x] Sleek glassmorphic audio mute button with animated wave bars
- [x] Mobile vertical touch swipe gesture navigation with velocity thresholding
- [x] Instantaneous numeric key teleportation (`1` to `0` for Sun through Neptune)
- [x] URL hash routing (`#sun`, `#moon`, `#jupiter`, etc.) with seamless anchor jumping
- [x] Automatic background tab CPU power saving via `AudioContext.suspend()`
- [x] Persistence of user audio state and last visited celestial chapter in `localStorage`
- [x] Full Web Audio API compliance audit with zero clipping across all output volumes
