import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';

const education = [
  {
    degree: 'Bachelor of Science (BS) in Computer Software Engineering',
    institution: 'California Baptist University',
    year: '2020 – 2025',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="education-strip" aria-label="Education History">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 'var(--s-5)' }}>
          <span className="eyebrow"><span className="eyebrow-num">04</span> Credentials</span>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-list">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-row reveal"
              style={{ '--reveal-delay': '60ms' } as React.CSSProperties}
            >
              <div className="education-icon" aria-hidden="true">
                <FaGraduationCap />
              </div>
              <div className="education-details">
                <h3>{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="year tabular">{edu.year}</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
