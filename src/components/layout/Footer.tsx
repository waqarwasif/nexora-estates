import Link from "next/link";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 text-sm text-muted">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="font-heading text-3xl font-bold tracking-widest text-primary">NEXORA</span>
              <span className="text-[11px] tracking-[0.2em] text-muted uppercase">Estates</span>
            </Link>
            <p className="max-w-sm mb-8 text-base">
              The future of luxury real estate. Discover architecturally exceptional properties and investment opportunities globally.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Phone className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><MapPin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg text-text mb-6">Properties</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Buy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Rent</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">New Developments</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Private Collections</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg text-text mb-6">Investments</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">Advisory</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Market Reports</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">ROI Calculator</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Investor Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-text mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Nexora Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
