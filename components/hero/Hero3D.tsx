"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type * as THREE from "three";

function Shape({ position, scale, color, speed }: { position: [number, number, number]; scale: number; color: string; speed: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const initialRot = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * speed * 0.3;
      mesh.current.rotation.y += delta * speed * 0.2;
    }
  });

  return (
    <Float speed={speed * 0.5} rotationIntensity={0.15} floatIntensity={0.3}>
      <mesh ref={mesh} position={position} scale={scale} rotation={[initialRot, initialRot, 0]}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.15}
          wireframe
          distort={0.2}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function TorusShape({ position, scale, color, speed }: { position: [number, number, number]; scale: number; color: string; speed: number }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * speed * 0.2;
      mesh.current.rotation.z += delta * speed * 0.15;
    }
  });

  return (
    <Float speed={speed * 0.3} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={mesh} position={position} scale={scale}>
        <torusGeometry args={[1, 0.3, 16, 32]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.1}
          wireframe
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const shapes = useMemo(() => [
    { Component: Shape, pos: [-4, 1.5, -3] as [number, number, number], scale: 1.5, speed: 0.4 },
    { Component: Shape, pos: [4.5, -1, -4] as [number, number, number], scale: 1.2, speed: 0.3 },
    { Component: TorusShape, pos: [-3, -1.5, -2] as [number, number, number], scale: 1, speed: 0.5 },
    { Component: TorusShape, pos: [3.5, 2, -3.5] as [number, number, number], scale: 0.8, speed: 0.35 },
    { Component: Shape, pos: [0, 0, -5] as [number, number, number], scale: 2, speed: 0.2 },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#6450ff" />
      <directionalLight position={[-5, -3, 2]} intensity={0.4} color="#faf3e0" />
      {shapes.map(({ Component, pos, scale, speed }, i) => (
        <Component key={i} position={pos} scale={scale} color="#6450ff" speed={speed} />
      ))}
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
