"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ArrowRight, ArrowDown } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface CityTitleProps {
  trigger?: string;
}

const CityTitle = ({ trigger = ".city-section" }: CityTitleProps) => {
  useGSAP(() => {
    const firstText = new SplitType(".first-text-split h1", { types: "chars" });
    const secondText = new SplitType(".second-text-split h1", { types: "chars" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    if (firstText.chars) {
      tl.from(firstText.chars, {
        y: 15,
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
        duration: 0.6,
      });
    }

    if (secondText.chars) {
      tl.from(secondText.chars, {
        y: 15,
        opacity: 0,
        stagger: 0.02,
        ease: "power2.out",
        duration: 0.6,
      }, "-=0.3");
    }

    return () => {
      firstText.revert();
      secondText.revert();
    };
  }, [trigger]);

  return (
    <div className="flex flex-col justify-center items-center h-full text-center px-5 sm:px-6 md:px-8">
      <div className="overflow-hidden first-text-split">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight text-midnight">
          Explore Cities
        </h1>
      </div>
      <div className="overflow-hidden second-text-split mt-2 sm:mt-3 md:mt-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-normal italic font-ivy-presto text-midnight">
          We&apos;re Available at
        </h1>
      </div>

      {/* Arrow - down on mobile, right on desktop */}
      <div className="mt-4 sm:mt-6 md:mt-8 text-midnight">
        <ArrowDown className="block md:hidden" size={24} />
        <ArrowRight className="hidden md:block" />
      </div>
    </div>
  );
};

export default CityTitle;
