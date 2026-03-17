"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const faqList = [
  {
    faq_que: "What types of properties do you offer?",
    faq_ans:
      "We provide fully furnished, ready-to-move-in co-living spaces suitable for students and working professionals, designed for comfort, convenience, and community living.",
  },
  {
    faq_que: "Are the properties fully furnished?",
    faq_ans:
      "Yes. Each property is fully furnished from tile to top, including essentials for a comfortable stay, high-speed WiFi, and fresh meals where applicable.",
  },
  {
    faq_que: "Do you provide a community experience?",
    faq_ans:
      "Absolutely. Our properties host events, workshops, and social activities to foster a vibrant community experience where residents can connect and celebrate together.",
  },
  {
    faq_que: "Is there on-site support available?",
    faq_ans:
      "Yes. Each property has an onsite property manager to assist with daily needs, along with a responsive team available for any unexpected requirements.",
  },
  {
    faq_que: "Can I manage rent and lease online?",
    faq_ans:
      "Yes. Our app allows you to pay rent, manage your lease, and stay updated seamlessly without the hassle of splitting bills or manual tracking.",
  }
];

function Faq() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-midnight">
            Got{" "}
            <span className="font-ivy-presto font-normal italic">
              questions?
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base md:text-lg">
            Explore our most frequently asked questions to learn more about our
            services and processes.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="flex flex-col gap-3 sm:gap-4">
            {faqList.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
              >
                <AccordionTrigger className="flex justify-between items-center p-4 sm:p-5 cursor-pointer">
                  <h4 className="text-gray-900 font-medium text-base sm:text-lg md:text-xl text-left pr-4">
                    {item.faq_que}
                  </h4>
                </AccordionTrigger>
                <AccordionContent className="p-4 sm:p-5 border-t border-[#00141D]/10">
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {item.faq_ans}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Faq;
