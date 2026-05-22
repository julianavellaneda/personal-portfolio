import React from 'react';
import './Testimonials.css';

// TODO: replace placeholders with real quotes (students / parents / coworkers).
// Aim for 2-3 short, specific ones. Ask permission before publishing names.
interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Placeholder quote — replace with a real testimonial from a student, parent, or coworker. Keep it under two sentences and specific.',
    author: 'Name TBD',
    role: 'Student / Parent / Coworker',
  },
  {
    quote:
      'Another placeholder — pick something that highlights a concrete outcome (an app shipped, a concept understood, a project unblocked).',
    author: 'Name TBD',
    role: 'Role TBD',
  },
  {
    quote:
      'Optional third quote — three feels balanced visually but two is fine too. Remove this card if you only have two.',
    author: 'Name TBD',
    role: 'Role TBD',
  },
];

const initialsOf = (name: string) =>
  name.split(' ').map((part) => part[0]).slice(0, 2).join('');

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section testimonials" aria-label="Testimonials">
      <div className="container">
        <div className="testi-head reveal">
          <div>
            <span className="eyebrow"><span className="eyebrow-num">08</span> Voices</span>
            <h2 className="section-title">Testimonials</h2>
          </div>
          <span className="testi-note">Coming soon — placeholders</span>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="card testi-card reveal"
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
            >
              <span className="corner-mark" aria-hidden="true"></span>
              <span className="testi-mark" aria-hidden="true">&ldquo;</span>
              <blockquote className="testi-quote">{t.quote}</blockquote>
              <figcaption className="testi-figcap">
                <span className="testi-monogram" aria-hidden="true">{initialsOf(t.author)}</span>
                <span className="testi-author">
                  <span className="name">{t.author}</span>
                  <span className="role">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
