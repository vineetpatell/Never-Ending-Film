import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Film, Tv, Music, ArrowRight, Play } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import VFXParticles from '@/components/VFXParticles';

// Import BTS images for home carousel
import bts1 from '@/assets/bts-1.png';
import bts2 from '@/assets/bts-2.png';
import bts3 from '@/assets/bts-3.png';
import bts4 from '@/assets/bts-4.png';
import bts5 from '@/assets/bts-5.png';
import bts6 from '@/assets/bts-6.png';
import bts10 from '@/assets/bts-10.png';
import bts11 from '@/assets/bts-11.png';
import bts12 from '@/assets/bts-12.png';

// Import Movie images for hero carousel
import movieTrial from '@/assets/Trialkajol.png';
import moviePS1 from '@/assets/PS-1.png';
import movieKhufiya from '@/assets/khufiya.png';
import movieClass83 from '@/assets/Cassof83.png';
import movieToothPari from '@/assets/Toothpari.png';
import movieCharlieChopra from '@/assets/charliechopra.png';
import moviePS2 from '@/assets/PS-2.png';
import movieAranyak from '@/assets/Aranyak.png';
import movieLaalSingh from '@/assets/Laalsinghchadda.png';


const Index = () => {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLogoVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Never Ending Films",
    "url": "https://neverendingfilms.in",
    "logo": "/lovable-uploads/2ea26820-4524-4553-b45d-e2a6545d0ba5.png",
    "description": "Award-winning film production house in Mumbai specializing in luxury commercials, feature films, web series, and OTT originals with cutting-edge storytelling.",
    "foundingDate": "2023",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai", 
      "addressCountry": "India"
    },
    "email": "karan@neverendingfilms.in",
    "founder": {
      "@type": "Person",
      "name": "Karan Sharma",
      "jobTitle": "Founder & Creative Director"
    }
  };

  const services = [
    {
      icon: Film,
      title: "Feature Films",
      description: "Cinematic storytelling for international platforms and elite productions.",
      link: "/services#feature-films"
    },
    {
      icon: Tv,
      title: "Web Series",
      description: "Original content creation for streaming platforms and digital entertainment.",
      link: "/services#web-series"
    },
    {
      icon: Music,
      title: "Commercial Films",
      description: "Luxury brand campaigns and high-impact commercial content.",
      link: "/services#commercial-films"
    }
  ];

  const testimonials = [
    {
      text: "Never Ending Films brought our vision to life with unmatched creativity and professionalism.",
      author: "Industry Partner",
      role: "Film Producer"
    },
    {
      text: "Their attention to detail and storytelling expertise made our project extraordinary.",
      author: "Creative Director", 
      role: "Advertising Agency"
    }
  ];

  const btsCarouselImages = [
    { src: bts1, alt: 'Beach location shoot with red car' },
    { src: bts2, alt: 'Indoor lighting setup' },
    { src: bts3, alt: 'Outdoor set preparation' },
    { src: bts4, alt: 'Director and crew coordination' },
    { src: bts5, alt: 'Team celebration moment' },
    { src: bts6, alt: 'Camera operation' },
    { src: bts10, alt: 'Creative team meeting' },
    { src: bts11, alt: 'Professional film set' },
    { src: bts12, alt: 'Outdoor location filming' }
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Never Ending Films - Award-Winning Cinematic Excellence | Mumbai Film Production"
        description="Premium film production house in Mumbai crafting award-winning cinematic excellence for luxury brands, OTT platforms, and elite clients through innovative storytelling and cutting-edge production."
        keywords="film production company Mumbai, luxury brand commercials, OTT content creation, feature films India, award-winning filmmakers, cinematic excellence, Never Ending Films"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center film-grain overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero" />
          <VFXParticles className="opacity-30" particleCount={30} speed={0.5} />
          
          <div className="relative z-10 container mx-auto px-4 text-center py-20">
                      {/* Movie Carousel above title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-12 relative overflow-hidden"
            >
              <div className="flex animate-scroll-left space-x-4">
                {/* First set of movie images */}
                {[movieTrial, moviePS1, movieKhufiya, movieClass83, movieToothPari, movieCharlieChopra, moviePS2, movieAranyak, movieLaalSingh].map((src, index) => (
                  <div key={`movie-first-${index}`} className="flex-shrink-0">
                    <div className="relative overflow-hidden rounded-lg w-40 h-56 md:w-48 md:h-64 cinema-card">
                      <img
                        src={src}
                        alt="Featured Movie"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>
                ))}
                {/* Duplicate set for continuous scroll */}
                {[movieTrial, moviePS1, movieKhufiya, movieClass83, movieToothPari, movieCharlieChopra, moviePS2, movieAranyak, movieLaalSingh].map((src, index) => (
                  <div key={`movie-second-${index}`} className="flex-shrink-0">
                    <div className="relative overflow-hidden rounded-lg w-40 h-56 md:w-48 md:h-64 cinema-card">
                      <img
                        src={src}
                        alt="Featured Movie"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent animate-pulse" />
              </div>
            </motion.div>

            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-glow"
            >
              <span className="text-primary">Never Ending</span>
              <span className="text-foreground"> Films</span>
            </motion.h1>

            {/* Tagline with Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-12"
            >
              <div className="typewriter text-xl md:text-2xl lg:text-3xl text-foreground-muted mb-8 max-w-4xl mx-auto tagline-font">
                "You believe in us. We believe in you. Together, we create magic."
              </div>
            </motion.div>

            {/* Additional Stylish Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mb-12"
            >
              <p className="text-lg md:text-xl text-foreground-muted leading-relaxed max-w-5xl mx-auto font-light">
                Award-winning cinematic excellence for luxury brands, OTT platforms, and elite clients through innovative storytelling, cutting-edge production, and an unwavering commitment to bringing extraordinary narratives to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="mt-12"
            >
              <Link to="/contact">
                <Button size="lg" className="btn-cinema px-12 py-6 text-xl group">
                  Let's Begin Your Journey
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>


        {/* Behind the Scenes - BTS Carousel */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Behind the Scenes
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
                Take a glimpse into our creative process and see how we bring stories to life.
              </p>
            </motion.div>

            {/* Moving BTS Carousel */}
            <div className="relative overflow-hidden mb-16">
              <div className="flex animate-scroll-left space-x-6">
                {/* First set of images */}
                {btsCarouselImages.map((image, index) => (
                  <Link key={`first-${index}`} to="/bts" className="flex-shrink-0">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative group cursor-pointer cinema-card overflow-hidden rounded-lg w-80 h-48"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">Behind the Scenes</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
                {/* Duplicate set for continuous scroll */}
                {btsCarouselImages.map((image, index) => (
                  <Link key={`second-${index}`} to="/bts" className="flex-shrink-0">
                    <div className="relative group cursor-pointer cinema-card overflow-hidden rounded-lg w-80 h-48">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium">Behind the Scenes</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center mb-16">
              <Link to="/bts">
                <Button variant="outline" size="lg" className="btn-outline-cinema px-8 py-4">
                  View Full BTS Gallery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
                Our Services
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={service.link}>
                    <Card className="cinema-card h-full group cursor-pointer">
                      <CardContent className="p-8 text-center">
                        <service.icon 
                          size={48} 
                          className="text-primary mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" 
                        />
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-foreground-muted group-hover:text-foreground transition-colors">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button variant="outline" size="lg" className="btn-outline-cinema px-8 py-4 text-lg">
                  View All Services
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Professional Quote Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="border-t border-b border-border/30 py-12 text-center"
            >
              <p className="text-2xl md:text-3xl font-light text-foreground-muted italic max-w-4xl mx-auto">
                "(I hope you're good enough to get what I can't say)"
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Client Testimonials
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="glass-panel h-full">
                    <CardContent className="p-8">
                      <p className="text-lg text-foreground-muted mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="border-t border-border/30 pt-4">
                        <p className="text-primary font-semibold">
                          {testimonial.author}
                        </p>
                        <p className="text-foreground-muted text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-24 px-4 relative film-grain">
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="relative z-10 container mx-auto text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-glow">
                Lights, Camera... Your Vision!
              </h2>
              <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-12">
                We're passionate about storytelling that moves people. If you're ready to turn your idea into cinematic magic, let's connect.
              </p>
              <Link to="/contact">
                <Button size="lg" className="btn-cinema px-12 py-6 text-xl">
                  Let's Begin Your Journey Now
                  <Play className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
