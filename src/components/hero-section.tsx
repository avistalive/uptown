"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PremiumButton from "./ui/premium-button";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power2.out",
      force3D: true,
      clearProps: "all",
    });
  }, []);

  return (
    <section className="relative min-h-svh flex items-center justify-center text-white rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[100px] lg:rounded-b-[150px] overflow-hidden bg-white">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
        alt="Transforming Real Estate Sales"
        fill
        className="object-cover rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[100px] lg:rounded-b-[150px]"
        priority
        sizes="100vw"
        quality={85}
      />

      {/* Dynamic Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-white/10 rounded-b-[40px] sm:rounded-b-[60px] md:rounded-b-[100px] lg:rounded-b-[150px]"></div>

      {/* Content */}
      <div className="relative z-10 text-center container mx-auto px-5 sm:px-6 mt-16 sm:mt-20">
        <h1 className="hero-text text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light leading-[1.1] tracking-tight will-change-transform will-change-opacity">
          Transforming{" "}
          <span className="font-ivy-presto font-normal italic">
            Real Estate
          </span>{" "}
          Sales
        </h1>

        <p className="hero-text mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-2xl lg:text-3xl font-light max-w-4xl mx-auto text-gray-100/90 leading-relaxed px-2 will-change-transform will-change-opacity">
          Navi Mumbai&apos;s leading <span className="font-medium text-white border-b border-white/30">Proptech leader</span> specializing in mandate/sole-selling services.
        </p>

        <div className="hero-text mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <PremiumButton text="Explore Properties" href="#properties" />
          <a
            href="#contact"
            className="inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-1 h-8 sm:h-12 rounded-full bg-linear-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
