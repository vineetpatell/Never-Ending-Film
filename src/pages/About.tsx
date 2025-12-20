import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Users, Award } from 'lucide-react';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';
import VFXParticles from '@/components/VFXParticles';
import TeamModal from '@/components/TeamModal';
import founderImage from '@/assets/founder-karan-patel.jpg';
import sarveshImage from '@/assets/sarvesh-kumar-singh.png';
import kundanImage from '@/assets/kundan-vidyarthi.png';
import adityaImage from '@/assets/aditya-vashisht.jpg';

const About = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [tiltAngles, setTiltAngles] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardId: string) => {
    if (hoveredCard !== cardId) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = ((centerY - y) / centerY) * 12;
    
    setTiltAngles({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setTiltAngles({ rotateX: 0, rotateY: 0 });
  };

  const teamMembers = [
    {
      id: "sarvesh",
      name: "Sarvesh Kumar Singh",
      role: "Editor/Director",
      bio: "I'm a film editor with over a decade of hands-on experience in the industry—and recently, I've stepped behind the camera to direct my first feature film, Well Done C.A. Sahab!. Well Done C.A. Sahab!—the first Hindi feature ever made on the subject of Chartered Accountancy—marks a significant milestone in my career. The film has already made waves on the festival circuit: it was nominated at the Jaipur International Film Festival 2025, selected for the 15th Dada Saheb Phalke Film Festival, and earned me the Best Debut Filmmaker award at the Golden Lion International Film Festival 2025. Theatrical release is on the horizon, and I'm excited for audiences to experience it soon.",
      image: sarveshImage,
      imdbUrl: "https://www.imdb.com/name/nm6140618/?ref_=ext_shr_lnk"
    },
    {
      id: "kundan",
      name: "Kundan Vidyarthi",
      role: "Writer | Lyricist",
      bio: "Kundan Vidyarthi is a writer and lyricist working in the Hindi film industry, known for his evocative storytelling and soulful lyrics. Over the past few years, he has collaborated with notable music composers like Pravesh Mallik, Rishi Dutta, and Adhir Dutta, lending his lyrical voice to films and web series that connect deeply with audiences. His recent work includes songs for 'Dhak Dhak' (2 songs), 'Sandeep Bhaiya', 'College Romance', 'Matto Ki Saikal' (2 songs, starring Prakash Jha), and 'Runaway Lugaai' (3 songs, starring Sanjai Mishra). As a screenwriter, he continues to explore fresh, grounded narratives—his short film 'Papa aur Smart Phone', featuring Sanjai Mishra, is currently being screened at film festivals. With multiple films in production, Kundan's journey as a storyteller is one marked by depth, emotion, and an unfiltered connection to the world around him.",
      image: kundanImage,
      imdbUrl: "https://www.imdb.com/name/nm11786731/?ref_=ext_shr_lnk"
    },
    {
      id: "aditya",
      name: "Aditya Vashisht",
      role: "Writer",
      bio: "As a writer with a background in filmmaking, I'm driven by a passion for creating emotionally rich and imaginative stories. I aim to engage viewers through original narratives that spark reflection and resonate on a human level. Focused on innovation and depth, I continuously seek new ways to explore character, theme, and world-building. My work is guided by curiosity, creativity, and a commitment to impactful storytelling.",
      image: adityaImage,
      imdbUrl: "https://www.imdb.com/"
    }
  ];

  const openModal = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pushing boundaries with fresh perspectives and cutting-edge storytelling techniques."
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "Fostering creativity through teamwork and shared vision across all experience levels."
    },
    {
      icon: Award,
      title: "Quality",
      description: "Delivering exceptional content that entertains, inspires, and creates lasting impact."
    }
  ];


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage", 
    "mainEntity": {
      "@type": "Organization",
      "name": "Never Ending Films",
      "description": "Young, dynamic film production house in Mumbai driven by seasoned professionals and emerging creative minds.",
      "foundingDate": "2023",
      "location": "Mumbai, India"
    }
  };

  return (
    <PageTransition>
      <SEOHead
        title="About Never Ending Films - Young Mumbai Production House Story"
        description="Learn about Never Ending Films, a young one-year-old production house in Mumbai driven by seasoned professionals and emerging creative minds with a passion for storytelling and cinema."
        keywords="Never Ending Films about, Mumbai production house story, young filmmakers India, creative minds film production, storytelling passion cinema"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen pt-20">
        {/* Our Story Section */}
        <section className="py-20 px-4 relative film-grain">
          <div className="absolute inset-0 bg-gradient-hero" />
          <VFXParticles className="opacity-20" particleCount={25} speed={0.3} />
          <div className="relative z-10 container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
                Our <span className="text-primary">Story</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              <div className="glass-panel p-8 md:p-12 text-center">
                <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-8">
                  Never Ending Films is a young, one-year-old production house driven by a vibrant mix of seasoned industry professionals and emerging creative minds from the visual media space. With a shared passion for storytelling and a love for cinema, we aim to craft content that not only entertains but also shifts perspectives.
                </p>
                <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed mb-8">
                  Our philosophy is simple: there's no creative problem that can't be solved over countless cups of chai and coffee. Our cabin-less, designation-less, and office-less office thrives on collaboration—where professionals and unprofessionals huddle together to brainstorm 'useless' ideas that eventually transform into compelling stories.
                </p>
                <p className="text-xl md:text-2xl text-foreground-muted leading-relaxed">
                  In just one year, NE Films has produced a range of content including commercials, music videos, a documentary, and is currently working on two upcoming feature films and a web series. Of course, we've also made our fair share of mistakes—but each one has been a stepping stone in our journey.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4 bg-background-secondary">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Meet Our Founder
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="cinema-card">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center mb-8">
                      <div className="mb-6">
                        <img
                          src={founderImage}
                          alt="Karan Patel - Founder & Managing Director of Never Ending Films"
                          className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover shadow-2xl"
                        />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-glow">
                        Karan Patel
                      </h3>
                      <Badge variant="secondary" className="text-lg px-4 py-2">
                        Founder & Managing Director
                      </Badge>
                    </div>
                    
                    <div className="prose prose-lg prose-invert max-w-none">
                      <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                        Karan Patel is a dynamic creative producer and post-production expert whose cheerful demeanour and approachable nature make him a favourite among collaborators. With an unwavering zeal and a results-driven attitude, Karan brings remarkable energy and clarity to every project he undertakes. His natural politeness and collaborative spirit make him a leader people genuinely enjoy working with.
                      </p>
                      
                      <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                        As the Founder and Managing Director of Never Ending Films, Karan has consistently demonstrated exceptional leadership and creative insight. His expertise in post-production is evident from his work on several acclaimed projects, including Netflix's Class of '83 (Red Chillies Entertainment), Vishal Bhardwaj's Khufiya and Charlie Chopra, Roy Kapur Films' Aranyak, Netflix's Toothpari, Hotstar's The Trial, Mani Ratnam's PS 1 & PS 2, and Aamir Khan Productions' Laal Singh Chaddha, among others.
                      </p>
                      
                      <p className="text-lg text-foreground-muted leading-relaxed mb-6">
                        Gifted with a keen sense of organisation and a natural ability to multitask, management comes effortlessly to him. Beyond the professional realm, Karan is a storyteller at heart. When not on set or in the editing suite, you'll likely find him with a cup of black coffee—customised, of course—immersed in the development of his next web series or film.
                      </p>
                      
                      <p className="text-lg text-foreground-muted leading-relaxed">
                        A true people person, Karan is also celebrated for his warm hospitality and culinary skills. He firmly believes that "films and food have the power to bring people together," a philosophy that beautifully mirrors his approach to storytelling and team building.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Drives Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    opacity: { duration: 0.6, delay: index * 0.1 },
                    y: { duration: 0.6, delay: index * 0.1 },
                    rotateX: { duration: 0.15, ease: "easeOut" },
                    rotateY: { duration: 0.15, ease: "easeOut" },
                    scale: { duration: 0.2, ease: "easeOut" }
                  }}
                  animate={{
                    rotateX: hoveredCard === value.title ? tiltAngles.rotateX : 0,
                    rotateY: hoveredCard === value.title ? tiltAngles.rotateY : 0,
                    scale: hoveredCard === value.title ? 1.08 : 1,
                  }}
                  onMouseMove={(e) => handleMouseMove(e, value.title)}
                  onMouseEnter={() => setHoveredCard(value.title)}
                  onMouseLeave={handleMouseLeave}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                  className="text-center"
                >
                  <Card className="cinema-card h-full">
                    <CardContent className="p-8">
                      <value.icon 
                        size={48} 
                        className="text-primary mx-auto mb-6" 
                      />
                      <h3 className="text-2xl font-bold mb-4">
                        {value.title}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
                Meet Our Team
              </h2>
              <p className="text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
                The creative minds driving Never Ending Films forward with passion, innovation, and cinematic excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => openModal(member)}
                  className="cursor-pointer group"
                >
                  <Card className="cinema-card overflow-hidden h-full">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-foreground-muted text-sm leading-relaxed line-clamp-3">
                        {member.bio}
                      </p>
                      <div className="mt-4 text-sm text-primary group-hover:text-primary-glow transition-colors">
                        Click to learn more
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Quote Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-panel p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow">
                  Founder's Philosophy
                </h2>
                <blockquote className="text-2xl md:text-3xl font-light text-foreground-muted italic leading-relaxed">
                  "Films and food have the power to bring people together."
                </blockquote>
                <div className="mt-8 pt-8 border-t border-border/30">
                  <p className="text-primary font-semibold text-lg">
                    Karan Patel
                  </p>
                  <p className="text-foreground-muted">
                    Founder & Managing Director
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Team Modal */}
      <TeamModal 
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </PageTransition>
  );
};

export default About;