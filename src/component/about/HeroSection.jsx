import Breadcrumb from "./Breadcrumb";
import HeroParticles from "./HeroParticles";
import { aboutHeroData } from "@/config/about/heroData";

export default function HeroSection({ data = aboutHeroData }) {
  const { title, name, breadcrumb } = data;

  return (
    <section className="relative overflow-hidden bg-linear-to-r from-[#0066b2] to-[#009688] text-white py-16 md:py-24">
      {/* Background animated dots or particles */}
      <HeroParticles />

      {/* Soft background radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />

      {/* Main content container */}
      <div className="relative mx-auto max-w-200 px-4 md:px-8 text-center">
        {/* Reusable breadcrumb */}
        {breadcrumb && <Breadcrumb items={breadcrumb} />}

        {/* Main title */}
        <h1 className="my-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md transition-transform duration-300 hover:scale-[1.1]">
          {title}
        </h1>

        {/* Description or subtitle */}
        <p className="mx-auto mt-4 max-w-3xl text-sm text-white/90 sm:text-base md:text-lg">
          {name}
        </p>
      </div>
    </section>
  );
}
