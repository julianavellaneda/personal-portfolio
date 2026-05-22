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
              In the past two years since making that pivotal decision, I've immersed myself in the programming landscape, gaining extensive knowledge and practical skills. My recent role as a Programming Instructor at CodingMinds Academy not only solidified my grasp of fundamental programming concepts but also exposed me to and taught me new frameworks and languages, further accelerating my development as a software engineer.
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
