import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div className="p-5 w-full h-screen">
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
