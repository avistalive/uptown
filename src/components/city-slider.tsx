
// CitySlider.jsx
"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Cities with Unsplash images
const CityList = [
  { 
    name: "Pune", 
    image: "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&h=600&fit=crop&crop=center", 
    rotation: "md:rotate-[-6deg]" 
  },
  { 
    name: "Mumbai", 
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop&crop=center", 
    rotation: "md:rotate-[6deg]" 
  },
  { 
    name: "Delhi", 
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop&crop=center", 
    rotation: "md:rotate-[-6deg]" 
  },
  { 
    name: "Bangalore", 
    image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&h=600&fit=crop&crop=center", 
    rotation: "md:rotate-[6deg]" 
  },
];

const CitySlider = () => {
  const sliderRef = useRef(null);

  useGSAP(() => {
    // Animate city names with a subtle parallax effect
    gsap.to(".city-name", { 
      xPercent: -10, 
      ease: "none",
      scrollTrigger: {
        trigger: ".city-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      }
    });

    // Stagger animation for images appearing
    gsap.fromTo(".city-card", 
      { 
        opacity: 0, 
        scale: 0.8,
        y: 50
      }, 
      { 
        opacity: 1, 
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".city-section",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <div 
      ref={sliderRef} 
      className="flex gap-4 sm:gap-6 md:gap-8 items-center h-full px-5 sm:px-6 md:px-8"
    >
      {CityList.map((city, index) => (
        <div
          key={`${city.name}-${index}`}
          className={`city-card relative flex-none w-[220px] h-[300px] sm:w-[260px] sm:h-[350px] md:w-[300px] md:h-[400px] ${city.rotation} hover:scale-105 transition-transform duration-300`}
        >
          <img
            src={city.image}
            alt={city.name}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl" />
          <h1 className="city-name absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-white text-xl sm:text-2xl md:text-3xl font-bold drop-shadow-lg">
            {city.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CitySlider;