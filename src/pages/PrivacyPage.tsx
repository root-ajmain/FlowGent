import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function PrivacyPage() {
  const siteUrl = 'https://www.flowgent.tech';
  const pageUrl = `${siteUrl}/privacy-policy`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FlowGent Privacy Policy",
    "url": pageUrl,
    "mainEntity": {
      "@type": "Organization",
      "name": "FlowGent",
      "url": siteUrl,
      "email": "info@flowgent.tech",
      "telephone": "01804277420"
    }
  };

  return (
    <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
      <Helmet>
        <title>Privacy Policy | FlowGent</title>
        <meta name="description" content="FlowGent Privacy Policy — how we collect, use, store, and protect your information. Contact: info@flowgent.tech" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Privacy Policy | FlowGent" />
        <meta property="og:description" content="How FlowGent collects, uses, stores and protects data for visitors and clients." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="FlowGent" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <div className="pt-36 pb-20 container mx-auto px-4">
        <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-6">PRIVACY POLICY</h1>
        <p className="text-sm text-gray-300 mb-4">Last Updated: March 9, 2026</p>

        <section className="prose prose-invert max-w-4xl">
          <h2>Introduction</h2>
          <p>Welcome to FlowGent (flowgent.tech). We build digital ecosystems for modern brands — and we understand that trust is the foundation of every relationship we form. This Privacy Policy explains how FlowGent collects, uses, stores, and protects information gathered from visitors and clients who interact with our website and services.</p>

          <p>This policy applies to all users of the FlowGent website ("Visitors") and to registered clients and project partners who engage our services ("Authorized Users"). By accessing or using our website, you consent to the data practices described in this policy.</p>

          <h3>Personally Identifiable Information</h3>
          <p>Personally Identifiable Information (PII) refers to any data that can identify, contact, or locate a specific individual — including name, email address, phone number, physical address, IP address, browser type, and geographic location. It does not include aggregated or anonymized data that cannot be traced back to an identified individual.</p>

          <h3>Information Collection</h3>
          <p>From all visitors, we may automatically collect basic usage data including IP address, browser type, pages visited, time on site, and referring URLs. From clients and Authorized Users, we may also collect full name, email address, phone number, company name and size, billing information (processed via secure third-party providers), and project-related assets provided during the course of our work. FlowGent does not collect payment card numbers directly — all payment processing is handled by PCI-compliant third-party providers.</p>

          <h3>Use of Information</h3>
          <p>We use collected information to personalize your experience on our website, process and fulfill project engagements and service requests, communicate regarding proposals, project updates, invoices, and support, conduct analytics to improve our services, send relevant communications about FlowGent (with your consent where required), and comply with legal obligations. We do not use your data beyond what is necessary for these purposes.</p>

          <h3>Information Sharing</h3>
          <p>FlowGent does not sell, rent, or trade personally identifiable information to any third party. Information is shared only with trusted service providers and sub-processors (hosting, analytics, payment platforms) who access data solely to fulfill their role, and only under data processing agreements that restrict use to authorized purposes. Aggregated, non-identifiable statistics may be shared for reporting. Information may also be disclosed where required by law or court order.</p>

          <h3>Data Storage</h3>
          <p>All data is stored on secure servers with access restricted to authorized personnel. Data at rest is encrypted using AES-256 or equivalent standards. All data in transit is protected via TLS/HTTPS. Sensitive financial data is never stored on FlowGent's own systems. Data is retained only as long as necessary to fulfill the purposes outlined in this policy or as required by legal obligations.</p>

          <h3>Your Choices</h3>
          <p>You may at any time opt out of marketing communications, request a copy of your personal data, request corrections to inaccurate information, request deletion of your data, restrict or object to certain processing, or withdraw consent where processing is consent-based. To exercise any of these rights, contact us using the details at the bottom of this page. We will respond within 30 days.</p>

          <h3>Cookies</h3>
          <p>FlowGent uses cookies to enhance your experience, understand site usage, and support marketing. Essential cookies are required for the site to function and cannot be disabled. Analytics, preference, and marketing cookies can be opted out of through your browser settings. Disabling certain cookies may affect website functionality.</p>

          <h3>Data Security</h3>
          <p>All team members are trained on data handling best practices. Access to sensitive data is protected by role-based controls and strong authentication. We conduct regular security reviews and apply encryption to all sensitive stored and transmitted data. In the event of a data breach affecting your information, FlowGent will notify affected users within the timeframes required by applicable law.</p>

          <h3>Corrections and Deletions</h3>
          <p>If any information we hold about you is inaccurate or incomplete, you may contact us to request a correction. You may also request deletion of your personal data. Some residual information may remain in secure backups for a limited period, and certain data may be retained where legally required.</p>

          <h3>Privacy Policy Changes</h3>
          <p>FlowGent may update this policy periodically. When material changes are made, we will update the "Last Updated" date and notify affected users by email or in-platform notification where required. Continued use of our website after any update constitutes acceptance of the revised policy.</p>

          <h3>Contact Information</h3>
          <p>For privacy questions, data requests, or concerns, contact us at:<br />
          Email: <a href="mailto:info@flowgent.tech" className="text-accent-teal">info@flowgent.tech</a><br />
          Support: <a href="tel:+8801804277420" className="text-accent-teal">01804277420</a><br />
          Website: <a href="https://www.flowgent.tech" className="text-accent-teal">www.flowgent.tech</a></p>
        </section>

      </div>

      <CTA />
      <Footer />
    </main>
  );
}
