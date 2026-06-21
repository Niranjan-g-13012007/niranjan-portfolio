import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
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

  return (
    <>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <div className="relative min-h-screen">
        <AmbientBackground />
        <Navbar />
        <main>
          <Hero />
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
    </>
  );
}
