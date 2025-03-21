import HeroSection from '../components/HeroSection';
import PricingCards from '../components/PricingCards';
import IntegrationSection from '../components/IntegrationSection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PricingCards />
      <IntegrationSection />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;