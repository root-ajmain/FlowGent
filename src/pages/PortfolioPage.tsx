import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';

export default function PortfolioPage() {
  return (
    <>
      <Helmet>
        <title>Portfolio | FlowGent</title>
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        <div className="pt-20">
          <Portfolio />
        </div>
        <CTA />
        <Footer />
      </main>
    </>
  );
}
