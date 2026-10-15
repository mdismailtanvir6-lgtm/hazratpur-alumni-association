import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const SliderControls = React.memo(({
  onPrev,
  onNext,
  onSelect,
  currentIndex,
  totalSlides,
}) => {
  return (
    <>
      {/* Navigation Arrow Buttons */}
      <button
        onClick={onPrev}
        aria-label="Previous Slide"
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        aria-label="Next Slide"
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 text-white flex items-center justify-center backdrop-blur-sm transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* 5 Dots Indicator with Active State Styling */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5" role="tablist">
        {Array.from({ length: totalSlides }).map((_, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isActive}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => onSelect(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                isActive
                  ? 'w-8 h-2 bg-amber-500 shadow-md' // Active dot expands to pill shape
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          );
        })}
      </div>
    </>
  );
});

SliderControls.displayName = 'SliderControls';