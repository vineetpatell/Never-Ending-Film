import { motion } from 'framer-motion';
import PageTransition from '@/components/PageTransition';
import SEOHead from '@/components/SEOHead';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you contact us through our website forms, request quotes, or communicate with us via email or phone. This may include your name, email address, phone number, and project details."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to provide and improve our services, respond to your inquiries, send you updates about our projects, and comply with legal obligations. We do not sell or rent your personal information to third parties."
    },
    {
      title: "Information Sharing",
      content: "We may share your information with trusted service providers who assist us in operating our business, conducting projects, or servicing you. We require these parties to keep your information confidential and use it only for the purposes we specify."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "Cookies and Tracking",
      content: "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. You may also opt out of receiving promotional communications from us. Contact us at karan@neverendingfilms.in to exercise these rights."
    },
    {
      title: "Contact Information",
      content: "If you have any questions about this Privacy Policy, please contact us at karan@neverendingfilms.in or through our contact form on the website."
    }
  ];

  return (
    <PageTransition>
      <SEOHead
        title="Privacy Policy - Never Ending Films"
        description="Privacy Policy for Never Ending Films. Learn how we collect, use, and protect your personal information when you use our website and services."
        keywords="privacy policy, data protection, Never Ending Films privacy, personal information"
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
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-foreground-muted max-w-3xl mx-auto"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                Questions About Privacy?
              </h2>
              <p className="text-xl text-foreground-muted leading-relaxed mb-8">
                If you have any questions or concerns about our privacy practices, we're here to help.
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

export default PrivacyPolicy;