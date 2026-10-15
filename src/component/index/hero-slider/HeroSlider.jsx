"use client";

import React, { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import { HERO_SLIDES } from "@/config/layout/index/heroSlideImg";
import { SliderControls } from "./SliderControls";

export default function HeroSlider() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false, // Managed manually via SliderControls
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    // fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    beforeChange: (_current, next) => setCurrentIndex(next),
  };

  const handlePrev = useCallback(() => sliderRef.current?.slickPrev(), []);
  const handleNext = useCallback(() => sliderRef.current?.slickNext(), []);
  const handleSelect = useCallback(
    (idx) => sliderRef.current?.slickGoTo(idx),
    [],
  );

  return (
    <section
      className="relative w-full min-h-[calc(100vh-5.5rem)] overflow-hidden bg-gray-950"
      aria-label="Hero Carousel"
    >
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="relative w-full min-h-[calc(100vh-5.5rem)] focus:outline-none"
          >
            {/* LCP Optimization: prioritize the first image */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              quality={85}
              sizes="100vw"
              className="object-cover object-center select-none"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto z-10">
              <span className="text-amber-400 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 drop-shadow">
                অ্যালামনাই অ্যাসোসিয়েশন
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-lg leading-tight">
                ১ম সাধারণ পরিষদ নির্বাচন (অনলাইন)
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xl mb-8 drop-shadow font-normal">
                ৩ -৪ অক্টোবর, ২০২৬
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <Link
                  href={"/dashboard"}
                  className="px-6 py-3 bg-[#111827]/90 hover:bg-[#111827] text-white text-xs sm:text-sm font-semibold rounded-xl border border-gray-700/80 backdrop-blur-md transition-all shadow-lg flex items-center gap-2 group"
                >
                  <span>নির্বাচনী ড্যাশবোর্ড</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
                <Link
                  href={"/result"}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-gray-950 text-xs sm:text-sm font-bold rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  ফলাফল দেখুন
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <SliderControls
        onPrev={handlePrev}
        onNext={handleNext}
        onSelect={handleSelect}
        currentIndex={currentIndex}
        totalSlides={HERO_SLIDES.length}
      />
    </section>
  );
}
