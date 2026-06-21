"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PresentationControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";

function AbstractArchitecture() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      {/* Base Foundation */}
      <mesh position={[0, -1, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 0.2, 4]} />
        <meshStandardMaterial color="#0B1220" metalness={0.2} roughness={0.8} />
      </mesh>
      
      {/* Main Structure */}
      <mesh position={[-1, 0, -0.5]} castShadow receiveShadow>
        <boxGeometry args={[3, 2, 2]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.1} roughness={0.1} />
      </mesh>

      {/* Gold Accents / Overhang */}
      <mesh position={[0.5, 1, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.2, 3]} />
        <meshStandardMaterial color="#C9A86A" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Glass Pool / Feature */}
      <mesh position={[1.5, -0.9, 1]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshPhysicalMaterial color="#4A90E2" transmission={0.9} opacity={1} transparent roughness={0} />
      </mesh>
    </Float>
  );
}

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center bg-background overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 relative z-20 pointer-events-none">
        <div className="flex flex-col justify-center max-w-2xl pointer-events-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-5xl md:text-7xl lg:text-[96px] leading-[1.05] font-heading font-bold text-text mb-8"
          >
            The Future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Luxury Real Estate
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg md:text-xl text-muted mb-12 max-w-lg leading-relaxed"
          >
            Discover architecturally exceptional properties and investment opportunities across the world's most desirable destinations.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <button className="px-8 py-4 bg-primary text-background font-medium rounded-[16px] hover:bg-secondary transition-colors text-sm tracking-wide">
              Explore Properties
            </button>
            <button className="px-8 py-4 bg-transparent border border-border text-text font-medium rounded-[16px] hover:border-primary hover:text-primary transition-colors text-sm tracking-wide">
              Book Private Tour
            </button>
            <button className="px-4 py-4 text-sm font-medium hover:text-primary transition-colors underline underline-offset-4">
              Watch Story
            </button>
          </motion.div>
        </div>
      </div>

      {/* 3D Canvas on the right side */}
      <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full z-0 opacity-40 lg:opacity-100">
        <Canvas shadows camera={{ position: [8, 4, 8], fov: 35 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
          <PresentationControls 
            global={false} 
            cursor={true} 
            snap={true} 
            speed={1} 
            zoom={1} 
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-0.1, 0.2]} 
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <AbstractArchitecture />
          </PresentationControls>
          <Environment preset="city" />
        </Canvas>
      </div>
    </section>
  );
}
