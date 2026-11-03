# The Living Archive — Deep Space Observatory & Planetary Codex

> **Conceived, Designed & Architected by Tanmay (Adesh Srivastava)**  
> Built with plain semantic HTML5, modern CSS3 custom properties, and modular vanilla JavaScript.  
> **Zero generic AI fonts • Lenis smooth inertia scrolling • Hardware-accelerated 60–120 FPS performance.**

---

## 🌌 Project Overview

**The Living Archive** is an award-winning cinematic planetary codex showcasing the **Sun and all eight planets of our Solar System** in order:
1. **The Sun** (*Yellow Dwarf Star*)
2. **Mercury** (*Terrestrial Silicate World*)
3. **Venus** (*Terrestrial Greenhouse World*)
4. **Earth** (*Dynamic Biosphere & Oceanic Sanctuary*)
5. **Mars** (*Desert Terrestrial Frontier*)
6. **Jupiter** (*Gas Giant Colossus*)
7. **Saturn** (*Ringed Gas Giant*)
8. **Uranus** (*Tilted Ice Giant*)
9. **Neptune** (*Supersonic Ice Giant*)
10. **Interactive Quiz** (*Explorer & Astrophysicist modes with Circular Timer & Streak tracking*)

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
