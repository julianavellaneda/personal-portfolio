import React from 'react';
import selfImg from '../../assets/self.png';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section" aria-label="About Me">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          From an early age, I've been fascinated by computers and programming, an interest sparked by watching my family interact with technology and my early proficiency in mathematics. My younger years were spent exploring platforms like Scratch, Unity, and Game Maker, which laid a foundational understanding for my current career path.
        </p>
        <p>
          During high school, my focus shifted toward video editing, where I shot and edited over 30 videos and short films. This passion led me to major in Film at California Baptist University. However, after a few semesters, my deep-seated passion for programming resurfaced, prompting me to switch my major to Software Engineering.
        </p>
        <p>
          In the past two years since making that pivotal decision, I've immersed myself in the programming landscape, gaining extensive knowledge and practical skills. My recent role as a Programming Instructor at CodingMinds Academy not only solidified my grasp of fundamental programming concepts but also exposed me to and taught me new frameworks and languages, further accelerating my development as a software engineer.
        </p>
      </div>
      <div className="about-image">
        <img src={selfImg} alt="Headshot" />
      </div>
    </section>
  );
};

export default About;