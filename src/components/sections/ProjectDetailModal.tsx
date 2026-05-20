import React, { useState } from 'react';
import './ProjectDetailModal.css';

interface Project {
  title: string;
  description: string;
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

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!project) {
    return null;
  }

  return (
    <div className={`modal-overlay ${isClosing ? 'closing' : ''}`} onClick={handleClose}>
      <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={handleClose} aria-label="Close project details">X</button>
        <h2>{project.title}</h2>

        <p className="modal-lead">{project.fullDescription}</p>

        <div className="modal-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="modal-tech-chip">{tech}</span>
          ))}
        </div>

        {project.problem && (
          <section className="modal-section">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </section>
        )}

        {project.role && (
          <section className="modal-section">
            <h3>Role</h3>
            <p>{project.role}</p>
          </section>
        )}

        {project.built && (
          <section className="modal-section">
            <h3>What I Built</h3>
            <p>{project.built}</p>
          </section>
        )}

        <section className="modal-section">
          <h3>Challenges</h3>
          <p>{project.challenges}</p>
        </section>

        <section className="modal-section">
          <h3>Solutions</h3>
          <p>{project.solutions}</p>
        </section>

        {project.learned && (
          <section className="modal-section">
            <h3>What I Learned</h3>
            <p>{project.learned}</p>
          </section>
        )}

        {project.screenshots && project.screenshots.length > 0 && (
          <section className="modal-section">
            <h3>Screenshots</h3>
            <div className="modal-screenshots">
              {project.screenshots.map((src) => (
                <img key={src} src={src} alt={`${project.title} screenshot`} loading="lazy" />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailModal;
