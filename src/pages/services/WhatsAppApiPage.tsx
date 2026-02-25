import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { Megaphone, Bot, Link2, Tags, BarChart, ShieldCheck, ArrowRight, MessageSquare, ShoppingCart, Users, Code, Store, LayoutGrid, Webhook, PieChart, Timer, Sparkles, Database, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function WhatsAppApiPage() {
  return (
    <>
      <Helmet>
        <title>WhatsApp Official Business API Service | FlowGent</title>
        <meta name="description" content="FlowGent offers WhatsApp Official Business API for businesses worldwide — bulk messaging, chatbot automation, CRM integration, and 24/7 customer support. Meta-approved. Get started today." />
        <meta property="og:title" content="WhatsApp Official Business API — FlowGent" />
        <meta property="og:description" content="Send bulk messages, automate support, and grow your business with the WhatsApp Official Business API. FlowGent is your trusted Meta-approved partner." />
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero z-0" />
          <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-accent-teal/8 rounded-full blur-[140px]" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-teal mb-5">
              Official Meta Partner
            </div>
            <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-4 leading-tight">
              WhatsApp Official Business API
            </h1>
            <p className="text-sm text-gray-400 mb-3 max-w-2xl mx-auto">
              Everything You Need for WhatsApp Engagement
            </p>
            <p className="text-xs text-gray-500 mb-8 max-w-xl mx-auto leading-relaxed">
              FlowGent covers all aspects of Marketing, CRM &amp; Customer Support in one place.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-teal text-primary-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] transition-all duration-300">
                Get API Access
                <ArrowRight size={15} />
              </Link>
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-white/[0.03] border border-white/[0.08] text-white/90 font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/[0.07] transition-all duration-300">
                See a Live Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-400 leading-relaxed mb-12 text-center">
              WhatsApp is not just a messaging app — it is the primary channel through which businesses and customers communicate every single day. With over 2 billion active WhatsApp users globally, the opportunity to engage your audience directly, personally, and instantly has never been greater. FlowGent gives your business access to the WhatsApp Official Business API — the enterprise-grade solution approved by Meta — so you can send bulk messages, automate customer interactions, run broadcast campaigns, and deliver real-time support at a scale that no manual team could match.
            </p>
            <div className="glass-card p-7 rounded-2xl border border-white/[0.06]">
              <h2 className="text-xl font-display font-bold mb-3 text-accent-teal">What Is the WhatsApp Official Business API?</h2>
              <p className="text-[0.85rem] text-gray-400 leading-relaxed">
                The WhatsApp Official Business API is Meta&apos;s official platform built for medium to large businesses that need to communicate with thousands — or millions — of customers through WhatsApp. Unlike the regular WhatsApp Business App, the API has no message limits, supports full automation through chatbots and CRM integration, allows broadcast messages to opted-in customers, and comes with end-to-end encryption and full Meta compliance. FlowGent is your authorized gateway to this platform, handling the setup, configuration, approval, and ongoing management on your behalf.
              </p>
            </div>
          </div>
        </section>

        {/* Marketing / Sales / Support — 3-Column Showcase */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
                One Platform for <span className="text-gradient-spectrum">Everything</span>
              </h2>
              <p className="text-xs text-gray-500 max-w-lg mx-auto">Marketing, Sales &amp; Support — unified on WhatsApp</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* Marketing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                className="glass-card p-6 rounded-2xl border border-electric/10 group"
              >
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4 border border-electric/15">
                  <Megaphone size={20} className="text-electric" />
                </div>
                <h3 className="text-base font-display font-bold mb-1.5 text-white group-hover:text-electric transition-colors">Marketing</h3>
                <p className="text-[0.75rem] text-gray-500 mb-4 leading-relaxed">Personalized Broadcast Campaigns — Send exciting offers, discount coupon codes and festival wishes without getting your number blocked!</p>
                <ul className="space-y-2">
                  {["Actionable Campaign Analytics", "Customer Segmentation", "Create Interactive Messages", "Bulk WhatsApp Broadcast"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[0.75rem] text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-electric" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Sales */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6 rounded-2xl border border-accent-teal/10 group"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center mb-4 border border-accent-teal/15">
                  <ShoppingCart size={20} className="text-accent-teal" />
                </div>
                <h3 className="text-base font-display font-bold mb-1.5 text-white group-hover:text-accent-teal transition-colors">Sales</h3>
                <p className="text-[0.75rem] text-gray-500 mb-4 leading-relaxed">Setup Product Catalogs on WhatsApp — Drive orders via WhatsApp Catalogs and Cart. Build your catalog in 10 minutes and get going!</p>
                <ul className="space-y-2">
                  {["Showcase Product Catalog", "Send Order Confirmation", "Recover Abandoned Cart"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[0.75rem] text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-accent-teal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 rounded-2xl border border-ember/10 group"
              >
                <div className="w-10 h-10 rounded-xl bg-ember/10 flex items-center justify-center mb-4 border border-ember/15">
                  <Users size={20} className="text-ember" />
                </div>
                <h3 className="text-base font-display font-bold mb-1.5 text-white group-hover:text-ember transition-colors">Support</h3>
                <p className="text-[0.75rem] text-gray-500 mb-4 leading-relaxed">Shared Team Inbox — Have multiple team members drive live chat support on the same WhatsApp Business Number.</p>
                <ul className="space-y-2">
                  {["Filter Chats", "Assign Agents", "Add Internal Notes"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[0.75rem] text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-ember" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* All Features Grid */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                All <span className="text-gradient-teal">Features</span>
              </h2>
              <p className="text-xs text-gray-500 max-w-md mx-auto">Discover everything you can do with FlowGent — notify, chat &amp; engage your users, all in one place</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: Bot, title: "Chatbot", desc: "Easy-to-use Chatbot Flow builder to build your conversational journeys", color: "text-electric", bg: "bg-electric/8" },
                { icon: MessageSquare, title: "Shared Inbox", desc: "Share the inbox across your team and provide stellar support on WhatsApp", color: "text-accent-teal", bg: "bg-accent-teal/8" },
                { icon: ShoppingCart, title: "WhatsApp Catalogs", desc: "Drive orders via WhatsApp with Catalogs and Cart, built in 10 mins", color: "text-ember", bg: "bg-ember/8" },
                { icon: PieChart, title: "Powerful Analytics", desc: "Access up-to-the-minute insights for timely and informed decisions", color: "text-plasma", bg: "bg-plasma/8" },
                { icon: Timer, title: "Drip Messaging", desc: "Nurture your leads with automated messages in timed intervals", color: "text-electric-2", bg: "bg-electric-2/8" },
                { icon: Sparkles, title: "AI Bot Reply", desc: "Understand and respond to customers using OpenAI integration", color: "text-accent-teal", bg: "bg-accent-teal/8" },
                { icon: Database, title: "Custom Fields", desc: "Store more than just 'name' and 'number' with custom data fields", color: "text-ember-2", bg: "bg-ember-2/8" },
                { icon: UserCheck, title: "Segment Subscribers", desc: "Targeted segments can increase engagement by more than 25%", color: "text-electric", bg: "bg-electric/8" },
                { icon: Code, title: "Powerful API", desc: "Use API endpoints to send messages and manage subscriber lists", color: "text-plasma-2", bg: "bg-plasma-2/8" },
                { icon: Store, title: "WooCommerce", desc: "Abandoned Cart recovery, Order Confirmations & more integrations", color: "text-accent-teal", bg: "bg-accent-teal/8" },
                { icon: LayoutGrid, title: "Shopify", desc: "Connect with Shopify for Abandoned Cart, Order Confirmation & more", color: "text-ember", bg: "bg-ember/8" },
                { icon: Webhook, title: "Webhook Workflow", desc: "Connect any third-party webhook provider to send personalized messages", color: "text-electric-2", bg: "bg-electric-2/8" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="glass-card p-5 rounded-xl border border-white/[0.04] hover:border-white/[0.1] transition-all group"
                >
                  <div className={`w-9 h-9 rounded-lg ${feature.bg} flex items-center justify-center mb-3`}>
                    <feature.icon size={18} className={feature.color} />
                  </div>
                  <h3 className="text-[0.8rem] font-semibold mb-1 text-white">{feature.title}</h3>
                  <p className="text-[0.7rem] text-gray-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Platform Features */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Powerful Platform Features</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: Megaphone, title: "Bulk Broadcast Messaging", desc: "Send personalized promotional messages, offers, updates, and announcements to thousands of opted-in customers simultaneously — with delivery receipts and read tracking on every message." },
                { icon: Bot, title: "Intelligent Chatbot Automation", desc: "Deploy smart conversational bots that handle FAQs, product inquiries, order tracking, appointment bookings, and customer onboarding — without any human agent involvement, 24 hours a day." },
                { icon: Link2, title: "CRM & Platform Integration", desc: "Connect your WhatsApp channel to your existing CRM, ERP, e-commerce store, or helpdesk — so every customer conversation is logged, tracked, and actionable within your business systems." },
                { icon: Tags, title: "Rich Message Templates", desc: "Go beyond plain text. Send interactive messages with buttons, quick replies, product catalogs, payment links, location sharing, and media attachments — approved and formatted to Meta standards." },
                { icon: BarChart, title: "Analytics & Reporting", desc: "Track every campaign with real-time dashboards — open rates, click rates, response rates, and conversion metrics — so you always know what is working and where to optimize." },
                { icon: ShieldCheck, title: "Full Meta Compliance", desc: "Every campaign and message template is reviewed and approved by Meta before sending. FlowGent ensures your account stays protected, your brand stays trusted, and your messages get delivered." }
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/[0.04] hover:border-accent-teal/20 transition-colors">
                  <feature.icon className="text-accent-teal w-10 h-10 mb-4" />
                  <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-[0.8rem]">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Who Uses WhatsApp Official Business API?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { industry: "E-Commerce", example: "Send order confirmations, shipping updates, delivery alerts, and post-purchase follow-ups automatically." },
                { industry: "Healthcare", example: "Appointment reminders, prescription notifications, lab result alerts, and patient support bots." },
                { industry: "Education", example: "Course updates, class schedules, fee reminders, and student query bots for coaching centers and universities." },
                { industry: "Banking & Finance", example: "Transaction alerts, loan application status, OTP delivery, and account support chatbots." },
                { industry: "Real Estate", example: "Property listing broadcasts, site visit scheduling bots, and follow-up automation for leads." },
                { industry: "Retail & FMCG", example: "Flash sale announcements, loyalty program updates, and personalized reorder reminders." }
              ].map((useCase, i) => (
                <div key={i} className="bg-primary-dark p-5 rounded-2xl border border-white/[0.04]">
                  <h3 className="text-sm font-semibold text-accent-gold mb-1.5">{useCase.industry}</h3>
                  <p className="text-gray-400 text-[0.8rem]">{useCase.example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">How FlowGent Sets You Up</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { num: "01", title: "Business Verification", desc: "We verify your business with Meta and submit your WhatsApp Business Account for official API approval." },
                { num: "02", title: "Number Setup & Configuration", desc: "We configure your dedicated business phone number, display name, business profile, and account settings." },
                { num: "03", title: "Template Creation & Approval", desc: "We design and submit your message templates to Meta for approval — crafted to maximize delivery and engagement." },
                { num: "04", title: "Chatbot & Automation Build", desc: "We build your conversation flows, automated responses, and bot logic — tailored to your business needs." },
                { num: "05", title: "CRM Integration", desc: "We connect the API to your existing tools — CRM, website, e-commerce, or custom database." },
                { num: "06", title: "Launch & Ongoing Support", desc: "We go live, monitor performance, and provide continuous support to keep your system running at peak." }
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center shrink-0 border border-accent-teal/30">
                    <span className="font-mono text-sm font-bold text-accent-teal">{step.num}</span>
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
              FlowGent is a trusted WhatsApp Business Solution Provider. We have handled API onboarding, campaign execution, and chatbot development for businesses across e-commerce, healthcare, finance, and retail. Our team manages the complexity so you can focus on your business — not on technical configurations.
            </p>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
