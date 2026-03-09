import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Zap, Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen || showPopup ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen, showPopup]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setIsMobileMenuOpen(false);

      // "Home" — scroll to the very top when already on /
      if (href === "/" && pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", "/");
        return;
      }

      // If href has a hash and we're already on the target page, scroll smoothly
      const [path, hash] = href.split("#");
      if (hash && (path === "/" || path === "") && pathname === "/") {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Clean URL without hash
          window.history.pushState(null, "", "/");
          // mark section active
          setActiveSection(hash);
        }
      }
    },
    [pathname]
  );

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "WhatsApp API & Platform Pricing", href: "/#pricing" },
    { name: "About", href: "/#why-us" },
    { name: "Contact", href: "/contact" },
  ];


  // Observe sections on the page and set active nav item when they enter the viewport
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const ids = navItems
      .map(i => (i.href.includes('#') ? i.href.split('#')[1] : null))
      .filter(Boolean) as string[];

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting);
      if (visible.length === 0) {
        setActiveSection(null);
        return;
      }
      // pick the most visible section
      const top = visible.reduce((a, b) => (a.intersectionRatio > b.intersectionRatio ? a : b));
      setActiveSection(top.target.id);
    }, { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0.1, 0.25, 0.5, 0.75, 1] });

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);
  const mobileMenu = (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 bg-void/98 backdrop-blur-xl z-[9998] flex flex-col items-center justify-center gap-8"
        >
          <ul className="flex flex-col items-center gap-6">
            {navItems.map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35, delay: 0.05 + i * 0.07, ease: "easeOut" }}
              >
                {(() => {
                  const hasHash = item.href.includes('#');
                  const id = hasHash ? item.href.split('#')[1] : null;
                  const isActive = hasHash ? activeSection === id : (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/"));
                  const linkTarget = hasHash ? "/" : item.href;
                  return (
                    <Link
                      to={linkTarget}
                      onClick={(e) => { handleNavClick(e, item.href); if (hasHash && id) setActiveSection(id); setIsMobileMenuOpen(false); }}
                      className={`text-xl font-display font-medium transition-colors ${isActive ? 'text-gradient-spectrum' : 'text-white hover:text-electric'}`}
                    >
                      {item.name}
                    </Link>
                  );
                })()}
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.35, delay: 0.05 + navItems.length * 0.07, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-electric text-void font-semibold text-base px-7 py-3 rounded-full mt-4 inline-block cursor-pointer"
            >
              Get Started
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  const popup = (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
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
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10"
            >
              <X size={20} />
            </button>

            <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center mx-auto mb-5 border border-electric/20">
              <Zap size={24} className="text-electric" />
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-2">
              Let's Get Started!
            </h3>

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
  );

  return (
    <>
    {/* Portal the popup & mobile menu to document.body so they're not trapped inside the header's stacking context */}
    {createPortal(popup, document.body)}
    {createPortal(mobileMenu, document.body)}

    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-[70] relative">
          <div className="text-xl font-display font-bold tracking-tighter flex items-center">
            <span className="text-white">Flow</span>
            <span className="text-gradient-mixed">Gent</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const hasHash = item.href.includes('#');
              const id = hasHash ? item.href.split('#')[1] : null;
              const isActive = hasHash ? activeSection === id : (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href.split("#")[0]) && item.href.split("#")[0] !== "/"));

              return (
                <li key={item.name}>
                  {(() => {
                    const linkTarget = hasHash ? "/" : item.href;
                    return (
                      <Link
                        to={linkTarget}
                        onClick={(e) => { handleNavClick(e, item.href); if (hasHash && id) setActiveSection(id); }}
                        className={`text-[0.8rem] font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-gradient-spectrum' : 'text-gray-400 hover:text-white'}`}
                      >
                        {item.name}
                      </Link>
                    );
                  })()}
                </li>
              );
            })}
          </ul>
          <Link
            to="/contact"
            className="bg-gradient-electric text-void font-semibold text-xs px-5 py-2 rounded-full hover:shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all duration-300 tracking-wide cursor-pointer"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-[9999] relative text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
    </>
  );
}
