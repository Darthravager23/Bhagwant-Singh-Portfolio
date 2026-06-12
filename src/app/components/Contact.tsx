import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Mail, ExternalLink } from "lucide-react";

const links = [
  {
    label: "Email",
    value: "bhagwant.singh@research.ac",
    href: "mailto:bhagwant.singh@research.ac",
    icon: Mail,
  },
  {
    label: "ORCID",
    value: "0000-0002-XXXX-XXXX",
    href: "https://orcid.org",
    icon: ExternalLink,
  },
  {
    label: "Scopus",
    value: "Author Profile",
    href: "https://scopus.com",
    icon: ExternalLink,
  },
  {
    label: "Google Scholar",
    value: "Scholar Profile",
    href: "https://scholar.google.com",
    icon: ExternalLink,
  },
];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function Contact() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section id="contact" ref={ref} className="py-14 lg:py-20" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div
            className="text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: "Inter, sans-serif", color: "#1E40AF", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Get in Touch
          </div>
          <h2
            className="mb-5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            Open to Research Collaborations
          </h2>
          <p
            className="mb-12"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "#64748B", lineHeight: 1.75 }}
          >
            I welcome collaboration opportunities with academic institutions, government research labs, and industry partners working on AI, cybersecurity, and language technology challenges.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex flex-col items-center gap-2 p-5 rounded-xl border bg-white transition-shadow hover:shadow-sm group"
                style={{ borderColor: "rgba(15,23,42,0.08)", textDecoration: "none" }}
              >
                <link.icon size={18} color="#1E40AF" strokeWidth={1.5} />
                <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "#0F172A" }}>
                  {link.label}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#94A3B8", wordBreak: "break-all" }}>
                  {link.value}
                </div>
              </a>
            ))}
          </div>

          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm transition-all hover:opacity-90"
            style={{
              background: "#0F172A",
              color: "#ffffff",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "0.95rem",
              letterSpacing: "0.01em",
            }}
            onClick={() => window.open("mailto:bhagwant.singh@research.ac")}
          >
            Start Collaboration
            <Mail size={16} />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 border-t" style={{ borderColor: "rgba(15,23,42,0.08)" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#0F172A" }}
          >
            Bhagwant Singh
          </div>
          <div
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#94A3B8" }}
          >
            Research · Publications · AI · Cybersecurity
          </div>
          <div
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#CBD5E1" }}
          >
            © 2024 All rights reserved
          </div>
        </div>
      </div>
    </section>
  );
}
