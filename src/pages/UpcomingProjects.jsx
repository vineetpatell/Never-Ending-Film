import { motion } from 'framer-motion';
import { Calendar, Clock, Film, Tv, Music, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import VFXParticles from '@/components/VFXParticles';

const UpcomingProjects = () => {
  const upcomingProjects = [
    {
      title: "Project Aurora",
      type: "Feature Film",
      icon: Film,
      status: "In Production",
      expectedRelease: "2025",
      description: "A gripping thriller that explores the depths of human psyche set against the backdrop of Mumbai's underworld.",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop"
    },
    {
      title: "Chronicles of Mumbai",
      type: "Web Series",
      icon: Tv,
      status: "Pre-Production",
      expectedRelease: "2025",
      description: "An anthology series showcasing untold stories from the city that never sleeps.",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop"
    },
    {
      title: "Rhythm & Blues",
      type: "Music Video",
      icon: Music,
      status: "Post-Production",
      expectedRelease: "Coming Soon",
      description: "A visual masterpiece celebrating the fusion of classical Indian music with contemporary beats.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop"
    },
    {
      title: "Untitled Drama",
      type: "Feature Film",
      icon: Film,
      status: "Development",
      expectedRelease: "2026",
      description: "A heartwarming family drama that explores generational bonds and the meaning of home.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=800&h=600&fit=crop"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Production':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Pre-Production':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Post-Production':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Development':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Upcoming Projects - Never Ending Films",
    "description": "Discover upcoming film and web series projects from Never Ending Films",
    "itemListElement": upcomingProjects.map((project, index) => ({
      "@type": "Movie",
      "position": index + 1,
      "name": project.title,
      "description": project.description
    }))
  };

  return (
    <PageTransition>
      <SEOHead
        title="Upcoming Projects - Never Ending Films Future Productions"
        description="Discover upcoming films, web series, and creative projects from Never Ending Films. Stay tuned for our latest productions coming soon."
        keywords="upcoming films Mumbai, new web series India, Never Ending Films projects, upcoming Indian movies, film production Mumbai"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 film-grain overflow-hidden">
          <VFXParticles className="opacity-30" particleCount={50} speed={1} />
          <div className="absolute inset-0 bg-gradient-hero" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
                <span className="text-primary font-semibold tracking-wider uppercase">Coming Soon</span>
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
                Upcoming <span className="text-primary">Projects</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed">
                A glimpse into the future of Never Ending Films. Exciting stories in the making.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="cinema-card overflow-hidden group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Type Icon */}
                    <div className="absolute top-4 left-4">
                      <div className="p-2 rounded-full bg-card/80 backdrop-blur-sm">
                        <project.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-foreground-muted text-sm mb-3">
                      <project.icon className="w-4 h-4 text-primary" />
                      <span>{project.type}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground-muted mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-foreground-muted">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{project.expectedRelease}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{project.status}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background-secondary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Want to Collaborate?
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto mb-8">
                We're always looking for talented individuals and exciting stories. 
                Get in touch to discuss potential collaborations.
              </p>
              <Link to="/contact">
                <Button size="lg" className="btn-cinema">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default UpcomingProjects;
