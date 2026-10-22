import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { conferenceConfig } from "@/config/index/conferenceConfig";
import Container from "@/component/ui/Container";

// Helper function to map detail types to corresponding icons
const getDetailIcon = (type) => {
  switch (type) {
    case "date":
      return <Calendar className="w-4 h-4 text-accent shrink-0" />;
    case "location":
      return <MapPin className="w-4 h-4 text-accent shrink-0" />;
    case "attendees":
      return <Users className="w-4 h-4 text-accent shrink-0" />;
    default:
      return null;
  }
};

export default function FirstAlumniConference() {
  const { title, description, bannerImage, details, button } = conferenceConfig;

  return (
    <section className="w-full py-8 md:py-12 bg-background transition-colors duration-200">
      <Container>
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-2xl bg-surface border border-border shadow-xl transition-colors duration-200">
          {/* Subtle Background Accent Gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />

          <div className="relative p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left Image Section */}
            <div className="w-full md:w-auto shrink-0 flex justify-center">
              <div className="relative w-80 h-80 sm:w-95 sm:h-95 rounded-xl overflow-hidden shadow-md border border-border/50 group">
                <Image
                  src={bannerImage.src}
                  alt={bannerImage.alt}
                  fill
                  sizes="(max-width: 640px) 320px, 380px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>
            </div>

            {/* Right Details Section */}
            <div className="flex-1 text-center md:text-left space-y-5">
              {/* Title Header */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                {title.highlight}{" "}
                <span className="bg-linear-to-r from-[#00b4d8] via-[#3a86ff] to-[#f77f00] bg-clip-text text-transparent">
                  {title.main}
                </span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl">
                {description}
              </p>

              {/* Divider Line */}
              <div className="w-full h-px bg-border my-4" />

              {/* Event Meta Items */}
              <div className="space-y-2.5 text-xs sm:text-sm text-foreground/90 font-medium">
                {details.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center md:justify-start gap-2.5"
                  >
                    {getDetailIcon(item.type)}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 flex justify-center md:justify-start">
                <Link
                  href={button.href}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-linear-to-r from-accent to-primary text-primary-foreground font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200 active:scale-95"
                >
                  <span>{button.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
