import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const collaborations = [
  {
    name: "IIIT Hyderabad",
    full: "International Institute of Information Technology, Hyderabad",
    note: "Multilingual dataset development under the BHASHINI HIMANGY project",
    region: "India",
  },
  {
    name: "NIT Patna",
    full: "National Institute of Technology, Patna",
    note: "Language-technology pipeline research and evaluation",
    region: "India",
  },
  {
    name: "CDAC Delhi",
    full: "Centre for Development of Advanced Computing, Delhi",
    note: "Shallow-parsing model development for low-resource languages",
    region: "India",
  },
  {
    name: "CDAC Noida",
    full: "Centre for Development of Advanced Computing, Noida",
    note: "Multilingual NLP pipeline coordination under BHASHINI",
    region: "India",
  },
  {
    name: "CDAC Bangalore",
    full: "Centre for Development of Advanced Computing, Bangalore",
    note: "Transformer-based language-model deployment support",
    region: "India",
  },
  {
    name: "IIIT Bhubaneswar",
    full: "International Institute of Information Technology, Bhubaneswar",
    note: "Annotation and evaluation for multi-task shallow parsing",
    region: "India",
  },
  {
    name: "MIT",
    full: "BHASHINI Network Collaborating Institution",
    note: "Joint work on multilingual dataset curation and annotation",
    region: "India",
  },
  {
    name: "GCW Jammu",
    full: "Government College for Women, Jammu",
    note: "Linguistic annotation for low-resource Indian languages",
    region: "India",
  },
  {
    name: "University of Kashmir",
    full: "University of Kashmir",
    note: "Language-resource development for the BHASHINI initiative",
    region: "India",
  },
  {
    name: "DA-IICT",
    full: "Dhirubhai Ambani Institute of Information and Communication Technology",
    note: "Multi-task transformer training and evaluation collaboration",
    region: "India",
  },
  {
    name: "IIT Patna",
    full: "Indian Institute of Technology, Patna",
    note: "Research coordination on multilingual shallow-parsing models",
    region: "India",
  },
  {
    name: "University of the Punjab",
    full: "University of the Punjab, Lahore",
    note: "Cross-institutional collaboration on Punjabi language technology",
    region: "South Asia",
  },
];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

export function Collaborations() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="collaborations"
      ref={ref}
      className="py-14 lg:py-20 relative overflow-hidden"
      style={{ background: "#FAFAFA" }}
    >
      {/* World map background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 900 450"
          className="w-full max-w-4xl opacity-[0.035]"
          fill="#0F172A"
        >
          {/* Simplified world continents */}
          <path d="M70,180 Q100,140 160,145 Q220,150 240,130 Q260,110 290,120 Q315,128 310,155 Q305,180 270,195 Q230,212 180,208 Q130,204 90,195 Q65,188 70,180Z" />
          <path d="M320,80 Q350,65 390,70 Q430,75 445,95 Q458,112 445,130 Q430,148 400,150 Q365,152 342,138 Q320,125 318,108 Q316,92 320,80Z" />
          <path d="M450,110 Q480,95 520,100 Q560,105 575,125 Q588,143 575,162 Q560,180 530,182 Q498,184 474,168 Q450,153 447,135 Q445,118 450,110Z" />
          <path d="M570,90 Q600,78 640,82 Q675,86 690,105 Q703,122 692,140 Q680,158 652,160 Q622,162 600,148 Q578,134 575,117 Q572,100 570,90Z" />
          <path d="M690,130 Q715,118 750,122 Q782,126 795,145 Q806,162 795,180 Q782,198 755,200 Q726,202 705,188 Q682,174 680,157 Q678,140 690,130Z" />
          <path d="M160,260 Q188,245 220,250 Q250,255 258,274 Q264,290 250,302 Q235,314 210,314 Q183,314 165,300 Q147,286 148,272 Q149,260 160,260Z" />
          <path d="M200,330 Q225,318 255,323 Q282,328 290,348 Q296,364 282,374 Q266,384 242,382 Q216,380 202,366 Q188,352 190,340 Q192,328 200,330Z" />
          <path d="M480,260 Q508,248 540,252 Q568,256 576,275 Q582,291 568,303 Q552,315 526,314 Q498,313 480,299 Q462,285 463,271 Q464,257 480,260Z" />
          <path d="M580,240 Q605,230 632,234 Q656,238 662,254 Q667,268 654,278 Q638,288 614,286 Q590,284 578,272 Q566,260 568,248 Q570,237 580,240Z" />
        </svg>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#1E40AF",
              fontWeight: 600,
              letterSpacing: "0.12em",
            }}
          >
            MeitY BHASHINI Initiative
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
            Collaborating Institutions
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {collaborations.map((col, i) => (
            <motion.div
              key={col.name}
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border bg-white cursor-default"
              style={{
                borderColor: hoveredIdx === i ? "rgba(30,64,175,0.4)" : "rgba(15,23,42,0.08)",
                boxShadow: hoveredIdx === i ? "0 4px 16px rgba(30,64,175,0.10)" : "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="p-5">
                <div
                  className="mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#0F172A" }}
                >
                  {col.name}
                </div>
                <div
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#64748B", lineHeight: 1.4 }}
                >
                  {col.full}
                </div>
                <div
                  className="mt-2 text-xs px-2 py-0.5 rounded-full inline-block"
                  style={{ background: "#EFF6FF", color: "#1E40AF", fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                >
                  {col.region}
                </div>

                <AnimatePresence>
                  {hoveredIdx === i && (
                    <motion.div
                      key="note"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.75rem",
                          color: "#374151",
                          lineHeight: 1.6,
                          marginTop: "0.75rem",
                          paddingTop: "0.75rem",
                          borderTop: "1px solid rgba(15,23,42,0.08)",
                        }}
                      >
                        {col.note}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
