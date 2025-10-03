import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import StarryBackground from "@/components/StarryBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <StarryBackground />
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h1 className="mb-4 text-6xl font-serif font-bold text-foreground cosmic-glow-strong">404</h1>
          <p className="mb-8 text-xl text-muted-foreground">This cosmic path doesn't exist in our universe</p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
            <a href="/">Return to the Stars</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
