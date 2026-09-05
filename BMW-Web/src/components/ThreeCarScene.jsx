import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Meticulously Sculpted BMW i7 / 7 Series (G70) Flagship Sedan
function BmwG70Model({ paintColor, viewMode, isAutoRotating, cameraAngle }) {
  const carGroup = useRef();

  useFrame((_, delta) => {
    if (carGroup.current && isAutoRotating) {
      carGroup.current.rotation.y += delta * 0.4;
    }
  });

  const isWireframe = viewMode === 'wireframe';
  const bodyColor = isWireframe ? '#00f0ff' : paintColor.body;
  const roofColor = isWireframe ? '#00f0ff' : paintColor.roof;
  const glowColor = paintColor.id === 'fire-red' ? '#ff1e42' : '#00f0ff';

  // Wheel Spoke Geometry (15-Spoke Bi-Color Turbine Wheel)
  const Wheel = ({ position, rotationY = 0 }) => (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* Outer Rubber Tire */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.38, 0.38, 0.28, 32]} />
        <meshStandardMaterial
          color={isWireframe ? '#003366' : '#101114'}
          roughness={0.8}
          wireframe={isWireframe}
        />
      </mesh>

      {/* 21-inch Aerodynamic Turbine Alloy Rim */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.31, 0.31, 0.29, 32]} />
        <meshStandardMaterial
          color={isWireframe ? '#00f0ff' : '#22252c'}
          metalness={0.95}
          roughness={0.15}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Bi-Color Machined Spokes */}
      {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240, 264, 288, 312, 336].map((deg, i) => (
        <mesh
          key={i}
          rotation={[0, 0, (deg * Math.PI) / 180]}
          position={[0, 0, 0.145]}
        >
          <boxGeometry args={[0.03, 0.27, 0.015]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#ffffff' : '#475569'}
            metalness={0.9}
            roughness={0.2}
            wireframe={isWireframe}
          />
        </mesh>
      ))}

      {/* Center BMW Roundel Cap */}
      <mesh position={[0, 0, 0.155]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.07, 0.07, 0.02, 16]} />
        <meshStandardMaterial
          color={isWireframe ? '#00f0ff' : '#0066b1'}
          roughness={0.3}
          metalness={0.5}
        />
      </mesh>

      {/* Cross-Drilled Ventilated Brake Rotor */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.26, 0.26, 0.03, 24]} />
        <meshStandardMaterial color="#64748b" metalness={0.95} roughness={0.25} />
      </mesh>

      {/* M-Sport Brake Caliper (Electric Blue / Fire Red) */}
      <mesh position={[0, 0.16, 0.06]}>
        <boxGeometry args={[0.08, 0.12, 0.07]} />
        <meshStandardMaterial
          color={paintColor.id === 'fire-red' ? '#ef4444' : '#1c69d4'}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </group>
  );

  return (
    <group ref={carGroup} position={[0, 0, 0]}>
      {/* ========================================================
          1. MAIN LOWER SEDAN BODY (Sculpted G70 Proportions)
          ======================================================== */}
      {/* Lower Chassis / Floor Pan */}
      <mesh position={[0, 0.32, 0]}>
        <boxGeometry args={[1.98, 0.28, 5.25]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={0.9}
          roughness={0.15}
          clearcoat={isWireframe ? 0 : 1.0}
          clearcoatRoughness={0.05}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Mid Beltline Body (Widened wheel arches & sculpted shoulder line) */}
      <mesh position={[0, 0.52, 0]}>
        <boxGeometry args={[2.02, 0.22, 5.15]} />
        <meshStandardMaterial
          color={bodyColor}
          metalness={0.9}
          roughness={0.15}
          clearcoat={isWireframe ? 0 : 1.0}
          clearcoatRoughness={0.05}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Long Sculpted Hood Deck */}
      <mesh position={[0, 0.64, 1.48]} rotation={[-0.045, 0, 0]}>
        <boxGeometry args={[1.94, 0.14, 2.05]} />
        <meshStandardMaterial
          color={roofColor} // Two-Tone Hood matches roof
          metalness={0.9}
          roughness={0.15}
          clearcoat={1.0}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Sculpted Hood Power Domes (Left & Right creases) */}
      <mesh position={[-0.45, 0.72, 1.48]} rotation={[-0.045, 0, -0.05]}>
        <boxGeometry args={[0.22, 0.03, 1.85]} />
        <meshStandardMaterial color={roofColor} metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[0.45, 0.72, 1.48]} rotation={[-0.045, 0, 0.05]}>
        <boxGeometry args={[0.22, 0.03, 1.85]} />
        <meshStandardMaterial color={roofColor} metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Rear Trunk Deck (Executive Stately Tail) */}
      <mesh position={[0, 0.72, -1.98]} rotation={[0.04, 0, 0]}>
        <boxGeometry args={[1.88, 0.16, 1.15]} />
        <meshStandardMaterial
          color={roofColor}
          metalness={0.9}
          roughness={0.15}
          clearcoat={1.0}
          wireframe={isWireframe}
        />
      </mesh>

      {/* ========================================================
          2. TWO-TONE UPPER GREENHOUSE & ROOFLINE
          ======================================================== */}
      {/* Raked Windshield (Tinted Dark Glass) */}
      <mesh position={[0, 0.98, 0.45]} rotation={[-0.56, 0, 0]}>
        <boxGeometry args={[1.72, 0.05, 1.2]} />
        <meshPhysicalMaterial
          color="#060912"
          roughness={0.05}
          transmission={0.88}
          thickness={0.5}
          ior={1.5}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Obsidian Black Roof Panel (Panoramic Sky Lounge Glass) */}
      <mesh position={[0, 1.25, -0.38]}>
        <boxGeometry args={[1.65, 0.08, 1.8]} />
        <meshStandardMaterial
          color={roofColor}
          metalness={0.95}
          roughness={0.1}
          clearcoat={1.0}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Raked Rear Window (With Hofmeister Kink C-Pillars) */}
      <mesh position={[0, 1.05, -1.25]} rotation={[0.55, 0, 0]}>
        <boxGeometry args={[1.65, 0.05, 0.95]} />
        <meshPhysicalMaterial
          color="#060912"
          roughness={0.05}
          transmission={0.88}
          thickness={0.5}
          wireframe={isWireframe}
        />
      </mesh>

      {/* Side Cabin Windows (Left & Right) */}
      <mesh position={[-0.82, 0.95, -0.38]}>
        <boxGeometry args={[0.04, 0.45, 1.85]} />
        <meshPhysicalMaterial color="#080c14" roughness={0.1} transmission={0.85} />
      </mesh>
      <mesh position={[0.82, 0.95, -0.38]}>
        <boxGeometry args={[0.04, 0.45, 1.85]} />
        <meshPhysicalMaterial color="#080c14" roughness={0.1} transmission={0.85} />
      </mesh>

      {/* Aerodynamic Wing Mirrors */}
      <mesh position={[-0.98, 0.82, 0.75]}>
        <boxGeometry args={[0.18, 0.08, 0.22]} />
        <meshStandardMaterial color={roofColor} metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[0.98, 0.82, 0.75]}>
        <boxGeometry args={[0.18, 0.08, 0.22]} />
        <meshStandardMaterial color={roofColor} metalness={0.9} roughness={0.15} />
      </mesh>

      {/* ========================================================
          3. ICONIC MONOLITH DOUBLE KIDNEY GRILLE (BMW ICONIC GLOW)
          ======================================================== */}
      {/* Left Kidney Outer Chrome Bevel */}
      <mesh position={[-0.34, 0.48, 2.62]}>
        <boxGeometry args={[0.54, 0.58, 0.08]} />
        <meshStandardMaterial
          color="#d1d5db"
          metalness={0.98}
          roughness={0.08}
        />
      </mesh>
      {/* Left Kidney Dark Slats */}
      <mesh position={[-0.34, 0.48, 2.64]}>
        <boxGeometry args={[0.48, 0.52, 0.06]} />
        <meshStandardMaterial color="#0b0c10" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* Right Kidney Outer Chrome Bevel */}
      <mesh position={[0.34, 0.48, 2.62]}>
        <boxGeometry args={[0.54, 0.58, 0.08]} />
        <meshStandardMaterial
          color="#d1d5db"
          metalness={0.98}
          roughness={0.08}
        />
      </mesh>
      {/* Right Kidney Dark Slats */}
      <mesh position={[0.34, 0.48, 2.64]}>
        <boxGeometry args={[0.48, 0.52, 0.06]} />
        <meshStandardMaterial color="#0b0c10" roughness={0.4} metalness={0.7} />
      </mesh>

      {/* BMW Iconic Glow Neon Contour Rings */}
      <mesh position={[-0.34, 0.48, 2.67]}>
        <ringGeometry args={[0.26, 0.28, 24]} />
        <meshBasicMaterial color={glowColor} />
      </mesh>
      <mesh position={[0.34, 0.48, 2.67]}>
        <ringGeometry args={[0.26, 0.28, 24]} />
        <meshBasicMaterial color={glowColor} />
      </mesh>

      {/* BMW Official Roundel Emblem on Front Nose */}
      <mesh position={[0, 0.71, 2.52]} rotation={[-0.6, 0, 0]}>
        <cylinderGeometry args={[0.075, 0.075, 0.02, 20]} />
        <meshStandardMaterial color="#0066b1" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* "THE i7" Front License Plate */}
      <mesh position={[0, 0.19, 2.64]}>
        <boxGeometry args={[0.55, 0.12, 0.02]} />
        <meshStandardMaterial color="#000000" roughness={0.2} />
      </mesh>

      {/* ========================================================
          4. SPLIT CRYSTAL HEADLIGHTS (SWAROVSKI DRLs)
          ======================================================== */}
      {/* Upper Razor-Sharp DRLs (Left & Right) */}
      <mesh position={[-0.82, 0.72, 2.44]} rotation={[0, 0.35, 0]}>
        <boxGeometry args={[0.42, 0.035, 0.1]} />
        <meshBasicMaterial color={glowColor} />
      </mesh>
      <mesh position={[0.82, 0.72, 2.44]} rotation={[0, -0.35, 0]}>
        <boxGeometry args={[0.42, 0.035, 0.1]} />
        <meshBasicMaterial color={glowColor} />
      </mesh>

      {/* Lower Recessed Matrix LED Headlamps */}
      <mesh position={[-0.82, 0.54, 2.48]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.32, 0.12, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
      </mesh>
      <mesh position={[0.82, 0.54, 2.48]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.32, 0.12, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ========================================================
          5. REAR SLIM LED LIGHTBAR & M-DIFFUSER
          ======================================================== */}
      {/* Continuous Ultra-Thin LED Taillight Strip (Crimson Red) */}
      <mesh position={[0, 0.72, -2.62]}>
        <boxGeometry args={[1.82, 0.045, 0.06]} />
        <meshBasicMaterial color="#ff1e42" />
      </mesh>
      {/* L-Shaped Outer Light Blades */}
      <mesh position={[-0.84, 0.68, -2.58]} rotation={[0, -0.3, 0]}>
        <boxGeometry args={[0.28, 0.05, 0.06]} />
        <meshBasicMaterial color="#ff1e42" />
      </mesh>
      <mesh position={[0.84, 0.68, -2.58]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[0.28, 0.05, 0.06]} />
        <meshBasicMaterial color="#ff1e42" />
      </mesh>

      {/* Rear High-Gloss Diffuser Aerodynamics */}
      <mesh position={[0, 0.22, -2.58]}>
        <boxGeometry args={[1.75, 0.16, 0.15]} />
        <meshStandardMaterial color="#090b10" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* ========================================================
          6. 21-INCH TURBINE ALLOY WHEELS & TIRES
          ======================================================== */}
      <Wheel position={[-1.0, 0.38, 1.62]} />
      <Wheel position={[1.0, 0.38, 1.62]} rotationY={Math.PI} />
      <Wheel position={[-1.0, 0.38, -1.62]} />
      <Wheel position={[1.0, 0.38, -1.62]} rotationY={Math.PI} />

      {/* Dynamic Underglow Aura (Electric Cyan or Fire Red) */}
      <pointLight
        position={[0, 0.08, 0]}
        intensity={paintColor.id === 'fire-red' ? 4.5 : 3.5}
        distance={3.8}
        color={paintColor.id === 'fire-red' ? '#ff1e42' : '#00f0ff'}
      />
    </group>
  );
}

// Particle Speedlines in Warp Mode
function WarpParticles({ color }) {
  const count = 350;
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 14,
        y: Math.random() * 5 + 0.1,
        z: (Math.random() - 0.5) * 22,
        speed: 14 + Math.random() * 22,
      });
    }
    return arr;
  }, []);

  const meshRef = useRef();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    particles.forEach((p, i) => {
      p.z += p.speed * delta;
      if (p.z > 10) p.z = -14;
      dummy.position.set(p.x, p.y, p.z);
      dummy.scale.set(0.04, 0.04, 0.6);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={color} transparent opacity={0.75} />
    </instancedMesh>
  );
}

export default function ThreeCarScene({
  paintColor,
  viewMode = 'studio',
  isAutoRotating = true,
  cameraPreset = 'front-quarter',
}) {
  const controlsRef = useRef();

  // Smooth camera position preset coordinates
  const cameraPresets = {
    'front-quarter': [5.4, 2.0, 5.2],
    'side-profile': [6.6, 1.4, 0.0],
    'front-face': [0.0, 1.3, 5.8],
    'rear-quarter': [5.2, 1.9, -5.2],
    'top-down': [0.1, 7.2, 0.5],
  };

  const currentCamPos = cameraPresets[cameraPreset] || cameraPresets['front-quarter'];

  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: currentCamPos, fov: 42 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={viewMode === 'wireframe' ? 0.3 : 1.4} />

        {/* Primary Studio Spotlights */}
        <spotLight
          position={[0, 10, 4]}
          intensity={6.0}
          angle={0.65}
          penumbra={0.8}
          color="#ffffff"
          castShadow
        />
        <pointLight position={[-6, 4, -4]} intensity={3.5} color="#0066ff" />
        <pointLight
          position={[6, 4, 4]}
          intensity={4.0}
          color={paintColor.id === 'fire-red' ? '#ff1e42' : '#00f0ff'}
        />
        <pointLight position={[0, 3, -6]} intensity={5.0} color="#ff1e42" />

        {viewMode === 'warp' && (
          <WarpParticles
            color={paintColor.id === 'fire-red' ? '#ff1e42' : '#00f0ff'}
          />
        )}

        <BmwG70Model
          paintColor={paintColor}
          viewMode={viewMode}
          isAutoRotating={isAutoRotating}
        />

        {/* Dark Obsidian Showroom Wet Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
          <planeGeometry args={[35, 35]} />
          <meshStandardMaterial
            color="#07080b"
            roughness={0.18}
            metalness={0.9}
          />
        </mesh>

        <ContactShadows
          position={[0, 0, 0]}
          opacity={0.88}
          scale={9}
          blur={2.0}
          far={3.5}
          color="#000000"
        />

        <OrbitControls
          ref={controlsRef}
          target={[0, 0.6, 0]}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2 - 0.04}
          minPolarAngle={0.15}
          minDistance={4.2}
          maxDistance={11.0}
          enableDamping
          dampingFactor={0.06}
        />
      </Canvas>
    </div>
  );
}
