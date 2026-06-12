import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const researchTags = [
  "Explainable AI",
  "Adversarial ML",
  "Malware Detection",
  "Multilingual NLP",
  "Trustworthy AI",
  "Security Analytics",
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="pt-16"
      style={{ background: "#FAFAFA" }}
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8 lg:py-12">
        {/* Left — About */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            className="text-xs tracking-widest uppercase mb-5"
            style={{
              fontFamily: "Inter, sans-serif",
              color: "#1E40AF",
              fontWeight: 600,
              letterSpacing: "0.12em",
            }}
          >
            About the Researcher
          </div>

          <h1
            className="mb-2 leading-tight"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#111827",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            Bhagwant Singh
          </h1>

          <div
            className="mb-3 flex items-center gap-2"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: "1rem",
              color: "#1E40AF",
            }}
          >
            Assistant Professor &amp; International Researcher
          </div>

          <div
            className="mb-3 flex items-center gap-1.5"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem",
              color: "#64748B",
            }}
          >
            <MapPin size={13} />
            AI · Cybersecurity · NLP
          </div>

          <div
            className="space-y-3 mb-8"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.98rem",
              color: "#475569",
              lineHeight: 1.8,
            }}
          >
            <p>
              International researcher whose work bridges artificial
              intelligence, cybersecurity, and natural language processing —
              building systems that are secure, interpretable, and globally
              applicable.
            </p>
            <p>
              Specializing in explainable malware detection, multilingual NLP
              for low-resource languages, and adversarial robustness, with
              research recognised through government-funded grants and IEEE
              publications.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {researchTags.map((tag) => (
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
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#0F172A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(15,23,42,0.2)")
              }
            >
              Research Collaborations
            </button>
          </div>
        </motion.div>

        {/* Right — Personal photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center h-[480px]"
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)",
            }}
          />
          <div className="relative flex items-center justify-center w-full h-full p-8">
            <div
              className="relative overflow-hidden"
              style={{
                width: 320,
                height: 400,
                borderRadius: "1.25rem",
                border: "3px solid rgba(30,64,175,0.12)",
                boxShadow:
                  "0 20px 60px rgba(15,23,42,0.12), 0 4px 16px rgba(30,64,175,0.08)",
              }}
            >
              <ImageWithFallback
                src="/profileimage.png"
                alt="Bhagwant Singh"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
