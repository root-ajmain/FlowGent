import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>FlowGent | Digital Ecosystems for Modern Brands</title>
        <meta name="description" content="FlowGent is a cutting-edge digital agency providing WhatsApp Official Business API, full Social Media Ecosystem setup, Facebook/YouTube/TikTok marketing, Web Development, and Custom AI Agents built with n8n — all under one roof." />
        <meta property="og:title" content="FlowGent | Digital Ecosystems for Modern Brands" />
        <meta property="og:description" content="FlowGent is a cutting-edge digital agency providing WhatsApp Official Business API, full Social Media Ecosystem setup, Facebook/YouTube/TikTok marketing, Web Development, and Custom AI Agents built with n8n — all under one roof." />
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        <Hero />

        {/* removed: previous CTA section ('Have a project in mind?') per request */}

        {/* add breathing room before stats for improved flow on small screens */}
        <div className="mt-8 md:mt-12 lg:mt-16" />
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <PricingSection />
        {/* Contact section moved from separate page into home (id target for navbar '#contact') */}
        <section id="contact" className="pt-12 pb-16 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Get in touch</h2>
            <p className="text-sm text-gray-400 mb-6">Share a few details and our sales team will reach out — or connect instantly on WhatsApp.</p>
            <ContactForm />
          </div>
        </section>
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
