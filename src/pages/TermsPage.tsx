import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function TermsPage() {
  const siteUrl = 'https://www.flowgent.tech';
  const pageUrl = `${siteUrl}/terms`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FlowGent Terms & Conditions",
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
        <title>Terms & Conditions | FlowGent</title>
        <meta name="description" content="FlowGent Terms & Conditions — rules and obligations for using FlowGent's website and services." />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content="Terms & Conditions | FlowGent" />
        <meta property="og:description" content="Legal terms and conditions for using FlowGent's services and platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="FlowGent" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />

      <div className="pt-36 pb-20 container mx-auto px-4">
        <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-6">TERMS & CONDITIONS</h1>
        <p className="text-sm text-gray-300 mb-4">Last Updated: March 9, 2026</p>

        <section className="prose prose-invert max-w-4xl">
          <h2>Introduction</h2>
          <p>Welcome to FlowGent. These Terms and Conditions constitute a legally binding agreement between you ("User," "Client," or "you") and FlowGent ("we," "us," or "our"), governing access to and use of our website, platform, and professional services. By accessing our website, engaging our services, signing a proposal, or using any FlowGent tool, you confirm that you have read, understood, and agreed to be bound by these Terms, our Privacy Policy, and our Refund & Cancellation Policy. If you do not agree, please discontinue use immediately.</p>

          <h3>Definitions</h3>
          <p>Service refers to the FlowGent platform, website, tools, APIs, automation systems, and all professional services offered by FlowGent. User or Client refers to any individual, business, or entity that accesses, registers for, or purchases services from FlowGent. Content refers to any information, text, media, code, branding, or data uploaded, shared, or created through FlowGent's Service. Deliverable refers to any digital asset, workflow, website, application, or product built and delivered by FlowGent to a Client as part of a project. Agreement refers to these Terms together with any signed proposal, statement of work, or service contract between FlowGent and the Client.</p>

          <h3>User Obligations</h3>
          <p>Users must provide accurate, complete, and current information during registration and are solely responsible for maintaining the confidentiality of account credentials and all activity conducted through their account. Users agree to use FlowGent's services only for lawful purposes and in compliance with all applicable laws. Users must not send spam or unsolicited communications, attempt to reverse-engineer or extract source code from FlowGent platforms, upload or transmit malware or harmful scripts, impersonate FlowGent or any third party fraudulently, use FlowGent deliverables in ways that violate third-party rights, or engage in abusive or harassing conduct toward FlowGent personnel. For project-based engagements, clients agree to provide timely feedback, necessary assets, and approvals within agreed timelines. Delays caused by client inaction may affect delivery schedules without penalty to FlowGent. FlowGent reserves the right to suspend or terminate services for any account found to be in violation of these obligations.</p>

          <h3>Intellectual Property</h3>
          <p>All platform materials including text, graphics, dashboards, software, design, and technology are owned by FlowGent or its licensors. Unauthorized copying, redistribution, reverse engineering, or exploitation is prohibited. Users are granted a limited, non-exclusive, non-transferable license to access and use the Service for lawful business purposes. Upon full payment of agreed project fees, clients receive a license or full ownership transfer of bespoke deliverables as specified in the project agreement. FlowGent retains the right to display completed work in its portfolio unless otherwise agreed in writing. Clients warrant that all materials provided to FlowGent are owned or properly licensed by the client, and indemnify FlowGent against any claims arising from such materials. The FlowGent name, logo, and service marks are protected trademarks and may not be used without prior written permission.</p>

          <h3>Privacy Policy</h3>
          <p>Your privacy and data handling are governed by the FlowGent Privacy Policy. By using the Service, you consent to data collection and use as described in that policy, available at flowgent.tech/privacy-policy.</p>

          <h3>Payments & Billing</h3>
          <p>Project-based services require an upfront deposit (typically 50%) before project commencement, with the remaining balance due upon completion or at milestones as outlined in the signed proposal. Subscriptions and retainers are billed in advance on a monthly or annual basis. Overdue invoices may incur a late fee of 1.5% per month on the outstanding balance. FlowGent reserves the right to pause work or suspend access until outstanding balances are settled. All fees are quoted and billed in USD unless otherwise stated. Taxes are the responsibility of the client where applicable. Subscription cancellations take effect at the end of the current billing period. Refunds are governed by FlowGent's Refund & Cancellation Policy.</p>

          <h3>Termination</h3>
          <p>Clients may terminate ongoing engagements or subscriptions by providing written notice to FlowGent. Termination does not negate outstanding payment obligations for work completed or services rendered prior to termination. FlowGent reserves the right to suspend or terminate services with or without prior notice in cases of Terms violations, non-payment, abusive conduct, or legal obligations requiring cessation of service. Upon termination, access to platform tools will be suspended. Client-owned deliverables that have been fully paid for will be transferred within a reasonable timeframe.</p>

          <h3>Limitation of Liability</h3>
          <p>To the fullest extent permitted by law, FlowGent and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages including loss of revenue, profit, opportunity, or data; inability to use the Service; unauthorized access to client systems; third-party platform enforcement actions; errors arising from client-provided materials; or force majeure events. FlowGent's total aggregate liability for any claim shall not exceed the total fees paid by the client in the three months preceding the event giving rise to the claim.</p>

          <h3>Governing Law</h3>
          <p>These Terms are governed by the laws of FlowGent's registered business jurisdiction, without regard to conflict of law principles. Disputes shall first be attempted through good-faith negotiation. If unresolved within 30 days, disputes shall proceed to binding arbitration or the competent courts of FlowGent's registered jurisdiction.</p>

          <h3>Changes to Terms</h3>
          <p>FlowGent may modify these Terms at any time. Active clients will be notified via email or in-platform notification at least 14 days before material changes take effect. Continued use of FlowGent's services following the effective date of any revision constitutes acceptance of the updated Terms.</p>

          <h3>Contact Information</h3>
          <p>For questions or legal inquiries regarding these Terms, contact us at:<br />
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
