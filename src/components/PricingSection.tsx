import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Zap, Rocket, Info, Globe, X, MessageCircle, Phone } from "lucide-react";

/* ═══════════════════════════════ TYPES ═══════════════════════════════ */

type Duration = "monthly" | "quarterly" | "halfYearly" | "yearly";
type Market = "bd" | "global";

interface PlanPricing {
  original: number;
  sale: number;
  perMonth: number;
  flatDiscount: number;
  discountPct: number;
  months: number;
}

/* ═══════════════════════════════ DATA ═══════════════════════════════ */

const durations: { key: Duration; label: string; months: number }[] = [
  { key: "monthly", label: "Monthly", months: 1 },
  { key: "quarterly", label: "Quarterly", months: 3 },
  { key: "halfYearly", label: "Half Yearly", months: 6 },
  { key: "yearly", label: "Yearly", months: 12 },
];

function calcPricing(
  monthlyOriginal: number,
  flatMonthlyDiscount: number,
  months: number
): PlanPricing {
  const original = monthlyOriginal * months;
  const flatDiscount = flatMonthlyDiscount * months;
  const sale = original - flatDiscount;
  const perMonth = sale / months;
  const discountPct = Math.round((flatDiscount / original) * 100);
  return { original, sale, perMonth, flatDiscount, discountPct, months };
}

const bdBase = {
  launch: { monthly: 3000, flatDiscount: 500 },
  scale: { monthly: 6000, flatDiscount: 1000 },
};

const globalBase = {
  launch: { monthly: 35, flatDiscount: 5 },
  scale: { monthly: 70, flatDiscount: 10 },
};

function getPricing(
  market: Market,
  plan: "launch" | "scale",
  duration: Duration
): PlanPricing {
  const base = market === "bd" ? bdBase : globalBase;
  const b = base[plan];
  const months = durations.find((d) => d.key === duration)!.months;
  return calcPricing(b.monthly, b.flatDiscount, months);
}

const launchFeatures = [
  "0% Markup Fees",
  "2 Team Members",
  "5,000 Subscribers",
  "Number Coexistence",
  "WhatsApp AI Agent",
  "100,000 AI Message Tokens",
  "Unlimited Message Credits",
  "Unlimited Free Incoming Conversation",
  "Unlimited Chatbot Sessions",
  "Bulk WhatsApp Messaging",
  "Multi Agent Shared Inbox",
  "Drag & Drop Chatbot Builder",
  "Campaign Reporting",
  "Automated Follow Up Bot",
  "Interactive User Input Collection Bot",
  "Messaging Template Management",
  "WhatsApp Chat Widget",
  "SMS Broadcasting",
  "Google Sheets Integration",
  "API Integration (Developer)",
  "Outgoing Webhooks",
  "Zapier Integration",
  "Pabbly Integration",
  "Make Integration",
  "N8N Integration",
  "WooCommerce Integration",
  "Shopify Integration",
];

const scaleFeatures = [
  "Includes all Launch features",
  "5 Team Members",
  "Omnichannel Inbox: WhatsApp, Instagram & Facebook",
  "Appointment Booking System",
  "15,000 Subscribers",
  "High Speed Broadcasting",
  "Unlimited AI Message Tokens",
  "AI Intent Detection",
  "Roles and Permissions",
  "Phone Number Masking",
  "Manager Monitoring",
  "Incoming Chat Translation",
  "Click to WhatsApp Ad Integration",
  "HTTP API Calls in Chatbot",
  "Smart Automatic Agent Routing",
  "Native WhatsApp Form Builder",
  "Custom Webhook Listener",
  "WhatsApp Product Catalog",
  'Remove "Powered by FlowGent"',
  "On-Call Support",
];

/* ═══════════════════════════════ HELPERS ═══════════════════════════════ */

const fmtBDT = (n: number) => `৳${n.toLocaleString("en-IN")}`;
const fmtUSD = (n: number) => `$${n.toLocaleString("en-US")}`;
const fmt = (market: Market, n: number) =>
  market === "bd" ? fmtBDT(n) : fmtUSD(n);

/* ═══════════════════════════════ MAIN COMPONENT ═══════════════════════════════ */

export default function PricingSection() {
  const [market, setMarket] = useState<Market>("bd");
  const [duration, setDuration] = useState<Duration>("monthly");
  const [showPopup, setShowPopup] = useState(false);

  const launchPricing = getPricing(market, "launch", duration);
  const scalePricing = getPricing(market, "scale", duration);
  const currentDuration = durations.find((d) => d.key === duration)!;

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* ═══ Get Started Popup ═══ */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowPopup(false)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative glass-card rounded-2xl p-8 md:p-10 max-w-md w-full text-center border border-electric/20 shadow-[0_0_60px_rgba(108,99,255,0.2)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-5 border border-electric/20">
                <Zap size={24} className="text-electric" />
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-2">
                Thank You for Your Interest!
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                To get started or learn more about our plans, please contact our sales team. We&apos;ll help you choose the perfect plan for your business.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+8801804277420"
                  className="flex items-center justify-center gap-2 bg-gradient-electric text-void font-semibold text-sm px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] transition-all duration-300 w-full"
                >
                  <Phone size={16} />
                  Call Sales: +880 1804-277420
                </a>
                <a
                  href="https://wa.me/8801804277420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#25D366]/25 transition-all duration-300 w-full"
                >
                  <MessageCircle size={16} className="text-[#25D366]" />
                  WhatsApp Us Now
                </a>
              </div>

              <p className="text-[0.65rem] text-gray-600 mt-5">
                Our team typically responds within minutes.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-electric/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[rgba(0,229,255,0.06)] rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.20)] text-xs font-mono text-electric-2/80 mb-5 tracking-wide">
            <Zap size={12} />
            Meta WhatsApp Official Business API Platform
          </div>
          <h1 className="text-3xl md:text-[2.75rem] font-display font-bold mb-5 leading-tight">
            Simple, Transparent{" "}
            <span className="text-gradient-spectrum">Pricing</span>
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed">
            Get the official WhatsApp Official Business API with all the tools you need
            to engage customers, automate conversations, and grow your business.
          </p>
        </motion.div>

        {/* Market Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center rounded-full bg-slate/60 border border-white/10 p-1">
            <button
              onClick={() => setMarket("bd")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                market === "bd"
                  ? "bg-gradient-electric text-void shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              BDT (৳)
            </button>
            <button
              onClick={() => setMarket("global")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                market === "global"
                  ? "bg-gradient-electric text-void shadow-[0_0_15px_rgba(108,99,255,0.3)]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Globe size={14} />
              USD ($)
            </button>
          </div>
        </motion.div>

        {/* Helper text */}
        <AnimatePresence mode="wait">
          {market === "global" && (
            <motion.p
              key="global-hint"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center text-xs text-gray-500 mb-4"
            >
              Showing international pricing in USD for global clients.
            </motion.p>
          )}
          {market === "bd" && (
            <motion.p
              key="bd-hint"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center text-xs text-gray-500 mb-4"
            >
              Showing local pricing in BDT with flat discounts applied.
            </motion.p>
          )}
        </AnimatePresence>

        {/* Duration Selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-slate/40 border border-white/10 p-1.5">
            {durations.map((d) => (
              <button
                key={d.key}
                onClick={() => setDuration(d.key)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                  duration === d.key
                    ? "bg-white/10 text-white border border-white/20 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Plan Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <PlanCard
            market={market}
            name="Launch Plan"
            tagline="Perfect for startups & small businesses getting started with WhatsApp API"
            icon={<Zap size={22} className="text-electric" />}
            features={launchFeatures}
            pricing={launchPricing}
            durationLabel={currentDuration.label}
            delay={0.1}
            onGetStarted={() => setShowPopup(true)}
          />

          <PlanCard
            market={market}
            name="Scale Plan"
            tagline="For growing brands ready to dominate with advanced automation & omnichannel"
            icon={<Rocket size={22} className="text-ember" />}
            features={scaleFeatures}
            pricing={scalePricing}
            durationLabel={currentDuration.label}
            popular
            delay={0.25}
            onGetStarted={() => setShowPopup(true)}
          />
        </div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto glass-card rounded-2xl p-6 md:p-8 mb-16"
        >
          <div className="flex items-start gap-3 mb-3">
            <Info size={16} className="text-electric shrink-0 mt-0.5" />
            <h3 className="text-sm font-display font-semibold">
              Pricing Notes
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs text-gray-500 leading-relaxed ml-7 list-disc">
            <li>
              <strong className="text-gray-200">Local Pricing (BDT)</strong>{" "}
              — Flat discounts are applied per month across all billing cycles to
              support growing businesses. All prices in Taka (৳).
            </li>
            <li>
              <strong className="text-gray-200">Global Pricing (USD)</strong> —
              International clients are billed in US Dollars ($) with
              corresponding flat discounts on all plans.
            </li>
            <li>
              <strong className="text-gray-200">Longer Commitments</strong> —
              Quarterly, Half Yearly, and Yearly billing let you lock in your
              rate. The flat discount is applied per month for the entire
              duration.
            </li>
          </ul>
          <p className="text-xs text-gray-500 mt-6 border-t border-white/5 pt-4">
            Prices exclude WhatsApp conversation fees regulated by Meta.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Ready to <span className="text-gradient-ember">Get Started</span>?
          </h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            Contact our sales team to set up your official WhatsApp
            Business API platform today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="tel:+8801804277420"
              className="inline-flex items-center justify-center gap-2 bg-gradient-electric text-void font-semibold text-sm px-7 py-3 rounded-full hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/8801804277420"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#25D366]/25 transition-all duration-300"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              WhatsApp Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════ PLAN CARD ═══════════════════════════════ */

function PlanCard({
  market,
  name,
  tagline,
  icon,
  features,
  pricing,
  durationLabel,
  popular,
  delay,
  onGetStarted,
}: {
  market: Market;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  features: string[];
  pricing: PlanPricing;
  durationLabel: string;
  popular?: boolean;
  delay: number;
  onGetStarted: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`relative glass-card rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col ${
        popular
          ? "border-ember/40 shadow-[0_0_40px_rgba(255,107,53,0.12)]"
          : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-ember text-void text-xs font-bold rounded-full uppercase tracking-wider whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold">{name}</h3>
      </div>
      <p className="text-gray-500 text-xs mb-5">{tagline}</p>

      {/* Price Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${market}-${durationLabel}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/20">
              {pricing.discountPct}% OFF
            </span>
            <span className="text-xs text-gray-500 line-through">
              {fmt(market, pricing.original)}
            </span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
              {fmt(market, pricing.sale)}
            </span>
            <span className="text-gray-500 text-xs">
              /{durationLabel.toLowerCase()}
            </span>
          </div>

          {pricing.months > 1 && (
            <p className="text-sm text-gray-500 mt-1">
              Effectively{" "}
              <span className="text-gray-300 font-medium">
                {fmt(market, pricing.perMonth)}/mo
              </span>
            </p>
          )}

          <p className="text-xs text-[#25D366] mt-1">
            You save {fmt(market, pricing.flatDiscount)}
            {pricing.months > 1 && (
              <span>
                {" "}
                ({fmt(market, pricing.flatDiscount / pricing.months)}/mo)
              </span>
            )}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Features */}
      <div className="flex-1 mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
          What&apos;s included
        </p>
        <ul className="space-y-2.5 sm:max-h-[340px] sm:overflow-y-auto sm:pr-2">
          {features.map((f) => (
            <li
              key={f}
              className="flex items-start gap-2 text-sm text-gray-300"
            >
              <Check
                size={15}
                className={`shrink-0 mt-0.5 ${
                  popular ? "text-ember" : "text-electric"
                }`}
              />
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <button
        onClick={onGetStarted}
        className={`inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 text-center cursor-pointer ${
          popular
            ? "bg-gradient-ember text-void hover:shadow-[0_0_20px_rgba(255,107,53,0.4)]"
            : "bg-gradient-electric text-void hover:shadow-[0_0_20px_rgba(108,99,255,0.4)]"
        }`}
      >
        Get Started
        <ArrowRight size={16} />
      </button>
    </motion.div>
  );
}
