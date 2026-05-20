import React, { useState, useEffect } from 'react';
import Starfield from 'react-starfield';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';
import Education from './components/sections/Education';

const SECTION_IDS = ['about', 'education', 'projects', 'skills', 'experience', 'contact'] as const;

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const elements = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Starfield
        starCount={1500}
        starColor={[255, 25, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <div id="about"><About /></div>
        <div id="education"><Education /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
