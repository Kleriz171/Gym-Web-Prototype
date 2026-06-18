"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, AdaptiveDpr } from "@react-three/drei";
import { Dumbbell } from "./dumbbell";
import { useIsMobile } from "@/lib/hooks";

const FLAME = "#ff5c00";

function AccentRing({
  position,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.2} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        <torusGeometry args={[0.5, 0.04, 16, 48]} />
        <meshStandardMaterial
          color={FLAME}
          emissive={FLAME}
          emissiveIntensity={1.4}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function HeroCanvas() {
  const pointer = useRef({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  return (
    <Canvas
      dpr={isMobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0, 7], fov: 42 }}
      gl={{ antialias: !isMobile, alpha: true, powerPreference: "high-performance" }}
      onPointerMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        pointer.current = { x, y };
      }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <fog attach="fog" args={["#0a0a0a", 8, 16]} />

      {/* Lighting: cool fill + hot-orange key & rim */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[-6, 4, 6]} intensity={0.5} color="#88aaff" />
      <pointLight position={[5, 3, 4]} intensity={120} color={FLAME} distance={20} />
      <pointLight position={[-4, -2, 3]} intensity={60} color={FLAME} distance={18} />
      <spotLight
        position={[0, 6, 4]}
        angle={0.6}
        penumbra={0.8}
        intensity={80}
        color="#ffffff"
      />

      <group scale={isMobile ? 0.78 : 1}>
        <Dumbbell pointer={pointer} />
        {!isMobile && (
          <>
            <AccentRing position={[-3, 1.6, -1]} scale={1.1} speed={1.1} />
            <AccentRing position={[3.2, -1.4, -1.5]} scale={0.8} speed={1.5} />
            <AccentRing position={[2.4, 2, -2]} scale={0.5} speed={0.9} />
          </>
        )}
      </group>

      <AdaptiveDpr pixelated />
    </Canvas>
  );
}
