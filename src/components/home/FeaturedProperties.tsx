"use client";

import { motion } from "framer-motion";
import { Heart, Maximize, MapPin, Bed, Bath, Square } from "lucide-react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    title: "The Sky Penthouse",
    location: "Dubai Marina, UAE",
    price: "$12,500,000",
    roi: "8.5%",
    beds: 5,
    baths: 6,
    area: "8,500",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Oceanfront Villa",
    location: "Malibu, California",
    price: "$8,900,000",
    roi: "6.2%",
    beds: 4,
    baths: 5,
    area: "6,200",
    image: "https://images.unsplash.com/photo-1600607687931-cecebd803600?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    title: "Modern Alpine Chalet",
    location: "Courchevel, France",
    price: "$15,000,000",
    roi: "7.8%",
    beds: 6,
    baths: 7,
    area: "10,000",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    className: "md:col-span-1 md:row-span-1"
  }
];

export function FeaturedProperties() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Exclusive Collections</h2>
            <p className="text-muted max-w-xl">Curated exceptional properties offering unparalleled luxury and investment potential.</p>
          </div>
          <button className="hidden md:block px-6 py-3 border border-border rounded-[16px] hover:border-primary hover:text-primary transition-colors">
            View All Properties
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[400px] gap-6">
          {properties.map((property) => (
            <motion.div 
              key={property.id}
              whileHover="hover"
              className={`relative rounded-[24px] overflow-hidden group bg-surface ${property.className}`}
            >
              <Image 
                src={property.image} 
                alt={property.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              
              <div className="absolute top-6 right-6 flex gap-3 z-10">
                <button className="w-10 h-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors text-text">
                  <Maximize className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-background/50 backdrop-blur flex items-center justify-center hover:bg-primary transition-colors text-text">
                  <Heart className="w-4 h-4" />
                </button>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                      <MapPin className="w-4 h-4" />
                      {property.location}
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-4">{property.title}</h3>
                    
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1"><Bed className="w-4 h-4"/> {property.beds}</span>
                      <span className="flex items-center gap-1"><Bath className="w-4 h-4"/> {property.baths}</span>
                      <span className="flex items-center gap-1"><Square className="w-4 h-4"/> {property.area} sqft</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-xs text-muted uppercase tracking-wider mb-1">Estimated ROI</p>
                    <p className="text-success font-medium mb-3">{property.roi}</p>
                    <p className="text-2xl font-heading font-bold">{property.price}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <button className="w-full md:hidden mt-8 px-6 py-4 border border-border rounded-[16px] hover:border-primary hover:text-primary transition-colors">
          View All Properties
        </button>
      </div>
    </section>
  );
}
