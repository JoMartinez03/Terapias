import { site } from "@/data/site";
import { Hero } from "@/components/home/hero";
import { AboutLaura } from "@/components/home/about-laura";
import { Identification } from "@/components/home/identification";
import { Services } from "@/components/home/services";
import { Programs } from "@/components/home/programs";
import { Approach } from "@/components/home/approach";
import { Testimonials } from "@/components/home/testimonials";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutLaura />
      <Identification />
      <Services />
      <Programs />
      <Approach />
      {site.showTestimonials && <Testimonials />}
      <FinalCta />
    </>
  );
}