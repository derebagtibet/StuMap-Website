import { StudentDiscoverySection } from "../components/sections/student/StudentDiscoverySection";
import { StudentHeroSection } from "../components/sections/student/StudentHeroSection";
import { StudentJourneySection } from "../components/sections/student/StudentJourneySection";
import { StudentLeadSection } from "../components/sections/student/StudentLeadSection";

const StudentPage = () => {
  return (
    <>
      <StudentHeroSection />
      <StudentDiscoverySection />
      <StudentJourneySection />
      <StudentLeadSection />
    </>
  );
};

export default StudentPage;
