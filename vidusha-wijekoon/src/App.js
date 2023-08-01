import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Skill from './sections/Skill/Skill';
import Resume from './sections/Resume/Resume';
import MyProjects from './sections/Projects/MyProjects';
import Portfolio from './sections/Portfolio/Portfolio';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Resume />
      <MyProjects />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App