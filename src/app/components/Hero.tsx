import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";

const stats = [
  { value: "17+", label: "Publications" },
  { value: "37+", label: "Citations" },
  { value: "h-4", label: "h-index" },
  { value: "10+", label: "Languages" },
];

const extraBadges = [
  "Government-Funded Research",
  "IEEE Publications",
];

function NetworkViz() {
  const nodes = [
    { cx: 220, cy: 140, r: 28, label: "AI" },
    { cx: 380, cy: 80, r: 20, label: "NLP" },
    { cx: 460, cy: 200, r: 22, label: "XAI" },
    { cx: 340, cy: 280, r: 18, label: "ML" },
    { cx: 160, cy: 260, r: 16, label: "Sec" },
    { cx: 90, cy: 160, r: 14, label: "Gov" },
    { cx: 300, cy: 160, r: 12, label: "" },
  ];
  const edges = [
    [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 1],
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 560 380" className="w-full h-full max-w-[540px]" aria-hidden="true">
        <defs>
          <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#1E40AF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0F766E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0F766E" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Background glow */}
        <ellipse cx="280" cy="190" rx="210" ry="150" fill="url(#glow1)" />
        <ellipse cx="380" cy="240" rx="130" ry="90" fill="url(#glow2)" />

        {/* World map outline — simplified continents as abstract shapes */}
        <g opacity="0.06" fill="#0F172A">
          <path d="M60,180 Q80,160 100,165 Q120,170 130,155 Q140,140 165,145 Q175,148 170,165 Q165,178 145,182 Q120,190 100,188 Q80,186 60,180Z" />
          <path d="M200,120 Q220,108 245,112 Q265,115 270,130 Q274,143 258,150 Q240,157 220,152 Q200,147 195,135 Q193,127 200,120Z" />
          <path d="M290,155 Q310,145 335,148 Q360,151 368,165 Q374,176 360,185 Q345,194 325,192 Q305,190 295,178 Q287,167 290,155Z" />
          <path d="M390,130 Q415,118 440,122 Q462,126 470,142 Q476,156 460,165 Q442,174 420,170 Q398,166 388,152 Q381,140 390,130Z" />
          <path d="M150,240 Q172,228 196,233 Q216,238 220,254 Q222,266 208,273 Q192,280 172,276 Q152,272 146,258 Q142,247 150,240Z" />
        </g>

        {/* Edges */}
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="#1E40AF"
            strokeWidth="1"
            strokeOpacity="0.2"
          />
        ))}

        {/* Animated pulse rings */}
        {[nodes[0], nodes[1], nodes[2]].map((n, i) => (
          <circle
            key={`pulse-${i}`}
            cx={n.cx} cy={n.cy} r={n.r + 8}
            fill="none"
            stroke="#1E40AF"
            strokeWidth="1"
            strokeOpacity="0.15"
          />
        ))}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r} fill={i === 0 ? "#0F172A" : i === 2 ? "#0F766E" : "#1E40AF"} opacity={i === 6 ? 0.4 : 0.85} />
            {n.label && (
              <text
                x={n.cx} y={n.cy + 4}
                textAnchor="middle"
                fill="white"
                fontSize={n.r > 20 ? 10 : 8}
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                {n.label}
              </text>
            )}
          </g>
        ))}

        {/* Data flow dots */}
        {[0, 1, 2].map((i) => (
          <circle key={`dot-${i}`} cx={140 + i * 100} cy={320 + i * 8} r="3" fill="#1E40AF" opacity="0.3" />
        ))}

        {/* Labels */}
        <text x="224" y="192" textAnchor="middle" fill="#0F172A" fontSize="7" fontFamily="Inter, sans-serif" fontWeight="500" opacity="0.5">
          CORE
        </text>
      </svg>
    </div>
  );
}

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-16 flex flex-col"
      style={{ background: "#FAFAFA" }}
    >
      <div className="flex-1 max-w-[1280px] mx-auto w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6">
            <span
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{
                color: "#1E40AF",
                borderColor: "rgba(30,64,175,0.25)",
                background: "rgba(30,64,175,0.06)",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
            >
              <Globe size={11} />
              Artificial Intelligence · Cybersecurity · NLP
            </span>
          </div>

          <h1
            className="mb-6 leading-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            Advancing Trustworthy AI for Cybersecurity and Language Technologies
          </h1>

          <p
            className="mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "#475569",
              lineHeight: 1.75,
            }}
          >
            Researcher specializing in the intersection of artificial intelligence, malware detection, explainable AI, and multilingual natural language processing — building systems that are secure, interpretable, and globally applicable.
          </p>

          <ul className="mb-10 space-y-1.5">
            {["AI & Machine Learning", "Malware Detection", "Explainable AI (XAI)", "Multilingual NLP"].map((t) => (
              <li key={t} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#1E40AF" }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#475569", fontWeight: 400 }}>{t}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("#publications")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm transition-all hover:opacity-90"
              style={{
                background: "#0F172A",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              View Publications
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("#collaborations")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm transition-all"
              style={{
                background: "transparent",
                color: "#0F172A",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                border: "1.5px solid rgba(15,23,42,0.2)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0F172A")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(15,23,42,0.2)")}
            >
              Research Collaborations
            </button>
          </div>
        </motion.div>

        {/* Right — network visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center h-[420px]"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)" }}
          />
          <div className="relative w-full h-full p-4">
            <NetworkViz />
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="border-t"
        style={{ borderColor: "rgba(15,23,42,0.08)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-5 border" style={{ borderColor: "rgba(15,23,42,0.08)", boxShadow: "0 1px 4px rgba(15,23,42,0.06)" }}>
                <div
                  className="mb-1"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.75rem",
                    color: "#0F172A",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#64748B", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {extraBadges.map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  background: "rgba(15,118,110,0.08)",
                  color: "#0F766E",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  border: "1px solid rgba(15,118,110,0.15)",
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
