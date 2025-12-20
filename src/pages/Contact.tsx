import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Coffee, Instagram, Youtube, Linkedin } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import ContactFormWithDropdown from '@/components/ContactFormWithDropdown';
import VFXParticles from '@/components/VFXParticles';

const Contact = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Never Ending Films",
      "email": "karan@neverendingfilms.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "India"
      }
    }
  };

  return (
    <PageTransition>
      <SEOHead
        title="Contact Never Ending Films - Get In Touch Mumbai"
        description="Contact Never Ending Films for your next project. Professional film production services in Mumbai. Email: karan@neverendingfilms.in. Drop by for chai & coffee - Let's create something amazing."
        keywords="contact Never Ending Films, Mumbai film production contact, get quote film production, professional filmmakers Mumbai, film production inquiry India"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 film-grain overflow-hidden">
          <VFXParticles className="opacity-30" particleCount={40} speed={1.5} />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative z-10 container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            >
              Let's Create Together
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed"
            >
              Ready to bring your vision to life? Let's discuss your next cinematic project over chai and coffee.
            </motion.p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 text-glow text-center">Get In Touch</h2>
                <ContactFormWithDropdown />
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <a
                    href="mailto:karan@neverendingfilms.in"
                    className="flex items-center space-x-4 p-4 glass-panel rounded-lg hover:bg-glass/30 transition-colors group cursor-pointer"
                  >
                    <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-foreground-muted">karan@neverendingfilms.in</p>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+919819143277"
                    className="flex items-center space-x-4 p-4 glass-panel rounded-lg hover:bg-glass/30 transition-colors group cursor-pointer"
                  >
                    <Phone className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-foreground-muted">+91 98191 43277</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-4 p-4 glass-panel rounded-lg hover:bg-glass/30 transition-colors">
                    <MapPin className="text-primary" size={24} />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-foreground-muted">P1, Deep Sadan Bldg, Sundar Nagar, Malad West, Mumbai 400064</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 glass-panel rounded-lg hover:bg-glass/30 transition-colors">
                    <Coffee className="text-primary" size={24} />
                    <div>
                      <p className="font-medium">Office Vibe</p>
                      <p className="text-foreground-muted">Drop by for chai & coffee</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 text-glow">Find Us</h2>
              <p className="text-xl text-foreground-muted">Located in the heart of Mumbai's film district</p>
            </div>
            
            <div className="glass-panel p-2 max-w-4xl mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.7876234567!2d72.8340!3d19.1867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c7c0000000%3A0x0!2sDeep%20Sadan%20Bldg%2C%20Sundar%20Nagar%2C%20Malad%20West%2C%20Mumbai%20400064!5e0!3m2!1sen!2sin!4v1735917600000!5m2!1sen!2sin&q=P1+Deep+Sadan+Bldg+Sundar+Nagar+Malad+West+Near+Dalmia+College+Mumbai+400064"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Never Ending Films Office - P1, Deep Sadan Bldg, Sundar Nagar, Malad West, Mumbai"
                className="w-full h-64 md:h-96 rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">
                Follow Our Journey
              </h2>
              <p className="text-xl text-foreground-muted mb-12 max-w-3xl mx-auto">
                Stay connected with us on social media for behind-the-scenes content, project updates, and creative inspiration.
              </p>
              
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.imdb.com/name/nm15358713/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-full hover:bg-glass/30 transition-colors group"
                >
                  <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-black font-bold text-sm">IMDb</span>
                  </div>
                </a>
                
                <a
                  href="https://www.instagram.com/never_ending_films?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-full hover:bg-glass/30 transition-colors group"
                >
                  <Instagram className="text-primary group-hover:scale-110 transition-transform" size={32} />
                </a>
                
                <a
                  href="https://www.youtube.com/@NeverEnding_Films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-full hover:bg-glass/30 transition-colors group"
                >
                  <Youtube className="text-primary group-hover:scale-110 transition-transform" size={32} />
                </a>
                
                <a
                  href="https://www.linkedin.com/company/never-ending-films/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-panel rounded-full hover:bg-glass/30 transition-colors group"
                >
                  <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={32} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section remains unchanged */}
      </div>
    </PageTransition>
  );
};

export default Contact;