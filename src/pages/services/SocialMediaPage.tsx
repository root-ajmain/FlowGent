import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Palette, Calendar, PenTool, MessageSquare, LineChart, Repeat, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialMediaPage() {
  return (
    <>
      <Helmet>
        <title>Social Media Management & Ecosystem Setup | FlowGent</title>
        <meta name="description" content="FlowGent sets up and manages your complete social media ecosystem across Facebook, Instagram, YouTube, TikTok, and LinkedIn — content strategy, design, posting, and growth." />
        <meta property="og:title" content="Full Social Media Ecosystem Setup — FlowGent" />
        <meta property="og:description" content="From profile setup to content creation and community management — FlowGent builds and manages your entire social media presence across every major platform." />
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero z-0" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-teal mb-6">
              All Platforms. One Partner.
            </div>
            <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-4 leading-tight">
              Full Social Media Ecosystem
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Your brand, built and managed across every platform your customers use — Facebook, Instagram, YouTube, TikTok, and LinkedIn — with a unified strategy that drives real growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-teal text-primary-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] transition-all duration-300">
                Build My Ecosystem
                <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Intro & What it is */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-400 leading-relaxed mb-12 text-center">
              In today&apos;s world, your customers are not on just one platform. They discover brands on Facebook, watch reviews on YouTube, scroll TikTok for entertainment and product ideas, connect on Instagram, and verify credibility on LinkedIn. A business that is missing from any of these touchpoints is losing customers every single day. FlowGent builds and manages your complete social media ecosystem — not just individual pages, but a cohesive, strategy-driven digital presence that speaks consistently across every platform and converts attention into loyal customers.
            </p>
            <div className="glass-card p-7 rounded-2xl border border-white/[0.06]">
              <h2 className="text-xl font-display font-bold mb-3 text-accent-teal">What Is a Social Media Ecosystem?</h2>
              <p className="text-[0.85rem] text-gray-400 leading-relaxed">
                A social media ecosystem is not simply having accounts on multiple platforms. It is a strategically built, interconnected network of branded digital touchpoints — each platform optimized for its unique audience and content format, but all working together to tell a consistent brand story. FlowGent designs this ecosystem from the ground up: setting up and fully branding each profile, developing a content strategy rooted in your business goals, creating and scheduling original content, engaging with your community, and reporting on growth every step of the way.
              </p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Platforms We Manage</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Facebook", icon: "📘", description: "We set up and manage your Facebook Business Page with complete branding, regular posts, story content, community engagement, and lead generation tools — reaching the largest social network audience." },
                { name: "Instagram", icon: "📸", description: "From Reels to Stories to grid posts, we manage your Instagram presence with visually consistent, on-brand content designed to build following, drive engagement, and attract your ideal customers." },
                { name: "YouTube", icon: "▶️", description: "We handle your YouTube channel — from channel art and branding to video SEO, playlists, descriptions, and thumbnail strategy — to grow subscribers and establish your brand as a trusted authority." },
                { name: "TikTok", icon: "🎵", description: "TikTok is one of the fastest-growing discovery platforms. We create short-form video content strategies, trending hooks, and viral-optimized posts to get your brand in front of a young, buying audience." },
                { name: "LinkedIn", icon: "💼", description: "For B2B brands and professionals, we manage your LinkedIn Company Page — thought leadership posts, industry updates, and employee advocacy strategies to build professional credibility." }
              ].map((platform, i) => (
                <div key={i} className="bg-primary-navy p-8 rounded-2xl border border-white/5 hover:border-accent-teal/30 transition-colors">
                  <div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-base font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-500 leading-relaxed text-[0.8rem]">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">What's Included</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Palette, title: "Profile Setup & Branding", desc: "Every account is fully set up with professional cover photos, profile pictures, bios, highlights, and branded visual templates that make your business look premium and trustworthy from the first impression." },
                { icon: Calendar, title: "Content Calendar & Strategy", desc: "We build a monthly content calendar tailored to your industry, audience, and business goals — balancing promotional, educational, and engagement-driven posts for maximum reach and resonance." },
                { icon: PenTool, title: "Original Content Creation", desc: "Our creative team produces graphics, captions, short-form videos, carousels, and story content — all original, all on-brand, and all optimized for the algorithm of each specific platform." },
                { icon: MessageSquare, title: "Community Management", desc: "We respond to comments, messages, and mentions on your behalf — maintaining a professional, warm, and responsive brand voice that builds trust and keeps your audience engaged." },
                { icon: LineChart, title: "Growth & Analytics Reporting", desc: "Monthly performance reports covering follower growth, reach, engagement rate, top-performing content, and recommendations — so you always understand the ROI of your social media investment." },
                { icon: Repeat, title: "Cross-Platform Consistency", desc: "Your brand story, tone, and visual identity stay consistent across every platform — creating a unified digital identity that customers recognize and trust wherever they encounter your brand." }
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/[0.04]">
                  <feature.icon className="text-accent-teal w-10 h-10 mb-4" />
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[0.8rem]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why FlowGent */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Why FlowGent?</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              FlowGent does not just post content. We build digital communities around your brand. Our team combines creative storytelling with data-driven strategy — understanding not just what to post, but when, how, and for whom. We have grown social media presences for businesses in retail, food and beverage, education, real estate, and services across multiple industries.
            </p>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
