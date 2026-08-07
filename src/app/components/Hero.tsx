import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const researchTags = [
  "Malware Detection",
  "Explainable AI",
  "Adversarial ML",
  "Multilingual NLP",
  "Security Analytics",
  "Network Security",
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="pt-16" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto w-full px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-8 lg:py-12">
        {/* Left — About */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-last lg:order-first"
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
            AI &middot; Cybersecurity &middot; Multilingual NLP
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
            Assistant Professor | Ph.D. Scholar | AI & Cybersecurity Researcher
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
            Shivalik University, Dehradun &middot; Punjabi University, Patiala
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
              I am an Assistant Professor of Computer Science and Engineering at
              Shivalik University and a Ph.D. Scholar at Punjabi University,
              Patiala. My research focuses on AI-driven malware detection,
              explainable cybersecurity, adversarial machine learning, security
              analytics, and multilingual NLP for low-resource Indian languages.
            </p>
            <p>
              Previously, I served as a Senior Computer Scientist on the
              MeitY-funded BHASHINI initiative, developing multilingual
              datasets, transformer-based models, and language-technology
              pipelines for more than ten low-resource Indian languages.
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
              onClick={() => scrollTo("#research")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm transition-all hover:opacity-90"
              style={{
                background: "#0F172A",
                color: "#ffffff",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
              }}
            >
              Explore My Research
              <ArrowRight size={15} />
            </button>
            <button
              onClick={() => scrollTo("#publications")}
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
              View Publications
            </button>
            <a
              href="/Bhagwant_Singh_CV_Latest.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm transition-all"
              style={{
                background: "transparent",
                color: "#0F172A",
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                border: "1.5px solid rgba(15,23,42,0.2)",
                textDecoration: "none",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "#0F172A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(15,23,42,0.2)")
              }
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right — Personal photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative flex items-center justify-center h-[320px] lg:h-[480px] order-first lg:order-last"
        >
          <div
            className="absolute inset-0 rounded-2xl hidden lg:block"
            style={{
              background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDF4 100%)",
            }}
          />
          <div className="relative flex items-center justify-center w-full h-full lg:p-8">
            <div
              className="relative overflow-hidden rounded-full lg:rounded-[1.25rem] w-[260px] h-[260px] lg:w-[320px] lg:h-[400px]"
              style={{
                border: "3px solid rgba(30,64,175,0.12)",
                boxShadow:
                  "0 20px 60px rgba(15,23,42,0.12), 0 4px 16px rgba(30,64,175,0.08)",
              }}
            >
              <ImageWithFallback
                src="/profileimage.jpeg"
                alt="Bhagwant Singh"
                className="block lg:hidden"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <ImageWithFallback
                src="/profileimage.jpeg"
                alt="Bhagwant Singh"
                className="hidden lg:block"
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
