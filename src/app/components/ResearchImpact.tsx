import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const cybersecItems = [
  { label: "Malware Detection", detail: "Hybrid Static & Dynamic Analysis" },
  { label: "Explainable AI", detail: "Interpretable Security Models" },
  { label: "Adversarial ML", detail: "Evasion Attacks & Defences" },
  { label: "Security Analytics", detail: "EMBER, VirusShare, MalwareBazaar Datasets" },
  { label: "Intrusion Detection", detail: "ML-Based Network Traffic Analysis" },
];

const nlpItems = [
  { label: "Multilingual Datasets", detail: "18,000+ Annotated Sentences" },
  { label: "Transformer Models", detail: "XLM-RoBERTa & MuRIL" },
  { label: "Low-Resource Languages", detail: "10+ Indian Languages" },
  { label: "Shallow Parsing", detail: "POS, Chunking, NER, Vibhakti Detection" },
  { label: "FastAPI Deployment", detail: "Internal Inference Service" },
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

function ImpactCard({ label, detail, delay, visible }: { label: string; detail: string; delay: number; visible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={visible ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="flex items-center justify-between p-4 rounded-lg border transition-colors hover:border-[#1E40AF]/30"
      style={{ background: "#ffffff", borderColor: "rgba(15,23,42,0.08)" }}
    >
      <div>
        <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#0F172A" }}>{label}</div>
        <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#64748B", marginTop: 2 }}>{detail}</div>
      </div>
      <div className="w-2 h-2 rounded-full flex-shrink-0 ml-4" style={{ background: "#1E40AF" }} />
    </motion.div>
  );
}

export function ResearchImpact() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section ref={ref} className="py-14 lg:py-20" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "Inter, sans-serif", color: "#1E40AF", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Research Impact
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            Two Pillars of Research Excellence
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Cybersecurity */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: "#1E40AF" }} />
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0F172A" }}>
                  Cybersecurity Research
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#64748B" }}>
                  AI-driven malware detection & explainable cybersecurity
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {cybersecItems.map((item, i) => (
                <ImpactCard key={item.label} label={item.label} detail={item.detail} delay={0.1 + i * 0.06} visible={visible} />
              ))}
            </div>
          </div>

          {/* NLP */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 rounded-full" style={{ background: "#0F766E" }} />
              <div>
                <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0F172A" }}>
                  Language Technologies
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#64748B" }}>
                  Multilingual NLP for low-resource Indian languages
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {nlpItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 12 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.06 }}
                  className="flex items-center justify-between p-4 rounded-lg border transition-colors hover:border-[#0F766E]/30"
                  style={{ background: "#ffffff", borderColor: "rgba(15,23,42,0.08)" }}
                >
                  <div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#0F172A" }}>{item.label}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#64748B", marginTop: 2 }}>{item.detail}</div>
                  </div>
                  <div className="w-2 h-2 rounded-full flex-shrink-0 ml-4" style={{ background: "#0F766E" }} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
