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
    <section id="now" className="now-section" aria-label="What I'm currently focused on">
      <div className="now-header">
        <h2>Now</h2>
        <span className="now-updated">Updated {lastUpdated}</span>
      </div>
      <div className="now-grid">
        {items.map((item) => (
          <div key={item.title} className="now-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Now;
