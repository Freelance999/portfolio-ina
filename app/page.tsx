import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkExperience from "@/components/WorkExperience";
import OrganisationalExperience from "@/components/OrganisationalExperience";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-bg-primary font-body-md text-body-md text-text-primary antialiased min-h-screen flex flex-col">
      <Navbar />
      <main className="w-full pt-20 bg-bg-primary flex-1">
        <div className="flex flex-col w-full">
          <HeroSection />
          <WorkExperience />
          <OrganisationalExperience />
          <SkillsSection />
          <EducationSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
