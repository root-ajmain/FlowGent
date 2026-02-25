import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-void pt-16 pb-8 border-t border-white/[0.04] relative">
      {/* Accent Border Top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-electric opacity-60" />

      {/* Scroll to Services arrow */}
      <button
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }}
        className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-electric flex items-center justify-center shadow-[0_0_20px_rgba(108,99,255,0.35)] hover:shadow-[0_0_30px_rgba(108,99,255,0.5)] transition-all duration-300 hover:-translate-y-1 cursor-pointer z-20"
        aria-label="Scroll to services"
      >
        <ArrowUp size={18} className="text-void" />
      </button>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="text-2xl font-display font-bold tracking-tighter flex items-center">
                <span className="text-white">Flow</span>
                <span className="text-gradient-mixed">Gent</span>
              </div>
            </Link>
            <p className="text-gray-500 leading-relaxed text-[0.8rem]">
              Digital Ecosystems for Modern Brands. A cutting-edge digital agency
              offering WhatsApp Official Business API, Social Media, Web Dev, and Custom
              AI Agents — powering businesses worldwide.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-electric hover:text-void transition-all duration-300 text-gray-500">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-electric hover:text-void transition-all duration-300 text-gray-500">
                <Instagram size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-electric hover:text-void transition-all duration-300 text-gray-500">
                <Youtube size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.04] flex items-center justify-center hover:bg-electric hover:text-void transition-all duration-300 text-gray-500">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 border-b border-electric/20 pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: "WhatsApp Official Business API", href: "/services/whatsapp-api" },
                { name: "Social Media Ecosystem", href: "/services/social-media" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "Web Development", href: "/services/web-development" },
                { name: "AI Agents (n8n)", href: "/services/ai-agents" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-accent-teal transition-colors text-[0.8rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 border-b border-electric/20 pb-2 inline-block">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Blog", href: "/blog" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-accent-teal transition-colors text-[0.8rem]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-semibold text-sm mb-5 border-b border-electric/20 pb-2 inline-block">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-500 text-[0.8rem]">
                <Phone size={16} className="text-electric shrink-0 mt-0.5" />
                <span>+880 1804-277420</span>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-[0.8rem]">
                <Mail size={16} className="text-electric shrink-0 mt-0.5" />
                <a
                  href="mailto:info@flowgent.tech"
                  className="hover:text-electric transition-colors"
                >
                  info@flowgent.tech
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-500 text-[0.8rem]">
                <MapPin size={16} className="text-electric shrink-0 mt-0.5" />
                <span>Serving Clients Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} FlowGent. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-electric transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-electric transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
