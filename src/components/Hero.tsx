import { motion } from "motion/react";
import {
  ArrowRight,
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Globe,
  Mail,
  TrendingUp,
  Bot,
  Check,
  CheckCheck,
  Send,
} from "lucide-react";

/* ── Orbit icon data ── */
const innerIcons = [
  { Icon: Youtube, color: "#FF0000", shadow: "rgba(255,0,0,0.25)", label: "YouTube" },
  { Icon: Facebook, color: "#1877F2", shadow: "rgba(24,119,242,0.25)", label: "Facebook" },
  { Icon: Instagram, color: "#E4405F", shadow: "rgba(228,64,95,0.25)", label: "Instagram" },
  { Icon: Bot, color: "#6C63FF", shadow: "rgba(108,99,255,0.25)", label: "AI Agent" },
];

const outerIcons = [
  { Icon: Linkedin, color: "#0A66C2", shadow: "rgba(10,102,194,0.25)", label: "LinkedIn" },
  { Icon: Globe, color: "#00E5FF", shadow: "rgba(0,229,255,0.25)", label: "Website" },
  { Icon: Mail, color: "#FF6B35", shadow: "rgba(255,107,53,0.25)", label: "Email" },
  { Icon: TrendingUp, color: "#00C896", shadow: "rgba(0,200,150,0.25)", label: "Growth" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-electric/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[rgba(0,229,255,0.08)] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-1/4 w-[300px] h-[300px] bg-[rgba(255,107,53,0.07)] rounded-full blur-[120px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDgsIDk5LCAyNTUsIDAuMDQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ═══ Text Content ═══ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(108,99,255,0.08)] border border-[rgba(108,99,255,0.20)] text-xs font-mono text-electric-2/80 mb-5 tracking-wide">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-electric"></span>
              </span>
              Powering Modern Brands
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-display font-bold leading-[1.1] mb-6 tracking-tight">
              Grow &amp; Scale Your Business
              <br />
              <span className="text-gradient-spectrum">
                With a Complete Digital&nbsp;Ecosystem
              </span>
            </h1>

            <p className="text-[0.9rem] md:text-[0.95rem] text-gray-400 mb-8 leading-relaxed max-w-md">
              WhatsApp API &bull; AI Agents &bull; Social Media &bull; Web Dev
              — everything you need under one roof to dominate your market.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  window.history.pushState(null, "", "/");
                }}
                className="inline-flex items-center justify-center gap-2 bg-[image:linear-gradient(135deg,#6C63FF_0%,#00E5FF_60%,#FF6B35_100%)] text-void font-semibold text-sm px-7 py-3 rounded-full hover:shadow-[0_0_28px_rgba(0,229,255,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* ═══ Visual Content — Phone + Orbit Icons ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[480px] lg:h-[560px] hidden md:flex items-center justify-center"
          >
            {/* ── Phone Frame ── */}
            <div className="relative w-[260px] h-[520px] bg-[#0b141a] border border-white/10 rounded-[36px] shadow-2xl shadow-electric/10 overflow-hidden flex flex-col z-20">
              {/* Dynamic Island */}
              <div className="absolute top-2 inset-x-0 flex justify-center z-30">
                <div className="w-28 h-6 bg-black rounded-full" />
              </div>

              {/* WhatsApp Header */}
              <div className="bg-[#1f2c34] pt-10 pb-2 px-3 flex items-center gap-2.5 border-b border-white/[0.04]">
                <div className="w-8 h-8 rounded-full bg-gradient-electric flex items-center justify-center text-[0.6rem] font-bold text-white shrink-0">FG</div>
                <div className="flex-1 min-w-0">
                  <p className="text-[0.7rem] font-semibold text-white leading-none truncate">FlowGent Support</p>
                  <p className="text-[0.55rem] text-[#8696a0] mt-0.5">online</p>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 bg-[#0b141a] px-2.5 py-3 flex flex-col gap-2 overflow-hidden relative">
                {/* Subtle WA pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E\")" }} />

                {/* Incoming: agent */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="max-w-[85%] self-start"
                >
                  <div className="bg-[#1f2c34] rounded-xl rounded-tl-sm px-3 py-2 border border-white/[0.04]">
                    <p className="text-[0.65rem] text-[#e9edef] leading-relaxed">
                      Hi! 👋 Welcome to FlowGent. How can I help you today?
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[0.5rem] text-[#8696a0]">10:30 AM</span>
                    </div>
                  </div>
                </motion.div>

                {/* Outgoing: user */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="max-w-[80%] self-end"
                >
                  <div className="bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-2">
                    <p className="text-[0.65rem] text-[#e9edef] leading-relaxed">
                      I need WhatsApp API for my business
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[0.5rem] text-[#8696a0]">10:31 AM</span>
                      <CheckCheck size={10} className="text-[#53bdeb]" />
                    </div>
                  </div>
                </motion.div>

                {/* Incoming: agent reply */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.4 }}
                  className="max-w-[85%] self-start"
                >
                  <div className="bg-[#1f2c34] rounded-xl rounded-tl-sm px-3 py-2 border border-white/[0.04]">
                    <p className="text-[0.65rem] text-[#e9edef] leading-relaxed">
                      Great choice! 🚀 We'll set up your official Meta WhatsApp API with chatbot, CRM & analytics.
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[0.5rem] text-[#8696a0]">10:31 AM</span>
                    </div>
                  </div>
                </motion.div>

                {/* Outgoing: user reply */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.6, duration: 0.4 }}
                  className="max-w-[75%] self-end"
                >
                  <div className="bg-[#005c4b] rounded-xl rounded-tr-sm px-3 py-2">
                    <p className="text-[0.65rem] text-[#e9edef] leading-relaxed">
                      Let's get started! 🎉
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[0.5rem] text-[#8696a0]">10:32 AM</span>
                      <CheckCheck size={10} className="text-[#53bdeb]" />
                    </div>
                  </div>
                </motion.div>

                {/* Typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0] }}
                  transition={{ delay: 3.2, duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="max-w-[30%] self-start"
                >
                  <div className="bg-[#1f2c34] rounded-xl rounded-tl-sm px-3 py-2.5 border border-white/[0.04] flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              </div>

              {/* Message Input Bar */}
              <div className="bg-[#1f2c34] px-2 py-2 flex items-center gap-2 border-t border-white/[0.04]">
                <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 flex items-center">
                  <span className="text-[0.6rem] text-[#8696a0]">Type a message</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center shrink-0">
                  <Send size={12} className="text-white ml-0.5" />
                </div>
              </div>
            </div>

            {/* ── Inner Orbit (4 icons) ── */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[280px] lg:w-[380px] h-[280px] lg:h-[380px] rounded-full z-10"
            >
              {/* Faint orbit ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.05]" />

              {innerIcons.map((item, i) => {
                const angle = (i / innerIcons.length) * 360;
                const rad = (angle * Math.PI) / 180;
                return (
                  <motion.div
                    key={item.label}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute w-9 lg:w-11 h-9 lg:h-11 rounded-xl bg-slate/90 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${Math.cos(rad) * 50}% - 18px)`,
                      top: `calc(50% + ${Math.sin(rad) * 50}% - 18px)`,
                      boxShadow: `0 4px 20px ${item.shadow}`,
                    }}
                  >
                    <item.Icon size={16} style={{ color: item.color }} />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ── Outer Orbit (4 icons) ── */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] lg:w-[540px] h-[400px] lg:h-[540px] rounded-full z-0"
            >
              {/* Faint orbit ring */}
              <div className="absolute inset-0 rounded-full border border-white/[0.04]" />

              {outerIcons.map((item, i) => {
                const angle = (i / outerIcons.length) * 360 + 45;
                const rad = (angle * Math.PI) / 180;
                return (
                  <motion.div
                    key={item.label}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
                    className="absolute w-8 lg:w-10 h-8 lg:h-10 rounded-xl bg-slate/80 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center"
                    style={{
                      left: `calc(50% + ${Math.cos(rad) * 50}% - 16px)`,
                      top: `calc(50% + ${Math.sin(rad) * 50}% - 16px)`,
                      boxShadow: `0 4px 16px ${item.shadow}`,
                    }}
                  >
                    <item.Icon size={14} style={{ color: item.color }} />
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Glow behind phone */}
            <div className="absolute w-72 h-72 bg-electric/10 rounded-full blur-[100px] z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
