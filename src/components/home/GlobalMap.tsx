"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const locations = [
  { id: 1, name: "Dubai", top: "45%", left: "65%", properties: 124, avgRoi: "8.2%" },
  { id: 2, name: "London", top: "30%", left: "48%", properties: 86, avgRoi: "5.4%" },
  { id: 3, name: "Monaco", top: "35%", left: "50%", properties: 42, avgRoi: "4.8%" },
  { id: 4, name: "Singapore", top: "60%", left: "78%", properties: 95, avgRoi: "6.5%" },
  { id: 5, name: "New York", top: "35%", left: "25%", properties: 156, avgRoi: "5.9%" },
  { id: 6, name: "Tokyo", top: "40%", left: "85%", properties: 73, avgRoi: "4.5%" },
];

export function GlobalMap() {
  return (
    <section className="py-32 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Global Opportunities</h2>
        <p className="text-muted max-w-2xl mx-auto">
          Explore premium real estate markets worldwide with our interactive intelligence map.
        </p>
      </div>

      <div className="relative max-w-[1200px] mx-auto aspect-[2/1] rounded-3xl bg-card border border-border overflow-hidden">
        {/* Placeholder Map SVG Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-cover mix-blend-screen" />
        
        {locations.map((loc) => (
          <motion.div 
            key={loc.id}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="absolute group z-10"
            style={{ top: loc.top, left: loc.left }}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping" />
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-background cursor-pointer" />
              
              {/* Hover Card */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-background border border-border rounded-xl p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-y-2 group-hover:translate-y-0 shadow-2xl">
                <div className="flex items-center gap-2 mb-2 text-text">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-heading font-bold">{loc.name}</span>
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted">Properties</span>
                  <span className="text-text font-medium">{loc.properties}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-muted">Avg. ROI</span>
                  <span className="text-success font-medium">{loc.avgRoi}</span>
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-b border-r border-border rotate-45" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
