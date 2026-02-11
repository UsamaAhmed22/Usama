import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  const scrollRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Ambient background gradients */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/3 -right-1/4 h-[500px] w-[500px] rounded-full bg-accent/4 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[600px] rounded-full bg-primary/3 blur-[120px]" />
      </div>

      {/* Main container shell */}
      <div ref={scrollRef} className="relative mx-auto my-0 min-h-screen max-w-[1200px] sm:my-6 sm:rounded-3xl container-shell overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
