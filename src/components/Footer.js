import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Aditya Rifki Nugroho</h3>
            <p className="footer-description">
              Front-end Developer & UI/UX Designer passionate about creating 
              beautiful and functional digital experiences.
            </p>
            <div className="footer-social themed">
              <a href="https://github.com/adityarifkidev" target="_blank" rel="noopener noreferrer" className="footer-social-icon themed">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/aditya-rifki-nugroho/" target="_blank" rel="noopener noreferrer" className="footer-social-icon themed">
                <FaLinkedin size={24} />
              </a>
              <a href="https://instagram.com/adityarn_06" target="_blank" rel="noopener noreferrer" className="footer-social-icon themed">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</a></li>
              <li><a onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</a></li>
              <li><a onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</a></li>
              <li><a onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}>Resume</a></li>
              <li><a onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</a></li>
              <li><a onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Frontend Development</li>
              <li>Consultation</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p>📧 adityarifki.dev@gmail.com</p>
              <p>📱 +62 895-6325-65829</p>
              <p>📍 Semarang, Central Java, Indonesia</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-line"></div>
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Aditya Rifki Nugroho. All rights reserved.</p>
            <p>Designed & Developed with ❤️ by Aditya Rifki Nugroho</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
