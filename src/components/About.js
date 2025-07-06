import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me better and understand my passion for creating amazing digital experiences
        </p>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Who I Am</h3>
              <p>
                I'm <strong>Aditya Rifki Nugroho</strong>, a passionate Front-end Developer and UI/UX Designer 
                based in Indonesia. I specialize in creating beautiful, functional, and user-centered digital 
                experiences that make a real impact.
              </p>
            </div>

            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                Currently working as a Front-end Developer and UI/UX Designer at <strong>Solusi Digital Kamu</strong>, 
                I've had the privilege of working on diverse projects that have shaped my expertise in modern 
                web technologies and design principles.
              </p>
            </div>

            <div className="about-card">
              <h3>My Approach</h3>
              <p>
                I believe in the power of clean code and intuitive design. Every project I work on is an 
                opportunity to create something meaningful that not only looks great but also provides 
                an exceptional user experience.
              </p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <h4>User-Centered</h4>
              <p>I always put users first in every design decision</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <h4>Performance</h4>
              <p>Optimized code for fast and smooth experiences</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🎨</div>
              <h4>Creative</h4>
              <p>Bringing unique and innovative solutions to life</p>
            </div>

            <div className="stat-card">
              <div className="stat-icon">🤝</div>
              <h4>Collaborative</h4>
              <p>Working closely with teams to achieve goals</p>
            </div>
          </div>
        </div>

        <div className="about-timeline">
          <h3>My Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Front-end Developer & UI/UX Designer</h4>
                <p className="timeline-company">Solusi Digital Kamu</p>
                <p className="timeline-period">Maret 2025 - Present</p>
                <p>
                  Creating responsive web applications and designing user interfaces for various clients. 
                  Specializing in React, Next.js, and modern design tools.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Front End Developer (Internship)</h4>
                <p className="timeline-company">Gamelab</p>
                <p className="timeline-period">Feb 2024 - June 2024</p>
                <p>
                  UI/UX Designer for Jejak Nusantara news portal project. Developed and designed 
                  user interfaces for news portal using modern front-end technologies.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 