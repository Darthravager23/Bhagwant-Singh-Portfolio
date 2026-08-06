import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Layers, Shield, Globe } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "AI-Based Malware Detection",
    desc: "Developing intelligent classification frameworks that integrate static and dynamic feature representations to identify known, evolving, and previously unseen malware with high reliability.",
    tag: "Hybrid Analysis · Deep Learning",
  },
  {
    icon: Shield,
    title: "Explainable & Adversarially Robust AI",
    desc: "Investigating adversarial attacks, evasion techniques and defence mechanisms, while building interpretable models that give security analysts transparent, trustworthy detection decisions.",
    tag: "Explainable AI · Adversarial ML",
  },
  {
    icon: Globe,
    title: "Multilingual Security Analytics",
    desc: "Applying multilingual transformer models such as XLM-RoBERTa and MuRIL to linguistic analysis and security intelligence, addressing low-resource Indian language challenges.",
    tag: "Transformer NLP · Low-Resource Languages",
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

export function ResearchVision() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section ref={ref} className="py-14 lg:py-20" style={{ background: "#0F172A" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-16"
        >
          <div
            className="text-xs tracking-widest uppercase mb-5 inline-block"
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(100,116,139,1)", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Research Vision
          </div>
          <h2
            className="max-w-3xl mx-auto leading-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.2vw, 2.75rem)",
              color: "#F8FAFC",
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            Advancing Interpretable AI for Cybersecurity and Language Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="group relative rounded-xl p-8 transition-transform hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center mb-6"
                style={{ background: "rgba(30,64,175,0.25)" }}
              >
                <card.icon size={20} color="#93C5FD" strokeWidth={1.5} />
              </div>
              <h3
                className="mb-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#F1F5F9",
                  lineHeight: 1.35,
                }}
              >
                {card.title}
              </h3>
              <p
                className="mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#94A3B8", lineHeight: 1.75 }}
              >
                {card.desc}
              </p>
              <span
                className="inline-block px-2.5 py-1 rounded text-xs"
                style={{
                  background: "rgba(30,64,175,0.18)",
                  color: "#93C5FD",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                }}
              >
                {card.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
