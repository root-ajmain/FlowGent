import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTA from '@/components/CTA';
import { MessageCircle, Target, RefreshCw, Mail, BarChart3, BrainCircuit, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AiAgentsPage() {
  return (
    <>
      <Helmet>
        <title>Custom AI Agents & Automation with n8n | FlowGent</title>
        <meta name="description" content="FlowGent builds custom AI agents using n8n — automating customer support, lead qualification, CRM workflows, and business operations. Save time. Scale smarter." />
        <meta property="og:title" content="Custom AI Agents with n8n — Business Automation | FlowGent" />
        <meta property="og:description" content="FlowGent builds intelligent AI agents with n8n that automate your customer interactions, internal workflows, and lead management — 24/7, without human effort." />
      </Helmet>
      <main className="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent-teal selection:text-primary-dark">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero z-0" />
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-teal mb-6">
              Trending Service
            </div>
            <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-4 leading-tight">
              Custom AI Agents
            </h1>
            <p className="text-sm text-gray-400 mb-8">
              Let intelligent automation handle the repetitive tasks draining your team's time — customer queries, lead qualification, data entry, and internal workflows — so your people can focus on the work that actually grows your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-teal text-primary-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(0,200,150,0.4)] transition-all duration-300">
                Build My AI Agent
                <ArrowRight size={15} />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300">
                See What Is Possible
              </Link>
            </div>
          </div>
        </section>

        {/* Intro & What it is */}
        <section className="py-16 bg-primary-navy">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-400 leading-relaxed mb-12 text-center">
              Every growing business reaches a point where the workload outpaces the team. Customer queries pile up. Leads go cold because nobody followed up in time. Data sits in spreadsheets waiting to be processed. Repetitive tasks consume hours that should be spent on strategy and growth. FlowGent builds Custom AI Agents using n8n — a powerful, flexible automation platform that connects your tools, triggers intelligent actions, and operates 24 hours a day, 7 days a week, without fatigue, error, or overtime pay. This is not science fiction — it is practical automation that businesses are using right now to scale without scaling headcount.
            </p>
            <div className="glass-card p-7 rounded-2xl border border-white/[0.06]">
              <h2 className="text-xl font-display font-bold mb-3 text-accent-teal">What Is an AI Agent Built with n8n?</h2>
              <p className="text-[0.85rem] text-gray-400 leading-relaxed">
                n8n is an open-source workflow automation platform that allows us to build sophisticated, multi-step automation flows — connecting your CRM, WhatsApp, email, website, spreadsheets, databases, and any API-enabled tool into a single intelligent system. An AI Agent is an automation that does not just move data from A to B — it makes decisions, generates responses using AI language models, qualifies leads based on predefined criteria, escalates to humans when needed, and learns from each interaction. FlowGent designs, builds, and deploys these agents specifically around your business processes, your tools, and your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">What AI Agents Can Do</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: MessageCircle, title: "Customer Support Automation", desc: "Deploy AI agents that handle your most common customer queries — product questions, order status, return policies, pricing — instantly and accurately, across WhatsApp, your website chat, and Facebook Messenger, day and night." },
                { icon: Target, title: "Intelligent Lead Qualification", desc: "Automatically engage every inbound lead the moment they make contact — ask qualifying questions, score leads based on their responses, route hot leads to your sales team immediately, and nurture cold leads through automated follow-up sequences." },
                { icon: RefreshCw, title: "CRM & Data Automation", desc: "Eliminate manual data entry entirely. Our AI agents automatically capture lead data, update your CRM, create follow-up tasks, send confirmation emails, and maintain your database — with zero human input required." },
                { icon: Mail, title: "Multi-Channel Communication", desc: "AI agents that communicate across WhatsApp, email, SMS, and web chat simultaneously — maintaining consistent, professional, on-brand communication across every channel your customers use to reach you." },
                { icon: BarChart3, title: "Internal Workflow Automation", desc: "Automate the internal processes that slow your team down — report generation, invoice processing, inventory alerts, approval workflows, team notifications, and data syncing between platforms." },
                { icon: BrainCircuit, title: "AI-Powered Decision Making", desc: "Our agents use large language models to understand context, generate natural human-like responses, and make intelligent routing decisions — going far beyond simple rule-based bots to create genuinely helpful automated interactions." }
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/[0.04] hover:border-accent-teal/30 transition-colors">
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
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Real-World Automation Scenarios</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { scenario: "E-Commerce Order Support", description: "A customer WhatsApps asking about their order. The AI agent checks the order database, retrieves the status, and replies with accurate delivery information — all within 3 seconds, no human involved." },
                { scenario: "Lead Qualification for Real Estate", description: "A prospect fills out an inquiry form. The AI agent immediately WhatsApps them, asks about budget and timeline — qualifies them as hot or cold — and notifies your sales team only for the hot leads." },
                { scenario: "Appointment Booking for Healthcare", description: "A patient sends a message requesting an appointment. The AI agent checks availability, books the slot, sends a confirmation, and follows up with a reminder 24 hours before — completely automated." },
                { scenario: "Content Distribution Automation", description: "When a new blog post is published, the AI agent automatically posts to Facebook, sends a newsletter, updates the WhatsApp broadcast list — triggered by a single action." },
                { scenario: "Invoice & Payment Follow-Up", description: "When a payment is due, the AI agent sends a professional reminder via WhatsApp and email, tracks whether payment was received, and escalates to a human only when a client has not responded after three follow-ups." },
                { scenario: "HR Onboarding Workflow", description: "When a new employee is added to the system, the agent sends welcome messages, shares onboarding documents, schedules orientation meetings, and creates accounts in relevant tools — all automatically." }
              ].map((useCase, i) => (
                <div key={i} className="bg-primary-dark p-6 rounded-2xl border border-white/5">
                  <h3 className="text-sm font-semibold text-accent-gold mb-1.5">{useCase.scenario}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-primary-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">How We Build Your Agent</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                { num: "01", title: "Process Mapping", desc: "We map out the exact workflows you want to automate — documenting triggers, decision points, actions, and desired outcomes." },
                { num: "02", title: "Tool Audit & Integration Plan", desc: "We identify which tools you already use — CRM, WhatsApp, email, spreadsheets — and design the integration architecture." },
                { num: "03", title: "Agent Design & Build", desc: "We build your automation workflows in n8n — connecting all tools, configuring AI logic, and setting up decision trees." },
                { num: "04", title: "Testing & Refinement", desc: "We test every scenario and edge case — ensuring the agent responds correctly, escalates when needed, and handles unexpected inputs gracefully." },
                { num: "05", title: "Deployment & Training", desc: "We deploy the agent to your live environment and train your team on how to monitor, manage, and update it as your business evolves." },
                { num: "06", title: "Monitoring & Optimization", desc: "We provide ongoing monitoring and continuous refinement — updating logic, improving responses, and adding new capabilities as your needs grow." }
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
              FlowGent is one of the very few agencies with deep hands-on expertise in n8n automation and AI agent development. We have built agents for customer support, sales, HR, and marketing — and we understand how to translate complex business processes into reliable, intelligent automation systems that actually work in the real world.
            </p>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
