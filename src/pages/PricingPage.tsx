import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingSection from '@/components/PricingSection';

export default function PricingPage() {
  return (
    <>
      <Helmet>
        <title>Pricing | FlowGent</title>
        <meta name="description" content="Transparent pricing for FlowGent Meta WhatsApp Official Business API platform. Launch Plan & Scale Plan — monthly, quarterly, half yearly & yearly billing. Flexible currency options." />
        <meta property="og:title" content="Pricing | FlowGent — Official WhatsApp API Platform" />
        <meta property="og:description" content="Launch Plan from $30/mo & Scale Plan from $60/mo. Flexible billing cycles with flat discounts on all plans." />
      </Helmet>
      <main className="min-h-screen bg-void text-white font-sans selection:bg-electric selection:text-void">
        <Navbar />
        <PricingSection />
        <Footer />
      </main>
    </>
  );
}
