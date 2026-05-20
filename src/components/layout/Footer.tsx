import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const NAV = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

// Injected by Vite at build time; falls back to a sensible default in dev.
const buildDate: string = (() => {
  const raw = typeof __BUILD_DATE__ !== 'undefined' ? __BUILD_DATE__ : new Date().toISOString();
  return new Date(raw).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
})();

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <nav className="footer-nav" aria-label="Footer">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="footer-social">
          <a
            href="https://github.com/Mclovin0213"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="http://www.linkedin.com/in/julianavellaneda"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:javellaneda0213@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-meta">
          <span>&copy; {new Date().getFullYear()} Julian Avellaneda</span>
          <span className="footer-dot" aria-hidden="true">·</span>
          <span>Built with React + Vite</span>
          <span className="footer-dot" aria-hidden="true">·</span>
          <span>Updated {buildDate}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
