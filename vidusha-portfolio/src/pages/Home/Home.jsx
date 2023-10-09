import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";

const fullname = "vidusha wijekoon";

const Home = () => {
  return (
    <>
      <Hero fullname={fullname} />
      <About fullname={fullname} />
      <Resume fullname={fullname} />
      <Skills />
      <Projects />
      <Services fullname={fullname} />
      <Contact fullname={fullname} />
    </>
  );
};

export default Home;
