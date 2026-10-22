import Link from "next/link";
import { Image as ImageIcon } from "lucide-react";
import GallerySlider from "./GallerySlider";
import { galleryConfig } from "@/config/index/gallery.config";

export default function ConferenceGallery() {
  const { badgeText, title, ctaText, ctaLink, images } = galleryConfig;

  return (
    <section className="relative overflow-hidden bg-background py-16 text-foreground transition-colors duration-200 md:py-24">
      {/* Background Subtle Ambient Light Effect */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent backdrop-blur-xs">
            <ImageIcon size={14} />
            <span>{badgeText}</span>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
        </div>

        {/* Gallery Slider Wrapper */}
        <div className="mx-auto mt-10 max-w-5xl md:mt-12">
          <GallerySlider images={images} />
        </div>

        {/* Action Button */}
        <div className="mt-8 flex justify-center md:mt-10">
          <Link
            href={ctaLink}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-semibold text-accent-foreground shadow-md transition-all hover:opacity-90 hover:shadow-lg active:scale-95"
          >
            <ImageIcon size={18} />
            <span>{ctaText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}