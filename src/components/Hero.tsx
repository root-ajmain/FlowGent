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
  User,
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
  const iphoneFrame = '/iphone-frame.png';
  return (
    <section className="relative min-h-[calc(100svh-2rem)] md:min-h-screen flex items-center pt-16 md:pt-20 pb-10 md:pb-0 overflow-hidden bg-gradient-hero">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-electric/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[rgba(0,229,255,0.08)] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -right-1/4 w-[300px] h-[300px] bg-[rgba(255,107,53,0.07)] rounded-full blur-[120px]" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMDgsIDk5LCAyNTUsIDAuMDQpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
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

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-display font-bold leading-[1.1] mb-4 md:mb-6 tracking-tight">
              Grow &amp; Scale Your Business
              <br />
              <span className="text-gradient-spectrum">
                With a Complete Digital&nbsp;Ecosystem
              </span>
            </h1>

            <p className="text-[0.85rem] md:text-[0.95rem] text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-md">
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
            className="relative h-[340px] sm:h-[400px] md:h-[480px] lg:h-[560px] flex items-center justify-center"
          >
            {/* Soft gradient ribbon behind the visuals (fade in only) */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="absolute right-[-6%] top-1/4 w-[360px] h-[220px] rounded-3xl bg-gradient-to-tr from-[#6C63FF]/40 via-[#00E5FF]/25 to-[#FF6B35]/20 blur-[40px] z-[-1]"
            />
            {/* ── Phone Mockup (original/simpler design) ── */}
            <div className="relative w-[200px] h-[400px] sm:w-[220px] sm:h-[440px] md:w-[260px] md:h-[520px] rounded-[28px] sm:rounded-[32px] md:rounded-[36px] shadow-2xl shadow-electric/10 overflow-hidden flex items-center justify-center z-20">
              <div className="absolute inset-0 bg-gradient-to-br from-[#07121a] via-[#071a22] to-[#001218] opacity-95" />

              {/* Screen */}
              <div className="relative w-[86%] h-[92%] rounded-[20px] overflow-hidden z-10 bg-gradient-to-b from-[#071a20] to-[#07121a] border border-white/[0.04] flex flex-col p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-electric flex items-center justify-center text-white font-bold">FG</div>
                  <div>
                    <div className="text-sm font-semibold text-white">FlowGent</div>
                    <div className="text-[0.65rem] text-[#7f9aa3]">Featured demo</div>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden">
                  <div className="flex flex-col gap-3 overflow-auto h-full py-2">
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="self-start max-w-[78%]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#143236] flex items-center justify-center text-white">
                          <Bot size={14} />
                        </div>
                        <div className="bg-[#142b2b] text-white px-3 py-2 rounded-xl text-sm">Hello — I'm FlowBot, your AI assistant. How can I help today?</div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="self-end max-w-[75%]"
                    >
                      <div className="flex items-center gap-3 justify-end">
                        <div className="bg-[#00a884] text-white px-3 py-2 rounded-xl text-sm">I need WhatsApp API setup for my store</div>
                        <div className="w-8 h-8 rounded-full bg-[#0b1720] flex items-center justify-center text-white">
                          <User size={14} />
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                      className="self-start max-w-[85%]"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-electric flex items-center justify-center text-white">
                          <Bot size={14} />
                        </div>
                        <div className="bg-[#1f2c34] text-white px-3 py-2 rounded-xl text-sm">Great — I can connect your business to Meta's WhatsApp API, add a chatbot, and forward leads to your CRM.</div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex-1 h-2.5 bg-white/[0.04] rounded-full" />
                  <div className="w-8 h-8 rounded-full bg-[#00a884] flex items-center justify-center text-white">+</div>
                </div>
              </div>
            </div>

            {/* ── Inner Orbit (4 icons) ── */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-[220px] sm:w-[260px] md:w-[280px] lg:w-[380px] h-[220px] sm:h-[260px] md:h-[280px] lg:h-[380px] rounded-full z-10"
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
                      whileHover={{ scale: 1.12 }}
                      className="absolute w-7 sm:w-8 md:w-9 lg:w-11 h-7 sm:h-8 md:h-9 lg:h-11 rounded-lg sm:rounded-xl bg-slate/90 backdrop-blur-sm border border-white/10 flex items-center justify-center hover:shadow-[0_8px_30px_rgba(108,99,255,0.12)] transition-shadow"
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
              className="absolute w-[300px] sm:w-[340px] md:w-[400px] lg:w-[540px] h-[300px] sm:h-[340px] md:h-[400px] lg:h-[540px] rounded-full z-0"
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
                      whileHover={{ scale: 1.08 }}
                      className="absolute w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 rounded-lg sm:rounded-xl bg-slate/80 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center hover:shadow-[0_6px_20px_rgba(0,229,255,0.08)] transition-shadow"
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
