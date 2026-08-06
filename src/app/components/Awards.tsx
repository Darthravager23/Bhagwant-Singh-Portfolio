import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Award } from "lucide-react";

const awards = [
  {
    title: "Best Paper Award",
    org: "5th International Conference on Smart Systems: Innovations in Computing",
    year: "2025",
    desc: "Awarded for the paper \"Optimizing Malware Detection: Effective Pre-Processing Techniques for Enhanced Dataset Preparation,\" recognising its contribution to malware-detection dataset preparation methodology.",
  },
  {
    title: "Registered Industrial Design",
    org: "Government of India",
    year: "Registered",
    desc: "One industrial design registered with the Government of India, recognising an original contribution developed through applied research work.",
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

export function Awards() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section id="awards" ref={ref} className="py-14 lg:py-20" style={{ background: "#ffffff" }}>
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
            Recognition
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
            Awards & Recognition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="rounded-xl border p-8 transition-shadow hover:shadow-sm"
              style={{ borderColor: "rgba(15,23,42,0.08)", background: "#FAFAFA" }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "#EFF6FF" }}
                >
                  <Award size={18} color="#1E40AF" strokeWidth={1.5} />
                </div>
                <span
                  className="text-sm px-3 py-1 rounded-full"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    background: "#0F172A",
                    color: "#ffffff",
                  }}
                >
                  {award.year}
                </span>
              </div>
              <h3
                className="mb-1.5"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#0F172A", lineHeight: 1.3 }}
              >
                {award.title}
              </h3>
              <div
                className="mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "#1E40AF", fontWeight: 500 }}
              >
                {award.org}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#64748B", lineHeight: 1.75 }}>
                {award.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
