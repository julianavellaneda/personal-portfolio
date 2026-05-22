import React from 'react';
import './Now.css';

// TODO: edit these as your focus shifts. Aim for 2-4 items.
// Date helps signal the section is alive — bump it when you make changes.
const lastUpdated = 'May 2026';

const items: { title: string; body: string }[] = [
  {
    title: 'Shipping the next iOS app',
    body: 'Iterating on a new Flutter project with on-device ML. Targeting App Store submission this quarter.',
  },
  {
    title: 'Teaching K–12 mobile dev',
    body: 'Mentoring students through Flutter + Firebase apps at Coding Mind Academy — concept to App Store publish.',
  },
  {
    title: 'Sharpening systems thinking',
    body: 'Reading and writing on distributed systems, prompt engineering, and the boundary between the two.',
  },
];

const Now: React.FC = () => {
  return (
    <section id="now" className="section now" aria-label="What I'm currently focused on">
      <div className="container">
        <div className="now-header reveal">
          <div>
            <span className="eyebrow"><span className="eyebrow-num">03</span> Field Log</span>
            <h2 className="section-title">Now</h2>
          </div>
          <span className="now-updated tabular">Updated {lastUpdated}</span>
        </div>
        <div className="now-grid">
          {items.map((item, idx) => (
            <article
              key={item.title}
              className="card now-card reveal"
              style={{ '--reveal-delay': `${idx * 60}ms` } as React.CSSProperties}
            >
              <span className="corner-mark" aria-hidden="true"></span>
              <span className="now-counter">→ {String(idx + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <div className="divider"></div>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Now;
