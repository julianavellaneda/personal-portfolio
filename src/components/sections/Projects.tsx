import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import './Projects.css';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  fullDescription: string;
  problem?: string;
  role?: string;
  built?: string;
  learned?: string;
  challenges: string;
  solutions: string;
  screenshots?: string[];
}

const projects: Project[] = [
  {
    title: 'GlucoBake',
    description: 'Recipe assistant that scans recipes (text or image), surfaces ingredient sugar content, and suggests AI-driven low-sugar substitutes.',
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/6f/55/c5/6f55c564-d470-0e85-1d32-592f5874a6da/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp',
    demoUrl: 'https://apps.apple.com/us/app/gluco-bake-app/id6456987897',
    technologies: ['Flutter', 'Dart', 'OpenAI', 'OCR', 'Firebase'],
    fullDescription: 'A recipe-aware mobile assistant for people managing sugar intake. Scan a recipe by photo or paste text, then let an LLM pipeline normalize ingredients, look up sugar content, and propose healthier swaps.',
    problem: 'Home bakers managing diabetes or low-sugar diets struggle to translate generic recipes into safe ones. Manual ingredient lookup is tedious and error-prone.',
    role: 'Solo developer — design, mobile app, AI integration, App Store release.',
    built: 'Flutter iOS app with OCR-based recipe import, an OpenAI-backed substitution engine, and a Firebase backend for user recipes and history.',
    learned: 'Prompt-engineering for structured nutrition output, App Store review nuance around health claims, and the cost of unbounded LLM calls in a consumer app.',
    challenges: 'Reliable ingredient extraction from messy scanned text and trustworthy substitution suggestions.',
    solutions: 'Layered an OCR pass with an LLM normalization step, then constrained the substitution model to a curated swap database before falling back to generative suggestions.',
    // TODO: drop 1-3 screenshots into public/projects/glucobake/ and uncomment
    // screenshots: ['/projects/glucobake/1.png', '/projects/glucobake/2.png'],
  },
  {
    title: 'EcoWise',
    description: 'AI-powered sustainability app — scan any item, learn how to dispose of it, and track eco-impact through gamified challenges.',
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cf/9b/e4/cf9be4d1-7c13-3ce8-6e65-d69e7ffffdf1/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/230x0w.webp',
    demoUrl: 'https://apps.apple.com/us/app/eco-wise/id6747984021',
    technologies: ['Flutter', 'Dart', 'Image Classification', 'Firebase'],
    fullDescription: 'Mobile app that turns disposal decisions into a quick photo. Scan an item, get region-aware recycling guidance, and earn streaks for sustainable habits.',
    problem: 'Recycling rules differ by city and material — most people guess, and contamination ruins entire batches.',
    role: 'Solo developer — concept, ML integration, UI, App Store release.',
    built: 'Flutter app with on-device image classification, a disposal-guidance lookup keyed by detected material, and a gamified challenge layer for habit-building.',
    learned: 'Edge ML tradeoffs (latency vs. accuracy), designing for trust when an AI answer is "probably right," and how onboarding flow drives D7 retention.',
    challenges: 'Item recognition has to be confident enough to trust, and "what bin?" guidance varies by location.',
    solutions: 'Combined an image classifier with a confidence threshold that falls back to a manual chooser, plus a region-keyed disposal database.',
    // TODO: drop 1-3 screenshots into public/projects/ecowise/ and uncomment
    // screenshots: ['/projects/ecowise/1.png'],
  },
  // TODO: replace this placeholder with a real third project from your GitHub.
  {
    title: 'Project Three (placeholder)',
    description: 'Short one-liner about what this project does.',
    imageUrl: '',
    technologies: ['Tech', 'Stack', 'Here'],
    fullDescription: 'Longer paragraph describing what the project is and who it is for.',
    problem: 'What problem does this project solve? Who has it?',
    role: 'Your role on the project (solo / lead / contributor).',
    built: 'What you actually built — the architecture, the surface area, the integration points.',
    learned: 'What you took away — technical skill, design lesson, or process insight.',
    challenges: 'The hardest thing about building it.',
    solutions: 'How you got past that.',
  },
  // TODO: replace this placeholder with a real fourth project from your GitHub.
  {
    title: 'Project Four (placeholder)',
    description: 'Short one-liner about what this project does.',
    imageUrl: '',
    technologies: ['Tech', 'Stack', 'Here'],
    fullDescription: 'Longer paragraph describing what the project is and who it is for.',
    problem: 'What problem does this project solve?',
    role: 'Your role on the project.',
    built: 'What you actually built.',
    learned: 'What you took away.',
    challenges: 'The hardest thing about building it.',
    solutions: 'How you got past that.',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section" aria-label="My Projects">
      <div className="container">
        <div className="reveal">
          <span className="eyebrow"><span className="eyebrow-num">05</span> Shipped</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
