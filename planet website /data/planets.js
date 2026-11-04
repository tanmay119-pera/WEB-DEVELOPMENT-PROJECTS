/**
 * The Living Archive — Celestial Data Architecture
 * Conceived & Architected by Tanmay (Adesh Srivastava)
 *
 * Modernized Chapter Codex:
 * - High-impact, concise paragraphs (strictly 2–3 sentences per block, zero text walls)
 * - Three standout key stat chips for the 100vh Intro
 * - 8 structured telemetry facts with numeric values for animated count-ups
 * - Three interactive 3D flip card facts per celestial body
 * - Dedicated next-chapter transition linkages
 */

window.PLANETS_DATA = [
  {
    id: "sun",
    name: "The Sun",
    classification: "Yellow Dwarf Star (G2V)",
    chapter: "01 / 10",
    tagline: "The nuclear heart and gravitational sovereign of our solar system.",
    accentColor: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.45)",
    videoSrc: "videos/sun.mp4",
    posterSrc: "videos/sun_3d_cinema.jpg",
    keyChips: [
      { label: "Mass Share", val: "99.86% System Mass" },
      { label: "Core Temp", val: "15,000,000 °C" },
      { label: "Galactic Speed", val: "220 km/s" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "1,392,700", unit: "km", display: "1,392,700 km" },
      { label: "Mass Magnitude", val: "1.989", unit: "× 10³⁰ kg", display: "1.989 × 10³⁰ kg" },
      { label: "Distance to Center", val: "0", unit: "km", display: "0 km (System Center)" },
      { label: "Galactic Orbit", val: "230", unit: "Million Yrs", display: "230 Million Years" },
      { label: "Axial Rotation", val: "25", unit: "to 35 Days", display: "25–35 Days (Differential)" },
      { label: "Surface Gravity", val: "274", unit: "m/s²", display: "274.0 m/s² (28.0g)" },
      { label: "Photosphere Temp", val: "5,500", unit: "°C", display: "5,500 °C" },
      { label: "Retinue Worlds", val: "8", unit: "Planets", display: "8 Planets • Millions of Bodies" }
    ],
    story: {
      overview: "The Sun is an incandescent sphere of superheated plasma that anchors our solar system through immense gravity. Inside its core, thermonuclear fusion converts 600 million tons of hydrogen into helium every single second.",
      atmosphere: "The solar atmosphere consists of the thin reddish chromosphere and the mysterious, million-degree corona. Fierce magnetic reconnections erupt across this boundary, launching coronal mass ejections deep into interplanetary space.",
      structure: "Energy migrates outward from the dense fusion core through the vast radiative zone over a hundred thousand years. Near the surface, the convective zone circulates boiling plasma cells the size of Texas.",
      moonsAndRings: "The Sun commands eight major planets, five recognized dwarf planets, and millions of asteroids and comets. Its magnetic reach forms the vast heliosphere, shielding our entire system from harsh interstellar cosmic rays."
    },
    missions: [
      { year: "1995", name: "SOHO (ESA/NASA)", role: "Pioneered unbroken solar interior helioseismology and coronal storm tracking." },
      { year: "2018", name: "Parker Solar Probe (NASA)", role: "Humanity's first craft to fly directly through the Sun's outer corona at record velocity." },
      { year: "2020", name: "Solar Orbiter (ESA)", role: "Capturing the closest images ever taken of solar flares and unmapped polar regions." }
    ],
    flipFacts: [
      {
        tag: "Astonishing Volume",
        hook: "How many Earths could fit inside the Sun?",
        fact: "Over 1.3 million Earths could comfortably fit inside the Sun. Even if you packed all planets, moons, and asteroids together, the Sun would still hold 99.86% of the solar system's entire mass."
      },
      {
        tag: "Ancient Photons",
        hook: "How old is the sunlight touching your skin?",
        fact: "Light created in the Sun's core takes between 100,000 and 170,000 years to bounce through dense plasma to reach the surface. Once free, it journeys to Earth in just 8 minutes and 20 seconds."
      },
      {
        tag: "Corona Paradox",
        hook: "Why is the outer atmosphere hotter than the surface?",
        fact: "While the Sun's visible surface sits at 5,500 °C, its ethereal corona skyrockets to over 2,000,000 °C. Nanoflares and magnetic acoustic waves inject extreme thermal energy directly into the outer atmosphere."
      }
    ],
    nextPlanet: { id: "moon", name: "The Moon" }
  },
  {
    id: "moon",
    name: "The Moon",
    classification: "Natural Satellite of Earth (Luna)",
    chapter: "02 / 10",
    tagline: "Earth's tidal stabilizer, cratered sentinel, and cosmic stepping stone.",
    accentColor: "#e2e8f0",
    glowColor: "rgba(226, 232, 240, 0.45)",
    videoSrc: "videos/moon.mp4",
    posterSrc: "videos/moon_3d_cinema.jpg",
    keyChips: [
      { label: "Surface Gravity", val: "1.62 m/s² (0.166g)" },
      { label: "Orbital Period", val: "27.3 Days (Tidal Lock)" },
      { label: "Mean Distance", val: "384,400 km" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "3,474.8", unit: "km", display: "3,474.8 km" },
      { label: "Mass Magnitude", val: "7.342", unit: "× 10²² kg", display: "7.342 × 10²² kg" },
      { label: "Distance to Earth", val: "384,400", unit: "km", display: "384,400 km" },
      { label: "Orbital Period", val: "27.3", unit: "Earth Days", display: "27.3 Earth Days (Synchronous)" },
      { label: "Lunar Day Length", val: "29.5", unit: "Earth Days", display: "29.5 Earth Days (Synodic Month)" },
      { label: "Surface Gravity", val: "1.62", unit: "m/s²", display: "1.62 m/s² (0.166g)" },
      { label: "Temperature Extremes", val: "250", unit: "°C Range", display: "-130 °C to +120 °C" },
      { label: "Axial Tilt", val: "1.54", unit: "Degrees", display: "1.54° (Nearly Upright)" }
    ],
    story: {
      overview: "The Moon formed roughly 4.5 billion years ago when a Mars-sized protoplanet named Theia collided with the infant Earth. The resulting debris disk coalesced into our gravitational partner, whose tidal pull stabilizes Earth's climate and axial tilt.",
      atmosphere: "The Moon possesses an extremely tenuous surface-boundary exosphere composed of trace argon, helium, and neon. Because there is virtually no atmospheric pressure or weather, footprints and impact craters remain pristine for billions of years.",
      structure: "Beneath its pulverised regolith crust lies a solid silicate mantle and an iron-rich metallic core roughly 500 kilometers across. Dark basaltic plains, or maria, were formed by ancient volcanic floods following gargantuan asteroid impacts.",
      moonsAndRings: "As Earth's sole permanent natural satellite, the Moon commands no moons or rings of its own. It is locked in synchronous rotation, meaning its gravitational interaction keeps the exact same hemisphere permanently facing humanity."
    },
    missions: [
      { year: "1969", name: "Apollo 11 (NASA)", role: "Neil Armstrong and Buzz Aldrin achieved humanity's historic first crewed touchdown in the Sea of Tranquility." },
      { year: "2019", name: "Chang'e 4 (CNSA)", role: "Achieved the first-ever soft landing on the uncharted lunar far side, exploring the South Pole-Aitken Basin." },
      { year: "2023", name: "Chandrayaan-3 (ISRO)", role: "Executed a historic soft landing near the lunar south pole, confirming in-situ sulfur and analyzing the polar regolith." }
    ],
    flipFacts: [
      {
        tag: "Synchronous Lock",
        hook: "Why do we never see the far side from Earth?",
        fact: "Earth's gravitational tides have slowed the Moon's rotation until its axial spin matches its orbital period exactly (27.3 days). This tidal locking ensures that humanity only ever observes 59% of the lunar surface."
      },
      {
        tag: "Shrinking World",
        hook: "Is the Moon actually getting smaller?",
        fact: "As the Moon's interior cools, it contracts like a drying grape, wrinkling its fragile crust into thrust faults and causing shallow moonquakes up to magnitude 5 that can vibrate for hours in the vacuum."
      },
      {
        tag: "Hidden Polar Oasis",
        hook: "Is there water on the scorched Moon?",
        fact: "Deep within permanently shadowed craters at the lunar south pole, where temperatures plunge to -246 °C, billions of tons of ancient water ice lie preserved, serving as the cornerstone for future Artemis crewed outposts."
      }
    ],
    nextPlanet: { id: "mercury", name: "Mercury" }
  },
  {
    id: "mercury",
    name: "Mercury",
    classification: "Terrestrial Silicate World",
    chapter: "03 / 10",
    tagline: "The swift, scorched messenger wrapped in a colossal iron core.",
    accentColor: "#94a3b8",
    glowColor: "rgba(148, 163, 184, 0.45)",
    videoSrc: "videos/mercury.mp4",
    posterSrc: "videos/mercury_3d_cinema.jpg",
    keyChips: [
      { label: "Orbital Speed", val: "47.4 km/s" },
      { label: "Thermal Range", val: "-180°C to 430°C" },
      { label: "Iron Core", val: "85% of Radius" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "4,879", unit: "km", display: "4,879 km (0.38× Earth)" },
      { label: "Mass Magnitude", val: "3.301", unit: "× 10²³ kg", display: "3.301 × 10²³ kg" },
      { label: "Mean Distance to Sun", val: "57.9", unit: "Million km", display: "57.9 Million km (0.39 AU)" },
      { label: "Orbital Period", val: "88", unit: "Earth Days", display: "88.0 Earth Days" },
      { label: "Axial Rotation", val: "58.6", unit: "Earth Days", display: "58.6 Days (3:2 Resonance)" },
      { label: "Surface Gravity", val: "3.7", unit: "m/s²", display: "3.70 m/s² (0.38g)" },
      { label: "Daytime Surface Temp", val: "430", unit: "°C", display: "430 °C (Day) • -180 °C (Night)" },
      { label: "Natural Satellites", val: "0", unit: "Moons", display: "0 Moons • 0 Rings" }
    ],
    story: {
      overview: "Mercury is the smallest planet and the closest to the Sun, hurtling through its orbit at a blistering 47 kilometers per second. Stripped of an insulating atmosphere, it experiences violent temperature swings exceeding 600 degrees Celsius between day and night.",
      atmosphere: "Mercury possesses an ultra-tenuous exosphere of solar wind sodium, magnesium, and oxygen with a surface pressure under 10⁻¹⁴ bar. Its extreme 3:2 spin-orbit resonance causes the solar day to span 176 Earth days, driving savage thermal swings from -180 °C in polar shadow to 430 °C at subsolar noon.",
      structure: "A colossal metallic iron-nickel core occupies an astonishing 85% of Mercury's radius (~2,074 km), wrapped in a thin 400-km silicate mantle. The 1,550-km Caloris Basin created concentric mountain rings and antipode chaotic terrain, while thermal cooling created Discovery Rupes scarps over 3 km high.",
      moonsAndRings: "Mercury has neither moons nor rings due to the dominating gravitational pull of the neighboring Sun. Its cratered basaltic surface remains an unblemished record of the early solar system's heavy bombardment."
    },
    missions: [
      { year: "1974", name: "Mariner 10 (NASA)", role: "First probe to fly past Mercury, mapping roughly 45% of its heavily cratered surface." },
      { year: "2011", name: "MESSENGER (NASA)", role: "First dedicated orbiter; discovered abundant volatile elements and polar water ice." },
      { year: "2025", name: "BepiColombo (ESA/JAXA)", role: "Dual-satellite flagship mission arriving to map Mercury's magnetic and geochemical mysteries." }
    ],
    flipFacts: [
      {
        tag: "Polar Frost",
        hook: "Can ice exist on the planet closest to the Sun?",
        fact: "Yes. In the permanently shadowed bottoms of deep polar craters where sunlight never penetrates, billions of tons of water ice remain stably frozen at -170 °C."
      },
      {
        tag: "Double Sunrises",
        hook: "Why does the Sun perform loops in Mercury's sky?",
        fact: "Because Mercury travels fastest at perihelion while spinning very slowly, orbital motion briefly outpaces rotational speed. Standing on Mercury, you would watch the Sun rise, reverse direction, set, and rise again."
      },
      {
        tag: "Planetary Shrinkage",
        hook: "Why is Mercury covered in giant wrinkles?",
        fact: "As its oversized iron core cooled and solidified over 4 billion years, Mercury lost roughly 14 kilometers of its diameter. The crust buckled into multi-kilometer cliffs known as lobate scarps."
      }
    ],
    nextPlanet: { id: "venus", name: "Venus" }
  },
  {
    id: "venus",
    name: "Venus",
    classification: "Terrestrial Greenhouse World",
    chapter: "04 / 10",
    tagline: "The shrouded superheated crucible and Earth's toxic twin.",
    accentColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.45)",
    videoSrc: "videos/venus.mp4",
    posterSrc: "videos/venus_3d_cinema.jpg",
    keyChips: [
      { label: "Global Surface Temp", val: "465 °C" },
      { label: "Surface Pressure", val: "92× Earth" },
      { label: "Atmosphere", val: "96.5% CO₂" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "12,104", unit: "km", display: "12,104 km (0.95× Earth)" },
      { label: "Mass Magnitude", val: "4.867", unit: "× 10²⁴ kg", display: "4.867 × 10²⁴ kg" },
      { label: "Mean Distance to Sun", val: "108.2", unit: "Million km", display: "108.2 Million km (0.72 AU)" },
      { label: "Orbital Period", val: "224.7", unit: "Earth Days", display: "224.7 Earth Days" },
      { label: "Axial Rotation", val: "243", unit: "Earth Days", display: "243 Earth Days (Retrograde)" },
      { label: "Surface Gravity", val: "8.87", unit: "m/s²", display: "8.87 m/s² (0.91g)" },
      { label: "Mean Surface Temp", val: "465", unit: "°C", display: "465 °C (Hotter than Lead)" },
      { label: "Natural Satellites", val: "0", unit: "Moons", display: "0 Moons • 0 Rings" }
    ],
    story: {
      overview: "Nearly identical to Earth in mass and density, Venus took a terrifyingly divergent evolutionary path. Beneath brilliant reflective clouds lies a crushing world consumed by an irreversible runaway greenhouse effect.",
      atmosphere: "Venus is encased in a 93-bar supercritical CO₂ atmosphere with corrosive sulfuric acid clouds circulating via 360 km/h super-rotation. Runaway infrared trapping produces a crushing 465 °C furnace hot enough to melt lead, with upper-level virga rain that vaporizes before impact.",
      structure: "Venus boasts a 3,200-km metallic iron-nickel core surrounded by a ductile silicate mantle. Lacking plate tectonics, internal mantle heat periodically triggers catastrophic volcanic resurfacing across Maxwell Montes, while its retrograde 243-day axial spin turns clockwise relative to its north pole.",
      moonsAndRings: "Venus has zero moons and zero rings. It rotates backward compared to most planets, causing the Sun to rise in the west and set in the east across an agonizingly slow 243-day axial rotation."
    },
    missions: [
      { year: "1970", name: "Venera 7 (Soviet Union)", role: "First spacecraft to successfully land on another planet, returning telemetry from the molten surface." },
      { year: "1982", name: "Venera 13 (Soviet Union)", role: "Transmitted first color panoramic surface photographs and executed in-situ X-ray fluorescence soil analysis under 89 atm." },
      { year: "1990", name: "Magellan (NASA)", role: "Radar-mapped 98% of the hidden volcanic surface with breathtaking topographic resolution." },
      { year: "2015", name: "Akatsuki (JAXA)", role: "Decoded atmospheric super-rotation and high-altitude gravity waves across Venusian clouds." }
    ],
    flipFacts: [
      {
        tag: "Longer Than A Year",
        hook: "How can a day be longer than a year?",
        fact: "Venus rotates so lethargically that one single spin on its axis takes 243 Earth days, while its orbit around the Sun takes only 225 Earth days. A single Venusian day lasts longer than its year."
      },
      {
        tag: "Acid Cloud Rain",
        hook: "Does it really rain sulfuric acid on Venus?",
        fact: "Upper clouds condense droplets of concentrated sulfuric acid that fall toward the surface. However, intense ambient heat vaporizes the acid droplets before they can strike the ground in a process called virga."
      },
      {
        tag: "Runaway Furnace",
        hook: "Why is Venus hotter than Mercury?",
        fact: "Even though Mercury is twice as close to the Sun, Venus traps over 95% of incoming thermal radiation within its opaque carbon dioxide blanket, turning its surface into a 465 °C furnace hot enough to melt lead."
      }
    ],
    nextPlanet: { id: "earth", name: "Earth" }
  },
  {
    id: "earth",
    name: "Earth",
    classification: "Dynamic Biosphere & Oceanic World",
    chapter: "05 / 10",
    tagline: "The pale blue sanctuary of sentience and liquid oceans.",
    accentColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.45)",
    videoSrc: "videos/earth.mp4",
    posterSrc: "videos/earth_3d_cinema.jpg",
    keyChips: [
      { label: "Ocean Cover", val: "71% Surface Water" },
      { label: "Atmosphere", val: "78% N₂ • 21% O₂" },
      { label: "Biosphere", val: "Only Known Life" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "12,742", unit: "km", display: "12,742 km (1.00× Earth)" },
      { label: "Mass Magnitude", val: "5.972", unit: "× 10²⁴ kg", display: "5.972 × 10²⁴ kg" },
      { label: "Mean Distance to Sun", val: "149.6", unit: "Million km", display: "149.6 Million km (1.00 AU)" },
      { label: "Orbital Period", val: "365.25", unit: "Days", display: "365.25 Earth Days (1 Year)" },
      { label: "Axial Rotation", val: "23.93", unit: "Hours", display: "23 Hours 56 Minutes 4 Seconds" },
      { label: "Surface Gravity", val: "9.81", unit: "m/s²", display: "9.807 m/s² (1.00g)" },
      { label: "Global Mean Temp", val: "15", unit: "°C", display: "15 °C (-88°C to +58°C)" },
      { label: "Natural Satellites", val: "1", unit: "Moon", display: "1 Large Moon (Luna)" }
    ],
    story: {
      overview: "Earth is an extraordinary oasis cradled in the vast vacuum of space. It is the only celestial body confirmed to harbor conscious life, nurtured by vast liquid oceans that cover 71 percent of its vibrant surface.",
      atmosphere: "Earth's stratified atmosphere (78.08% N₂, 20.95% O₂, 0.93% Ar) maintains a balanced greenhouse baseline and shields living biomes via the stratospheric ozone layer. A synchronized hydrologic cycle and oceanic heat conveyors distribute thermal energy globally.",
      structure: "A crystalline inner core (1,220 km radius) is enveloped by a convective liquid iron-nickel outer core (2,260 km thick) powering the geodynamo. This generates an expansive magnetosphere deflecting energetic solar coronal mass ejections and creating polar auroral displays.",
      moonsAndRings: "Earth is paired with the Moon, an oversized satellite born from a colossal proto-planetary collision 4.5 billion years ago. The Moon's gravitational pull anchors Earth's axial tilt, preventing extreme, chaotic climate shifts."
    },
    missions: [
      { year: "1969", name: "Apollo 11 (NASA)", role: "First crewed lunar landing, inaugurating extraterrestrial sample return and human deep space exploration." },
      { year: "1972", name: "Landsat 1 (NASA/USGS)", role: "Initiated a continuous 50-year satellite record of global terrestrial environmental evolution." },
      { year: "1998", name: "International Space Station", role: "Continuous human presence in low Earth orbit conducting groundbreaking multidisciplinary research." }
    ],
    flipFacts: [
      {
        tag: "Planetary Thermostat",
        hook: "How does plate tectonics keep Earth alive?",
        fact: "Subducting tectonic plates push carbon-bearing rocks into the mantle, while volcanoes release CO₂ back into the atmosphere. This planetary thermostat has prevented Earth from permanently boiling or freezing for billions of years."
      },
      {
        tag: "Liquid Shield",
        hook: "What protects life from cosmic death rays?",
        fact: "Convection in Earth's molten outer core generates a massive magnetosphere that extends tens of thousands of kilometers into space, deflecting lethal solar winds and preserving our delicate atmosphere."
      },
      {
        tag: "Mythological Outlier",
        hook: "Why is Earth's name unique among all planets?",
        fact: "Earth is the only planet in the solar system not named after a Greek or Roman deity. Its name derives from ancient Germanic and Old English words meaning 'the ground' or 'soil'."
      }
    ],
    nextPlanet: { id: "mars", name: "Mars" }
  },
  {
    id: "mars",
    name: "Mars",
    classification: "Desert Terrestrial World",
    chapter: "06 / 10",
    tagline: "The rust-hued frontier of ancient lakes and giant canyons.",
    accentColor: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.45)",
    videoSrc: "videos/mars.mp4",
    posterSrc: "videos/mars_3d_cinema.jpg",
    keyChips: [
      { label: "Surface Gravity", val: "0.38g (3.72 m/s²)" },
      { label: "Tallest Volcano", val: "22 km • Olympus Mons" },
      { label: "Day Duration", val: "24h 37m (1 Sol)" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "6,779", unit: "km", display: "6,779 km (0.53× Earth)" },
      { label: "Mass Magnitude", val: "6.417", unit: "× 10²³ kg", display: "6.417 × 10²³ kg" },
      { label: "Mean Distance to Sun", val: "227.9", unit: "Million km", display: "227.9 Million km (1.52 AU)" },
      { label: "Orbital Period", val: "687", unit: "Earth Days", display: "687.0 Earth Days" },
      { label: "Martian Day (Sol)", val: "24.62", unit: "Hours", display: "24 Hours 37 Minutes" },
      { label: "Surface Gravity", val: "3.72", unit: "m/s²", display: "3.721 m/s² (0.38g)" },
      { label: "Mean Surface Temp", val: "-63", unit: "°C", display: "-63 °C (-140°C to +20°C)" },
      { label: "Natural Satellites", val: "2", unit: "Moons", display: "2 Moons (Phobos & Deimos)" }
    ],
    story: {
      overview: "Mars is a cold hyper-arid desert world whose signature ferruginous soil reflects oxidized hematite dust. Widespread phyllosilicate clays, serpentine minerals, and Jezero Crater alluvial fans verify that an ancient warmer, wetter era supported active hydrology 3.8 billion years ago.",
      atmosphere: "A wispy atmosphere of 95 percent carbon dioxide maintains a surface pressure less than 1 percent of Earth's. Planet-encircling dust storms occasionally ignite, obscuring the surface for months at a time.",
      structure: "A dense 1,800-km iron-sulfur-nickel core sits beneath a rigid silicate lithosphere. Lacking crustal plate recycling, continuous mantle plume volcanic effusion created Olympus Mons (21.9 km elevation) and tectonic crustal pulling created the 4,000-km Valles Marineris fissure.",
      moonsAndRings: "Two tiny captured asteroids, Phobos and Deimos, circle the red planet. Phobos orbits so closely that tidal forces are drawing it inward; in roughly 50 million years, it will shred into a thin ring of dust."
    },
    missions: [
      { year: "1997", name: "Mars Pathfinder / Sojourner", role: "Deployed the first robotic rover on Mars, revolutionizing remote planetary surface operations." },
      { year: "2012", name: "Curiosity Rover (NASA)", role: "Discovered ancient organic compounds and proved Gale Crater once held a freshwater lake." },
      { year: "2021", name: "Perseverance & Ingenuity", role: "Caching rock cores for Earth return and achieved first powered aerial flights in thin Martian air." }
    ],
    flipFacts: [
      {
        tag: "Colossal Volcano",
        hook: "How large is Olympus Mons compared to Everest?",
        fact: "Olympus Mons towers roughly 22 kilometers high and spans 600 kilometers across. It is nearly three times taller than Mount Everest and large enough to cover the entire country of France."
      },
      {
        tag: "Grandest Canyon",
        hook: "How does Valles Marineris compare to the Grand Canyon?",
        fact: "The Valles Marineris canyon system cuts over 4,000 kilometers across Mars. It is four times deeper and ten times longer than Earth's Grand Canyon, easily spanning the width of North America."
      },
      {
        tag: "Sunset Colors",
        hook: "What color is a sunset on Mars?",
        fact: "Fine iron-bearing dust in the Martian atmosphere scatters red light across the sky but allows blue light to penetrate directly. As a result, Martian sunsets cast an ethereal, cool blue glow."
      }
    ],
    nextPlanet: { id: "jupiter", name: "Jupiter" }
  },
  {
    id: "jupiter",
    name: "Jupiter",
    classification: "Gas Giant Colossus",
    chapter: "07 / 10",
    tagline: "The grand sovereign protecting the inner worlds from cosmic debris.",
    accentColor: "#d97706",
    glowColor: "rgba(217, 119, 6, 0.45)",
    videoSrc: "videos/jupiter.mp4",
    posterSrc: "videos/jupiter_3d_cinema.jpg",
    keyChips: [
      { label: "Planetary Mass", val: "318× Earth Mass" },
      { label: "Shortest Day", val: "9h 55m Rotation" },
      { label: "Retinue Moons", val: "95 Satellites" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "139,820", unit: "km", display: "139,820 km (11.0× Earth)" },
      { label: "Mass Magnitude", val: "1.898", unit: "× 10²⁷ kg", display: "1.898 × 10²⁷ kg (318× Earth)" },
      { label: "Mean Distance to Sun", val: "778.5", unit: "Million km", display: "778.5 Million km (5.20 AU)" },
      { label: "Orbital Period", val: "11.86", unit: "Earth Years", display: "11.86 Earth Years" },
      { label: "Axial Rotation", val: "9.92", unit: "Hours", display: "9 Hours 55 Minutes (Fastest)" },
      { label: "Surface Gravity", val: "24.79", unit: "m/s²", display: "24.79 m/s² (2.53g)" },
      { label: "Cloud Top Temp", val: "-110", unit: "°C", display: "-110 °C" },
      { label: "Natural Satellites", val: "95", unit: "Moons", display: "95 Confirmed Moons" }
    ],
    story: {
      overview: "Jupiter is the colossal monarch of the solar system, holding more mass than all other planets combined. Swirling bands of ammonia clouds and tempestuous jet streams define its face, crowned by the legendary Great Red Spot.",
      atmosphere: "The atmosphere consists almost entirely of primordial hydrogen and helium, mimicking the composition of the early solar nebula. Counter-rotating equatorial jet streams generate ferocious cyclonic storms with wind speeds exceeding 500 km/h.",
      structure: "Deep below the clouds, unimaginable pressure turns gaseous hydrogen into a vast, churning ocean of liquid metallic hydrogen. This conducting ocean powers the solar system's strongest planetary magnetic field.",
      moonsAndRings: "Jupiter commands a miniature solar system of 95 known moons, headlined by the four Galilean satellites: volcanic Io, oceanic Europa, giant Ganymede, and Callisto. Faint dark dust rings also circle its equator."
    },
    missions: [
      { year: "1979", name: "Voyager 1 & 2 (NASA)", role: "Discovered active sulfur volcanism on Io, faint dust rings, and fractured ice plains on Europa." },
      { year: "1995", name: "Galileo (NASA)", role: "First dedicated Jovian orbiter; deployed an atmospheric probe directly into the churning clouds." },
      { year: "2016", name: "Juno (NASA)", role: "Polar orbit mapping deep water abundance, massive polar cyclones, and a diffuse core." }
    ],
    flipFacts: [
      {
        tag: "Anticyclonic Monster",
        hook: "How large is the Great Red Spot?",
        fact: "The Great Red Spot is a high-pressure anticyclonic storm wider than the entire Earth. It has raged continuously for over 350 years, with winds shrieking along its perimeter at over 430 km/h."
      },
      {
        tag: "Metallic Ocean",
        hook: "Does Jupiter contain liquid metal?",
        fact: "Thousands of kilometers beneath the clouds, pressure exceeds 2 million atmospheres, forcing hydrogen into an exotic liquid metallic state that conducts electricity like mercury and creates an enormous magnetic envelope."
      },
      {
        tag: "Cosmic Vacuum",
        hook: "How does Jupiter protect planet Earth?",
        fact: "With its massive gravitational pull, Jupiter acts as a celestial vacuum cleaner, capturing or ejecting stray comets and asteroids that would otherwise hurtle into the inner solar system."
      }
    ],
    nextPlanet: { id: "saturn", name: "Saturn" }
  },
  {
    id: "saturn",
    name: "Saturn",
    classification: "Ringed Gas Giant",
    chapter: "08 / 10",
    tagline: "The crown jewel adorned with billions of shimmering ice shards.",
    accentColor: "#eab308",
    glowColor: "rgba(234, 179, 8, 0.45)",
    videoSrc: "videos/saturn.mp4",
    posterSrc: "videos/saturn_3d_cinema.jpg",
    keyChips: [
      { label: "Ring System", val: "282,000 km Wide" },
      { label: "Low Density", val: "0.687 g/cm³ (Floats)" },
      { label: "Known Moons", val: "146 Satellites" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "116,460", unit: "km", display: "116,460 km (9.14× Earth)" },
      { label: "Mass Magnitude", val: "5.683", unit: "× 10²⁶ kg", display: "5.683 × 10²⁶ kg (95.2× Earth)" },
      { label: "Mean Distance to Sun", val: "1,434", unit: "Million km", display: "1.434 Billion km (9.58 AU)" },
      { label: "Orbital Period", val: "29.45", unit: "Earth Years", display: "29.45 Earth Years" },
      { label: "Axial Rotation", val: "10.55", unit: "Hours", display: "10 Hours 33 Minutes" },
      { label: "Surface Gravity", val: "10.44", unit: "m/s²", display: "10.44 m/s² (1.06g)" },
      { label: "Cloud Top Temp", val: "-140", unit: "°C", display: "-140 °C" },
      { label: "Natural Satellites", val: "146", unit: "Moons", display: "146 Confirmed Moons" }
    ],
    story: {
      overview: "Saturn is a breathtaking gas giant encircled by the most dazzling ring system in the cosmos. Despite its vast size, it has the lowest density of any planet—it is the only world lighter than water.",
      atmosphere: "A pale gold atmosphere of hydrogen and helium is laced with ammonia crystals and swept by equatorial jet streams reaching 1,800 km/h. At its north pole, a bizarre six-sided hexagonal jet stream spins indefinitely.",
      structure: "A dense core of rock and ice is surrounded by liquid metallic hydrogen and a thick blanket of liquid molecular hydrogen. Intense internal compression allows Saturn to radiate twice as much heat into space as it receives from the Sun.",
      moonsAndRings: "The iconic rings span 282,000 kilometers yet average only 10 to 30 meters in thickness. Saturn also holds 146 moons, including Titan, which features methane lakes, and Enceladus, which sprays water geysers into space."
    },
    missions: [
      { year: "1980", name: "Voyager 1 (NASA)", role: "Captured pristine images of intricate ring braiding and Titan's opaque nitrogen smog layer." },
      { year: "1997", name: "Cassini-Huygens (NASA/ESA)", role: "Thirteen-year flagship orbital odyssey; landed the Huygens probe onto the methane shorelines of Titan." },
      { year: "2017", name: "Cassini Grand Finale", role: "Dove repeatedly through the 2,000-km gap between Saturn and its rings before plunging into the atmosphere." }
    ],
    flipFacts: [
      {
        tag: "Paper-Thin Rings",
        hook: "How thin are Saturn's iconic rings?",
        fact: "While the rings span over 282,000 kilometers across, they are paper-thin—averaging only 10 to 30 meters in thickness. They are composed of billions of chunks of almost 99% pure water ice."
      },
      {
        tag: "Water-Floatable",
        hook: "Could a giant planet float on an ocean?",
        fact: "Saturn's average density is 0.687 grams per cubic centimeter, which is lower than water (1.0 g/cm³). If you could find a bathtub large enough, Saturn would bob gently on the surface."
      },
      {
        tag: "Polar Hexagon",
        hook: "What is the mystery storm at Saturn's north pole?",
        fact: "Saturn's north pole is locked in a geometric wonder: a massive six-sided hexagonal jet stream spanning 30,000 kilometers across. Each of its six sides is wider than planet Earth."
      }
    ],
    nextPlanet: { id: "uranus", name: "Uranus" }
  },
  {
    id: "uranus",
    name: "Uranus",
    classification: "Tilted Ice Giant",
    chapter: "09 / 10",
    tagline: "The azure enigma rolling along its orbital plane on its side.",
    accentColor: "#14b8a6",
    glowColor: "rgba(20, 184, 166, 0.45)",
    videoSrc: "videos/uranus.mp4",
    posterSrc: "videos/uranus_3d_cinema.jpg",
    keyChips: [
      { label: "Axial Obliquity", val: "97.8° Sideways" },
      { label: "Lowest Temp", val: "-224 °C Record" },
      { label: "Known Moons", val: "28 Satellites" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "50,724", unit: "km", display: "50,724 km (3.98× Earth)" },
      { label: "Mass Magnitude", val: "8.681", unit: "× 10²⁵ kg", display: "8.681 × 10²⁵ kg (14.5× Earth)" },
      { label: "Mean Distance to Sun", val: "2,871", unit: "Million km", display: "2.871 Billion km (19.2 AU)" },
      { label: "Orbital Period", val: "84.0", unit: "Earth Years", display: "84.0 Earth Years" },
      { label: "Axial Rotation", val: "17.24", unit: "Hours", display: "17 Hours 14 Minutes (Retrograde)" },
      { label: "Surface Gravity", val: "8.69", unit: "m/s²", display: "8.69 m/s² (0.89g)" },
      { label: "Lowest Atmosphere Temp", val: "-224", unit: "°C", display: "-224 °C (Coldest Atmosphere)" },
      { label: "Natural Satellites", val: "28", unit: "Moons", display: "28 Named Moons" }
    ],
    story: {
      overview: "Uranus is an ethereal cyan ice giant that orbits the Sun completely on its side, tipped at an extraordinary 98-degree tilt. This bizarre orientation was likely caused by a catastrophic collision with an Earth-sized protoplanet long ago.",
      atmosphere: "Its calm azure color stems from atmospheric methane, which absorbs red light wavelengths while reflecting soft greens and blues. Cold clouds of hydrogen sulfide and ammonia drift quietly through the solar system's coldest planetary atmosphere.",
      structure: "A small silicate-iron core is surrounded by an enormous, superheated mantle of slushy water, ammonia, and methane ices under extreme pressure. Unlike other gas giants, Uranus generates very little internal heat.",
      moonsAndRings: "Uranus possesses 28 known moons, uniquely named after characters from William Shakespeare and Alexander Pope. It is encircled by 13 narrow, charcoal-dark rings held in place by tiny shepherd moons."
    },
    missions: [
      { year: "1781", name: "William Herschel", role: "First planet discovered in modern history using an astronomical telescope." },
      { year: "1986", name: "Voyager 2 (NASA)", role: "Only spacecraft to ever visit Uranus, discovering ten new moons and two dark ring ribbons." },
      { year: "2022", name: "JWST Observations", role: "Captured infrared views of Uranus's dynamic polar ice cap and glowing ring system." }
    ],
    flipFacts: [
      {
        tag: "Sideways World",
        hook: "Why does Uranus roll around the Sun like a ball?",
        fact: "Tilted at 97.8 degrees, Uranus rolls around its orbit on its side. This produces radical 42-year seasons, where one pole points directly at the Sun for 42 years of continuous daylight, followed by 42 years of night."
      },
      {
        tag: "Coldest In System",
        hook: "Why is Uranus colder than Neptune?",
        fact: "Even though Neptune is a billion kilometers farther from the Sun, Uranus holds the cold record at -224.2 °C. It radiates almost no internal core heat, making it an astrophysical thermal puzzle."
      },
      {
        tag: "Shakespearean Moons",
        hook: "Why are the moons named after plays?",
        fact: "While almost all solar system bodies are named after Greek and Roman mythology, Uranus's 28 moons are named after characters from Shakespeare and Alexander Pope, including Miranda, Ariel, and Puck."
      }
    ],
    nextPlanet: { id: "neptune", name: "Neptune" }
  },
  {
    id: "neptune",
    name: "Neptune",
    classification: "Supersonic Ice Giant",
    chapter: "10 / 10",
    tagline: "The distant cobalt sentinel swept by supersonic storm winds.",
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.45)",
    videoSrc: "videos/neptune.mp4",
    posterSrc: "videos/neptune_3d_cinema.jpg",
    keyChips: [
      { label: "Wind Velocities", val: "2,100+ km/h" },
      { label: "Orbital Orbit", val: "164.8 Earth Yrs" },
      { label: "Distance to Sol", val: "4.5 Billion km" }
    ],
    quickFacts: [
      { label: "Equatorial Diameter", val: "49,244", unit: "km", display: "49,244 km (3.86× Earth)" },
      { label: "Mass Magnitude", val: "1.024", unit: "× 10²⁶ kg", display: "1.024 × 10²⁶ kg (17.1× Earth)" },
      { label: "Mean Distance to Sun", val: "4,495", unit: "Million km", display: "4.495 Billion km (30.1 AU)" },
      { label: "Orbital Period", val: "164.8", unit: "Earth Years", display: "164.8 Earth Years" },
      { label: "Axial Rotation", val: "16.11", unit: "Hours", display: "16 Hours 6 Minutes" },
      { label: "Surface Gravity", val: "11.15", unit: "m/s²", display: "11.15 m/s² (1.14g)" },
      { label: "Cloud Top Temp", val: "-214", unit: "°C", display: "-214 °C" },
      { label: "Natural Satellites", val: "16", unit: "Moons", display: "16 Confirmed Moons" }
    ],
    story: {
      overview: "Neptune is the eighth and outermost major planet in the solar system, shrouded in deep cobalt blue. It is an intensely dynamic world swept by supersonic storm winds that roar faster than the speed of sound.",
      atmosphere: "A rich mixture of hydrogen, helium, and methane creates its deep blue hue, accented by high-altitude white cirrus clouds made of frozen methane. Dark anticyclonic vortices regularly appear, migrate across latitudes, and dissipate.",
      structure: "A solid core of rock and metal is surrounded by an exotic ocean of high-pressure water, ammonia, and methane. Under these immense pressures, hydrocarbons are believed to compress into showers of solid diamonds.",
      moonsAndRings: "Neptune has 16 known moons, headlined by Triton—a captured Kuiper Belt dwarf planet with active nitrogen geysers. Five faint ring arcs circle the planet, continually shaped by gravitational resonances with nearby moons."
    },
    missions: [
      { year: "1846", name: "Le Verrier & Galle", role: "First planet discovered purely via mathematical prediction of orbital perturbations on Uranus." },
      { year: "1989", name: "Voyager 2 (NASA)", role: "Only spacecraft flyby of Neptune, discovering the Great Dark Spot and active cryovolcanoes on Triton." },
      { year: "2022", name: "James Webb Telescope", role: "Revealed the clearest views of Neptune's delicate dust rings in over three decades." }
    ],
    flipFacts: [
      {
        tag: "Diamond Downpour",
        hook: "Does it really rain real diamonds on Neptune?",
        fact: "Thousands of kilometers inside Neptune's slushy mantle, temperatures reach 4,000 °C and pressures reach millions of atmospheres. This tears methane molecules apart, compressing carbon into solid diamonds that rain toward the core."
      },
      {
        tag: "Supersonic Winds",
        hook: "How fast do winds blow on the farthest planet?",
        fact: "Despite receiving minimal solar energy, Neptune produces the fastest winds recorded in the solar system, topping 2,100 kilometers per hour—faster than the cruising speed of a supersonic fighter jet."
      },
      {
        tag: "Math Discovery",
        hook: "How was Neptune found without looking through a telescope?",
        fact: "After astronomers noticed Uranus wandering from its predicted orbit, mathematician Urbain Le Verrier calculated the exact gravitational pull of an undiscovered world. Telescopes pointed to his coordinates found Neptune within an hour."
      }
    ],
    nextPlanet: { id: "quiz", name: "Odyssey Quiz" }
  }
];

// Terrestrial World Comparative Matrix (Mercury, Venus, Earth, Mars)
window.TERRESTRIAL_COMPARISON = [
  { name: "Mercury", mass: "0.055 M⊕", radius: "0.383 R⊕", density: "5.43 g/cm³", gravity: "3.70 m/s²", atmosphere: "Exosphere (10⁻¹⁴ bar)", magneticField: "1.1% Earth" },
  { name: "Venus", mass: "0.815 M⊕", radius: "0.949 R⊕", density: "5.24 g/cm³", gravity: "8.87 m/s²", atmosphere: "93 bar Supercritical CO₂", magneticField: "Negligible" },
  { name: "Earth", mass: "1.000 M⊕", radius: "1.000 R⊕", density: "5.51 g/cm³", gravity: "9.81 m/s²", atmosphere: "1.01 bar N₂-O₂", magneticField: "Active Geodynamo" },
  { name: "Mars", mass: "0.107 M⊕", radius: "0.532 R⊕", density: "3.93 g/cm³", gravity: "3.72 m/s²", atmosphere: "0.006 bar CO₂", magneticField: "Crustal Remnants" }
];
