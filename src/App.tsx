import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import DevToolsBlocker from '@/components/DevToolsBlocker';
import ScrollToTop from '@/components/ScrollToTop';

// Eager-load the homepage (critical path)
import HomePage from '@/pages/HomePage';

// Lazy-load all other pages for code splitting
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PortfolioPage = lazy(() => import('@/pages/PortfolioPage'));
const PortfolioCaseStudy = lazy(() => import('@/pages/portfolio/PortfolioCaseStudy'));
// PricingPage removed — pricing is now on the home page
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));

// Service Pages
const WhatsAppApiPage = lazy(() => import('@/pages/services/WhatsAppApiPage'));
const SocialMediaPage = lazy(() => import('@/pages/services/SocialMediaPage'));
const DigitalMarketingPage = lazy(() => import('@/pages/services/DigitalMarketingPage'));
const WebDevelopmentPage = lazy(() => import('@/pages/services/WebDevelopmentPage'));
const AiAgentsPage = lazy(() => import('@/pages/services/AiAgentsPage'));

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-primary-dark flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-electric border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <DevToolsBlocker />
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioCaseStudy />} />
          {/* Pricing is now embedded in the home page */}
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/services/whatsapp-api" element={<WhatsAppApiPage />} />
          <Route path="/services/social-media" element={<SocialMediaPage />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/services/web-development" element={<WebDevelopmentPage />} />
          <Route path="/services/ai-agents" element={<AiAgentsPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
