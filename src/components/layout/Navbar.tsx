"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Heart, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-border py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex flex-col">
            <span className="font-heading text-2xl font-bold tracking-widest text-primary">NEXORA</span>
            <span className="text-[10px] tracking-[0.2em] text-muted uppercase">Estates</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link href="/properties" className="hover:text-primary transition-colors">Properties</Link>
            <Link href="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <Link href="/developments" className="hover:text-primary transition-colors">Developments</Link>
            <Link href="/invest" className="hover:text-primary transition-colors">Invest</Link>
            <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <button className="hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-primary transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="hidden md:block px-6 py-2.5 bg-primary text-background font-medium rounded-[16px] hover:bg-secondary transition-colors text-sm tracking-wide">
            BOOK CONSULTATION
          </button>
          <button className="lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
