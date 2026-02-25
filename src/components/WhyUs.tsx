import { motion } from "motion/react";
import {
  ShieldCheck,
  Bot,
  Globe,
  Headphones,
  Zap,
  BarChart3,
  Users,
  Layers,
  Clock,
} from "lucide-react";

const highlights = [
  {
    title: "Official & Compliant",
    description:
      "We are an authorized WhatsApp Business Solution Provider, ensuring your campaigns are 100% compliant with Meta policies. Your data stays safe, your brand stays protected.",
    icon: ShieldCheck,
    color: "text-electric",
    bg: "bg-electric/10",
    border: "border-electric/15",
  },
  {
    title: "AI-First Approach",
    description:
      "We embed intelligent automation into every service — reducing your costs and scaling your operations without scaling your headcount. From chatbots to predictive analytics.",
    icon: Bot,
    color: "text-accent-teal",
    bg: "bg-accent-teal/10",
    border: "border-accent-teal/15",
  },
  {
    title: "Local Expertise, Global Reach",
    description:
      "We combine deep market insight with world-class execution — delivering results for clients across industries and geographies. Trusted by 500+ brands worldwide.",
    icon: Globe,
    color: "text-ember",
    bg: "bg-ember/10",
    border: "border-ember/15",
  },
];

const extras = [
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    desc: "Round-the-clock expert support so you never miss a customer conversation.",
    color: "text-plasma",
    bg: "bg-plasma/8",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Setup",
    desc: "Go live within 24 hours with our streamlined onboarding process.",
    color: "text-electric-2",
    bg: "bg-electric-2/8",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    desc: "Real-time analytics & monthly performance reports to track your ROI.",
    color: "text-accent-teal",
    bg: "bg-accent-teal/8",
  },
  {
    icon: Users,
    title: "Scalable Teams",
    desc: "Multi-agent shared inbox with roles, permissions & agent routing.",
    color: "text-ember",
    bg: "bg-ember/8",
  },
  {
    icon: Layers,
    title: "Full-Stack Ecosystem",
    desc: "WhatsApp, Social, Web, AI — everything under one roof, fully integrated.",
    color: "text-electric",
    bg: "bg-electric/8",
  },
  {
    icon: Clock,
    title: "Zero Downtime",
    desc: "Enterprise-grade infrastructure with 99.9% uptime guaranteed.",
    color: "text-plasma",
    bg: "bg-plasma/8",
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 bg-primary-navy relative overflow-hidden"
    >
      {/* Diagonal Slash Cut */}
      <div
        className="absolute top-0 left-0 w-full h-16 md:h-24 bg-primary-dark"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 100%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Why Businesses{" "}
            <span className="text-gradient-teal">Choose FlowGent</span>
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            We don't just build tools — we build complete digital ecosystems that grow with your business.
          </p>
        </div>

        {/* Main 3 highlights as horizontal cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-14">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`glass-card rounded-2xl p-6 border ${item.border} group`}
            >
              <div
                className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center mb-4 border ${item.border} transition-transform duration-300 group-hover:scale-110`}
              >
                <item.icon size={22} className={item.color} />
              </div>
              <h3 className="text-base font-display font-bold text-white mb-2 group-hover:text-gradient-spectrum transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-[0.8rem] text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {extras.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card rounded-xl p-5 group"
            >
              <div className={`w-9 h-9 rounded-lg ${item.bg} flex items-center justify-center mb-3`}>
                <item.icon size={18} className={item.color} />
              </div>
              <h4 className="text-sm font-display font-semibold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-[0.75rem] text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
