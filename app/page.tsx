import MainWrapper from "@/components/shared/main-wrapper";
import HeroSection from "./_components/hero-section";
import AboutUsSection from "./_components/about-us-section";
import { MenuSection } from "./_components/menu-section";
import { TestimonialsSection } from "./_components/testimonials-section";
import { OfferSection } from "./_components/offer-section";
import { FindUsSection } from "./_components/find-us-section";

export default function Home() {
  return (
    <MainWrapper>
      <HeroSection />
      <MenuSection />
      <AboutUsSection />
      <TestimonialsSection />
      <OfferSection />
      <FindUsSection />
    </MainWrapper>
  );
}
