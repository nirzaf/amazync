import { ThemeProvider } from './context/ThemeContext';
import HeroSection from './components/HeroSection';
import PricingCards from './components/PricingCards';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#0B2A97]">
        <HeroSection />
        <PricingCards />
        <Features />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;