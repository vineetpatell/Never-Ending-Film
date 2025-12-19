import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Film, Tv, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicePreviewCards = () => {
  const services = [
    {
      icon: Film,
      title: "Feature Films",
      description: "Award-winning cinematic storytelling for international platforms and elite productions.",
      link: "/services/feature-films"
    },
    {
      icon: Tv,
      title: "Commercials",
      description: "Luxury brand campaigns and high-impact commercial content for premium clientele.",
      link: "/services/commercials"
    },
    {
      icon: Music,
      title: "OTT/Web Series",
      description: "Original content creation for streaming platforms and digital entertainment.",
      link: "/services/web-series"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "var(--shadow-cinema)"
          }}
          className="cinema-card p-8 text-center group cursor-pointer"
        >
          <Link to={service.link}>
            <div className="mb-6 flex justify-center">
              <service.icon 
                size={48} 
                className="text-primary group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-foreground-muted group-hover:text-foreground transition-colors">
              {service.description}
            </p>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicePreviewCards;