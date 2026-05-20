import React from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  onClick: () => void;
}

const isRealUrl = (url?: string): url is string =>
  typeof url === 'string' && url.length > 0 && url !== '#';

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoUrl, repoUrl, onClick }) => {
  const stop = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div className="project-card" onClick={onClick}>
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-links">
          {isRealUrl(demoUrl) && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
              Live Demo
            </a>
          )}
          {isRealUrl(repoUrl) && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
