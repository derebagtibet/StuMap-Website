import { DownloadCTASection } from "../components/sections/home/DownloadCTASection";
import { HeroSection } from "../components/sections/home/HeroSection";
import { TestimonialSection } from "../components/sections/home/TestimonialSection";
import { UserTypeCardsSection } from "../components/sections/home/UserTypeCardsSection";
import { WhyStuMapSection } from "../components/sections/home/WhyStuMapSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyStuMapSection />
      <TestimonialSection />
      <DownloadCTASection />
      <UserTypeCardsSection />
    </>
  );
};

export default HomePage;
