import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import Starfield from '../Starfield';

const delay = (ms: number) => ({ '--reveal-delay': `${ms}ms` } as React.CSSProperties);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <Starfield />
      </div>
      <div className="hero-glow" aria-hidden="true"></div>
      <div className="container hero-content">
        <div className="reveal">
          <span className="hero-eyebrow">
            <span className="dot" aria-hidden="true"></span>
            01 — Software Engineer × Educator
          </span>
        </div>
        <h1 className="hero-title reveal" style={delay(60)}>
          Julian <span className="grad">Avellaneda</span>
        </h1>
        <p className="hero-subtitle reveal" style={delay(120)}>
          Software engineer shipping AI-driven mobile apps. Teaching K&#8211;12 by day.
        </p>
        <div className="social-links reveal" style={delay(180)}>
          <a href="https://github.com/Mclovin0213" target="_blank" rel="noopener noreferrer">
            <FaGithub /> <span>GitHub</span>
          </a>
          <a
            href="http://www.linkedin.com/in/julianavellaneda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin /> <span>LinkedIn</span>
          </a>
        </div>
        <div className="hero-cta-row reveal" style={delay(240)}>
          <a href="#projects" className="cta cta-primary">View My Work</a>
          {/* TODO: drop resume.pdf into public/ — link resolves to /resume.pdf */}
          <a href="/resume.pdf" className="cta cta-ghost" download>
            <FaArrowDown /> <span>Resume</span>
          </a>
        </div>
      </div>
      <div className="hero-status">
        <span className="live-dot" aria-hidden="true"></span>
        Available for collaboration · Riverside, CA
      </div>
    </section>
  );
};

export default Hero;
