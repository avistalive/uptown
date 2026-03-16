"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const completedStats = [
    { label: "Completed Projects", value: "20+" },
    { label: "Happy Customers", value: "3540+" },
    { label: "Sqft Sold", value: "3M" },
    { label: "Project Value", value: "2050Cr+" },
  ];

  const ongoingStats = [
    { label: "Ongoing Projects", value: "20+" },
    { label: "Sqft", value: "4Million M +" },
    { label: "Inventories", value: "5000+" },
    { label: "Project Value", value: "4000Cr+" },
  ];

  return (
    <section className="stats-section py-12 sm:py-16 md:py-20 bg-[#F0ECDF]">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Completed Projects */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 text-[#00141D] font-light">
              Our{" "}<span className="font-ivy-presto font-normal italic">Legacy</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">Reflecting years of trust and excellence in Navi Mumbai</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {completedStats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#00141D] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-[#EFEBDF] text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects */}
        <div>
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-3 text-[#00141D] font-light">
              Future{" "}<span className="font-ivy-presto font-normal italic">Horizons</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-light">Current developments shaping the tomorrow of real estate</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {ongoingStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/50 border border-[#00141D]/10 p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-[#00141D] text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
