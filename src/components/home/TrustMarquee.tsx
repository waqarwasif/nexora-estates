"use client";

import { motion } from "framer-motion";

const partners = [
  "Forbes",
  "Bloomberg",
  "Robb Report",
  "Financial Times",
  "The Wall Street Journal",
  "Mansion Global"
];

export function TrustMarquee() {
  return (
    <section className="py-24 bg-surface overflow-hidden border-y border-border relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-12 relative z-20">
        <p className="text-center text-muted font-medium tracking-widest uppercase text-sm">
          Trusted by 1200+ Investors & Featured In
        </p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <span 
              key={index} 
              className="mx-12 text-3xl md:text-5xl font-heading font-bold text-muted/40 hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </span>
          ))}
        </motion.div>
        
        {/* Gradients for fade effect */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-surface to-transparent z-10" />
      </div>
    </section>
  );
}
