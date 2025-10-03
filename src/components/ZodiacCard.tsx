import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

interface ZodiacCardProps {
  name: string;
  symbol: string;
  dateRange: string;
  element: string;
  index: number;
}

const ZodiacCard = ({ name, symbol, dateRange, element, index }: ZodiacCardProps) => {
  const elementColors = {
    Fire: 'text-orange-400',
    Earth: 'text-green-400',
    Air: 'text-blue-300',
    Water: 'text-cyan-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <Link to={`/zodiac/${name.toLowerCase()}`}>
        <Card className="bg-cosmic-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] cursor-pointer h-full">
          <CardContent className="p-6 text-center">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {symbol}
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2 text-foreground">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mb-2">{dateRange}</p>
            <p className={`text-sm font-medium ${elementColors[element as keyof typeof elementColors]}`}>
              {element}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ZodiacCard;
