import { DownloadCTASection } from "../components/sections/home/DownloadCTASection";
import { HeroSection } from "../components/sections/home/HeroSection";
import { TestimonialSection } from "../components/sections/home/TestimonialSection";
import { UserTypeCardsSection } from "../components/sections/home/UserTypeCardsSection";
import { WhyStumapSection } from "../components/sections/home/WhyStumapSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyStumapSection />
      <TestimonialSection />
      <DownloadCTASection />
      <UserTypeCardsSection />
    </>
  );
};

export default HomePage;
