import { Link } from 'react-router-dom';
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-secondary border-t border-border/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/2ea26820-4524-4553-b45d-e2a6545d0ba5.png" 
                alt="Never Ending Films Logo"
                className="h-12 w-auto mb-4"
              />
              <p className="text-sm text-foreground-muted leading-relaxed">
                Award-winning film production house specializing in luxury commercials, feature films, web series, and premium content for global brands.
              </p>
              <p className="text-sm text-foreground-muted mt-4 italic">
                "There's no creative problem that can't be solved over countless cups of chai and coffee."
              </p>
            </div>
            <div className="flex items-center text-sm text-foreground-muted">
              <MapPin className="w-4 h-4 mr-2 text-primary" />
              Mumbai, India
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-foreground-muted hover:text-primary transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-foreground-muted hover:text-primary transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-foreground-muted hover:text-primary transition-colors text-sm">Services</Link></li>
              <li><Link to="/bts" className="text-foreground-muted hover:text-primary transition-colors text-sm">BTS</Link></li>
              <li><Link to="/projects" className="text-foreground-muted hover:text-primary transition-colors text-sm">Completed Projects</Link></li>
              <li><Link to="/contact" className="text-foreground-muted hover:text-primary transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/feature-films" className="text-foreground-muted hover:text-primary transition-colors text-sm">Feature Films</Link></li>
              <li><Link to="/services/web-series" className="text-foreground-muted hover:text-primary transition-colors text-sm">Web Series</Link></li>
              <li><Link to="/services/music-videos" className="text-foreground-muted hover:text-primary transition-colors text-sm">Music Videos</Link></li>
              <li><Link to="/services/commercial-films" className="text-foreground-muted hover:text-primary transition-colors text-sm">Commercial Films</Link></li>
              <li><Link to="/services/digital-ads" className="text-foreground-muted hover:text-primary transition-colors text-sm">Digital Ads</Link></li>
              <li><Link to="/services/documentaries" className="text-foreground-muted hover:text-primary transition-colors text-sm">Documentaries</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Get in Touch</h4>
            <div className="space-y-4">
              <a 
                href="mailto:karan@neverendingfilms.in"
                className="flex items-center text-foreground-muted hover:text-primary transition-colors text-sm group"
              >
                <Mail className="w-4 h-4 mr-3 text-primary group-hover:scale-110 transition-transform" />
                karan@neverendingfilms.in
              </a>
              <a 
                href="tel:+919876543210"
                className="flex items-center text-foreground-muted hover:text-primary transition-colors text-sm group"
              >
                <Phone className="w-4 h-4 mr-3 text-primary group-hover:scale-110 transition-transform" />
                +91 98765 43210
              </a>
              <p className="text-sm text-foreground-muted italic mt-4">
                Drop by for chai & coffee — Let's create something amazing.
              </p>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-4 text-foreground">Follow Us</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.imdb.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 bg-yellow-500 hover:bg-yellow-600 text-black rounded flex items-center justify-center text-xs font-bold group-hover:scale-110 transition-transform">
                    IMDb
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors group"
                >
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors group"
                >
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-foreground-muted hover:text-primary transition-colors group"
                >
                  <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-foreground-muted">
              © 2024 Never Ending Films. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-foreground-muted hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-foreground-muted hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;