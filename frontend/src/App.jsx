import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import ResumeModal from "./components/ResumeModal";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import CodingProfiles from "./sections/CodingProfiles";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className="relative min-h-screen">
        <AmbientBackground />
        <Navbar onOpenResume={() => setResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <About />
          <Skills />
          <CodingProfiles />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
