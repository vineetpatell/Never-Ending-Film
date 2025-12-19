import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import LightboxGallery from '@/components/LightboxGallery';
import ServicePreviewCards from '@/components/ServicePreviewCards';

// Import BTS images
import bts1 from '@/assets/bts-1.png';
import bts2 from '@/assets/bts-2.png';
import bts3 from '@/assets/bts-3.png';
import bts4 from '@/assets/bts-4.png';
import bts5 from '@/assets/bts-5.png';
import bts6 from '@/assets/bts-6.png';
import bts7 from '@/assets/bts-7.png';
import bts8 from '@/assets/bts-8.png';
import bts9 from '@/assets/bts-9.png';
import bts10 from '@/assets/bts-10.png';
import bts11 from '@/assets/bts-11.png';
import bts12 from '@/assets/bts-12.png';
import bts13 from '@/assets/bts-13.png';
import bts14 from '@/assets/bts-14.png';
import bts15 from '@/assets/bts-15.png';
import bts16 from '@/assets/bts-16.jpg';
import bts17 from '@/assets/bts-17.png';
import bts18 from '@/assets/bts-18.png';
import bts19 from '@/assets/bts-19.png';
import bts20 from '@/assets/bts-20.png';
import bts21 from '@/assets/bts-21.png';
import bts22 from '@/assets/bts-22.jpg';
import bts23 from '@/assets/bts-23.png';
import bts24 from '@/assets/bts-24.png';

const BTS = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const servicesRef = useRef<HTMLElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // BTS Images data
  const btsImages = [
    {
      src: bts1,
      alt: 'Behind the scenes - Beach location shoot with red car',
      title: 'Location Shoot',
      description: 'Capturing the perfect shot on location with our team and cast'
    },
    {
      src: bts2,
      alt: 'Behind the scenes - Indoor lighting setup',
      title: 'Professional Lighting',
      description: 'Setting up professional lighting for the perfect indoor scene'
    },
    {
      src: bts3,
      alt: 'Behind the scenes - Outdoor set preparation',
      title: 'Set Preparation',
      description: 'Our team preparing an elaborate outdoor set with beautiful garden backdrop'
    },
    {
      src: bts4,
      alt: 'Behind the scenes - Director and crew coordination',
      title: 'Team Coordination',
      description: 'Director working closely with the crew for seamless production'
    },
    {
      src: bts5,
      alt: 'Behind the scenes - Celebration moment',
      title: 'Team Celebration',
      description: 'Celebrating successful completion of another great project'
    },
    {
      src: bts6,
      alt: 'Behind the scenes - Camera operation',
      title: 'Camera Work',
      description: 'Our cinematographer capturing the essence of the story'
    },
    {
      src: bts7,
      alt: 'Behind the scenes - Post production team',
      title: 'Post Production',
      description: 'Our talented post-production team working on the final edit'
    },
    {
      src: bts8,
      alt: 'Behind the scenes - Studio setup',
      title: 'Studio Production',
      description: 'Professional studio setup with full crew coordination'
    },
    {
      src: bts10,
      alt: 'Behind the scenes - Creative team meeting in library',
      title: 'Creative Brainstorming',
      description: 'Our creative team collaborating and discussing story ideas in a classic library setting'
    },
    {
      src: bts11,
      alt: 'Behind the scenes - Professional film set with actors',
      title: 'Film Production',
      description: 'Professional film set with detailed production design and cast performance'
    },
    {
      src: bts12,
      alt: 'Behind the scenes - Outdoor location filming',
      title: 'Location Filming',
      description: 'Capturing authentic moments during outdoor location shoots'
    },
    {
      src: bts13,
      alt: 'Behind the scenes - Beautiful garden location shoot',
      title: 'Garden Scene Production',
      description: 'Filming in a picturesque garden setting with natural lighting'
    },
    {
      src: bts14,
      alt: 'Behind the scenes - Team collaboration photo',
      title: 'Team Unity',
      description: 'Our passionate team coming together to create cinematic excellence'
    },
    {
      src: bts15,
      alt: 'Behind the scenes - Indoor set production',
      title: 'Interior Set Design',
      description: 'Meticulously crafted interior sets with professional lighting setup'
    },
    {
      src: bts16,
      alt: 'Behind the scenes - Writer\'s creative workspace',
      title: 'Creative Writing Space',
      description: 'The creative environment where our stories come to life'
    },
    {
      src: bts17,
      alt: 'Behind the scenes - Studio production setup',
      title: 'Studio Production',
      description: 'Professional studio setup with full crew and equipment coordination'
    },
    {
      src: bts18,
      alt: 'Behind the scenes - Cast and crew celebration',
      title: 'Production Wrap',
      description: 'Celebrating the successful completion of another amazing project'
    },
    {
      src: bts19,
      alt: 'Behind the scenes - Netflix series promotion event',
      title: 'Netflix Promotion',
      description: 'Promoting our Netflix series "When Love Bites" with cast and crew'
    },
    {
      src: bts20,
      alt: 'Behind the scenes - Creative discussion in studio',
      title: 'Creative Collaboration',
      description: 'Director and writer discussing scene details in the studio'
    },
    {
      src: bts21,
      alt: 'Behind the scenes - Outdoor bridge location shoot',
      title: 'Location Filming',
      description: 'Capturing scenic outdoor shots with natural lighting and landscape'
    },
    {
      src: bts22,
      alt: 'Behind the scenes - Studio production space',
      title: 'Studio Setup',
      description: 'Our creative studio space with artistic production design elements'
    },
    {
      src: bts23,
      alt: 'Behind the scenes - Voice recording session',
      title: 'Voice Recording',
      description: 'Professional voice-over recording session in our sound studio'
    },
    {
      src: bts24,
      alt: 'Behind the scenes - Full cast and crew team photo',
      title: 'Team Unity',
      description: 'The complete cast and crew celebrating another successful production'
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % btsImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + btsImages.length) % btsImages.length);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Never Ending Films - Behind The Scenes Gallery",
    "description": "Behind the scenes moments from Never Ending Films productions",
    "image": btsImages.map(img => ({
      "@type": "ImageObject",
      "url": img.src,
      "name": img.title,
      "description": img.description
    }))
  };

  return (
    <PageTransition>
      <SEOHead
        title="Behind The Scenes - Never Ending Films Production Gallery"
        description="Step behind the camera with Never Ending Films and explore our filmmaking journey. BTS gallery showcasing our production process, creative team, and cinematic excellence."
        keywords="Never Ending Films BTS, behind the scenes Mumbai, film production process, movie making gallery, post production studio, filmmaking team India"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 film-grain">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow animate-fade-in">
              Behind The <span className="text-primary">Scenes</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed animate-fade-in">
              Step behind the camera with Never Ending Films and explore our filmmaking journey.
            </p>
          </div>
        </section>

        {/* BTS Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {btsImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="cinema-card overflow-hidden">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <Play className="w-12 h-12 text-white mb-2 mx-auto" />
                          <p className="text-white text-sm">Click to view</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {image.title}
                      </h3>
                      <p className="text-foreground-muted text-sm leading-relaxed">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Signature Services Section */}
        <section ref={servicesRef} className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Our Signature Services
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                From concept to completion, we deliver cinematic excellence across all formats
              </p>
            </div>
            
            <ServicePreviewCards />
            
            <div className="text-center mt-12">
              <Link to="/services">
                <Button size="lg" className="btn-cinema">
                  Explore All Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Lightbox Gallery */}
        <LightboxGallery
          images={btsImages}
          isOpen={lightboxOpen}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </div>
    </PageTransition>
  );
};

export default BTS;