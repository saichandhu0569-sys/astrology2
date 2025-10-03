import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Moon, Star, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Astrology - Cosmic Astrology</title>
        <meta
          name="description"
          content="Learn about the ancient art of astrology, zodiac signs, and how celestial movements influence our lives and personalities."
        />
      </Helmet>

      <StarryBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground cosmic-glow-strong">
              The Ancient Art of Astrology
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the celestial wisdom that has guided humanity for millennia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-cosmic-card border-border/50 mb-8">
              <CardContent className="p-8">
                <p className="text-foreground leading-relaxed mb-4">
                  Astrology is an ancient practice that studies the movements and relative
                  positions of celestial bodies and interprets them as having an influence
                  on human affairs and the natural world. For thousands of years, cultures
                  around the world have looked to the stars for guidance, wisdom, and
                  understanding.
                </p>
                <p className="text-foreground leading-relaxed">
                  The foundation of Western astrology lies in the zodiac—a belt of the
                  heavens divided into twelve equal parts, each associated with a
                  constellation and representing different personality traits, energies,
                  and life themes.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-cosmic-card border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Sun className="w-6 h-6 text-primary" />
                    The Sun Signs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    Your sun sign represents your core identity, ego, and the essence of
                    who you are. It's determined by the position of the sun at the moment
                    of your birth and is the most commonly known aspect of astrology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-cosmic-card border-border/50 h-full">
                <CardHeader>
                  <CardTitle className="text-foreground flex items-center gap-2">
                    <Moon className="w-6 h-6 text-primary" />
                    The Elements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    The twelve zodiac signs are divided into four elements: Fire, Earth,
                    Air, and Water. Each element represents fundamental energies and
                    characteristics that influence how signs express themselves.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-cosmic-card border-border/50 mb-8">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Star className="w-6 h-6 text-primary" />
                  Understanding Your Horoscope
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  A horoscope is an astrological chart or diagram representing the
                  positions of celestial bodies at a specific time. Daily, weekly, and
                  monthly horoscopes interpret how current planetary movements affect each
                  zodiac sign.
                </p>
                <p className="text-foreground leading-relaxed">
                  While your sun sign is important, a complete astrological profile
                  considers your moon sign (emotions), rising sign (outer personality),
                  and the positions of all planets in your birth chart.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-cosmic-card border-border/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold mb-4 text-foreground cosmic-glow">
                  Begin Your Cosmic Journey
                </h3>
                <p className="text-foreground leading-relaxed">
                  Whether you're a seasoned astrology enthusiast or just beginning to
                  explore the stars, understanding your zodiac sign can offer profound
                  insights into your personality, relationships, and life path. The cosmos
                  has stories to tell—are you ready to listen?
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
