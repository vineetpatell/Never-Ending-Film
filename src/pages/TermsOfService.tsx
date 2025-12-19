import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using the Never Ending Films website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "Services Description",
      content: "Never Ending Films provides film production, post-production, and related creative services including but not limited to feature films, web series, commercials, music videos, digital advertisements, and documentaries."
    },
    {
      title: "Project Terms",
      content: "All projects are subject to individual contracts and agreements. Project timelines, deliverables, and payment terms will be specified in separate project agreements. Changes to project scope may result in additional costs and timeline adjustments."
    },
    {
      title: "Intellectual Property",
      content: "Unless otherwise specified in writing, clients retain ownership of final delivered content. Never Ending Films retains the right to use project materials for promotional purposes, portfolio display, and marketing with prior client consent."
    },
    {
      title: "Payment and Cancellation",
      content: "Payment terms are specified in individual project contracts. Cancellation policies vary by project type and stage of completion. Early cancellation may result in charges for work completed and resources committed."
    },
    {
      title: "Limitation of Liability",
      content: "Never Ending Films shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses."
    },
    {
      title: "Confidentiality",
      content: "We maintain strict confidentiality regarding all client projects and information. Non-disclosure agreements may be executed for sensitive projects as required."
    },
    {
      title: "Modifications",
      content: "We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date. Continued use of our services constitutes acceptance of any modifications."
    }
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Terms of Service - Never Ending Films"
        description="Terms of Service for Never Ending Films. Review our service terms, project conditions, and policies for film production and creative services."
        keywords="terms of service, film production terms, Never Ending Films policies, service agreement"
      />

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 film-grain">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="relative z-10 container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-glow"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-foreground-muted max-w-3xl mx-auto"
            >
              These terms govern your use of our website and services. Please read them carefully.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm text-foreground-muted mt-4"
            >
              Last updated: January 2024
            </motion.p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  {section.title}
                </h2>
                <p className="text-foreground-muted leading-relaxed text-lg">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-background-secondary">
          <div className="container mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-glow">
                Questions About Our Terms?
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                If you have any questions about these terms or need clarification, please contact us.
              </p>
              <a
                href="mailto:karan@neverendingfilms.in"
                className="inline-flex items-center btn-cinema px-8 py-4 text-lg rounded-lg hover:scale-105 transition-transform"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;