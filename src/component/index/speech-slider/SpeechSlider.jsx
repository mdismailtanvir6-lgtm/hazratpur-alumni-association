"use client";

import { speechesData } from "@/config/index/speechesData.config";
import { useState, useEffect, useCallback, useRef } from "react";
import { SpeechSliderControls } from "./SpeechSliderControls";
import Image from "next/image";
import { Quote } from "lucide-react";
import { QuoteIcon } from "lucide-react";
import { SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export default function SpeechSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);

  const total = speechesData.length;
  const duration = 5000; // 5 seconds per slide
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const elapsedRef = useRef(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    setProgress(0);
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
  }, [total]);

  // Handle Autoplay & Smooth Progress Bar Animation using requestAnimationFrame
  useEffect(() => {
    if (!isAutoplay) {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
      return;
    }

    startTimeRef.current = Date.now() - elapsedRef.current;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      elapsedRef.current = elapsed;
      const currentProgress = Math.min((elapsed / duration) * 100, 100);

      setProgress(currentProgress);

      if (elapsed < duration) {
        timerRef.current = requestAnimationFrame(updateProgress);
      } else {
        nextSlide();
      }
    };

    timerRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [isAutoplay, currentIndex, nextSlide, duration]);

  const handleManualNav = useCallback((newIndex) => {
    setCurrentIndex(newIndex);
    setProgress(0);
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
  }, []);

  const activeSpeech = speechesData[currentIndex];

  return (
    <section
      aria-label="Speech Highlights"
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      onMouseEnter={() => setIsAutoplay(false)}
      onMouseLeave={() => setIsAutoplay(true)}
    >
      <div className="bg-surface border border-border rounded-2xl relative overflow-hidden shadow-sm transition-colors duration-200">
        <div className="p-6 sm:p-10 pt-8 relative">
          {/* Content Layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10">
            {/* Portrait Speaker Image */}
            <div className="shrink-0 w-48 sm:w-56 h-64 sm:h-72 rounded-xl overflow-hidden shadow-md border border-border/50">
              <div className="relative shrink-0 w-48 sm:w-56 h-64 sm:h-72 rounded-xl overflow-hidden shadow-md border border-border/50">
                <Image
                  src={activeSpeech.image || "/speechSliderAlternateImg.webp"}
                  alt={activeSpeech.speaker}
                  fill
                  priority={currentIndex === 0}
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105 select-none"
                />
              </div>
            </div>

            {/* Speech Text Content */}
            <div className="flex-1 flex flex-col justify-between self-stretch relative pt-2">
              {/* Header / Top Action Controls */}
              <div className="flex items-center justify-between w-full mb-4">
                {/* Small Quote Badge Icon using Lucide */}
                <div className="w-7 h-7 rounded-lg bg-accent/20 flex items-center justify-center text-accent-foreground">
                  <Quote className="w-4 h-4" />
                </div>

                {/* External Link Action Button */}
                {activeSpeech.link && (
                  <Link
                    href={activeSpeech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Details"
                    className="w-12 h-12 rounded-full bg-muted/60 hover:bg-muted text-foreground/70 hover:text-foreground flex items-center justify-center transition-colors"
                  >
                    <SquareArrowOutUpRight />
                  </Link>
                )}
              </div>

              {/* Main Quote Statement */}
              <blockquote className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-foreground/90 my-auto z-10">
                {activeSpeech.quote}
              </blockquote>

              {/* Speaker Info */}
              <div className="mt-6 z-10">
                <h3 className="text-lg sm:text-xl font-bold text-primary">
                  {activeSpeech.speaker}
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block shrink-0" />
                  <span>{activeSpeech.role}</span>
                </div>
                <p className="text-xs sm:text-sm text-foreground/60 pl-3.5">
                  {activeSpeech.organization}
                </p>
              </div>

              {/* Large Decorative Faded Quote Icon (Bottom Right) */}
              <div className="absolute right-0 bottom-0 pointer-events-none select-none text-foreground/5 leading-none font-serif text-[180px] sm:text-[160px] translate-x-4 translate-y-6">
                <QuoteIcon size={100} />
              </div>
            </div>
          </div>

          {/* Extracted Controls & Smooth Progress Bar Component */}
          <SpeechSliderControls
            progress={progress}
            currentIndex={currentIndex}
            totalSlides={total}
            onSelect={handleManualNav}
          />
        </div>
      </div>
    </section>
  );
}
