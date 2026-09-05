# THE NEW BMW i7 & 7 SERIES (G70) — Dark Luxury 3D Experience

An ultra-luxury, dark-themed interactive landing page for the **BMW 7 Series Facelift & BMW i7 G70 EV**, built with modern web technologies:

- **HTML5 & CSS3** (Semantic structure & luxury automotive styling)
- **React + Vite** (Fast HMR & modular components)
- **Tailwind CSS** (Custom dark luxury obsidian palette & glowing neon accents)
- **Lenis Smooth Scroll** (Buttery momentum scrolling synchronized with GSAP)
- **GSAP + ScrollTrigger** (Pinned horizontal road test showcase & parallax scrubs)
- **Framer Motion** (Magnetic buttons, text reveals, and custom cursor physics)
- **Three.js & React Three Fiber (R3F)** (Interactive 3D vehicle canvas, 360° orbit, real-time paint swatches, wireframe mode, and aerodynamic wind tunnel warp particles)
- **Interactive Vehicle Anatomy Blueprint** (Clickable radar hotspots based on the official G70 EV cutaway diagram)
- **Web Audio API Acoustic Synthesizer** (Hans Zimmer-inspired BMW IconicSounds electric motor acceleration hum & crystalline UI haptics with mute toggle)

---

## 🚀 Quick Start in VS Code

### 1. Open the Folder in VS Code
Open your terminal or launch Visual Studio Code, then open this project folder:
```bash
code /Users/apple/.gemini/antigravity/scratch/bmw-i7-luxury-experience
```

### 2. Start the Development Server
Dependencies are already installed. Start the Vite dev server with:
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:5173](http://localhost:5173) to experience the live site!

### 4. Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture & Components

```
bmw-i7-luxury-experience/
├── public/
│   └── assets/
│       └── images/
│           ├── bmw-7-quarter.png      # User Image 1: Front-Quarter Studio Shot
│           ├── bmw-7-driving.png      # User Image 2: Urban Highway Dynamic Run
│           ├── bmw-7-front.png        # User Image 3: Illuminated Kidney Grille
│           ├── bmw-7-cockpit.png      # User Image 4: Executive Steering Wheel & Curved Display
│           └── bmw-i7-anatomy.jpg     # User Image 5: Vehicle Anatomy Cutaway Blueprint
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx          # Luminous trailing cursor follower with spring physics
│   │   ├── Navbar.jsx                # Frosted glass navbar, live battery status, sound toggle
│   │   ├── HeroSection.jsx           # Split kinetic headline, user image 1, telemetry HUD
│   │   ├── ThreeCarScene.jsx         # Three.js 3D vehicle mesh, orbit controls, reflection floor
│   │   ├── Interactive3DShowcase.jsx # 3D Studio: Real-time paint selector, wireframe & warp modes
│   │   ├── VehicleAnatomySection.jsx # User Image 5 cutaway with 5 domain radar hotspots & specs
│   │   ├── PerformancePinSection.jsx # GSAP ScrollTrigger pinned horizontal scroll (Images 2 & 3)
│   │   ├── InteriorSanctuarySection.jsx # User Image 4 with interactive 31" Theatre Mode simulation
│   │   ├── SpecMatrix.jsx            # Technical compare matrix: i7 eDrive50 vs xDrive60 vs M70
│   │   ├── TestDriveModal.jsx        # VIP reservation dialog with custom studio selector
│   │   └── Footer.jsx                # Monumental kinetic typography marquee & Lenis top scroll
│   ├── utils/
│   │   └── audio.js                  # Web Audio API synthesizer for acoustic motor & click SFX
│   ├── App.jsx                       # Lenis + GSAP ScrollTrigger synchronization & layout
│   ├── index.css                     # Tailwind setup, Lenis styles, neon glow utilities
│   └── main.jsx                      # React entrypoint
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🎨 Implemented "Cheat Codes"

1. **Lenis + GSAP Sync**: Lenis scroll updates are piped directly into GSAP's `ScrollTrigger.update` and `gsap.ticker` to prevent any scroll jitter or lag.
2. **GPU Performance**: Exclusively animates `transform` and `opacity` with CSS `will-change` and hardware acceleration.
3. **Vehicle Anatomy Cutaway**: Hotspots are calibrated across 5 engineering domains (Structural Caging, Powertrain & Battery, Suspension & Chassis, Interior & Comfort, and Aerodynamics & ADAS).
4. **Interactive 3D Configurator**: Switch between Two-Tone Cashmere Silver, Tanzanite Blue II, Frozen Pure Deep Grey, Black Sapphire, and Isle of Man Green in real-time.
5. **Interactive Theatre Mode**: Activating Theatre Mode dims the cabin, adjusts ambient lighting to cinema violet, and drops down the 31.3-inch 8K BMW Theatre Screen.
