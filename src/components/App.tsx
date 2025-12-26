import { LanguageProvider } from "@/lib/LanguageContext";
import GlassHeader from "./GlassHeader";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import EducationSection from "./EducationSection";
import Footer from "./Footer";

export default function App() {
  return (
    <LanguageProvider>
      <GlassHeader />
      <main className="min-h-screen">
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
