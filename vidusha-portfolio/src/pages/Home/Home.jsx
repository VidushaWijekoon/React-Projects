import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
