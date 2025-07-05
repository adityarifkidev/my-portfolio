import React, { useEffect, useRef } from 'react';
import './Hero.css';
import aditImage from '../Assets/Projects/Adit.png';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Aditya Rifki Nugroho</span>
            </h1>
            <h2 className="hero-subtitle">
              Front-end Developer & UI/UX Designer
            </h2>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences. 
              Passionate about clean code and intuitive design that makes a difference.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container no-circle">
              <img src={aditImage} alt="Aditya Rifki Nugroho" className="hero-profile-image no-circle" />
            </div>
            <div className="floating-card card-1">
              <span>React</span>
            </div>
            <div className="floating-card card-2">
              <span>UI/UX</span>
            </div>
            <div className="floating-card card-3">
              <span>Next.js</span>
            </div>
            <div className="floating-card card-4">
              <span>Figma</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero; 