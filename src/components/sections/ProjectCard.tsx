import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './ProjectCard.css';

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
  technologies: string[];
  onClick: () => void;
}

// A URL is "real" when it is present, not a "#" anchor, and not a placeholder.
const isRealUrl = (url?: string): url is string =>
  typeof url === 'string' && url.length > 0 && url !== '#' && !/placeholder/i.test(url);

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  title,
  description,
  imageUrl,
  demoUrl,
  repoUrl,
  technologies,
  onClick,
}) => {
  const stop = (e: React.MouseEvent) => e.stopPropagation();
  const visibleTech = technologies.slice(0, 3);
  const moreCount = technologies.length - visibleTech.length;
  const hasFoot = isRealUrl(demoUrl) || isRealUrl(repoUrl);

  return (
    <article
      className="card project-card reveal"
      style={{ '--reveal-delay': `${index * 60}ms` } as React.CSSProperties}
      onClick={onClick}
    >
      <span className="corner-mark" aria-hidden="true"></span>
      <div className="project-img-wrap">
        {isRealUrl(imageUrl) ? (
          <img src={imageUrl} alt={title} loading="lazy" />
        ) : (
          <div className="project-img-placeholder">Project Art</div>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="tech-row">
          {visibleTech.map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
          {moreCount > 0 && <span className="tech-chip">+{moreCount}</span>}
        </div>
        {hasFoot && (
          <div className="project-foot">
            {isRealUrl(demoUrl) && (
              <a className="project-link" href={demoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
                Live Demo <FaArrowRight className="arr" />
              </a>
            )}
            {isRealUrl(repoUrl) && (
              <a className="project-link" href={repoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
                GitHub <FaArrowRight className="arr" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
