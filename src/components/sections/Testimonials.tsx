import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

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

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="testimonials-section" aria-label="Testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <figure key={i} className="testimonial-card">
            <FaQuoteLeft className="testimonial-mark" aria-hidden="true" />
            <blockquote>{t.quote}</blockquote>
            <figcaption>
              <span className="testimonial-author">{t.author}</span>
              <span className="testimonial-role">{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
