"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Briefcase,
  Building2,
  DraftingCompass,
  HardHat,
  LayoutPanelTop,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: <DraftingCompass size={28} />, title: "Planning" },
  { icon: <Building2 size={28} />, title: "Project Positioning" },
  { icon: <LayoutPanelTop size={28} />, title: "Marketing" },
  { icon: <Briefcase size={28} />, title: "Sales" },
  { icon: <HardHat size={28} />, title: "Post-Sales Operation" },
  { icon: <Building2 size={28} />, title: "Mandate/Sole-Selling" },
];

const Services = () => {
  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.from(".services-section-title", {
      scrollTrigger: {
        trigger: ".services-section-title",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      force3D: true,
      clearProps: "all",
    });

    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 90%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 30,
      stagger: 0.08,
      duration: 0.8,
      ease: "power2.out",
      force3D: true,
      clearProps: "all",
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-[#F0ECDF]">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 md:mb-20">
          <h2 className="services-section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-[#00141D]">
            We execute every project with a focus on{" "}<span className="font-ivy-presto font-normal italic">costs</span>,{" "}<span className="font-ivy-presto font-normal italic">schedules</span>,{" "}<span className="font-ivy-presto font-normal italic">quality</span>,
            and market-tailored solutions.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-8 mt-8 sm:mt-12 md:mt-16 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white border border-[#00141D]/5 p-5 sm:p-7 md:p-10 rounded-2xl sm:rounded-[2rem] shadow-sm hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col items-center text-center"
            >
              <div className="mb-4 sm:mb-5 md:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#00141D]/5 text-[#00141D] group-hover:bg-[#00141D] group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-ivy-presto text-[#00141D]">
                {service.title}
              </h3>
              <div className="mt-3 sm:mt-4 w-8 sm:w-12 h-0.5 bg-[#00141D]/10 group-hover:w-16 sm:group-hover:w-20 group-hover:bg-[#00141D] transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
