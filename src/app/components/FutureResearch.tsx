import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const themes = [
  {
    num: "01",
    title: "Foundation Models for Cybersecurity",
    desc: "Developing large-scale pre-trained models specifically adapted for security intelligence, threat detection, and vulnerability analysis.",
  },
  {
    num: "02",
    title: "Privacy-Preserving AI",
    desc: "Federated learning and differential privacy techniques enabling collaborative security research without exposing sensitive organisational data.",
  },
  {
    num: "03",
    title: "AI Governance & Policy",
    desc: "Contributing to international frameworks for responsible AI deployment in critical security infrastructure and government systems.",
  },
  {
    num: "04",
    title: "Neurosymbolic Security Systems",
    desc: "Combining neural pattern recognition with symbolic reasoning to create more interpretable and reliable automated threat analysis.",
  },
  {
    num: "05",
    title: "Global NLP for Security",
    desc: "Expanding multilingual security analytics to cover 50+ languages, enabling coordinated cyber threat intelligence across borders.",
  },
  {
    num: "06",
    title: "Human-AI Collaboration",
    desc: "Designing AI-assisted security analyst workflows where humans and intelligent systems complement each other's strengths in real-time threat response.",
  },
];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function FutureResearch() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section ref={ref} className="py-14 lg:py-20" style={{ background: "#0F172A" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="mb-16"
        >
          <div
            className="text-xs tracking-widest uppercase mb-5"
            style={{ fontFamily: "Inter, sans-serif", color: "#64748B", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Looking Ahead
          </div>
          <h2
            className="max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
              color: "#F8FAFC",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            Future Research Directions
          </h2>
          <p
            className="mt-5 max-w-xl"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "#94A3B8", lineHeight: 1.75 }}
          >
            The next phase of research focuses on expanding the scope and impact of trustworthy AI — from foundation models for security to globally inclusive language technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.num}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="rounded-xl p-7 transition-transform hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="mb-5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "rgba(30,64,175,0.3)",
                  letterSpacing: "-0.04em",
                }}
              >
                {theme.num}
              </div>
              <h3
                className="mb-3"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#E2E8F0", lineHeight: 1.35 }}
              >
                {theme.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#94A3B8", lineHeight: 1.7 }}>
                {theme.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
