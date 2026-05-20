import React from 'react';
import './Skills.css';
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiDart,
  SiSharp,
  SiFlutter,
  SiReact,
  SiFirebase,
  SiDotnet,
  SiGodotengine,
  SiGithub,
  SiXcode,
  SiAndroidstudio,
  SiGoogleplay,
} from 'react-icons/si';
import { FaJava, FaApple, FaWindows, FaFileAlt } from 'react-icons/fa';

type Tier = 'Daily' | 'Comfortable' | 'Familiar';

interface Skill {
  name: string;
  icon: React.ReactNode;
  tier: Tier;
}

const skills: { [category: string]: Skill[] } = {
  Languages: [
    { name: 'Python', icon: <SiPython />, tier: 'Daily' },
    { name: 'Dart', icon: <SiDart />, tier: 'Daily' },
    { name: 'JavaScript', icon: <SiJavascript />, tier: 'Daily' },
    { name: 'HTML', icon: <SiHtml5 />, tier: 'Comfortable' },
    { name: 'CSS', icon: <SiCss />, tier: 'Comfortable' },
    { name: 'Java', icon: <FaJava />, tier: 'Comfortable' },
    { name: 'C#', icon: <SiSharp />, tier: 'Familiar' },
  ],
  Frameworks: [
    { name: 'Flutter', icon: <SiFlutter />, tier: 'Daily' },
    { name: 'Firebase', icon: <SiFirebase />, tier: 'Daily' },
    { name: 'React', icon: <SiReact />, tier: 'Comfortable' },
    { name: 'ASP.NET Core', icon: <SiDotnet />, tier: 'Familiar' },
    { name: 'Godot', icon: <SiGodotengine />, tier: 'Familiar' },
  ],
  Tools: [
    { name: 'Git / GitHub', icon: <SiGithub />, tier: 'Daily' },
    { name: 'Android Studio', icon: <SiAndroidstudio />, tier: 'Daily' },
    { name: 'Xcode', icon: <SiXcode />, tier: 'Daily' },
    { name: 'Visual Studio', icon: <FaWindows />, tier: 'Comfortable' },
    { name: 'Google Play Console', icon: <SiGoogleplay />, tier: 'Comfortable' },
    { name: 'App Store Connect', icon: <FaApple />, tier: 'Comfortable' },
    { name: 'Microsoft Office', icon: <FaFileAlt />, tier: 'Familiar' },
  ],
};

const TIER_ORDER: Tier[] = ['Daily', 'Comfortable', 'Familiar'];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section" aria-label="My Skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            {TIER_ORDER.map((tier) => {
              const tierSkills = items.filter((s) => s.tier === tier);
              if (tierSkills.length === 0) return null;
              return (
                <div key={tier} className="skill-tier">
                  <span className="skill-tier-label">{tier}</span>
                  <ul className="skill-chip-list">
                    {tierSkills.map((skill) => (
                      <li key={skill.name} className="skill-chip">
                        <span className="skill-chip-icon" aria-hidden="true">
                          {skill.icon}
                        </span>
                        <span className="skill-chip-name">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
