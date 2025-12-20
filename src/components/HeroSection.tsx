import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLogoAnimated, setIsLogoAnimated] = useState(false);
  const [isTypewriterRevealed, setIsTypewriterRevealed] = useState(false);
  const [isCTAVisible, setIsCTAVisible] = useState(false);

  useEffect(() => {
    // Logo animation starts immediately
    const logoTimer = setTimeout(() => {
      setIsLogoAnimated(true);
    }, 800);

    // Typewriter starts after logo
    const typewriterTimer = setTimeout(() => {
      setIsTypewriterRevealed(true);
    }, 2000);

    // CTA appears after typewriter
    const ctaTimer = setTimeout(() => {
      setIsCTAVisible(true);
    }, 6500);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(typewriterTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with VFX */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Animated VFX Elements */}
      <div className="absolute inset-0">
        {/* Main glow in center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full opacity-60 animate-pulse" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/5 w-32 h-32 bg-brand-glow/20 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-brand-neon/15 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-brand-red/10 rounded-full blur-lg animate-bounce" style={{ animationDelay: '2s', animationDuration: '6s' }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with Cinematic Animation */}
        <div className={`mb-12 transition-all duration-1500 ease-out ${
          isLogoAnimated ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-8'
        }`}>
          <img 
            src="/lovable-uploads/2ea26820-4524-4553-b45d-e2a6545d0ba5.png" 
            alt="Never Ending Films Logo" 
            className="w-48 md:w-64 lg:w-72 mx-auto logo-glow"
          />
        </div>

        {/* Company Name */}
        <div className={`mb-8 transition-all duration-1000 delay-500 ${
          isLogoAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-glow">
            Never Ending Films
          </h1>
        </div>

        {/* Typewriter Tagline */}
        <div className="mb-16">
          <p className={`text-lg md:text-xl lg:text-2xl text-foreground-muted leading-relaxed max-w-3xl mx-auto tagline-font ${
            isTypewriterRevealed ? 'typewriter-text' : 'opacity-0'
          }`}>
            You believe in us. We believe in you. Together, we create magic.
          </p>
        </div>

        {/* Single CTA Button */}
        <div className={`transition-all duration-1000 ${
          isCTAVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <Link to="/contact">
            <Button size="lg" className="btn-cinema px-12 py-6 text-xl font-semibold relative overflow-hidden">
              Let's Begin Your Journey
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;