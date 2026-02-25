import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import PricingSection from '@/components/PricingSection';
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
        <Stats />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <PricingSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
