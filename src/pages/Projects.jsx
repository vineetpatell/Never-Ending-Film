import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import VFXParticles from '@/components/VFXParticles';
import LightboxGallery from '@/components/LightboxGallery';
import { projects, categories } from '@/data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const lightboxImages = projects.map(project => ({
    src: '/placeholder-image.jpg',
    alt: project.title,
    title: project.title,
    description: `${project.tagline} (${project.year})`
  }));

  const openLightbox = (projectId) => {
    const index = projects.findIndex(p => p.id === projectId);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Never Ending Films - Completed Projects",
    "description": "Portfolio of completed film and video projects by Never Ending Films",
    "itemListElement": projects.map((project, index) => ({
      "@type": "CreativeWork",
      "position": index + 1,
      "name": project.title,
      "description": project.description,
      "dateCreated": project.year,
      "genre": project.category
    }))
  };

  return (
    <PageTransition>
      <SEOHead
        title="Completed Projects - Never Ending Films Portfolio Mumbai"
        description="Explore our completed projects including Khufiya, Charlie Chopra, The Trial, Ponniyin Selvan, and more. From blockbuster films to acclaimed web series - showcasing our post-production expertise."
        keywords="Never Ending Films portfolio, completed projects Mumbai, Khufiya post production, Charlie Chopra series, The Trial web series, Ponniyin Selvan film, Netflix projects India"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="relative py-20 film-grain">
          <div className="absolute inset-0 bg-gradient-hero" />
          <VFXParticles className="opacity-30" particleCount={40} speed={0.6} />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            >
              Our <span className="text-primary">Completed Projects</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground-muted max-w-4xl mx-auto leading-relaxed"
            >
              From blockbuster films to acclaimed web series, explore our extensive portfolio showcasing our expertise in post-production across diverse genres and formats.
            </motion.p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  className={filter === category ? "btn-cinema" : "btn-outline-cinema"}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(project.id)}
                >
                  <Card className="cinema-card overflow-hidden">
                    <div className="relative">
                      <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-3 border-4 border-dashed border-gray-600 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-gray-500 text-sm">Image Placeholder</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-white text-sm mb-2">Click to view details</p>
                          <Badge variant="secondary" className="bg-primary/20 text-primary">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      {project.platform && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-black/80 text-white border-0">
                            {project.platform}
                          </Badge>
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-primary border-primary/30">
                          {project.year}
                        </Badge>
                        <Badge variant="secondary">
                          {project.category}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary font-medium mb-3 italic">
                        {project.tagline}
                      </p>
                      <p className="text-foreground-muted text-sm leading-relaxed mb-3">
                        {project.description}
                      </p>
                      {project.role && (
                        <p className="text-foreground text-sm mb-2">
                          <span className="font-semibold">Role:</span> {project.role}
                        </p>
                      )}
                      {project.cast && (
                        <p className="text-foreground-muted text-sm">
                          <span className="font-semibold">Cast:</span> {project.cast}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMDb Presence Section */}
        <section className="py-20 bg-background-secondary">
          <VFXParticles className="opacity-15" particleCount={25} speed={0.5} />
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                IMDb Presence
              </h2>
              <p className="text-xl text-foreground-muted mb-8 leading-relaxed">
                Explore our founder's professional journey and filmography on IMDB, showcasing years of experience in the film and media industry with major productions.
              </p>
              <a 
                href="https://www.imdb.com/name/nm15358713/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg">
                  <svg className="mr-3 w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10zM5.5 7.5h2v9h-2v-9zm3 0h2.5l1.5 6 1.5-6H16v9h-2V9.5L12.5 16H11L9.5 9.5V16.5h-1V7.5z"/>
                  </svg>
                  View Founder's IMDb Profile
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Gallery */}
        <LightboxGallery
          images={lightboxImages}
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

export default Projects;
