import React from 'react';

export const SpeechSliderControls = React.memo(({
  progress,
  currentIndex,
  totalSlides,
  onSelect,
}) => {
  return (
    <>
      {/* Top Smooth Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-border/40 z-20 overflow-hidden">
        <div
          className="h-full bg-highlight will-change-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Bottom Navigation Indicators & Counter */}
      <div className="flex items-center justify-between mt-8 pt-4 border-t border-border/40">
        
        {/* Spacer */}
        <div className="w-8 hidden sm:block" />

        {/* Dots Indicator Bar */}
        <div className="flex items-center gap-2 mx-auto sm:mx-0" role="tablist">
          {Array.from({ length: totalSlides }).map((_, index) => {
            const isActive = currentIndex === index;
            return (
              <button
                key={index}
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to speech ${index + 1}`}
                onClick={() => onSelect(index)}
                className={`transition-all duration-300 rounded-full focus:outline-none ${
                  isActive
                    ? "w-8 h-2 bg-primary shadow-sm"
                    : "w-2 h-2 bg-border hover:bg-primary/50"
                }`}
              />
            );
          })}
        </div>

        {/* Current Slide Counter */}
        <span className="text-xs font-semibold text-foreground/60 tracking-wider">
          {currentIndex + 1}/{totalSlides}
        </span>
      </div>
    </>
  );
});

SpeechSliderControls.displayName = 'SpeechSliderControls';