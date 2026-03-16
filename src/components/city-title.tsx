// CityTitle.jsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ArrowRight, ArrowDown } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const CityTitle = () => {
  useGSAP(() => {
    // Delay text animations to trigger after section is visible
    gsap.set([".first-text-split h1", ".second-text-split h1"], { opacity: 0 });

    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    // Set initial opacity back
    gsap.set([".first-text-split h1", ".second-text-split h1"], { opacity: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".city-section",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power2.out",
      duration: 0.8,
    }).from(
      secondTextSplit.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
        duration: 0.8,
      },
      "-=0.4"
    );

    // Cleanup function
    return () => {
      firstTextSplit.revert();
      secondTextSplit.revert();
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-5 sm:px-6 md:px-8">
      <div className="overflow-hidden first-text-split">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase leading-tight">
          Explore Cities
        </h1>
      </div>
      <div className="overflow-hidden second-text-split mt-2 sm:mt-3 md:mt-4 lg:mt-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight font-ivy-presto">
          We&apos;re Available at
        </h1>
      </div>

      {/* Arrow - down on mobile, right on desktop */}
      <div className="mt-4 sm:mt-6 md:mt-8">
        <ArrowDown className="block md:hidden" size={24} />
        <ArrowRight className="hidden md:block" />
      </div>
    </div>
  );
};

export default CityTitle;
