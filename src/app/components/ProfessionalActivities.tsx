import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const activities = [
  { year: "2024", role: "Program Committee Member", org: "IEEE S&P Workshop on AI Security", type: "Program Committee" },
  { year: "2024", role: "Reviewer", org: "ACM Computing Surveys", type: "Journal Reviewer" },
  { year: "2023", role: "Reviewer", org: "IEEE Transactions on Information Forensics and Security", type: "Journal Reviewer" },
  { year: "2023", role: "Reviewer", org: "Computers & Security, Elsevier", type: "Journal Reviewer" },
  { year: "2023", role: "Session Chair", org: "International Conference on Cybersecurity and Privacy", type: "Conference" },
  { year: "2022", role: "Reviewer", org: "ACL Rolling Review", type: "Conference Reviewer" },
  { year: "2022", role: "Reviewer", org: "EMNLP 2022", type: "Conference Reviewer" },
  { year: "2022", role: "Invited Reviewer", org: "Expert Systems with Applications, Elsevier", type: "Journal Reviewer" },
  { year: "2021", role: "Reviewer", org: "NAACL 2021", type: "Conference Reviewer" },
  { year: "2021", role: "Reviewer", org: "IEEE Access", type: "Journal Reviewer" },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  "Program Committee": { bg: "#EFF6FF", text: "#1E40AF" },
  "Journal Reviewer": { bg: "#F0FDFA", text: "#0F766E" },
  "Conference": { bg: "#F5F3FF", text: "#7C3AED" },
  "Conference Reviewer": { bg: "#FFF7ED", text: "#C2410C" },
};

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function ProfessionalActivities() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);

  return (
    <section ref={ref} className="py-14 lg:py-20" style={{ background: "#ffffff" }}>
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
            Academic Service
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
            Professional Activities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((act, i) => {
            const colors = typeColors[act.type] || typeColors["Journal Reviewer"];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="rounded-lg p-4 border"
                style={{ background: "#FAFAFA", borderColor: "rgba(15,23,42,0.08)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="inline-block text-xs px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      background: colors.bg,
                      color: colors.text,
                    }}
                  >
                    {act.type}
                  </span>
                  <span
                    className="text-xs"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, color: "#1E40AF" }}
                  >
                    {act.year}
                  </span>
                </div>
                <div
                  className="mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#0F172A", lineHeight: 1.4 }}
                >
                  {act.role}
                </div>
                <div
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#64748B", lineHeight: 1.5 }}
                >
                  {act.org}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
