import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
