import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection'
import Footer from "./components/Footer";
import About from "./components/About";
import ProjectsSection from "./components/Projects";
function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About />
      <ProjectsSection/>
      <Footer />
      
    </div>
  );
}

export default App;
