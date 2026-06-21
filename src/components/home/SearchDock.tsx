"use client";

import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const tabs = ["Buy", "Rent", "Invest"];

export function SearchDock() {
  const [activeTab, setActiveTab] = useState("Buy");

  return (
    <section className="relative -mt-16 z-30 max-w-[1000px] mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="bg-card border border-border rounded-2xl p-6 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex gap-8 mb-6 border-b border-border pb-4">
          {tabs.map((tab) => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition-colors relative ${activeTab === tab ? "text-primary" : "text-muted hover:text-text"}`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div layoutId="searchTab" className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          <div className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border">
            <MapPin className="text-muted w-5 h-5" />
            <input type="text" placeholder="Location" className="bg-transparent border-none outline-none w-full text-sm text-text placeholder:text-muted" />
          </div>
          <div className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border">
            <Home className="text-muted w-5 h-5" />
            <select className="bg-transparent border-none outline-none w-full text-sm text-text appearance-none bg-background">
              <option value="">Property Type</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="mansion">Mansion</option>
            </select>
          </div>
          <div className="flex items-center gap-3 bg-background p-4 rounded-xl border border-border">
            <DollarSign className="text-muted w-5 h-5" />
            <select className="bg-transparent border-none outline-none w-full text-sm text-text appearance-none bg-background">
              <option value="">Budget</option>
              <option value="1m-5m">$1M - $5M</option>
              <option value="5m-10m">$5M - $10M</option>
              <option value="10m+">$10M+</option>
            </select>
          </div>
          <button className="bg-primary text-background font-medium p-4 rounded-xl hover:bg-secondary transition-colors flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
