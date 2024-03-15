import React from "react";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pinkStandard from-60% via-pinkLight to-white to-100%">
      <Intro/>
      <div className="py-10 sm:px-5">
        <Timeline>
          <About/>
          <TechStack/>
          <Experience/>
          <Projects/>
        </Timeline>
      </div>
    </div>
  );
}

export default App;
