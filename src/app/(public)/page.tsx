import Brand from "@/components/brand";
import CitySection from "@/components/cities";
import Faq from "@/components/faqs";
import Hero from "@/components/hero-section";
import Intro from "@/components/intro";
import Stats from "@/components/stats";
import Services from "@/components/service";
import Solutions from "@/components/solution";

export default function Home() {
  return (
    <div className="bg-[#F0ECDF]">
      <Hero />
      <Brand />
      <Intro />
      <Stats />
      <CitySection />
      <Services />
      <Faq />
      <Solutions />
    </div>
  );
}
