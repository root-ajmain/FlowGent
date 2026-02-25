import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { LayoutTemplate, ShoppingCart, Building2, Code2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebDevelopmentPage() {
  return (
    <>
      <Helmet>
        <title>Professional Web Development Company | FlowGent</title>
        <meta name="description" content="FlowGent builds fast, beautiful, SEO-optimized websites and custom web applications for businesses — using React, TypeScript, and Tailwind CSS. Landing pages, e-commerce, and web apps." />
        <meta property="og:title" content="Web Development — Fast, Beautiful Websites | FlowGent" />
        <meta property="og:description" content="FlowGent designs and develops high-performance websites and web applications — from landing pages to full e-commerce platforms, built with the latest technology." />
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero z-0" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-teal mb-6">
              Web Development
            </div>
            <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-4 leading-tight">
              Websites That Work As Hard As Your Business
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Fast, beautiful, and conversion-focused websites and web applications — from landing pages to full-scale e-commerce platforms — engineered to help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-teal text-primary-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] transition-all duration-300">
                Start Your Project
                <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300">
                See How It Works
              </Link>
            </div>
          </div>
        </section>

        {/* Intro & What it is */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-400 leading-relaxed mb-12 text-center">
              Your website is often the first impression a potential customer has of your business — and in today's increasingly digital marketplace, that impression determines whether they trust you or move on to a competitor. FlowGent builds websites that do not just look impressive — they load fast, rank on Google, guide visitors toward action, and convert browsers into buyers. We use modern, enterprise-grade technology to deliver websites that are as powerful under the hood as they are beautiful on the surface.
            </p>
            <div className="glass-card p-7 rounded-2xl border border-white/[0.06]">
              <h2 className="text-xl font-display font-bold mb-3 text-accent-teal">What Makes a High-Performance Website?</h2>
              <p className="text-[0.85rem] text-gray-400 leading-relaxed">
                A high-performance website is fast, responsive on mobile, optimized for search engines, and designed with a clear conversion goal in mind. It communicates your brand's value instantly, guides visitors through a logical journey, and makes taking action effortless. FlowGent builds every website with these principles at the core, using modern frameworks for reliability and speed, Tailwind CSS for precision design, and accessible, production-grade components.
              </p>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">What We Build</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { icon: LayoutTemplate, title: "Landing Pages", description: "High-converting single-page websites designed to turn ad traffic and organic visitors into leads or customers — built with clear messaging, compelling design, and strategic CTAs.", features: ["Custom hero sections with animation", "Lead capture forms with WhatsApp integration", "Mobile-first responsive design", "Blazing fast load times globally", "Analytics and conversion tracking ready"] },
                { icon: ShoppingCart, title: "E-Commerce Websites", description: "Full-featured online stores built to sell around the clock — product catalogs, shopping carts, payment gateways, and order management tailored to your market.", features: ["Product catalog with search and filtering", "Stripe, PayPal & regional payment integration", "Order management and customer dashboard", "Inventory management system", "Mobile-first fast checkout experience"] },
                { icon: Building2, title: "Business & Corporate Websites", description: "Professional multi-page websites that build credibility, clearly communicate your services, and generate enquiries — making your business look as professional online as it is in reality.", features: ["Multi-page structure with CMS blog", "Google Maps and WhatsApp live chat", "SEO-optimized page architecture", "Contact forms and enquiry management", "Team, portfolio, and testimonial sections"] },
                { icon: Code2, title: "Custom Web Applications", description: "Interactive platforms, dashboards, booking systems, membership portals, and SaaS tools tailored to your specific business workflow and user needs.", features: ["User authentication and role management", "Dynamic dashboards with real-time data", "Third-party API and CRM integration", "Admin panel and data management tools", "Scalable architecture built for growth"] }
              ].map((deliverable, i) => (
                <div key={i} className="bg-primary-navy p-8 rounded-2xl border border-white/5 hover:border-accent-teal/30 transition-colors">
                  <deliverable.icon className="text-accent-teal w-10 h-10 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{deliverable.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{deliverable.description}</p>
                  <ul className="space-y-2">
                    {deliverable.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-accent-teal">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Our Technology Stack</h2>
              <p className="text-gray-400">We use modern, enterprise-grade tools to build reliable, fast, and scalable websites.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { category: "Language", name: "TypeScript", description: "Strong typing eliminates bugs before they reach your users and makes the codebase reliable as it scales." },
                { category: "Framework", name: "React + Vite", description: "The gold standard for modern web performance — blazing fast builds, hot module replacement, and optimized production bundles." },
                { category: "Styling", name: "Tailwind CSS", description: "Pixel-perfect, responsive design with no stylesheet bloat — every detail intentional and consistent." },
                { category: "Components", name: "shadcn/ui + Radix UI", description: "Accessible, keyboard-friendly, production-grade UI components built for reliability." },
                { category: "Routing", name: "React Router", description: "Full client-side routing with SEO support via react-helmet — fast, smooth page transitions." },
                { category: "Performance", name: "Core Web Vitals Optimized", description: "90+ PageSpeed scores, lazy loading, image optimization, and SEO metadata as standard practice." }
              ].map((tech, i) => (
                <div key={i} className="glass-card p-5 rounded-2xl border border-white/[0.04]">
                  <span className="text-xs font-mono text-accent-teal uppercase tracking-wider mb-2 block">{tech.category}</span>
                  <h3 className="text-base font-bold mb-1.5 text-white">{tech.name}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Our Development Process</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { num: "01", title: "Discovery & Planning", desc: "We learn your business, goals, audience, and competitive landscape. We define the sitemap, user flows, and feature scope.", duration: "2–3 Days" },
                { num: "02", title: "UI/UX Design", desc: "We deliver wireframes and high-fidelity mockups for your approval — mobile-first, on-brand, and conversion-optimized.", duration: "3–5 Days" },
                { num: "03", title: "Development", desc: "We build your website with clean, well-structured React and TypeScript code — sharing progress at every milestone.", duration: "7–14 Days" },
                { num: "04", title: "Integrations & Content", desc: "Payment gateways, WhatsApp, CRM, analytics, and your content are integrated and reviewed together.", duration: "3–5 Days" },
                { num: "05", title: "QA & Testing", desc: "Cross-browser testing, speed optimization, mobile testing, and SEO audit — nothing launches untested.", duration: "2–3 Days" },
                { num: "06", title: "Launch & Support", desc: "We deploy to your domain on secure hosting and provide post-launch monitoring and ongoing technical support.", duration: "1 Day + Ongoing" }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-teal/15 flex items-center justify-center shrink-0 border border-accent-teal/50">
                    <span className="font-mono font-bold text-accent-teal">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold mb-1.5">{step.title}</h3>
                    <p className="text-gray-400 mb-2">{step.desc}</p>
                    <span className="text-xs font-mono text-accent-gold bg-accent-gold/10 px-2 py-1 rounded inline-block">Estimated: {step.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why FlowGent */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Why FlowGent?</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              FlowGent builds websites that are investments, not expenses. Every project begins with a deep understanding of your business goals and ends with a product that earns its keep — attracting visitors, building trust, and converting sales.
            </p>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
