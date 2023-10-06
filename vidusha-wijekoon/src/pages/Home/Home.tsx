import About from "../About/About";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Portfolio from "../Portfolio/Portfolio";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Projects />
      <Portfolio />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
