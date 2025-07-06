import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import './Resume.css';

const Resume = () => {
  const handleDownloadCV = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/Aditya Rifki Nugroho.pdf';
    link.download = 'Aditya Rifki Nugroho CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-content">
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">
            Download my CV to learn more about my experience and skills
          </p>
          
          <div className="resume-card">
            <div className="resume-icon">
              <AiOutlineDownload size={40} />
            </div>
            <h3>Download My CV</h3>
            <p>
              Get a detailed overview of my professional experience, skills, and achievements. 
              My CV includes my work history, technical expertise, and project highlights.
            </p>
            <button 
              className="btn btn-primary download-btn"
              onClick={handleDownloadCV}
            >
              <AiOutlineDownload size={20} />
              Download CV
            </button>
          </div>

          <div className="resume-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">🎯</div>
              <h4>Professional Experience</h4>
              <p>Front-end Developer & UI/UX Designer with experience in modern web technologies</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">💻</div>
              <h4>Technical Skills</h4>
              <p>React.js, Next.js, JavaScript, CSS, UI/UX Design, and responsive development</p>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">📱</div>
              <h4>Projects</h4>
              <p>15+ projects completed including web applications and UI/UX designs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 