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

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PricingCards />
      <IntegrationSection />
      <CMSDevelopmentSection />
      <FrameworkDevelopmentSection />
      <ControlPanelSection />
      <HostingSupportSection />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;