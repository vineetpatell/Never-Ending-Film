import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, Tv, Music, Camera, Play, FileVideo } from 'lucide-react';
import { useState } from 'react';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import VFXParticles from '@/components/VFXParticles';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [tiltAngles, setTiltAngles] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e, slug) => {
    if (hoveredCard !== slug) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;
    
    setTiltAngles({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setTiltAngles({ rotateX: 0, rotateY: 0 });
  };
  const services = [
    {
      icon: Film,
      title: "Feature Films",
      description: "Award-winning cinematic storytelling for international platforms and elite productions with uncompromising quality.",
      slug: "feature-films",
      features: ["Script Development", "Production Management", "Post-Production", "International Distribution"]
    },
    {
      icon: Tv,
      title: "Web Series",
      description: "Original content creation for streaming platforms and digital entertainment that captivates global audiences.",
      slug: "web-series", 
      features: ["Series Development", "Multi-Episode Production", "Platform Optimization", "Audience Analytics"]
    },
    {
      icon: Music,
      title: "Music Videos",
      description: "Artistic visual narratives that complement musical compositions with stunning cinematography and creative direction.",
      slug: "music-videos",
      features: ["Concept Development", "Artistic Direction", "Performance Capture", "Visual Effects"]
    },
    {
      icon: Camera,
      title: "Commercial Films",
      description: "Luxury brand campaigns and high-impact commercial content for premium clientele and international markets.",
      slug: "commercials",
      features: ["Brand Strategy", "Product Showcase", "Market Research", "Campaign Analytics"]
    },
    {
      icon: Play,
      title: "Digital Ads",
      description: "Cutting-edge digital advertising content optimized for social media platforms and online campaigns.",
      slug: "digital-ads",
      features: ["Social Media Content", "Platform Optimization", "Viral Marketing", "Performance Tracking"]
    },
    {
      icon: FileVideo,
      title: "Documentaries",
      description: "Compelling real-world storytelling that informs, inspires, and creates lasting impact through authentic narratives.",
      slug: "documentaries",
      features: ["Research & Development", "Interview Production", "Archive Integration", "Educational Distribution"]
    }
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary based on scope and complexity. Feature films typically take 6-12 months, while commercials can be completed in 2-6 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you handle international productions?",
      answer: "Yes, we have experience with international co-productions and can manage projects across multiple countries with local crew and equipment."
    },
    {
      question: "What equipment and technology do you use?",
      answer: "We use state-of-the-art cinema cameras, professional lighting equipment, and the latest post-production software to ensure the highest quality output."
    },
    {
      question: "Can you work with existing scripts or concepts?",
      answer: "Absolutely! We can work with your existing materials or develop new concepts from scratch based on your vision and requirements."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Film Production Services",
    "provider": {
      "@type": "Organization",
      "name": "Never Ending Films",
      "url": "https://neverendingfilms.in"
    },
    "serviceType": "Film Production",
    "areaServed": "Mumbai, India",
    "description": "Professional film production services including feature films, web series, commercials, and documentaries."
  };

  return (
    <PageTransition>
      <SEOHead
        title="Professional Film Production Services - Never Ending Films Mumbai"
        description="Expert film production services in Mumbai. Feature films, web series, commercials, music videos, digital ads & documentaries. Award-winning filmmakers with international experience."
        keywords="film production services Mumbai, professional video production, feature films India, web series production, commercial filmmaking, music video production, documentary filmmaking, OTT content creation"
        structuredData={structuredData}
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 film-grain">
          <div className="absolute inset-0 bg-gradient-hero" />
          <VFXParticles className="opacity-25" particleCount={25} speed={0.5} />
          <div className="relative z-10 container mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            >
              What We Do
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed"
            >
              Based in Mumbai, Never Ending Films specializes in creating original, high-quality content across multiple formats—each crafted with a focus on originality, quality, and audience engagement.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    opacity: { delay: index * 0.1, duration: 0.6 },
                    y: { delay: index * 0.1, duration: 0.6 },
                    rotateX: { duration: 0.15, ease: "easeOut" },
                    rotateY: { duration: 0.15, ease: "easeOut" },
                    scale: { duration: 0.2, ease: "easeOut" }
                  }}
                  animate={{
                    rotateX: hoveredCard === service.slug ? tiltAngles.rotateX : 0,
                    rotateY: hoveredCard === service.slug ? tiltAngles.rotateY : 0,
                    scale: hoveredCard === service.slug ? 1.05 : 1,
                  }}
                  onMouseMove={(e) => handleMouseMove(e, service.slug)}
                  onMouseEnter={() => setHoveredCard(service.slug)}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  className="bg-gray-800 rounded-2xl shadow-lg transition-all cursor-pointer p-8 group"
                >
                  <Link to={`/services/${service.slug}`}>
                    <div className="mb-6 flex justify-center">
                      <service.icon 
                        size={56} 
                        className="text-primary group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors text-center">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted group-hover:text-foreground transition-colors mb-6 text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-foreground-muted flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Our Approach Section */}
        <section className="py-20 px-4">
          <VFXParticles className="opacity-10" particleCount={15} speed={0.3} />
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-panel p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                  Our Approach
                </h2>
                <p className="text-xl text-foreground-muted leading-relaxed">
                  We're always looking to collaborate with like-minded individuals who are driven by innovation, creativity, and a passion for storytelling. If you believe in bold ideas and thinking beyond the conventional, we'd love to connect. Our team brings together experience ranging from 0 to 20 years in the film and media industry.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Service FAQs
              </h2>
              <p className="text-xl text-foreground-muted">
                Get answers to commonly asked questions about our services
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass-panel px-6 border-none"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground-muted leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
