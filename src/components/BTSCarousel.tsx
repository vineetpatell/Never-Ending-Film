import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BTSCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const btsImages = [
    {
      url: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1200&h=600&fit=crop',
      caption: 'Behind the scenes of our latest commercial production',
      project: 'Commercial Series 2024'
    },
    {
      url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=600&fit=crop',
      caption: 'Creative team collaborating on set design',
      project: 'Feature Film Production'
    },
    {
      url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=600&fit=crop',
      caption: 'Cinematography setup for dramatic scene',
      project: 'Web Series Episode 5'
    },
    {
      url: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=600&fit=crop',
      caption: 'Director and actors reviewing script between takes',
      project: 'Independent Film'
    },
    {
      url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&h=600&fit=crop',
      caption: 'Post-production color grading session',
      project: 'Music Video Production'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % btsImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, btsImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + btsImages.length) % btsImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % btsImages.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground animate-fade-in">
            Behind the <span className="text-primary text-glow">Scenes</span>
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in">
            Take a glimpse into our creative process and see how we bring stories to life.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden cinema-card">
            {btsImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="text-primary text-sm font-medium mb-2">
                    {image.project}
                  </div>
                  <p className="text-white text-lg md:text-xl font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass-panel hover:bg-primary/20 transition-all duration-300 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass-panel hover:bg-primary/20 transition-all duration-300 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 p-3 glass-panel hover:bg-primary/20 transition-all duration-300 group"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
            ) : (
              <Play className="w-5 h-5 text-white group-hover:text-primary transition-colors" />
            )}
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-8">
          {btsImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-primary scale-125'
                  : 'bg-foreground-muted/30 hover:bg-foreground-muted/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button className="btn-cinema" size="lg">
            View Full BTS Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BTSCarousel;