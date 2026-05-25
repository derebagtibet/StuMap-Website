import { AboutHeroSection } from "../components/sections/about/AboutHeroSection";
import { AwardsSection } from "../components/sections/about/AwardsSection";
import { CounselingApproachSection } from "../components/sections/about/CounselingApproachSection";
import { SocialImpactSection } from "../components/sections/about/SocialImpactSection";
import { VisionMissionSection } from "../components/sections/about/VisionMissionSection";

const AboutPage = () => {
  return (
    <>
      <AboutHeroSection />
      <SocialImpactSection />
      <AwardsSection />
      <VisionMissionSection />
      <CounselingApproachSection />
    </>
  );
};

export default AboutPage;
