import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "AI-Driven Malware Detection Framework",
    category: "Cybersecurity · Explainable AI",
    abstract:
      "A hybrid static-dynamic analysis framework leveraging deep neural networks and explainable AI techniques to classify and explain malware behaviour at scale. The system generates human-readable threat reports, enabling security analysts to act on AI-driven intelligence with full transparency and auditability.",
    tags: ["Deep Learning", "XAI", "Malware", "SHAP"],
    color: "#1E40AF",
    bgColor: "#EFF6FF",
  },
  {
    id: "02",
    title: "Multilingual NLP Platform",
    category: "Natural Language Processing · Language Technologies",
    abstract:
      "A comprehensive platform for developing and benchmarking multilingual transformer models across low-resource languages. Includes annotated corpora, multi-task learning pipelines, and cross-lingual transfer mechanisms designed to bridge the AI language gap for underrepresented linguistic communities.",
    tags: ["Transformers", "BERT", "Low-resource NLP", "Multi-task"],
    color: "#0F766E",
    bgColor: "#F0FDFA",
  },
  {
    id: "03",
    title: "Adversarial AI & Security Analytics",
    category: "Adversarial Machine Learning · Security",
    abstract:
      "An investigation into adversarial vulnerabilities of AI security models and the development of robust defence mechanisms. This research establishes formal frameworks for evaluating and improving the resilience of machine learning systems deployed in adversarial cybersecurity environments.",
    tags: ["Adversarial ML", "Robustness", "Attack Defence", "Security"],
    color: "#7C3AED",
    bgColor: "#F5F3FF",
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

export function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section id="projects" ref={ref} className="py-14 lg:py-20" style={{ background: "#ffffff" }}>
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
            Featured Research
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
            Flagship Research Projects
          </h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border`}
              style={{ borderColor: "rgba(15,23,42,0.08)" }}
            >
              {/* Visual panel — alternating */}
              <div
                className={`lg:col-span-4 ${i % 2 === 1 ? "lg:order-2" : ""} flex items-center justify-center p-10 min-h-[180px]`}
                style={{ background: project.bgColor }}
              >
                <div className="text-center">
                  <div
                    className="text-7xl mb-3 select-none"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 800,
                      color: project.color,
                      opacity: 0.12,
                      fontSize: "6rem",
                      letterSpacing: "-0.05em",
                    }}
                  >
                    {project.id}
                  </div>
                  <div
                    className="w-16 h-1 mx-auto rounded-full"
                    style={{ background: project.color, opacity: 0.35 }}
                  />
                </div>
              </div>

              {/* Content panel */}
              <div className={`lg:col-span-8 ${i % 2 === 1 ? "lg:order-1" : ""} p-8 lg:p-10 flex flex-col justify-between`}>
                <div>
                  <div
                    className="text-xs mb-3"
                    style={{ fontFamily: "Inter, sans-serif", color: project.color, fontWeight: 600, letterSpacing: "0.05em" }}
                  >
                    {project.category}
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#0F172A",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="mb-6"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#475569", lineHeight: 1.8 }}
                  >
                    {project.abstract}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded text-xs"
                        style={{
                          background: `${project.bgColor}`,
                          color: project.color,
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 500,
                          border: `1px solid ${project.color}22`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: project.color }}
                    onClick={() => document.querySelector("#publications")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Publication <ExternalLink size={13} />
                  </button>
                  <button
                    className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, color: "#64748B" }}
                  >
                    Read More <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
