import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const timeline = [
  { year: "2018–2020", title: "AI Research Foundations", desc: "Established research direction in machine learning and deep learning for security applications." },
  { year: "2020–2021", title: "Malware Analytics", desc: "Developed static-dynamic analysis frameworks for intelligent malware classification and detection." },
  { year: "2021–2022", title: "Explainable AI", desc: "Pioneered XAI methodologies for transparent cybersecurity systems, enabling interpretable threat analysis." },
  { year: "2022–2023", title: "Multilingual NLP", desc: "Expanded research to low-resource language technologies and multilingual transformer architectures." },
  { year: "2023–Present", title: "Trustworthy AI Systems", desc: "Integrating adversarial robustness, fairness, and accountability into next-generation AI security frameworks." },
];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function About() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section id="research" ref={ref} className="py-14 lg:py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <div
              className="text-xs tracking-widest uppercase mb-5"
              style={{ fontFamily: "Inter, sans-serif", color: "#1E40AF", fontWeight: 600, letterSpacing: "0.12em" }}
            >
              About the Researcher
            </div>
            <h2
              className="mb-8 leading-tight"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                color: "#111827",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Research at the Intersection of AI and Cybersecurity
            </h2>
            <div className="space-y-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "#475569", lineHeight: 1.8 }}>
              <p>
                Bhagwant Singh is an international researcher whose work bridges artificial intelligence, cybersecurity, and natural language processing. His research addresses critical challenges in building AI systems that are not only highly capable but also trustworthy, transparent, and resilient against adversarial threats.
              </p>
              <p>
                With a focus on explainable malware detection, his frameworks have enabled security practitioners to understand and act on AI-driven threat intelligence — moving beyond black-box detection towards interpretable, auditable systems suitable for government and enterprise deployment.
              </p>
              <p>
                In the domain of language technologies, his work spans the development of multilingual NLP resources and transformer-based models for low-resource languages, contributing to global AI equity and enabling security analytics across linguistic boundaries.
              </p>
              <p>
                His research has been recognised through government-funded grants, IEEE publications, and international collaborations with leading academic institutions and research laboratories.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Explainable AI", "Adversarial ML", "Malware Detection", "Multilingual NLP", "Trustworthy AI", "Security Analytics"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md text-xs"
                  style={{
                    background: "#F1F5F9",
                    color: "#0F172A",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    border: "1px solid rgba(15,23,42,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div
              className="text-xs tracking-widest uppercase mb-8"
              style={{ fontFamily: "Inter, sans-serif", color: "#64748B", fontWeight: 600, letterSpacing: "0.12em" }}
            >
              Research Journey
            </div>
            <div className="relative">
              {/* Connecting line */}
              <div
                className="absolute left-[7px] top-3 bottom-3 w-px"
                style={{ background: "linear-gradient(to bottom, #1E40AF, rgba(30,64,175,0.1))" }}
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
                          background: i === timeline.length - 1 ? "#1E40AF" : "#ffffff",
                          borderColor: "#1E40AF",
                        }}
                      />
                    </div>
                    <div>
                      <div
                        className="mb-0.5"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#1E40AF", fontWeight: 600, letterSpacing: "0.05em" }}
                      >
                        {item.year}
                      </div>
                      <div
                        className="mb-1"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#111827" }}
                      >
                        {item.title}
                      </div>
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#64748B", lineHeight: 1.65 }}>
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
