import React from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import ContactMe from './components/Contact Me/ContactMe';
import Footer from './components/Footer/Footer';




function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <WorkExperience />
        <Skills/>
        <Project/>
        <ContactMe />
       </div>
       <Footer />
    </>
  );
}

export default App;
