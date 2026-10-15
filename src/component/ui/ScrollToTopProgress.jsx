"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Progress } from "antd";

const ScrollToTopProgress = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;

          if (docHeight > 0) {
            const progress = Math.min(
              100,
              Math.max(0, Math.round((scrollTop / docHeight) * 100)),
            );
            setScrollPercent(progress);
            setIsVisible(scrollTop > 100); // show after 100px scroll.
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-9999 cursor-pointer transition-all duration-500 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-4 pointer-events-none scale-95"
      }`}
      title="Scroll to top"
    >
      <div className="bg-[#1e1e24] p-2 rounded-2xl shadow-2xl flex items-center justify-center border border-gray-800 hover:scale-110 active:scale-95 transition-transform duration-200">
        <Progress
          type="circle"
          percent={scrollPercent}
          size={52}
          strokeColor="#7ce033"
          trailColor="#2b2b36"
          strokeWidth={8}
          format={() => (
            <div className="flex flex-col items-center justify-center leading-none">
              <ArrowUpOutlined
                style={{
                  color: "#ffffff",
                  fontSize: "14px",
                  marginBottom: "3px",
                }}
              />
              <span
                style={{
                  color: "#7ce033",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                {scrollPercent}%
              </span>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default ScrollToTopProgress;
