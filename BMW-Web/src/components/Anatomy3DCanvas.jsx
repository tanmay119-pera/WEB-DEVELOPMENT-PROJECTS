import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html, Float } from '@react-three/drei';
import * as THREE from 'three';

// Real BMW 3D Model Rendered in Holographic X-Ray Mode
function RealBMWHolographicChassis({ activeDomain, onSelectHotspot }) {
  const { scene } = useGLTF('/assets/models/bmw.glb');
  const groupRef = useRef();
  const scannerRef = useRef();

  // Clone scene so materials don't conflict with main configurator
  const clonedScene = useMemo(() => {
    const clone = scene.clone();
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: '#00a6ff',
          emissive: '#0033aa',
          emissiveIntensity: 0.35,
          roughness: 0.2,
          metalness: 0.1,
          transmission: 0.82,
          opacity: 0.45,
          transparent: true,
          wireframe: false,
          depthWrite: false,
        });
      }
    });
    return clone;
  }, [scene]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.22;
    }
    if (scannerRef.current) {
      scannerRef.current.position.z = Math.sin(state.clock.elapsedTime * 1.6) * 2.2;
    }
  });

  const isAll = activeDomain === 'all';
  const isEngine = isAll || activeDomain === 'engine';
  const isBattery = isAll || activeDomain === 'battery';
  const isSuspension = isAll || activeDomain === 'suspension';
  const isStructure = isAll || activeDomain === 'structure';
  const isAero = isAll || activeDomain === 'aero';

  return (
    <group ref={groupRef} position={[0, -0.05, 0]}>
      {/* Real 3D BMW Outer Shell in Glass Hologram */}
      <primitive
        object={clonedScene}
        scale={0.24}
        position={[0, 0, 0]}
      />

      {/* Sweeping Laser Scanner Line */}
      <mesh ref={scannerRef} position={[0, 0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.5, 0.06]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.8} side={THREE.DoubleSide} />
      </mesh>

      {/* Real Sub-Part 1: Front eDrive Motor & Inverter Unit (Glowing Engine Bay) */}
      <group position={[0, 0.28, 1.45]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.3, 0.58, 24]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color={isEngine ? '#00f0ff' : '#1e293b'}
            emissive={isEngine ? '#0077ff' : '#000000'}
            emissiveIntensity={isEngine ? 2.2 : 0.2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        {/* Drive Shafts */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.04, 0.04, 1.6, 16]} />
          <meshStandardMaterial color={isEngine ? '#38bdf8' : '#334155'} metalness={0.9} />
        </mesh>
      </group>

      {/* Real Sub-Part 2: Rear eDrive Motor (246 kW / 335 HP) */}
      <group position={[0, 0.32, -1.45]}>
        <mesh>
          <cylinderGeometry args={[0.34, 0.34, 0.68, 24]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color={isEngine ? '#00f0ff' : '#1e293b'}
            emissive={isEngine ? '#0077ff' : '#000000'}
            emissiveIntensity={isEngine ? 2.4 : 0.2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Real Sub-Part 3: 101.7 kWh High-Voltage Battery Floorpack & Cell Modules */}
      <group position={[0, 0.18, -0.05]}>
        <mesh>
          <boxGeometry args={[1.55, 0.14, 2.5]} />
          <meshStandardMaterial
            color={isBattery ? '#10b981' : '#064e3b'}
            emissive={isBattery ? '#059669' : '#000000'}
            emissiveIntensity={isBattery ? 1.6 : 0.1}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Individual Prismatic Cell Segments */}
        {[-0.9, -0.45, 0, 0.45, 0.9].map((z, i) => (
          <mesh key={i} position={[0, 0.08, z]}>
            <boxGeometry args={[1.35, 0.04, 0.32]} />
            <meshStandardMaterial
              color={isBattery ? '#34d399' : '#047857'}
              emissive={isBattery ? '#10b981' : '#000000'}
              emissiveIntensity={isBattery ? 1.8 : 0.1}
            />
          </mesh>
        ))}
      </group>

      {/* Real Sub-Part 4: 2-Axle Adaptive Air Suspension Struts & M Brake Discs */}
      {[
        [-0.95, 0.35, 1.45],
        [0.95, 0.35, 1.45],
        [-0.95, 0.35, -1.45],
        [0.95, 0.35, -1.45],
      ].map((pos, idx) => (
        <group key={idx} position={pos}>
          {/* Strut */}
          <mesh position={[pos[0] > 0 ? -0.1 : 0.1, 0.25, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.45, 16]} />
            <meshStandardMaterial
              color={isSuspension ? '#f59e0b' : '#451a03'}
              emissive={isSuspension ? '#d97706' : '#000000'}
              emissiveIntensity={isSuspension ? 2.0 : 0.1}
            />
          </mesh>
          {/* Disc Caliper */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.18, 0.04, 12, 24]} />
            <meshStandardMaterial
              color={isSuspension ? '#fbbf24' : '#78350f'}
              metalness={0.9}
            />
          </mesh>
        </group>
      ))}

      {/* Real Sub-Part 5: Carbon Core Monocoque Passenger Safety Cell */}
      <group position={[0, 0.9, -0.2]}>
        <mesh position={[-0.75, 0, 0]}>
          <boxGeometry args={[0.08, 0.55, 2.4]} />
          <meshStandardMaterial
            color={isStructure ? '#38bdf8' : '#1e293b'}
            emissive={isStructure ? '#0284c7' : '#000000'}
            emissiveIntensity={isStructure ? 1.8 : 0.1}
          />
        </mesh>
        <mesh position={[0.75, 0, 0]}>
          <boxGeometry args={[0.08, 0.55, 2.4]} />
          <meshStandardMaterial
            color={isStructure ? '#38bdf8' : '#1e293b'}
            emissive={isStructure ? '#0284c7' : '#000000'}
            emissiveIntensity={isStructure ? 1.8 : 0.1}
          />
        </mesh>
      </group>

      {/* Real Sub-Part 6: Solid-State LIDAR & Active Kidney Radar Sensor */}
      <group position={[0, 0.45, 2.4]}>
        <mesh>
          <boxGeometry args={[0.3, 0.1, 0.1]} />
          <meshStandardMaterial
            color={isAero ? '#f43f5e' : '#4c0519'}
            emissive={isAero ? '#e11d48' : '#000000'}
            emissiveIntensity={isAero ? 2.5 : 0.2}
          />
        </mesh>
        {isAero && (
          <mesh position={[0, 0, 1.2]} rotation={[Math.PI / 2, 0, 0]}>
            <coneGeometry args={[0.8, 2.4, 20, 1, true]} />
            <meshBasicMaterial color="#f43f5e" transparent opacity={0.25} wireframe />
          </mesh>
        )}
      </group>
    </group>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-black/80 border border-white/10">
        <div className="w-6 h-6 border-2 border-bmw-cyan border-t-transparent rounded-full animate-spin" />
        <span className="text-[10px] font-mono text-bmw-cyan uppercase font-bold tracking-wider">
          LOADING REAL CHASSIS X-RAY...
        </span>
      </div>
    </Html>
  );
}

export default function Anatomy3DCanvas({ activeDomain, onSelectDomain }) {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [4.4, 2.4, 4.2], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 6, 2]} intensity={3.0} color="#00f0ff" />
        <pointLight position={[-4, 2, -3]} intensity={2.0} color="#0066ff" />
        <pointLight position={[4, 2, 3]} intensity={2.2} color="#10b981" />

        <Suspense fallback={<Loader />}>
          <RealBMWHolographicChassis
            activeDomain={activeDomain}
            onSelectHotspot={onSelectDomain}
          />
        </Suspense>

        {/* Circular Telemetry Rings on Ground */}
        <group position={[0, -0.05, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.8, 1.82, 64]} />
            <meshBasicMaterial color="#00f0ff" transparent opacity={0.4} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2.8, 2.82, 64]} />
            <meshBasicMaterial color="#0066ff" transparent opacity={0.25} />
          </mesh>
        </group>

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2 - 0.05}
          minPolarAngle={0.15}
          minDistance={3.0}
          maxDistance={9.0}
          enableDamping
          dampingFactor={0.06}
        />
      </Canvas>
    </div>
  );
}
