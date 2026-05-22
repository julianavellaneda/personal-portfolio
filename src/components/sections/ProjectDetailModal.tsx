import React, { useState, useEffect, useCallback } from 'react';
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

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  }, [onClose]);

  // Lock body scroll and wire up Escape-to-close while the modal is open.
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [project, handleClose]);

  if (!project) return null;

  const sections: { label: string; body?: string }[] = [
    { label: 'Problem', body: project.problem },
    { label: 'Role', body: project.role },
    { label: 'What I Built', body: project.built },
    { label: 'Challenges', body: project.challenges },
    { label: 'Solutions', body: project.solutions },
    { label: 'What I Learned', body: project.learned },
  ];

  return (
    <div
      className={`modal-backdrop open ${isClosing ? 'closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleClose}
    >
      <div className="modal-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <h2 className="modal-title" id="modal-title">{project.title}</h2>
          <button className="modal-close" onClick={handleClose} aria-label="Close project details">
            ×
          </button>
        </div>

        <p className="modal-lead">{project.fullDescription}</p>

        <div className="modal-techs">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-chip">{tech}</span>
          ))}
        </div>

        <div>
          {sections.map(
            (s) =>
              s.body && (
                <section key={s.label} className="modal-section">
                  <h3>{s.label}</h3>
                  <p>{s.body}</p>
                </section>
              ),
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
    </div>
  );
};

export default ProjectDetailModal;
