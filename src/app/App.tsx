import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ResearchVision } from "./components/ResearchVision";
import { ResearchImpact } from "./components/ResearchImpact";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Publications } from "./components/Publications";
import { ProfessionalActivities } from "./components/ProfessionalActivities";
import { Collaborations } from "./components/Collaborations";
import { Awards } from "./components/Awards";
import { FutureResearch } from "./components/FutureResearch";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    /* MARKER-MAKE-KIT-INVOKED */
    <div
      className="min-h-screen"
      style={{
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#FAFAFA",
        scrollBehavior: "smooth",
      }}
    >
      <Navigation />
      <main>
        <Hero />
        <About />
        <ResearchVision />
        <ResearchImpact />
        <FeaturedProjects />
        <Publications />
        <ProfessionalActivities />
        <Collaborations />
        <Awards />
        <FutureResearch />
        <Contact />
      </main>
    </div>
  );
}
