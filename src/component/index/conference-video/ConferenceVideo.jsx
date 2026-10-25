import React from "react";
import { videoConfig } from "@/config/index/video.config";
import Container from "@/component/ui/Container";

export default function ConferenceVideo() {
  const { badgeText, titlePrefix, titleHighlight, embedUrl, badgeStatus } =
    videoConfig;

  return (
    <section className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden transition-colors duration-200">
      {/* Decorative Radial Ambient Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-150 h-87.5 bg-primary/15 blur-[120px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-100 h-62.5 bg-highlight/15 blur-[100px] rounded-full"
      />

      <Container>
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Top Pill / Badge */}
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface/80 border border-border shadow-sm backdrop-blur-md text-xs font-semibold tracking-wide text-foreground mb-6">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-highlight opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-highlight" />
              </span>
              <span className="text-foreground/80">{badgeText}</span>
            </div>
          )}

          {/* Dynamic Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground max-w-2xl leading-[1.15] mb-8">
            {titlePrefix}{" "}
            <span className="bg-linear-to-r from-primary to-highlight bg-clip-text text-transparent">
              {titleHighlight}
            </span>
          </h2>

          {/* Video Mockup Frame */}
          <div className="w-full max-w-4xl rounded-2xl border border-border bg-surface shadow-2xl overflow-hidden backdrop-blur-md">
            {/* Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border">
              {/* Window Dot Buttons */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>

              {/* Window Status Badge */}
              {badgeStatus && (
                <div className="flex items-center gap-1.5 text-[11px] font-medium text-highlight bg-highlight/10 px-2.5 py-0.5 rounded-full border border-highlight/20">
                  <span>{badgeStatus}</span>
                </div>
              )}
            </div>

            {/* Embedded YouTube Player */}
            <div className="relative w-full aspect-video bg-black/90">
              <iframe
                className="w-full h-full border-0"
                src={embedUrl}
                title={
                  titlePrefix
                    ? `${titlePrefix} ${titleHighlight}`
                    : "Video Player"
                }
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
