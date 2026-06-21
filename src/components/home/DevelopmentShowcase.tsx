"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function DevelopmentShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-12 z-20 pointer-events-none">
          <h2 className="text-5xl md:text-7xl font-heading font-bold text-text mix-blend-difference">
            Signature <br /> Developments
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12 pt-20 h-[70vh]">
          {/* Card 1 */}
          <div className="w-[85vw] md:w-[60vw] h-full relative shrink-0 rounded-3xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Development 1" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-primary tracking-widest uppercase text-sm mb-2">Q4 2026</p>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Aura Residences</h3>
              <p className="text-muted max-w-md">The tallest residential tower in the district, featuring sky gardens and infinity pools on every terrace.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[85vw] md:w-[60vw] h-full relative shrink-0 rounded-3xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Development 2" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-primary tracking-widest uppercase text-sm mb-2">Q1 2027</p>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">The Oasis Estate</h3>
              <p className="text-muted max-w-md">Sustainable luxury integrated seamlessly with the natural landscape.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[85vw] md:w-[60vw] h-full relative shrink-0 rounded-3xl overflow-hidden group">
            <Image 
              src="https://images.unsplash.com/photo-1613490908578-8fc2bd1487f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Development 3" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-12 left-12">
              <p className="text-primary tracking-widest uppercase text-sm mb-2">Completed</p>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-4">Marina Heights</h3>
              <p className="text-muted max-w-md">Award-winning waterfront development defining the city skyline.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
