"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import PremiumButton from "./ui/premium-button";

function Solutions() {
  const ref = useRef(null);


  return (
    <section>
      <div className="py-8 md:py-12 mx-3 sm:mx-4">
        <div className="container">
          <div
            ref={ref}
            className="py-12 sm:py-16 md:py-28 px-5 sm:px-6 md:px-8 border border-white/10 rounded-2xl sm:rounded-3xl bg-midnight text-white"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-4 sm:gap-6 items-center md:max-w-3xl mx-auto"
            >
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light">
                  Find your{" "}
                  <span className="font-ivy-presto font-normal italic">
                    ideal space
                  </span>
                </h2>
                <p className="text-sm sm:text-base max-w-md mx-auto">
                  See what&apos;s available or contact us for personalized
                  assistance.
                </p>
              </div>
              <PremiumButton text="Available Properties" href="/contact" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
