import { ThemeProvider } from './context/ThemeContext';
import { Features, Testimonials, Footer } from './components/shared';
import { FAQ, PricingCards, HostingSupportSection, HeroSection } from './components/hosting';
import { IntegrationSection, FrameworkDevelopmentSection, ControlPanelSection, AdvancedSupportSection } from './components/common';
import { CMSDevelopmentSection } from './components/cms-hosting';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B2A97]">
        <HeroSection />
        <PricingCards />
        <IntegrationSection />
        <CMSDevelopmentSection />
        <FrameworkDevelopmentSection />
        <ControlPanelSection />
        <HostingSupportSection />
        <Features />
        <Testimonials />
        <AdvancedSupportSection />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;