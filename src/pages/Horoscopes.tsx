import { Helmet } from 'react-helmet';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { zodiacSigns } from '@/data/zodiacData';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const Horoscopes = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('daily');

  const getHoroscope = (zodiacName: string, period: string) => {
    const horoscopes = {
      daily: `Today brings powerful cosmic energy for ${zodiacName}. The alignment of the stars suggests new opportunities on the horizon. Trust your intuition and embrace the changes coming your way.`,
      weekly: `This week, ${zodiacName}, the universe has aligned in your favor. Expect breakthroughs in personal and professional areas. Mid-week brings exciting opportunities for growth.`,
      monthly: `As we journey through this month, ${zodiacName} natives will experience transformative growth. The stars illuminate your path with wisdom and inspiration. Major cosmic shifts favor your endeavors.`,
    };
    return horoscopes[period as keyof typeof horoscopes];
  };

  return (
    <>
      <Helmet>
        <title>Daily Horoscopes - Cosmic Astrology</title>
        <meta
          name="description"
          content="Read your daily, weekly, and monthly horoscopes. Get cosmic guidance and astrological insights for all zodiac signs."
        />
      </Helmet>

      <StarryBackground />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground cosmic-glow-strong">
              Your Cosmic Guidance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what the stars have in store for you. Select your zodiac sign
              and explore daily, weekly, or monthly horoscopes.
            </p>
          </div>

          <Tabs
            defaultValue="daily"
            className="max-w-4xl mx-auto mb-12"
            onValueChange={setSelectedPeriod}
          >
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border/50">
              <TabsTrigger
                value="daily"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Daily
              </TabsTrigger>
              <TabsTrigger
                value="weekly"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Weekly
              </TabsTrigger>
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
              >
                Monthly
              </TabsTrigger>
            </TabsList>

            <TabsContent value="daily" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zodiacSigns.map((sign, index) => (
                  <motion.div
                    key={sign.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-cosmic-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">{sign.symbol}</span>
                          <div>
                            <h3 className="text-xl font-serif font-bold text-foreground">
                              {sign.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">{sign.dateRange}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {getHoroscope(sign.name, 'daily')}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="weekly" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zodiacSigns.map((sign, index) => (
                  <motion.div
                    key={sign.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-cosmic-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">{sign.symbol}</span>
                          <div>
                            <h3 className="text-xl font-serif font-bold text-foreground">
                              {sign.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">{sign.dateRange}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {getHoroscope(sign.name, 'weekly')}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="mt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {zodiacSigns.map((sign, index) => (
                  <motion.div
                    key={sign.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="bg-cosmic-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-4xl">{sign.symbol}</span>
                          <div>
                            <h3 className="text-xl font-serif font-bold text-foreground">
                              {sign.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">{sign.dateRange}</p>
                          </div>
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">
                          {getHoroscope(sign.name, 'monthly')}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Horoscopes;
