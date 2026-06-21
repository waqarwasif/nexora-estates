import Image from "next/image";
import { Shield, Globe, Award, TrendingUp } from "lucide-react";

export function EditorialSection() {
  return (
    <section className="py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Images */}
        <div className="relative h-[800px] w-full hidden md:block">
          <div className="absolute top-0 left-0 w-2/3 h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1613490908578-8fc2bd1487f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Architecture" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-2/3 h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-background z-10">
            <Image 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col justify-center">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Why Nexora Estates</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            Architectural Excellence Meets Intelligent Investment
          </h2>
          <p className="text-muted text-lg mb-12">
            We don't just sell properties; we curate legacy assets. Our platform combines white-glove advisory with institutional-grade market intelligence to help you build a world-class real estate portfolio.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-4 border border-border">
                <Globe className="text-primary w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">Global Presence</h4>
              <p className="text-muted text-sm">Access off-market opportunities in 45+ premier destinations.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-4 border border-border">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">Investment Security</h4>
              <p className="text-muted text-sm">Rigorous due diligence and transparent legal structuring.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-4 border border-border">
                <TrendingUp className="text-primary w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">High ROI</h4>
              <p className="text-muted text-sm">Data-driven selection targeting above-market yields.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mb-4 border border-border">
                <Award className="text-primary w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-xl mb-2">White-Glove Service</h4>
              <p className="text-muted text-sm">Dedicated advisory from acquisition to property management.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
