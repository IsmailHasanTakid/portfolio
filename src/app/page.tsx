import Hero from "./components/Hero";
import AboutMe from "./components/Aboutme";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030a1c] text-white">
      <div className="relative min-h-screen overflow-hidden">
        {/* Ambient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_42%,rgba(16,70,170,0.09),transparent_52%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-[-70px] top-[270px] h-[190px] w-[190px] rounded-full bg-[#3a3fae]/45 blur-[65px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[60px] left-[-50px] h-[240px] w-[240px] rounded-full bg-[#0b3fb5]/40 blur-[70px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[50px] right-[-50px] h-[220px] w-[220px] rounded-full bg-[#1850cf]/35 blur-[70px]"
        />
      
        <Hero />
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
        <ContactSection />


      </div>


    </main>
  );
}
