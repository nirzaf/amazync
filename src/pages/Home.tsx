import HeroSection from '../components/HeroSection';
import PricingCards from '../components/PricingCards';
import IntegrationSection from '../components/IntegrationSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import CMSDevelopmentSection from '../components/CMSDevelopmentSection';
import FrameworkDevelopmentSection from '../components/FrameworkDevelopmentSection';
import ControlPanelSection from '../components/ControlPanelSection';
import HostingSupportSection from '../components/HostingSupportSection';
import AdvancedSupportSection from '../components/AdvancedSupportSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntegrationSection />
      <CMSDevelopmentSection />
      <Features />
      <FrameworkDevelopmentSection />
      <PricingCards />
      <ControlPanelSection />
      <HostingSupportSection />
      <Testimonials />
      <AdvancedSupportSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;