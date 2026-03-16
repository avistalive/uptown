"use client";
import Slider from "react-infinite-logo-slider";
import SingleBrand from "./SingleBrand";

export const brandList = [
  {
    image: "/brand/brand-icon-1.svg",
    darkImg: "/brand/brand-darkicon-1.svg",
    title: "Adobe",
  },
  {
    image: "/brand/brand-icon-2.svg",
    darkImg: "/brand/brand-darkicon-2.svg",
    title: "Figma",
  },
  {
    image: "/brand/brand-icon-3.svg",
    darkImg: "/brand/brand-darkicon-3.svg",
    title: "Shopify",
  },
  {
    image: "/brand/brand-icon-4.svg",
    darkImg: "/brand/brand-darkicon-4.svg",
    title: "Dribble",
  },
  {
    image: "/brand/brand-icon-5.svg",
    darkImg: "/brand/brand-darkicon-5.svg",
    title: "Webflow",
  },
];

function Brand() {
  return (
    <section>
      <div className="2xl:py-20 py-8 sm:py-11">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="gap-4">
            {/* Heading */}
            <div className="flex justify-center text-center py-3 sm:py-4 relative">
              <p
                className="relative px-2 text-sm sm:text-base text-dark_black/60 dark:text-white/60
                    md:before:absolute md:before:right-[-150px] md:before:top-1/2 md:before:h-0.5 md:before:w-36 md:before:bg-linear-to-r md:before:from-gray-800 dark:md:before:from-gray-300 dark:md:before:opacity-100 md:before:opacity-10 md:before:to-transparent md:after:absolute md:after:left-[-150px] md:after:top-1/2 md:after:h-0.5 md:after:w-36 md:after:bg-linear-to-l md:after:from-gray-800 dark:md:after:from-gray-300 md:after:opacity-10 dark:md:after:opacity-100 md:after:to-transparent"
              >
                Featured by 1000+ developers
              </p>
            </div>

            {/* Slider */}
            {brandList.length > 0 && (
              <div className="py-2 sm:py-3 Xsm:py-7">
                <Slider
                  width="160px"
                  duration={20}
                  pauseOnHover={true}
                  blurBorders={false}
                >
                  {brandList.map((item, index) => (
                    <SingleBrand key={index} brand={item} />
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;
