import AboutSection from "@/component/index/about/AboutSection";
import ConferenceGallery from "@/component/index/conference-gallery/ConferenceGallery";
import FirstAlumniConference from "@/component/index/conference/FirstAlumniConference";
import HeroSlider from "@/component/index/hero-slider/HeroSlider";
import SpeechSlider from "@/component/index/speech-slider/SpeechSlider";
import VoteInfoSection from "@/component/index/vote-info/VoteInfoSection";

export default function Home() {
  return <div className="">
    {/* ===== hero slider ====== */}
    <HeroSlider/>

    {/* ===== vote info section ====== */}
    <VoteInfoSection/>

    {/* ===== about section ====== */}
    <AboutSection />

    {/* ===== conference section ====== */}
    <FirstAlumniConference/>

    {/* ===== speech slider section ====== */}
    <SpeechSlider/>

    {/* ===== speech slider section ====== */}
    <ConferenceGallery />
  </div>;
}
