import { ThemeProvider } from '../context/ThemeContext';
import { Navbar, Features, Testimonials, Footer } from '../components/shared';
import { PricingCards, HostingSupportSection, HeroSection, PreInstalledCMSSection, PerformanceReliabilitySection, FAQ } from '../components/hosting';

const Hosting = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B2A97]">
        <Navbar />
        <HeroSection />
        <PricingCards />
        <Features />
        <PreInstalledCMSSection />
        <HostingSupportSection />
        <PerformanceReliabilitySection />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Hosting;