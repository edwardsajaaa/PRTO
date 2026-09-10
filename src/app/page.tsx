import { Navbar } from '@/components/navigation/Navbar';
import {
  HeroSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
