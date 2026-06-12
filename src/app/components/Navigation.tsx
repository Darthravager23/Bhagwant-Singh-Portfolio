import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Collaborations", href: "#collaborations" },
  { label: "Awards", href: "#awards" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <button
            onClick={() => handleNav("#hero")}
            className="text-[#0F172A] tracking-tight hover:text-[#1E40AF] transition-colors"
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.05rem" }}
          >
            Bhagwant Singh
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => handleNav(item.href)}
                  className="text-[#475569] hover:text-[#0F172A] transition-colors text-sm tracking-wide"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#0F172A] p-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-40 bg-white pt-16 px-6"
          >
            <ul className="flex flex-col gap-6 mt-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => handleNav(item.href)}
                    className="text-[#0F172A] text-xl w-full text-left border-b border-slate-100 pb-4"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
