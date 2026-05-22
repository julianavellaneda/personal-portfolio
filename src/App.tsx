import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Now from './components/sections/Now';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
// import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import './App.css';
import Education from './components/sections/Education';
import NotFound from './components/sections/NotFound';

const SECTION_IDS = ['about', 'education', 'projects', 'skills', 'experience', 'contact'] as const;

const isHomePath = (pathname: string) =>
  pathname === '/' || pathname === '' || pathname === '/index.html';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const isHome = isHomePath(window.location.pathname);

  useEffect(() => {
    if (!isHome) return;

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
  }, [isHome]);

  // Reveal-on-scroll: fade/slide elements in as they enter the viewport.
  useEffect(() => {
    if (!isHome) return;

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll('.reveal:not(.in)').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [isHome]);

  if (!isHome) {
    return (
      <div>
        <NotFound />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Now />
        <Education />
        <Projects />
        <Skills />
        <Experience />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
