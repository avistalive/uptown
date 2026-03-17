import dynamic from "next/dynamic";
import Brand from "@/components/brand";
import Hero from "@/components/hero-section";
import Intro from "@/components/intro";

const Stats = dynamic(() => import("@/components/stats"), { ssr: true });
const CitySection = dynamic(() => import("@/components/cities"), { ssr: true });
const Services = dynamic(() => import("@/components/service"), { ssr: true });
const Faq = dynamic(() => import("@/components/faqs"), { ssr: true });
const Solutions = dynamic(() => import("@/components/solution"), { ssr: true });

export default function Home() {
  return (
    <div className="bg-white">
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
