import { useMemo } from "react";
import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";

// Pre-generate particle positions to avoid layout thrash
function generateParticles() {
  return [...Array(15)].map((_, i) => ({
    id: i,
    x: Math.random() * 50 - 25,
    duration: Math.random() * 5 + 5,
    width: Math.random() * 20 + 10,
    height: Math.random() * 20 + 10,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));
}

export default function CTA() {
  const particles = useMemo(generateParticles, []);

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-void to-slate z-0" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{
              y: [0, -100, 0],
              x: [0, p.x, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-electric/30 blur-md"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center glass-card rounded-[2.5rem] p-10 md:p-16 border border-white/[0.08] shadow-[0_0_60px_rgba(108,99,255,0.1)]">
          <h2 className="text-3xl md:text-[2.75rem] font-display font-bold mb-5 leading-tight">
            Ready to Build Your <br className="hidden md:block" />
            <span className="text-gradient-spectrum">Digital Ecosystem?</span>
          </h2>

          <p className="text-sm md:text-base text-gray-400 mb-4 max-w-xl mx-auto leading-relaxed">
            Want to onboard today or need to discuss your project with an expert?
            Reach out now — our team is ready to help you get started.
          </p>

          <p className="text-xs text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
            Call us directly or message us on WhatsApp for an instant response. We typically reply within minutes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+8801804277420"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-electric text-void font-semibold text-sm px-7 py-3 rounded-full hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Call Now
            </a>

            <a
              href="https://wa.me/8801804277420"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366]/15 border border-[#25D366]/25 text-white/90 font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#25D366]/25 transition-all duration-300"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
