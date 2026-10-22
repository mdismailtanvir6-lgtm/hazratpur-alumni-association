import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutData } from "@/config/index/aboutInfo.config";

export default function AboutSection({ data = aboutData }) {
  const { badgeText, title, paragraphs, primaryBtn, secondaryBtn, logo } = data;

  return (
    <section className="bg-background text-foreground relative w-full overflow-hidden py-16 md:py-24 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          
          {/* Left Column: Image Box with Dotted Outer Ring */}
          <div className="flex justify-center lg:col-span-1">
            <div className="relative group w-full max-w-95 sm:max-w-105">
              {/* Outer decorative dashed border ring */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-dashed border-primary/30 -rotate-8 transition-transform duration-300 group-hover:rotate-0" />

              {/* Main Card Surface */}
              <div className="bg-surface border-border relative flex aspect-square w-full flex-col items-center justify-center rounded-2xl border p-8 shadow-2xl transition-all duration-300">
                <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                  <Image
                    src={logo.src}
                    alt={logo.alt || title}
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="max-w-150 flex flex-col items-start justify-center lg:col-span-1">
            {/* Pill Badge */}
            <div className="bg-accent/15 border-accent/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium text-accent">
              <span className="bg-accent h-2 w-2 rounded-full animate-pulse" />
              <span>{badgeText}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {/* Paragraph Description */}
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
              {paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              {primaryBtn && (
                <Link
                  href={primaryBtn.href}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-primary inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95"
                >
                  <span>{primaryBtn.text}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}

              {/* Secondary Outline Button */}
              {secondaryBtn && (
                <Link
                  href={secondaryBtn.href}
                  className="border-border hover:border-primary/50 bg-surface/50 text-foreground hover:bg-surface focus-visible:ring-primary inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95"
                >
                  {secondaryBtn.text}
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}