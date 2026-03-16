"use client"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface CardData {
  src: string;
  rotation: string;
  name: string;
  img: string;
  translation?: string;
}

const cards: CardData[] = [
  {
    src: "/videos/f1.mp4",
    rotation: "rotate-[-10deg]",
    name: "Madison",
    img: "/images/p1.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f2.mp4",
    rotation: "rotate-[4deg]",
    name: "Alexander",
    img: "/images/p2.png",
  },
  {
    src: "/videos/f3.mp4",
    rotation: "rotate-[-4deg]",
    name: "Andrew",
    img: "/images/p3.png",
    translation: "translate-y-[-5%]",
  },
  {
    src: "/videos/f4.mp4",
    rotation: "rotate-[4deg]",
    name: "Bryan",
    img: "/images/p4.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f5.mp4",
    rotation: "rotate-[-10deg]",
    name: "Chris",
    img: "/images/p5.png",
  },
  {
    src: "/videos/f6.mp4",
    rotation: "rotate-[4deg]",
    name: "Devante",
    img: "/images/p6.png",
    translation: "translate-y-[5%]",
  },
  {
    src: "/videos/f7.mp4",
    rotation: "rotate-[-3deg]",
    name: "Melisa",
    img: "/images/p7.png",
    translation: "translate-y-[10%]",
  },
];

const TestimonialSection: React.FC = () => {
  const vdRef = useRef<(HTMLVideoElement | null)[]>([]);
  
  useGSAP(() => {
    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });
    
    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );
    
    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });
    
    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  }, []);

  const handlePlay = (index: number): void => {
    const video = vdRef.current[index];
    if (video) {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    }
  };

  const handlePause = (index: number): void => {
    const video = vdRef.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section className="testimonials-section relative min-h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[5vw]">
        <h1 className="text-black text-6xl md:text-8xl font-bold first-title">What&apos;s</h1>
        <h1 className="text-amber-600 text-6xl md:text-8xl font-bold sec-title">Everyone</h1>
        <h1 className="text-black text-6xl md:text-8xl font-bold third-title">Talking</h1>
      </div>
      
      <div className="pin-box relative flex flex-wrap justify-center items-center gap-4 p-8">
        {cards.map((card, index) => (
          <div
            key={`${card.name}-${index}`}
            className={`vd-card relative w-48 h-64 md:w-64 md:h-80 rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105 ${
              card.translation || ""
            } ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => {
                vdRef.current[index] = el;
              }}
              src={card.src}
              playsInline
              muted
              loop
              className="w-full h-full object-cover"
              preload="metadata"
            />
            
            {/* Optional: Add person info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-semibold">{card.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;