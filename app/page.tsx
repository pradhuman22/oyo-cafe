import MainWrapper from "@/components/shared/main-wrapper";
import HeroSection from "./_components/hero-section";
import AboutUsSection from "./_components/about-us-section";

export default function Home() {
  return (
    <MainWrapper>
      <HeroSection />
      <AboutUsSection />
    </MainWrapper>
  );
}
