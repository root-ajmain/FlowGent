import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | FlowGent</title>
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        <div className="pt-20">
          <CTA />
        </div>
        <Footer />
      </main>
    </>
  );
}
