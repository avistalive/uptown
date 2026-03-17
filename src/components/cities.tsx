"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CitySlider from "./city-slider";
import CityTitle from "./city-title";
import { useEffect, useState, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CitySection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted || !sectionRef.current || !triggerRef.current) return;

    const section = sectionRef.current;
    
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isMobile } = context.conditions as any;
      
      const scrollWidth = section.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = scrollWidth - viewportWidth;

      if (scrollDistance > 0) {
        gsap.to(section, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            pin: true,
            scrub: 1,
            // Mobile pins at center, Desktop at top
            start: isMobile ? "center center" : "top top",
            end: () => `+=${scrollDistance}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      }
    });

    return () => mm.revert();
  }, [isMounted]);

  if (!isMounted) {
    return <section className="py-8 md:py-12 bg-white min-h-[60vh] md:min-h-screen" />;
  }

  return (
    <div ref={triggerRef} className="city-section-wrapper bg-white overflow-hidden">
      <div 
        ref={sectionRef} 
        className="flex items-center h-[60vh] md:h-screen w-max will-change-transform"
      >
        {/* Title Slide - Narrower on mobile to show cards earlier */}
        <div className="w-[85vw] md:w-screen h-full flex-none flex items-center justify-center px-5">
          <CityTitle trigger=".city-section-wrapper" />
        </div>

        {/* Cities Slider */}
        <div className="flex-none flex items-center h-full pr-[15vw]">
          <CitySlider trigger=".city-section-wrapper" />
        </div>
      </div>
    </div>
  );
};

export default CitySection;
