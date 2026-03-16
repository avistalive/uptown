"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;

    ScrollTrigger.refresh();

    // Standard entrance animations
    gsap.from(".intro-animate", {
      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power2.out",
      stagger: 0.1,
      force3D: true,
      clearProps: "all",
    });

    // Animate video reveal
    gsap.from(".intro-video", {
      scrollTrigger: {
        trigger: ".intro-video",
        start: "top 85%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      scale: 0.98,
      y: 20,
      duration: 1,
      ease: "power2.out",
      force3D: true,
      clearProps: "all",
    });
  }, [isMounted]);

  if (!isMounted) {
    return <section className="intro-section py-12 sm:py-16 md:py-32 bg-[#F0ECDF] min-h-[50vh]" />;
  }

  return (
    <section className="intro-section py-12 sm:py-16 md:py-32 bg-[#F0ECDF]">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-5xl">
            <h2 className="intro-animate text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 md:mb-10 text-center text-[#00141D] font-light">Who{" "}<span className="font-ivy-presto font-normal italic">we are?</span></h2>
            
            <div className="text-center">
              <p className="intro-animate text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-light text-gray-800">
                <strong className="text-[#00141D] font-semibold">Uptown</strong> is a Navi Mumbai-based Proptech company specializing in <strong className="font-ivy-presto text-[#00141D]">mandate/sole-selling services</strong>. We are dedicated to transforming the way small and medium-scale developers market and sell their projects in the highly competitive real estate market.
              </p>
            </div>
          </div>

          <div className="w-full max-w-4xl mt-10 sm:mt-12 md:mt-16">
            {/* Local Brand Video */}
            <div className="intro-video overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] border-2 sm:border-4 border-[#00141D]/5 shadow-xl sm:shadow-2xl transition-all duration-700 ease-out hover:scale-[1.01] md:hover:scale-[1.02]">
              <div className="aspect-video">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/videoplayback.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
