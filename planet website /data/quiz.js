/**
 * The Living Archive — Solar System Interactive Quiz Engine
 * Conceived & Architected by Tanmay (Adesh Srivastava)
 *
 * Contains 12 Kids questions and 12 Adults questions with multiple-choice options,
 * correct indices, clear scientific explanations, and associated planet IDs for dynamic
 * chromatic ambient lighting.
 */

window.QUIZ_DATA = {
  kids: [
    {
      planet: "moon",
      question: "What was the name of the historic NASA mission that first landed astronauts on the Moon in 1969?",
      options: ["Apollo 11", "Voyager 1", "Curiosity", "Sputnik 1"],
      answer: 0,
      explanation: "Apollo 11 landed Neil Armstrong and Buzz Aldrin on the Moon on July 20, 1969, marking humanity's first steps on another world!"
    },
    {
      planet: "sun",
      question: "Which celestial body sits in the very center of our Solar System and gives us warmth and light?",
      options: ["The Moon", "The Sun", "Jupiter", "Mars"],
      answer: 1,
      explanation: "The Sun is our home star and sits in the center of the Solar System! Its gravity holds all eight planets in orbit."
    },
    {
      planet: "mars",
      question: "Why is Mars famously called the 'Red Planet'?",
      options: ["It is covered in strawberries", "Its surface is covered in rusty iron dust", "It is made of hot red fire", "It has red clouds"],
      answer: 1,
      explanation: "Mars is covered in iron oxide, which is the exact same mineral as rust! It gives the soil and rocks their famous reddish-orange color."
    },
    {
      planet: "saturn",
      question: "Which planet is famous for its giant, beautiful rings made of sparkling water ice?",
      options: ["Saturn", "Mercury", "Venus", "Neptune"],
      answer: 0,
      explanation: "Saturn has the most magnificent rings in the Solar System, made of billions of chunks of pure water ice and rock!"
    },
    {
      planet: "jupiter",
      question: "Which planet is the biggest in the entire Solar System?",
      options: ["Earth", "Jupiter", "Uranus", "The Sun"],
      answer: 1,
      explanation: "Jupiter is the biggest planet! It is so huge that over 1,300 Earths could fit inside it."
    },
    {
      planet: "earth",
      question: "What is the only planet in the Solar System where liquid oceans and plants, animals, and humans live?",
      options: ["Venus", "Earth", "Mars", "Neptune"],
      answer: 1,
      explanation: "Earth is our home! It is in the 'Goldilocks Zone' where temperatures are just right for liquid water and life."
    },
    {
      planet: "mercury",
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Earth", "Venus", "Mars"],
      answer: 0,
      explanation: "Mercury is the closest planet to the Sun! It speeds around the Sun in just 88 days."
    },
    {
      planet: "uranus",
      question: "Which planet spins on its side like a rolling bowling ball?",
      options: ["Uranus", "Saturn", "Earth", "Mercury"],
      answer: 0,
      explanation: "Uranus is tilted at a wild 98 degrees, so it rolls along on its side as it orbits the Sun!"
    },
    {
      planet: "neptune",
      question: "Which planet is the windiest and farthest planet from the Sun?",
      options: ["Neptune", "Jupiter", "Venus", "Mars"],
      answer: 0,
      explanation: "Neptune is the eighth and farthest planet, and its winds blow faster than 2,000 km per hour!"
    },
    {
      planet: "venus",
      question: "Even though Mercury is closest to the Sun, which planet is actually the HOTTEST because of thick clouds?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: 1,
      explanation: "Venus is the hottest planet because its thick carbon dioxide atmosphere traps heat like a giant greenhouse blanket!"
    },
    {
      planet: "earth",
      question: "What is the name of Earth's only natural satellite that lights up our night sky?",
      options: ["Phobos", "The Moon (Luna)", "Titan", "Europa"],
      answer: 1,
      explanation: "The Moon is Earth's loyal companion, keeping our planet's wobble steady and causing ocean tides."
    },
    {
      planet: "jupiter",
      question: "What is Jupiter's famous 'Great Red Spot'?",
      options: ["A giant red volcano", "A red desert continent", "A giant storm that has raged for centuries", "A crater"],
      answer: 2,
      explanation: "The Great Red Spot is a monster storm bigger than Earth that has been swirling for over 300 years!"
    },
    {
      planet: "sun",
      question: "How many major planets are in our Solar System?",
      options: ["Nine", "Eight", "Twelve", "Seven"],
      answer: 1,
      explanation: "There are eight major planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune!"
    }
  ],
  adults: [
    {
      planet: "moon",
      question: "Which scientific theory best explains the isotopic composition, lack of iron core, and angular momentum of the Earth-Moon system?",
      options: [
        "The Capture Theory (gravitational capture of a rogue body)",
        "The Giant Impact Hypothesis (collision with a protoplanet named Theia)",
        "The Fission Model (rapidly spinning proto-Earth spun off crustal matter)",
        "The Co-accretion Model (formed side-by-side in the primordial solar nebula)"
      ],
      answer: 1,
      explanation: "The Giant Impact Hypothesis posits that a Mars-sized protoplanet named Theia collided with the infant Earth 4.5 billion years ago, with the ejected silicate mantle debris coalescing into the Moon."
    },
    {
      planet: "sun",
      question: "What primary thermonuclear process powers the Sun's radiant energy production in its core?",
      options: ["Uranium Fission", "Proton-Proton Chain Hydrogen Fusion", "Carbon-Nitrogen-Oxygen Cycle", "Gravitational Collapse"],
      answer: 1,
      explanation: "In Sol's core, temperatures exceeding 15 million Kelvin drive the proton-proton chain, fusing 600 million metric tons of hydrogen into helium every second."
    },
    {
      planet: "venus",
      question: "Why is Venus's surface temperature (~465 °C) hotter than Mercury's, despite receiving less than a quarter of the solar flux?",
      options: ["Extensive tidal friction", "Runaway CO₂ greenhouse effect at 92 bar pressure", "Subsurface radioactive mantle heating", "Solar wind flare bombardment"],
      answer: 1,
      explanation: "Venus's 96.5% CO₂ atmosphere creates an extreme runaway greenhouse effect with surface pressure exceeding 90 atmospheres, insulating lead-melting heat globally."
    },
    {
      planet: "mercury",
      question: "What unique gravitational resonance characterizes Mercury's orbit and rotation?",
      options: ["1:1 Tidal Lock", "3:2 Spin-Orbit Resonance", "2:1 Orbital Resonance with Venus", "4:3 Laplace Resonance"],
      answer: 1,
      explanation: "Mercury completes exactly three rotations on its axis for every two revolutions around the Sun, a 3:2 spin-orbit resonance produced by solar tidal forces."
    },
    {
      planet: "mars",
      question: "Which geologic wonder on Mars represents the tallest shield volcano in the Solar System?",
      options: ["Ascraeus Mons", "Elysium Mons", "Olympus Mons", "Maat Mons"],
      answer: 2,
      explanation: "Olympus Mons towers roughly 22 kilometers high with a base spanning 600 kilometers, made possible by Mars's lack of tectonic plate movement."
    },
    {
      planet: "jupiter",
      question: "What state of matter in Jupiter's deep interior is responsible for generating its colossal magnetic field?",
      options: ["Liquid Metallic Hydrogen", "Superheated Solid Nickel", "Plasma Gas Convection", "Supercritical CO₂"],
      answer: 0,
      explanation: "Under pressures exceeding 2 million atmospheres, hydrogen transitions into liquid metallic hydrogen, an electrical conductor whose dynamo action produces Jupiter's massive magnetosphere."
    },
    {
      planet: "saturn",
      question: "What is the typical average thickness of Saturn's primary ring system, despite spanning over 280,000 kilometers in diameter?",
      options: ["10 to 30 Meters", "5 to 10 Kilometers", "500 Kilometers", "2,000 Kilometers"],
      answer: 0,
      explanation: "Despite their vast radial extent, Saturn's main rings are extraordinarily thin—generally between 10 and 30 meters thick—composed of icy particles."
    },
    {
      planet: "uranus",
      question: "What explains Uranus's extreme 97.8° axial obliquity?",
      options: ["Gravitational capture of a rogue planet", "A catastrophic proto-planetary giant impact during early accretion", "Magnetic field torquing", "Resonance with Neptune"],
      answer: 1,
      explanation: "Simulations demonstrate that one or more oblique collisions with Earth-sized protoplanets during late-stage planetary accretion knocked Uranus onto its side."
    },
    {
      planet: "neptune",
      question: "How was Neptune's existence first confirmed in 1846?",
      options: ["Serendipitous visual discovery by Galileo", "Mathematical prediction based on orbital perturbations of Uranus", "Infrared space telescope scan", "Radio emissions detection"],
      answer: 1,
      explanation: "Urbain Le Verrier and John Couch Adams calculated Neptune's position by analyzing gravitational perturbations in the orbit of Uranus before Johann Galle observed it telescopically."
    },
    {
      planet: "saturn",
      question: "Which moon of Saturn features active geysers venting water vapor and organics from a global subsurface ocean into space?",
      options: ["Titan", "Enceladus", "Mimas", "Iapetus"],
      answer: 1,
      explanation: "Cassini discovered Enceladus's south polar 'tiger stripe' fissures spraying plumes of water vapor and organic molecules, revealing a habitable hydrothermal ocean environment."
    },
    {
      planet: "earth",
      question: "What is the approximate composition of Earth's atmosphere by volume?",
      options: ["78% Nitrogen, 21% Oxygen, 0.9% Argon", "50% Oxygen, 45% Nitrogen, 5% Carbon Dioxide", "85% Nitrogen, 12% Carbon Dioxide, 3% Oxygen", "70% Hydrogen, 25% Helium, 5% Oxygen"],
      answer: 0,
      explanation: "Earth's dry atmosphere is roughly 78.08% Nitrogen, 20.95% Oxygen, 0.93% Argon, and trace amounts of Carbon Dioxide, water vapor, and noble gases."
    },
    {
      planet: "saturn",
      question: "What phenomenon generates the peculiar, permanent geometric storm at Saturn's north pole?",
      options: ["A magnetic flux tube anchor", "A hexagonal atmospheric jet stream wave pattern", "Tidal heating from Titan", "Impact crater shockwave"],
      answer: 1,
      explanation: "Saturn's north pole features a Rossby-type planetary wave in its atmospheric jet stream that naturally organizes into a stable, spinning six-sided polygon."
    },
    {
      planet: "saturn",
      question: "Which moon in the Solar System is the only satellite known to possess a dense, nitrogen-rich atmosphere and liquid hydrocarbon lakes?",
      options: ["Ganymede", "Triton", "Titan", "Callisto"],
      answer: 2,
      explanation: "Saturn's largest moon Titan has a surface pressure 1.5 times that of Earth, an atmosphere composed of 95% nitrogen and 5% methane, and liquid methane/ethane seas."
    }
  ]
};
