import { ThemeProvider } from './context/ThemeContext';
import HeroSection from './components/HeroSection';
import PricingCards from './components/PricingCards';
import IntegrationSection from './components/IntegrationSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CMSDevelopmentSection from './components/CMSDevelopmentSection';
import FrameworkDevelopmentSection from './components/FrameworkDevelopmentSection';
import ControlPanelSection from './components/ControlPanelSection';
import HostingSupportSection from './components/HostingSupportSection';
import AdvancedSupportSection from './components/AdvancedSupportSection';

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