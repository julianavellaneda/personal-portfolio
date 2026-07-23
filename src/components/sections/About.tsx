import React from 'react';
import selfImg from '../../assets/self.png';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        <div className="about">
          <div className="about-copy reveal">
            <span className="eyebrow"><span className="eyebrow-num">02</span> About</span>
            <h2 className="section-title" style={{ marginBottom: 'var(--s-6)' }}>About Me</h2>
            <p className="dropcap">
              From an early age, I've been fascinated by computers and programming, an interest sparked by watching my family interact with technology and my early proficiency in mathematics. My younger years were spent exploring platforms like Scratch, Unity, and Game Maker, which laid a foundational understanding for my current career path.
            </p>
            <p>
              During high school, my focus shifted toward video editing, where I shot and edited over 30 videos and short films. This passion led me to major in Film at California Baptist University. However, after a few semesters, my deep-seated passion for programming resurfaced, prompting me to switch my major to Software Engineering.
            </p>
            <p>
              I graduated from CBU in May 2025 with a B.S. in Software Engineering, and I've spent the time since building and shipping. Teaching K&#8211;12 students as a Programming Instructor at CodingMinds Academy keeps my fundamentals sharp and constantly pushes me into new frameworks and languages. Outside the classroom I've shipped AI-driven mobile apps to the App Store, open-sourced a self-hostable job tracker, and gone deep on Rust &mdash; most recently writing a full tactics game in Bevy for a 72-hour game jam. I like problems that make me learn a new stack to solve them.
            </p>
          </div>
          <figure className="about-image reveal" style={{ '--reveal-delay': '120ms' } as React.CSSProperties}>
            <img src={selfImg} alt="Headshot of Julian Avellaneda" loading="lazy" />
            <span className="bracket" aria-hidden="true"></span>
            <span className="bracket bracket-br" aria-hidden="true"></span>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
