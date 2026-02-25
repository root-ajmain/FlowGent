import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Share2, Rocket, Code, BrainCircuit, X, Check } from "lucide-react";

interface ServiceData {
  id: string;
  icon: typeof ShieldCheck;
  title: string;
  description: string;
  features: string[];
  badge: string | null;
  badgeColor: string;
  iconColor: string;
  hoverTitleColor: string;
  dotColor: string;
  ctaColor: string;
  colSpan: string;
  isFeatured?: boolean;
  popupDescription: string;
  popupHighlights: string[];
}

const services: ServiceData[] = [
  {
    id: "whatsapp-api",
    icon: ShieldCheck,
    title: "WhatsApp Official Business API",
    description:
      "Official WhatsApp API integration for bulk messaging, chatbots, customer support automation, and broadcast campaigns — fully compliant and scalable.",
    features: [
      "Official Meta Partner",
      "Chatbot Automation",
      "Bulk Broadcast",
      "CRM Integration",
    ],
    badge: "Most Popular",
    badgeColor: "bg-[rgba(108,99,255,0.12)] border border-[rgba(108,99,255,0.30)] text-electric-2",
    iconColor: "text-electric",
    hoverTitleColor: "group-hover:text-electric",
    dotColor: "bg-electric",
    ctaColor: "text-electric hover:text-electric-2",
    colSpan: "col-span-1",
    popupDescription:
      "Get access to Meta's official WhatsApp Business API for enterprise-grade customer communication. Our platform covers bulk messaging, chatbot automation, CRM integration, and 24/7 support — everything you need for marketing, sales, and customer support in a single unified solution.",
    popupHighlights: [
      "Bulk Broadcast Messaging with delivery & read tracking",
      "24/7 Intelligent Chatbot Automation",
      "CRM, ERP & E-commerce Integration",
      "Rich Templates with buttons, catalogs & payment links",
      "Real-time Analytics & Reporting Dashboard",
      "Full Meta Compliance & Template Approval",
    ],
  },
  {
    id: "social-media",
    icon: Share2,
    title: "Full Social Media Ecosystem",
    description:
      "Complete setup and management of your brand's digital presence across Facebook, Instagram, YouTube, TikTok, and LinkedIn.",
    features: [
      "Profile Optimization",
      "Content Strategy",
      "Community Management",
      "Analytics Dashboard",
    ],
    badge: null,
    badgeColor: "",
    iconColor: "text-plasma",
    hoverTitleColor: "group-hover:text-plasma",
    dotColor: "bg-plasma",
    ctaColor: "text-plasma hover:text-plasma-2",
    colSpan: "col-span-1",
    popupDescription:
      "We build and manage a complete, interconnected social media presence across Facebook, Instagram, YouTube, TikTok, and LinkedIn. From profile setup and branding to content creation, community management, and growth reporting — all with a unified strategy.",
    popupHighlights: [
      "Professional Profile Setup & Branding",
      "Monthly Content Calendar & Strategy",
      "Original Graphics, Videos & Carousels",
      "Community Management & Brand Voice",
      "Monthly Growth & Analytics Reports",
      "Cross-Platform Consistency & Identity",
    ],
  },
  {
    id: "digital-marketing",
    icon: Rocket,
    title: "Digital Marketing",
    description:
      "Performance-driven paid marketing campaigns that convert. We run high-ROI ads on Facebook, YouTube, and TikTok to grow your audience and revenue.",
    features: [
      "Facebook Ads",
      "YouTube Ads",
      "TikTok Ads",
      "Google Ads (Coming Soon)",
    ],
    badge: "Google Ads Coming Soon",
    badgeColor: "bg-[rgba(255,107,53,0.10)] border border-[rgba(255,107,53,0.25)] text-ember",
    iconColor: "text-ember",
    hoverTitleColor: "group-hover:text-ember",
    dotColor: "bg-ember",
    ctaColor: "text-ember hover:text-ember-2",
    colSpan: "col-span-1",
    popupDescription:
      "Results-first paid advertising on Facebook, YouTube, and TikTok (Google Ads coming soon). We identify target audiences, craft compelling creatives, and continuously optimize campaigns to deliver measurable ROI for your business.",
    popupHighlights: [
      "Precision Audience Targeting & Lookalikes",
      "High-Converting Ad Creative & Copywriting",
      "Full-Funnel Strategy with Retargeting",
      "Daily Monitoring & A/B Testing",
      "Transparent Weekly & Monthly Reports",
      "Rapid Launch in as Little as 3 Days",
    ],
  },
  {
    id: "web-development",
    icon: Code,
    title: "Web Development",
    description:
      "Beautiful, fast, and conversion-optimized websites and web apps — from landing pages to full e-commerce platforms built for modern businesses.",
    features: [
      "Landing Pages",
      "E-commerce",
      "Custom Web Apps",
      "SEO Optimized",
    ],
    badge: null,
    badgeColor: "",
    iconColor: "text-electric",
    hoverTitleColor: "group-hover:text-electric",
    dotColor: "bg-electric",
    ctaColor: "text-electric hover:text-electric-2",
    colSpan: "col-span-1",
    popupDescription:
      "High-performance websites and web applications built with React, TypeScript, and Tailwind CSS. From landing pages and e-commerce stores to corporate websites and custom web apps — fast, responsive, SEO-optimized, and conversion-focused.",
    popupHighlights: [
      "High-Converting Landing Pages",
      "E-Commerce with Payment Gateways",
      "Corporate Websites with CMS & Blog",
      "Custom Dashboards & Booking Systems",
      "Modern Stack: React, Vite, Tailwind CSS",
      "Discovery to Launch in ~18–31 Days",
    ],
  },
  {
    id: "ai-agents",
    icon: BrainCircuit,
    title: "Custom AI Agents (n8n)",
    description:
      "Intelligent automation agents built with n8n that handle repetitive tasks, customer queries, lead qualification, and internal workflows — 24/7, without human intervention.",
    features: [
      "n8n Workflow Automation",
      "Lead Qualification Bots",
      "Customer Support AI",
      "CRM & API Integration",
    ],
    badge: "🔥 Trending",
    badgeColor: "bg-[rgba(0,229,255,0.10)] border border-[rgba(0,229,255,0.25)] text-plasma",
    iconColor: "text-plasma",
    hoverTitleColor: "group-hover:text-plasma",
    dotColor: "bg-plasma",
    ctaColor: "text-plasma hover:text-plasma-2",
    colSpan: "md:col-span-2",
    isFeatured: true,
    popupDescription:
      "Intelligent AI agents built with n8n — an open-source workflow automation platform — to automate customer support, lead qualification, CRM workflows, and internal operations. Our agents connect your tools via APIs, use LLMs for smart decision-making, and operate 24/7.",
    popupHighlights: [
      "Customer Support Automation Across All Channels",
      "Intelligent Lead Qualification & Scoring",
      "CRM & Data Automation with Zero Manual Entry",
      "Multi-Channel: WhatsApp, Email, SMS & Web",
      "Internal Workflow Automation & Alerts",
      "AI-Powered Decision Making & Routing",
    ],
  },
];

export default function Services() {
  const [activePopup, setActivePopup] = useState<string | null>(null);
  const activeService = services.find((s) => s.id === activePopup);

  return (
    <section id="services" className="py-20 bg-void relative">
      {/* ═══ Service Detail Popup ═══ */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setActivePopup(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: "spring", damping: 26, stiffness: 320 }}
              className="relative glass-card rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-white/10 shadow-[0_0_60px_rgba(108,99,255,0.15)] max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActivePopup(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
              >
                <X size={14} />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/[0.06]`}>
                  <activeService.icon size={22} className={activeService.iconColor} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white leading-tight">
                    {activeService.title}
                  </h3>
                  {activeService.badge && (
                    <span className={`inline-block mt-1 px-2 py-0.5 rounded-full text-[0.6rem] font-bold tracking-wide ${activeService.badgeColor}`}>
                      {activeService.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />

              {/* Description */}
              <p className="text-[0.82rem] text-gray-400 leading-relaxed mb-6">
                {activeService.popupDescription}
              </p>

              {/* Highlights */}
              <div className="mb-2">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-gray-500 mb-3">
                  Key Highlights
                </p>
                <ul className="space-y-2.5">
                  {activeService.popupHighlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-2.5 text-[0.8rem] text-gray-300"
                    >
                      <div className={`w-4 h-4 rounded-full bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5 border border-white/[0.08]`}>
                        <Check size={9} className={activeService.iconColor} />
                      </div>
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Everything Your Business{" "}
            <span className="text-gradient-spectrum">Needs to Grow</span>
          </h2>
          <p className="text-sm text-gray-500">
            One agency. Full ecosystem. Real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card rounded-2xl p-7 relative overflow-hidden group ${service.colSpan} ${
                service.isFeatured
                  ? "border-plasma/30 shadow-[0_0_30px_rgba(0,229,255,0.1)] [animation:glowPulse_3s_infinite]"
                  : ""
              }`}
            >
              {service.badge && (
                <div
                  className={`absolute top-5 right-5 px-2.5 py-0.5 rounded-full text-[0.65rem] font-bold tracking-wide ${service.badgeColor}`}
                >
                  {service.badge}
                </div>
              )}

              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 border border-white/[0.06]">
                <service.icon size={24} className={service.iconColor} />
              </div>

              <h3 className={`text-lg font-display font-bold mb-3 text-white transition-colors ${service.hoverTitleColor}`}>
                {service.title}
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed text-[0.85rem]">
                {service.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-xs text-gray-300"
                  >
                    <div className={`w-1 h-1 rounded-full mr-2.5 ${service.dotColor}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setActivePopup(service.id)}
                className={`inline-flex items-center text-sm font-semibold transition-colors group/link cursor-pointer ${service.ctaColor}`}
              >
                Learn More
                <span className="ml-2 group-hover/link:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
