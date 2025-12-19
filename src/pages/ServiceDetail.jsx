import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import VFXParticles from '@/components/VFXParticles';
import { Button } from '@/components/ui/button';

const ServiceDetail = () => {
  const { slug } = useParams();

  const services = {
    'feature-films': {
      title: 'Feature Films',
      subtitle: 'Award-winning cinematic storytelling',
      description: 'Our feature film production brings together world-class talent, cutting-edge technology, and compelling narratives to create unforgettable cinematic experiences. From intimate character studies to epic blockbusters, we handle every aspect of feature film production with meticulous attention to detail.',
      features: [
        'Script development and screenplay adaptation',
        'Pre-production planning and location scouting',
        'Principal photography with state-of-the-art equipment',
        'Post-production including editing, VFX, and sound design',
        'Marketing and distribution strategy',
        'International film festival submissions'
      ],
      process: [
        'Concept Development & Script Analysis',
        'Pre-Production Planning & Casting',
        'Principal Photography',
        'Post-Production & Editing',
        'Sound Design & Color Grading',
        'Final Delivery & Distribution'
      ],
      heroImage: '/placeholder.svg'
    },
    'web-series': {
      title: 'Web Series & OTT Content',
      subtitle: 'Binge-worthy content for streaming platforms',
      description: 'We create compelling web series and OTT content that captivates audiences across multiple episodes. Our expertise in digital storytelling ensures your series stands out in the competitive streaming landscape, with engaging narratives that keep viewers coming back for more.',
      features: [
        'Series bible and season planning',
        'Multi-episode production management',
        'Consistent visual style and tone',
        'Platform-specific optimization',
        'Audience engagement strategies',
        'Cross-platform distribution'
      ],
      process: [
        'Series Concept & Bible Development',
        'Episode Writing & Storyboarding',
        'Production Design & Casting',
        'Multi-Episode Filming',
        'Post-Production Pipeline',
        'Platform Delivery & Marketing'
      ],
      heroImage: '/placeholder.svg'
    },
    'commercials': {
      title: 'Commercial Films',
      subtitle: 'Luxury brand campaigns that drive results',
      description: 'Our commercial production services help brands tell their stories in the most compelling way possible. We combine creative excellence with strategic thinking to create advertisements that not only look stunning but also drive measurable business results.',
      features: [
        'Brand strategy and concept development',
        'High-end commercial production',
        'Celebrity and talent management',
        'Multi-format delivery (TV, digital, social)',
        'Campaign performance tracking',
        'International market adaptation'
      ],
      process: [
        'Brand Strategy & Creative Concept',
        'Pre-Production & Talent Booking',
        'Commercial Filming',
        'Post-Production & VFX',
        'Multi-Format Delivery',
        'Campaign Launch & Analytics'
      ],
      heroImage: '/placeholder.svg'
    },
    'music-videos': {
      title: 'Music Videos',
      subtitle: 'Visual poetry that complements musical artistry',
      description: 'We create music videos that perfectly capture the essence of your music, combining artistic vision with technical excellence. Our approach ensures that the visual narrative enhances and elevates the musical experience.',
      features: [
        'Concept development and storyboarding',
        'Artistic direction and visual styling',
        'Performance and narrative integration',
        'Advanced visual effects and color grading',
        'Multi-platform optimization',
        'Artist collaboration and feedback'
      ],
      process: [
        'Music Analysis & Concept Development',
        'Visual Style & Art Direction',
        'Performance & Narrative Filming',
        'Post-Production & VFX',
        'Color Grading & Sound Sync',
        'Final Delivery & Promotion'
      ],
      heroImage: '/placeholder.svg'
    },
    'digital-ads': {
      title: 'Digital Advertisements',
      subtitle: 'Cutting-edge content for digital platforms',
      description: 'Our digital advertising content is designed specifically for the modern digital landscape. We create engaging, shareable content that performs well across social media platforms and digital channels.',
      features: [
        'Platform-specific content creation',
        'Viral marketing strategies',
        'Social media optimization',
        'Interactive content development',
        'Performance analytics and optimization',
        'Multi-format deliverables'
      ],
      process: [
        'Digital Strategy & Platform Analysis',
        'Content Concept & Creation',
        'Multi-Format Production',
        'Platform Optimization',
        'Performance Tracking',
        'Campaign Optimization'
      ],
      heroImage: '/placeholder.svg'
    },
    'documentaries': {
      title: 'Documentaries',
      subtitle: 'Authentic storytelling that creates impact',
      description: 'We produce documentaries that inform, inspire, and create lasting change. Our documentary work combines thorough research, compelling storytelling, and authentic human experiences to create powerful narratives.',
      features: [
        'Research and subject matter expertise',
        'Interview and testimonial production',
        'Archive material integration',
        'Educational content development',
        'Distribution strategy planning',
        'Impact campaign development'
      ],
      process: [
        'Research & Subject Development',
        'Interview & Location Planning',
        'Documentary Filming',
        'Archive Integration & Editing',
        'Fact-Checking & Verification',
        'Distribution & Impact Campaign'
      ],
      heroImage: '/placeholder.svg'
    }
  };

  const service = services[slug || ''];

  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link to="/services">
              <Button className="btn-cinema">Back to Services</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Never Ending Films"
    }
  };

  return (
    <PageTransition>
      <SEOHead
        title={`${service.title} Production Services - Never Ending Films`}
        description={service.description}
        structuredData={structuredData}
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 film-grain">
          <div className="absolute inset-0 bg-gradient-hero" />
          <VFXParticles className="opacity-25" particleCount={30} speed={0.4} />
          <div className="relative z-10 container mx-auto">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              Back to Services
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed">
                {service.subtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-4 -mt-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-video bg-gradient-cinema rounded-lg overflow-hidden"
            >
              <img 
                src={service.heroImage} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <p className="text-xl leading-relaxed text-foreground-muted">
                {service.description}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-panel p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-glow">What We Deliver</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* What We Deliver - Features Only */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-panel p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-glow">Why Choose Us</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our expertise in {service.title.toLowerCase()} ensures your project receives the attention to detail and creative excellence it deserves. We combine technical proficiency with artistic vision to deliver results that exceed expectations.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 px-4 bg-gray-900">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a structured approach to ensure every project exceeds expectations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "hsl(0 84% 60%)"
                  }}
                  className="bg-gray-800 rounded-2xl shadow-lg hover:bg-red-600 hover:scale-105 transition-all p-6"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                      {index + 1}
                    </div>
                    <h3 className="font-semibold text-lg text-white mb-3">
                      {step}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {index === 0 && "Initial planning and creative conceptualization phase"}
                      {index === 1 && "Detailed preparation and resource allocation"}
                      {index === 2 && "Core execution and content creation"}
                      {index === 3 && "Refinement and quality enhancement"}
                      {index === 4 && "Final touches and optimization"}
                      {index === 5 && "Project completion and client delivery"}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
                Let's discuss how we can bring your vision to life with our {service.title.toLowerCase()} expertise.
              </p>
              <Link to="/contact">
                <Button size="lg" className="btn-cinema px-8 py-4 text-lg">
                  Contact Us Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ServiceDetail;
