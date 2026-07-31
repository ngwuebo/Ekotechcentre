import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import SocialProof from '@/components/landing/SocialProof';
import BenefitsSection from '@/components/landing/BenefitsSection';
import TracksSection from '@/components/landing/TracksSection';
import SkillsSection from '@/components/landing/SkillsSection';
import ClassPreview from '@/components/landing/ClassPreview';
import HowItWorks from '@/components/landing/HowItWorks';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PricingSection from '@/components/landing/PricingSection';
import FAQSection from '@/components/landing/FAQSection';
import FooterSection from '@/components/landing/FooterSection';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hero-glow opacity-80 blur-3xl" />
      <HeroSection />
      <SocialProof />
      <BenefitsSection />
      <TracksSection />
      <SkillsSection />
      <ClassPreview />
      <HowItWorks />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
