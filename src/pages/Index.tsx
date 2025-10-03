import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ZodiacCard from '@/components/ZodiacCard';
import StarryBackground from '@/components/StarryBackground';
import { zodiacSigns } from '@/data/zodiacData';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Cosmic Astrology - Your Journey Through the Stars</title>
        <meta
          name="description"
          content="Explore the cosmic wisdom of astrology. Discover your zodiac sign, daily horoscopes, and celestial insights to guide your path through the stars."
        />
      </Helmet>

      <StarryBackground />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />

        <section id="zodiac" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground cosmic-glow">
              The Twelve Zodiac Signs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the unique characteristics, strengths, and cosmic energies
              that define each celestial sign.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {zodiacSigns.map((sign, index) => (
              <ZodiacCard
                key={sign.name}
                name={sign.name}
                symbol={sign.symbol}
                dateRange={sign.dateRange}
                element={sign.element}
                index={index}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Index;
