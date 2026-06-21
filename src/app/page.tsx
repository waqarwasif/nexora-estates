import { Hero } from "@/components/home/Hero";
import { TrustMarquee } from "@/components/home/TrustMarquee";
import { SearchDock } from "@/components/home/SearchDock";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { InvestmentIntelligence } from "@/components/home/InvestmentIntelligence";
import { GlobalMap } from "@/components/home/GlobalMap";
import { DevelopmentShowcase } from "@/components/home/DevelopmentShowcase";
import { EditorialSection } from "@/components/home/EditorialSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchDock />
      <TrustMarquee />
      <FeaturedProperties />
      <InvestmentIntelligence />
      <GlobalMap />
      <DevelopmentShowcase />
      <EditorialSection />
    </>
  );
}
