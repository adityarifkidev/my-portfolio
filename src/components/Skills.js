import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 75 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      category: "UI/UX Design",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Adobe XD", level: 80 },
        { name: "Sketch", level: 70 },
        { name: "Prototyping", level: 85 },
        { name: "User Research", level: 75 },
        { name: "Design Systems", level: 80 }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Webpack", level: 70 },
        { name: "REST APIs", level: 80 },
        { name: "Responsive Design", level: 95 },
        { name: "Performance Optimization", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          My technical skills and tools I use to bring ideas to life
        </p>

        <div className="skills-grid">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights">
          <h3>What I Bring to the Table</h3>
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h4>Fast Development</h4>
              <p>Quick turnaround times with clean, maintainable code</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">📱</div>
              <h4>Responsive Design</h4>
              <p>Perfect experiences across all devices and screen sizes</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h4>User-Focused</h4>
              <p>Design decisions based on user needs and behavior</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔧</div>
              <h4>Problem Solver</h4>
              <p>Creative solutions for complex technical challenges</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 