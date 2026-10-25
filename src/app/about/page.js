import HeroSection from "@/component/about/HeroSection";
import { aboutHeroData } from "@/config/about/heroData";

export default function page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* ======= about hero section ===== */}
      <HeroSection data={aboutHeroData} />
    </main>
  );
}
