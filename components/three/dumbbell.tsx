"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

const FLAME = "#ff5c00";
const STEEL = "#101113";
const CHROME = "#3a3d42";

interface PlateProps {
  x: number;
  radius: number;
  width: number;
  color: string;
}

function Plate({ x, radius, width, color }: PlateProps) {
  return (
    <mesh position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
      <cylinderGeometry args={[radius, radius, width, 48]} />
      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.28}
      />
    </mesh>
  );
}

/**
 * Stylized dumbbell built entirely from primitives (cylinders), so it stays
 * extremely cheap to render. Slowly auto-rotates; tilts toward the pointer.
 */
export function Dumbbell({ pointer }: { pointer: React.RefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    // Continuous slow spin
    g.rotation.y += delta * 0.35;
    // Ease toward pointer for parallax tilt
    const p = pointer.current ?? { x: 0, y: 0 };
    const targetX = p.y * 0.3;
    const targetZ = -p.x * 0.2;
    g.rotation.x += (targetX - g.rotation.x) * 0.05;
    g.rotation.z += (targetZ - g.rotation.z) * 0.05;
    // Gentle bob
    g.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.12;
  });

  return (
    <group ref={group} rotation={[0.15, 0, 0.05]} scale={1}>
      {/* Handle bar */}
      <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.16, 0.16, 3.1, 32]} />
        <meshStandardMaterial color={CHROME} metalness={0.95} roughness={0.2} />
      </mesh>
      {/* Knurling collars */}
      {[-0.95, 0.95].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.28, 32]} />
          <meshStandardMaterial color={STEEL} metalness={0.7} roughness={0.5} />
        </mesh>
      ))}

      {/* Left plates (descending) */}
      <Plate x={-1.18} radius={0.92} width={0.26} color={STEEL} />
      <Plate x={-1.46} radius={0.7} width={0.24} color={FLAME} />
      <Plate x={-1.7} radius={0.5} width={0.22} color={STEEL} />

      {/* Right plates (mirror) */}
      <Plate x={1.18} radius={0.92} width={0.26} color={STEEL} />
      <Plate x={1.46} radius={0.7} width={0.24} color={FLAME} />
      <Plate x={1.7} radius={0.5} width={0.22} color={STEEL} />

      {/* End caps */}
      {[-1.86, 1.86].map((x) => (
        <mesh key={x} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.34, 0.34, 0.12, 32]} />
          <meshStandardMaterial color={CHROME} metalness={0.95} roughness={0.25} />
        </mesh>
      ))}
    </group>
  );
}
