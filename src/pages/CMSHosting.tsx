// src/pages/CMSHosting.tsx
import { ThemeProvider } from '../context/ThemeContext'; // Adjust path if needed
import { Navbar, Footer, Testimonials } from '../components/shared'; // Adjust paths
import { CMSPricingCards, FeaturesSection, PreInstalledCMSSection, CMSFaq, Hero } from '../components/cms-hosting'; // Adjust paths

const CMSHosting = () => {
  // We no longer need the animation variants here as they're now in the Hero component

  return (
    <ThemeProvider> {/* Ensure ThemeProvider wraps the component using the theme */}
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />

        <Hero />

        {/* Rest of your page content */}
        <main className="flex-grow"> {/* Use main for semantic content */}
          <section> {/* Removed bg-white, let CMSPricingCards handle its own background if needed */}
            <CMSPricingCards />
          </section>

          {/* Alternate section backgrounds for contrast */}
          <section className="bg-gray-50"> {/* Lighter background */}
             <FeaturesSection />
          </section>

          <section>
            <PreInstalledCMSSection />
          </section>

          <section className="bg-gray-50"> {/* Lighter background */}
            <Testimonials />
          </section>

          <section>
             <CMSFaq />
          </section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default CMSHosting;