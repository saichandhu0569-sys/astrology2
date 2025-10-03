import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Flame, Mountain, Wind, Droplets } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HoroscopeTabs from '@/components/HoroscopeTabs';
import StarryBackground from '@/components/StarryBackground';
import { zodiacSigns } from '@/data/zodiacData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const ZodiacDetail = () => {
  const { sign } = useParams<{ sign: string }>();
  const zodiacData = zodiacSigns.find(
    (z) => z.name.toLowerCase() === sign?.toLowerCase()
  );

  if (!zodiacData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold mb-4 text-foreground">
              Zodiac Sign Not Found
            </h1>
            <Link to="/">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Return Home
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const elementIcons = {
    Fire: <Flame className="w-6 h-6" />,
    Earth: <Mountain className="w-6 h-6" />,
    Air: <Wind className="w-6 h-6" />,
    Water: <Droplets className="w-6 h-6" />,
  };

  const elementColors = {
    Fire: 'text-orange-400',
    Earth: 'text-green-400',
    Air: 'text-blue-300',
    Water: 'text-cyan-400',
  };

  return (
    <>
      <Helmet>
        <title>{zodiacData.name} - Cosmic Astrology</title>
        <meta
          name="description"
          content={`Discover everything about ${zodiacData.name}: ${zodiacData.description}`}
        />
      </Helmet>

      <StarryBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" className="mb-8 border-primary/50 text-foreground hover:bg-primary/10">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to All Signs
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="text-8xl mb-6 animate-float">{zodiacData.symbol}</div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-foreground cosmic-glow-strong">
              {zodiacData.name}
            </h1>
            <p className="text-xl text-primary mb-2">{zodiacData.dateRange}</p>
            <div className={`flex items-center justify-center gap-2 ${elementColors[zodiacData.element]}`}>
              {elementIcons[zodiacData.element]}
              <span className="text-lg font-semibold">{zodiacData.element} Sign</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-cosmic-card border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  About {zodiacData.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">{zodiacData.description}</p>
                <div className="space-y-2">
                  <p className="text-muted-foreground">
                    <span className="text-primary font-semibold">Ruling Planet:</span>{' '}
                    {zodiacData.rulingPlanet}
                  </p>
                  <p className="text-muted-foreground">
                    <span className="text-primary font-semibold">Element:</span>{' '}
                    {zodiacData.element}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-cosmic-card border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Compatibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {zodiacData.name} is most compatible with:
                </p>
                <div className="flex flex-wrap gap-2">
                  {zodiacData.compatibility.map((compatSign) => (
                    <Link key={compatSign} to={`/zodiac/${compatSign.toLowerCase()}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary/50 text-foreground hover:bg-primary/10"
                      >
                        {compatSign}
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-cosmic-card border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {zodiacData.strengths.map((strength) => (
                    <li key={strength} className="text-foreground flex items-center gap-2">
                      <span className="text-primary">✦</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-cosmic-card border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Weaknesses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {zodiacData.weaknesses.map((weakness) => (
                    <li key={weakness} className="text-foreground flex items-center gap-2">
                      <span className="text-muted-foreground">✦</span>
                      {weakness}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center text-foreground cosmic-glow">
              {zodiacData.name} Horoscope
            </h2>
            <HoroscopeTabs zodiacName={zodiacData.name} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ZodiacDetail;
