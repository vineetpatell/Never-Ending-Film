import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  canonicalPath?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords = "film production company Mumbai, luxury commercials, OTT originals, feature films India, award-winning filmmakers, cinematic excellence, premium video production, Never Ending Films",
  ogImage = "/lovable-uploads/cac0262e-9592-4510-87d4-d50e8e0bb20e.png",
  ogType = "website",
  structuredData,
  canonicalPath
}: SEOHeadProps) => {
  const location = useLocation();
  const baseUrl = "https://neverendingfilms.in";
  const canonicalUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : `${baseUrl}${location.pathname}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  useEffect(() => {
    // Set title
    document.title = title;

    // Helper to set or create meta tag
    const setMetaTag = (selector: string, attribute: string, value: string, content: string) => {
      let tag = document.querySelector(selector);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, value);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    // Set meta description
    setMetaTag('meta[name="description"]', 'name', 'description', description);

    // Set keywords
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords);

    // Set robots
    setMetaTag('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Set canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', canonicalUrl);
    } else {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      canonicalTag.setAttribute('href', canonicalUrl);
      document.head.appendChild(canonicalTag);
    }

    // Open Graph tags
    const setOGTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    setOGTag('og:title', title);
    setOGTag('og:description', description);
    setOGTag('og:image', fullOgImage);
    setOGTag('og:type', ogType);
    setOGTag('og:url', canonicalUrl);
    setOGTag('og:site_name', 'Never Ending Films');
    setOGTag('og:locale', 'en_IN');

    // Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) {
        tag.setAttribute('content', content);
      } else {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        tag.setAttribute('content', content);
        document.head.appendChild(tag);
      }
    };

    setTwitterTag('twitter:card', 'summary_large_image');
    setTwitterTag('twitter:title', title);
    setTwitterTag('twitter:description', description);
    setTwitterTag('twitter:image', fullOgImage);
    setTwitterTag('twitter:site', '@neverendingfilms');

    // Structured Data
    if (structuredData) {
      const existingScript = document.querySelector('#structured-data');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.id = 'structured-data';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, ogImage, ogType, structuredData, canonicalUrl, fullOgImage]);

  return null;
};

export default SEOHead;