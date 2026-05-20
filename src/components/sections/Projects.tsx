import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import './Projects.css';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  fullDescription: string;
  challenges: string;
  solutions: string;
}

const projects = [
  // {
  //   title: 'Flutter Mobile App Development with K–12 Students',
  //   description: 'Supported the design, development, and debugging of 6+ mobile applications using Flutter and Firebase.',
  //   imageUrl: 'https://via.placeholder.com/300', // Placeholder, replace with actual image
  //   demoUrl: '#', // No specific demo URL provided
  //   repoUrl: '#', // No specific repo URL provided
  //   technologies: ['Flutter', 'Dart', 'Firebase', 'Project Management'],
  //   fullDescription: 'Supported the design, development, and debugging of 6+ mobile applications using Flutter and Firebase. Guided students through research, app architecture, GitHub collaboration, and publication processes. Apps are live on the Google Play Store and Apple App Store under Coding Mind Academy\'s profile.',
  //   challenges: 'Guiding K-12 students through complex app development concepts and publication processes.',
  //   solutions: 'Developed simplified explanations, provided hands-on debugging support, and streamlined the publication workflow.'
  // },
  {
    title: 'GlucoBake App',
    description: 'Your ultimate recipe assistant! Easily scan recipes through text or images, get ingredient sugar content, and discover healthier AI-driven substitutes to lower sugar intake.',
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/6f/55/c5/6f55c564-d470-0e85-1d32-592f5874a6da/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp', // Placeholder, replace with actual image
    demoUrl: 'https://apps.apple.com/us/app/gluco-bake-app/id6456987897',
    technologies: ['AI', 'Mobile Development', 'Image Recognition'],
    fullDescription: 'Your ultimate recipe assistant! Easily scan recipes through text or images, get ingredient sugar content, and discover healthier AI-driven substitutes to lower sugar intake. Designed to help users enjoy nutritious and delicious dishes effortlessly.',
    challenges: 'Implementing accurate image recognition for recipe scanning and integrating AI for healthy food substitutions.',
    solutions: 'Utilized advanced image processing libraries and integrated a robust AI model for dietary recommendations.'
  },
  {
    title: 'Eco-wise',
    description: 'EcoWise is an AI-powered mobile application designed to promote sustainable living. It helps users easily identify how to properly dispose of any item by simply scanning it with their phone.',
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cf/9b/e4/cf9be4d1-7c13-3ce8-6e65-d69e7ffffdf1/AppIcon-0-0-1x_U007emarketing-0-11-0-0-85-220.png/230x0w.webp', // Placeholder, replace with actual image
    demoUrl: 'https://apps.apple.com/us/app/eco-wise/id6747984021',
    technologies: ['AI', 'Mobile Development', 'Sustainable Technology', 'Image Recognition'],
    fullDescription: 'EcoWise is an AI-powered mobile application designed to promote sustainable living. It helps users easily identify how to properly dispose of any item by simply scanning it with their phone and encourages learning eco-friendly habits through fun challenges and impact tracking.',
    challenges: 'Developing an AI model for item recognition and disposal instructions, and designing engaging challenges to promote sustainable habits.',
    solutions: 'Leveraged machine learning for image classification and gamification techniques to encourage user engagement.'
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section" aria-label="My Projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => handleProjectClick(project)} />
        ))}
      </div>
      <ProjectDetailModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
};

export default Projects;