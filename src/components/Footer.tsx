import { Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-card/50 backdrop-blur-lg border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-xl font-serif font-bold text-foreground">
                Cosmic Astrology
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Discover your cosmic path through the ancient wisdom of the stars.
              Your journey to self-discovery begins here.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/horoscopes" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Horoscopes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Astrology
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Zodiac Signs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/zodiac/aries" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Aries
                </Link>
              </li>
              <li>
                <Link to="/zodiac/taurus" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Taurus
                </Link>
              </li>
              <li>
                <Link to="/zodiac/gemini" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Gemini
                </Link>
              </li>
              <li>
                <Link to="/zodiac/cancer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Cancer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            © {currentYear} Cosmic Astrology. Made with <Heart className="w-4 h-4 text-primary fill-primary" /> and stardust.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
