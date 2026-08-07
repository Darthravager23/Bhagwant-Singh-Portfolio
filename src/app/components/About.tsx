import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const verticalStats = [
  {
    value: "17+",
    label: "Publications",
    desc: "Peer-reviewed research papers",
  },
  { value: "39", label: "Citations", desc: "Google Scholar citations" },
  { value: "h-4", label: "h-index", desc: "Research impact index" },
  { value: "10+", label: "Languages", desc: "Low-resource NLP systems developed" },
];

const timeline = [
  {
    year: "2019–2020",
    title: "Applied Cybersecurity Foundations(Ooptional)",
    desc: "Research Assistant at FlipFlop InfoSec Labs — penetration testing, vulnerability assessment, firewall configuration and intrusion-detection tuning.",
  },
  {
    year: "2020–2022",
    title: "M.Tech in Computer Science & Engineering",
    desc: "Punjabi University, Patiala (CGPA 9.53) — academic focus on cybersecurity, malware analysis, network security and artificial intelligence.",
  },
  {
    year: "2022–2024",
    title: "Academic Teaching & Curriculum",
    desc: "Assistant Professor at Universal College, Patran — teaching computer networks, AI, machine learning, network security and deep learning.",
  },
  {
    year: "2023–Present",
    title: "Ph.D. in AI-Driven Malware Detection",
    desc: "Punjabi University, Patiala — hybrid static–dynamic analysis, feature optimisation and explainable machine learning for malware classification.",
  },
  {
    year: "2024–2026",
    title: "Senior Computer Scientist, MeitY BHASHINI",
    desc: "HIMANGY project — multi-task transformer shallow-parsing models (XLM-RoBERTa, MuRIL) developed for 10+ low-resource Indian languages.",
  },
  {
    year: "2026–Present",
    title: "Assistant Professor, Shivalik University",
    desc: "Department of Computer Science and Engineering, Dehradun — teaching and research in AI, cybersecurity and network security.",
  },
];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function About() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section
      id="research"
      ref={ref}
      className="py-14 lg:py-20"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          {/* Left — Vertical Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-3 h-full"
          >
            <div
              className="text-xs tracking-widest uppercase mb-2"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#1E40AF",
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              Research Impact
            </div>
            {verticalStats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -16 }}
                animate={visible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                className="flex flex-1 items-center gap-5 rounded-2xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(15,23,42,0.08)",
                  boxShadow: "0 1px 4px rgba(15,23,42,0.06)",
                  padding: "1.5rem 1.75rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "2.25rem",
                    color: "#0F172A",
                    letterSpacing: "-0.03em",
                    minWidth: "5rem",
                  }}
                >
                  {s.value}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "#111827",
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.85rem",
                      color: "#64748B",
                      marginTop: "0.2rem",
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div
              className="text-xs tracking-widest uppercase mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                color: "#64748B",
                fontWeight: 600,
                letterSpacing: "0.12em",
              }}
            >
              Research Journey
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute left-[7px] top-3 bottom-3 w-px"
                style={{
                  background:
                    "linear-gradient(to bottom, #1E40AF, rgba(30,64,175,0.1))",
                }}
              />
              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 mt-1.5">
                      <div
                        className="w-3.5 h-3.5 rounded-full border-2"
                        style={{
                          background:
                            i === timeline.length - 1 ? "#1E40AF" : "#ffffff",
                          borderColor: "#1E40AF",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        className="mb-0.5"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.72rem",
                          color: "#1E40AF",
                          fontWeight: 600,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {item.year}
                      </div>
                      <div
                        className="mb-1"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.95rem",
                          color: "#111827",
                        }}
                      >
                        {item.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.88rem",
                          color: "#64748B",
                          lineHeight: 1.65,
                        }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
