import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface HoroscopeTabsProps {
  zodiacName: string;
}

const HoroscopeTabs = ({ zodiacName }: HoroscopeTabsProps) => {
  const horoscopes = {
    daily: `Today brings powerful cosmic energy for ${zodiacName}. The alignment of the stars suggests new opportunities on the horizon. Trust your intuition and embrace the changes coming your way. Your natural strengths will shine through in unexpected situations.`,
    weekly: `This week, ${zodiacName}, the universe has aligned in your favor. Monday through Wednesday brings creative breakthroughs and new connections. Thursday and Friday encourage reflection and planning. The weekend promises joy and celebration. Stay open to cosmic messages.`,
    monthly: `As we journey through this month, ${zodiacName} natives will experience transformative growth. The first half focuses on personal development and inner wisdom. Mid-month brings social connections and collaborative opportunities. The final weeks emphasize balance and harmony. Your cosmic path is illuminated with possibilities.`,
  };

  return (
    <Tabs defaultValue="daily" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-card border border-border/50">
        <TabsTrigger value="daily" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
          Daily
        </TabsTrigger>
        <TabsTrigger value="weekly" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
          Weekly
        </TabsTrigger>
        <TabsTrigger value="monthly" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
          Monthly
        </TabsTrigger>
      </TabsList>

      <TabsContent value="daily">
        <Card className="bg-cosmic-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Daily Horoscope</CardTitle>
            <CardDescription className="text-muted-foreground">Your cosmic guidance for today</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{horoscopes.daily}</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="weekly">
        <Card className="bg-cosmic-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Weekly Horoscope</CardTitle>
            <CardDescription className="text-muted-foreground">Your cosmic guidance for this week</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{horoscopes.weekly}</p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="monthly">
        <Card className="bg-cosmic-card border-border/50">
          <CardHeader>
            <CardTitle className="text-foreground">Monthly Horoscope</CardTitle>
            <CardDescription className="text-muted-foreground">Your cosmic guidance for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-foreground leading-relaxed">{horoscopes.monthly}</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default HoroscopeTabs;
