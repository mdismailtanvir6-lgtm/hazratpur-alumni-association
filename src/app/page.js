import AboutSection from "@/component/index/about/AboutSection";
import HeroSlider from "@/component/index/hero-slider/HeroSlider";
import VoteInfoSection from "@/component/index/vote-info/VoteInfoSection";

export default function Home() {
  return <div className="">
    {/* ===== hero slider ====== */}
    <HeroSlider/>

    {/* ===== vote info section ====== */}
    <VoteInfoSection/>

    {/* ===== about section ====== */}
    <AboutSection />
  </div>;
}
