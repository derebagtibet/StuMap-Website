import { SchoolFeaturesSection } from "../components/sections/school/SchoolFeaturesSection";
import { SchoolHeroSection } from "../components/sections/school/SchoolHeroSection";
import { SchoolLeadSection } from "../components/sections/school/SchoolLeadSection";

const SchoolPage = () => {
  return (
    <>
      <SchoolHeroSection />
      <SchoolFeaturesSection />
      <SchoolLeadSection />
    </>
  );
};

export default SchoolPage;
