import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import Services from "./Components/Services";
import MySkills from "./Components/Myskills";
import Resume from "./Components/Resume";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";
import BackgroundAnimation from "./Components/BackgroundAnimation";
import Projects from "./Components/Projects";
import OrbitalAnimation from "./Components/OrbitalAnimation";

function App() {
  return (
    <div className="dm-sans-fonter">
      <Navbar />
      <BackgroundAnimation />
      <OrbitalAnimation />
      <HeroSection />
      <AboutMe />
      <Services />
      <MySkills />
      <Projects />
      <Resume />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
