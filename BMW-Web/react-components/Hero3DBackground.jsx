import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// 3D Floating Luminous Energy Field
function EnergyParticles({ mouse }) {
  const count = 300;
  const meshRef = useRef();

  const particles = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 12 - 2,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.25,
        speedZ: 0.2 + Math.random() * 0.4,
        size: 0.02 + Math.random() * 0.04,
      });
    }
    return data;
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    particles.forEach((p, i) => {
      p.z += p.speedZ * delta * 2;
      p.x += p.speedX * delta;
      p.y += p.speedY * delta;

      // Wrap around
      if (p.z > 4) p.z = -12;

      // Mouse influence
      const mx = (mouse.current.x * 0.5);
      const my = (mouse.current.y * 0.5);

      dummy.position.set(p.x + mx, p.y + my, p.z);
      dummy.scale.set(p.size, p.size, p.size);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#0066B1" transparent opacity={0.65} />
    </instancedMesh>
  );
}

// 3D Holographic Perspective Floor Grid with Infinite Wave
function PerspectiveLaserGrid({ mouse }) {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.8) % 1;
      gridRef.current.rotation.x = -Math.PI / 2.2 + mouse.current.y * 0.05;
      gridRef.current.rotation.z = mouse.current.x * 0.04;
    }
  });

  return (
    <group position={[0, -2.4, -2]}>
      <mesh ref={gridRef}>
        <planeGeometry args={[28, 28, 36, 36]} />
        <meshBasicMaterial
          color="#0066B1"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>
    </group>
  );
}

// Volumetric Headlight Beams Piercing the Atmosphere
function HeadlightBeams({ ignited }) {
  const beamLeft = useRef();
  const beamRight = useRef();

  useFrame((state) => {
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.08;
    if (beamLeft.current && beamRight.current) {
      beamLeft.current.scale.set(pulse, pulse, 1);
      beamRight.current.scale.set(pulse, pulse, 1);
    }
  });

  if (!ignited) return null;

  return (
    <group position={[0, -0.6, 0]}>
      {/* Left Laser Headlight Cone */}
      <group ref={beamLeft} position={[-1.2, 0, 1]} rotation={[Math.PI / 2.05, -0.12, 0]}>
        <coneGeometry args={[1.4, 6, 24, 1, true]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </group>

      {/* Right Laser Headlight Cone */}
      <group ref={beamRight} position={[1.2, 0, 1]} rotation={[Math.PI / 2.05, 0.12, 0]}>
        <coneGeometry args={[1.4, 6, 24, 1, true]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </group>
    </group>
  );
}

export default function Hero3DBackground({ ignited }) {
  const mouse = useRef({ x: 0, y: 0 });

  const handlePointerMove = (e) => {
    mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 4, 2]} intensity={2} color="#0066B1" />

        {/* 3D Kinetic Grid & Floating Energy */}
        <PerspectiveLaserGrid mouse={mouse} />
        <EnergyParticles mouse={mouse} />
        <HeadlightBeams ignited={ignited} />
      </Canvas>
    </div>
  );
}
