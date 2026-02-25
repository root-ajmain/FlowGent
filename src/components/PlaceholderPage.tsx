import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';

export default function PlaceholderPage({ title, description }: { title: string, description: string }) {
  return (
    <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
      <Navbar />
      <div className="pt-36 pb-16 container mx-auto px-4 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-4 capitalize leading-tight">
          {title}
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto">
          {description}
        </p>
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
