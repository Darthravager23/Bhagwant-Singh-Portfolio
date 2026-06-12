import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Search, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Explainable AI for Malware Detection: A Comprehensive Survey and Taxonomy",
    venue: "IEEE Transactions on Information Forensics and Security",
    year: 2024,
    tags: ["XAI", "Malware", "Survey"],
    category: "Cybersecurity",
  },
  {
    title: "Hybrid Static-Dynamic Analysis for Ransomware Classification Using Deep Neural Networks",
    venue: "IEEE Access",
    year: 2023,
    tags: ["Ransomware", "Deep Learning", "Cybersecurity"],
    category: "Cybersecurity",
  },
  {
    title: "Adversarial Robustness in Malware Detection: Attacks, Defences and Evaluation Frameworks",
    venue: "Computers & Security, Elsevier",
    year: 2023,
    tags: ["Adversarial ML", "Robustness", "Malware"],
    category: "Cybersecurity",
  },
  {
    title: "Multilingual Named Entity Recognition for Low-Resource South Asian Languages",
    venue: "ACL Findings",
    year: 2023,
    tags: ["NER", "Low-resource NLP", "Multilingual"],
    category: "NLP",
  },
  {
    title: "Cross-lingual Transfer Learning for Hate Speech Detection in Code-Switched Text",
    venue: "EMNLP Workshop on Multilingual Representation Learning",
    year: 2022,
    tags: ["Hate Speech", "Code-switching", "Transfer Learning"],
    category: "NLP",
  },
  {
    title: "Towards Trustworthy AI in Cybersecurity: Principles, Frameworks and Open Challenges",
    venue: "ACM Computing Surveys",
    year: 2022,
    tags: ["Trustworthy AI", "Survey", "Cybersecurity"],
    category: "AI",
  },
  {
    title: "SHAP-Based Interpretability for Network Intrusion Detection Systems",
    venue: "IEEE Symposium on Security and Privacy (Workshop)",
    year: 2022,
    tags: ["SHAP", "IDS", "XAI"],
    category: "AI",
  },
  {
    title: "Multi-task Learning for Joint Sentiment and Aspect Classification in Multilingual Reviews",
    venue: "NAACL",
    year: 2021,
    tags: ["Multi-task", "Sentiment", "Multilingual"],
    category: "NLP",
  },
];

const categories = ["All", "AI", "Cybersecurity", "NLP"];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  AI: { bg: "#F5F3FF", text: "#7C3AED", border: "#7C3AED22" },
  Cybersecurity: { bg: "#EFF6FF", text: "#1E40AF", border: "#1E40AF22" },
  NLP: { bg: "#F0FDFA", text: "#0F766E", border: "#0F766E22" },
};

export function Publications() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = publications.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.venue.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <section id="publications" ref={ref} className="py-14 lg:py-20" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "Inter, sans-serif", color: "#1E40AF", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Scholarly Output
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
            Publications
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search publications…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-colors focus:border-[#1E40AF]"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "#ffffff",
                borderColor: "rgba(15,23,42,0.12)",
                color: "#0F172A",
              }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  background: activeCategory === cat ? "#0F172A" : "#ffffff",
                  color: activeCategory === cat ? "#ffffff" : "#64748B",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#0F172A" : "rgba(15,23,42,0.12)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-3">
          {filtered.map((pub, i) => {
            const colors = categoryColors[pub.category] || categoryColors["AI"];
            return (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 12 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="bg-white rounded-xl border p-6 flex items-start justify-between gap-4 transition-shadow hover:shadow-sm group"
                style={{ borderColor: "rgba(15,23,42,0.08)" }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        background: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {pub.category}
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#64748B" }}>
                      {pub.year}
                    </span>
                  </div>
                  <h4
                    className="mb-1.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#0F172A", lineHeight: 1.45 }}
                  >
                    {pub.title}
                  </h4>
                  <div
                    className="mb-3"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "#64748B", fontStyle: "italic" }}
                  >
                    {pub.venue}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          background: "#F1F5F9",
                          color: "#475569",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-slate-50"
                  aria-label="View publication"
                >
                  <ExternalLink size={15} color="#64748B" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ fontFamily: "Inter, sans-serif", color: "#94A3B8" }}>
            No publications match your search.
          </div>
        )}
      </div>
    </section>
  );
}
