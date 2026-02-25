import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Target, Palette, Repeat, LineChart, FileText, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DigitalMarketingPage() {
  return (
    <>
      <Helmet>
        <title>Digital Marketing Agency — Facebook, YouTube & TikTok Ads | FlowGent</title>
        <meta name="description" content="FlowGent runs high-ROI Facebook Ads, YouTube Ads, and TikTok Ads campaigns for businesses worldwide. Performance marketing, targeting, creative, and full reporting. Google Ads coming soon." />
        <meta property="og:title" content="Digital Marketing — Facebook, YouTube & TikTok Ads | FlowGent" />
        <meta property="og:description" content="FlowGent runs performance-driven paid ad campaigns on Facebook, YouTube, and TikTok — targeting the right audience to grow your sales, leads, and brand awareness." />
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero z-0" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-teal mb-6">
              Performance-Driven Advertising
            </div>
            <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-4 leading-tight">
              Digital Marketing
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Stop guessing. Start growing. FlowGent designs and manages paid advertising campaigns on Facebook, YouTube, and TikTok — built to reach the right audience, drive real results, and maximize every dollar you spend.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-teal text-primary-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] transition-all duration-300">
                Start a Campaign
                <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300">
                See Our Results
              </Link>
            </div>
          </div>
        </section>

        {/* Intro & What it is */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-400 leading-relaxed mb-12 text-center">
              Every business wants more customers. But throwing money at ads without a strategy is how budgets disappear with nothing to show for it. FlowGent takes a results-first approach to digital marketing — understanding your business goals, identifying your exact target audience, crafting compelling creatives, and running data-optimized campaigns that consistently deliver measurable returns. Whether you want to build brand awareness, generate qualified leads, or drive direct sales, our team manages every part of the campaign so you can focus on serving the customers we bring you.
            </p>
            <div className="glass-card p-7 rounded-2xl border border-white/[0.06]">
              <h2 className="text-xl font-display font-bold mb-3 text-accent-teal">What Is Performance Digital Marketing?</h2>
              <p className="text-[0.85rem] text-gray-400 leading-relaxed">
                Performance digital marketing means every campaign is built around measurable outcomes — not just impressions or likes. It means setting clear objectives, targeting audiences with precision, creating ads that convert, and continuously optimizing based on real data. FlowGent manages your campaigns end-to-end across Facebook, YouTube, and TikTok — the three platforms where audiences spend the most time and where businesses consistently get the highest return on ad spend.
              </p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Where We Advertise</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { name: "Facebook & Instagram Ads", icon: "📘", description: "Facebook's advertising platform is the most powerful targeting tool available. We run lead generation campaigns, traffic campaigns, conversion campaigns, and retargeting sequences that follow your potential customers through the full buying journey.", formats: ["Image Ads", "Video Ads", "Carousel Ads", "Lead Form Ads", "Retargeting Ads", "Lookalike Audience Campaigns"] },
                { name: "YouTube Ads", icon: "▶️", description: "Video is the most persuasive ad format online. We create and manage YouTube ad campaigns — from 6-second bumpers to long-form skippable ads — targeting viewers by interest, demographics, keywords, and even specific channels relevant to your industry.", formats: ["Skippable In-Stream Ads", "Non-Skippable Ads", "Bumper Ads", "Discovery Ads", "Channel Targeting"] },
                { name: "TikTok Ads", icon: "🎵", description: "TikTok is rapidly becoming one of the most influential platforms for product discovery, especially among 18 to 35 year olds. We run TikTok ad campaigns with native-feeling creative formats that blend into the feed and drive curiosity, clicks, and conversions.", formats: ["TopView Ads", "In-Feed Ads", "Spark Ads", "Branded Hashtag Challenges", "Video Shopping Ads"] },
                { name: "Google Ads", icon: "🔍", description: "We are expanding our services to include Google Search, Display, and Shopping Ads — capturing high-intent customers who are actively searching for what your business offers.", status: "Coming Soon", cta: "Join the Waitlist" }
              ].map((platform, i) => (
                <div key={i} className="bg-primary-navy p-6 rounded-2xl border border-white/[0.04] relative overflow-hidden">
                  {platform.status && (
                    <div className="absolute top-4 right-4 bg-accent-gold/20 text-accent-gold text-[0.65rem] font-bold px-2.5 py-0.5 rounded-full">
                      {platform.status}
                    </div>
                  )}
                  <div className="text-2xl mb-3">{platform.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{platform.name}</h3>
                  <p className="text-gray-500 leading-relaxed text-[0.8rem] mb-5">{platform.description}</p>
                  {platform.formats && (
                    <div className="flex flex-wrap gap-2">
                      {platform.formats.map((format, j) => (
                        <span key={j} className="bg-white/5 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                          {format}
                        </span>
                      ))}
                    </div>
                  )}
                  {platform.cta && (
                    <Link to="/#contact" className="inline-block mt-6 text-accent-teal hover:underline font-medium">
                      {platform.cta} &rarr;
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Target, title: "Precision Audience Targeting", desc: "We build custom audiences based on interests, behaviors, location, purchase intent, past website visitors, and customer lookalikes — so your ads reach people most likely to buy." },
                { icon: Palette, title: "High-Converting Ad Creative", desc: "We produce ad copy, graphics, and video scripts built around proven persuasion principles — clear hooks, benefit-driven messaging, and strong calls-to-action that stop the scroll and drive clicks." },
                { icon: Repeat, title: "Full-Funnel Campaign Strategy", desc: "We build campaigns for every stage of the customer journey — awareness, consideration, and conversion — with retargeting sequences that recover warm leads who did not convert the first time." },
                { icon: LineChart, title: "Data-Driven Optimization", desc: "We monitor campaigns daily, running A/B tests on creatives, audiences, and placements — continuously shifting budget toward what performs and cutting what does not." },
                { icon: FileText, title: "Transparent Reporting", desc: "Clear, jargon-free reporting — spend, reach, impressions, clicks, leads, conversions, cost-per-result, and ROAS — delivered weekly and monthly so you always know exactly what your money is doing." },
                { icon: Rocket, title: "Rapid Campaign Launch", desc: "From strategy to live campaign in as little as 3 business days. We move fast without compromising on quality." }
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

        {/* Campaign Process */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Our Campaign Process</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { num: "01", title: "Goal Setting", desc: "We align on your business objective — leads, sales, traffic, or brand awareness — and set measurable KPIs before spending a single dollar." },
                { num: "02", title: "Audience Research", desc: "We research and build your target audience profiles — by location, age, interest, behavior, and buying intent." },
                { num: "03", title: "Creative Development", desc: "We produce ad visuals, copy, and video scripts designed to capture attention and convert — multiple variations for testing." },
                { num: "04", title: "Campaign Launch", desc: "We set up the campaign structure, ad sets, budgets, and bidding strategy — then launch across your chosen platforms." },
                { num: "05", title: "Optimization", desc: "We monitor performance daily, adjusting bids, pausing underperformers, scaling winners, and refining targeting based on real data." },
                { num: "06", title: "Reporting & Review", desc: "Weekly and monthly reports with key metrics, insights, and next steps — keeping you informed and in control at all times." }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-teal/15 flex items-center justify-center shrink-0 border border-accent-teal/50">
                    <span className="font-mono font-bold text-accent-teal">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold mb-1.5">{step.title}</h3>
                    <p className="text-gray-500 text-[0.8rem]">{step.desc}</p>
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
              FlowGent's marketing team combines creative talent with analytical rigor. We do not run set-it-and-forget-it campaigns. We treat your ad budget like our own — monitoring, testing, and optimizing relentlessly until we find the combination that delivers the strongest possible return for your business.
            </p>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
