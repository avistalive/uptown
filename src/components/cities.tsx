"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CitySlider from "./city-slider";
import CityTitle from "./city-title";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const CitySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    // Only do horizontal scroll on non-mobile
    if (isMobile) return;

    const container = document.querySelector(".horizontal-content") as HTMLElement;
    if (!container) return;

    const scrollWidth = container.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = scrollWidth - viewportWidth;

    gsap.to(container, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: ".city-section",
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, [isMobile]);

  // Mobile layout: vertical stacking
  if (isMobile) {
    return (
      <section className="city-section py-12 sm:py-16 overflow-hidden bg-[#F0ECDF]">
        <div className="container mx-auto px-5">
          <CityTitle />
        </div>
        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <CitySlider />
        </div>
      </section>
    );
  }

  // Desktop/tablet layout: horizontal scroll
  return (
    <section className="city-section overflow-hidden">
      <div className="horizontal-content flex items-center h-screen">
        {/* Text Section */}
        <div className="w-screen flex-none h-full flex items-center justify-center">
          <CityTitle />
        </div>
        
        {/* Images Section */}
        <div className="flex-none h-full flex items-center">
          <CitySlider />
        </div>
      </div>
    </section>
  );
};

export default CitySection;
