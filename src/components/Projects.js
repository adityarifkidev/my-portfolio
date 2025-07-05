import React, { useState, useEffect } from 'react';
import './Projects.css';
import sahabatTaniImg from '../Assets/Projects/sahabat-tani.png';
import jejakNusantaraImg from '../Assets/Projects/jejak-nusantara.png';
import cashManagementImg from '../Assets/Projects/cash-management.png';
import portfolioImg from '../Assets/Projects/portfolio.png';
import solusiDigitalKamuImg from '../Assets/Projects/solusi-digital-kamu.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const projects = [
    {
      id: 1,
      title: "Sahabat Tani Madiun",
      description: "A modern landing page for Sahabat Tani Madiun store, featuring responsive design and smooth animations. Built with React, Next.js, and Tailwind CSS.",
      image: sahabatTaniImg,
      category: "web",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      liveUrl: "https://sahabat-tani.vercel.app/",
      githubUrl: "https://github.com/adityarifkidev/sahabat-tani"
    },
    {
      id: 2,
      title: "Portal Berita Jejak Nusantara",
      description: "UI/UX Designer for Jejak Nusantara news portal. Designed the full experience and interface in Figma, focusing on modern news layout and user engagement.",
      image: jejakNusantaraImg,
      category: "design",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Cash Management",
      description: "Front End Developer for Cash Management application. Developed the UI using Tailwind CSS for a modern, responsive, and efficient financial management experience.",
      image: cashManagementImg,
      category: "web",
      technologies: ["React", "Tailwind CSS", "Frontend"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React. Showcases my projects, skills, and experience as a Front-end Developer and UI/UX Designer.",
      image: portfolioImg,
      category: "web",
      technologies: ["React.js", "Bootstrap", "Custom CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Solusi Digital Kamu Landing Page",
      description: "UI/UX Designer for Solusi Digital Kamu's business landing page. Designed the user experience and interface in Figma to help promote digital business solutions. See more at solusidigitalkamu.web.id",
      image: solusiDigitalKamuImg,
      category: "design",
      technologies: ["Figma", "UI/UX Design"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'design', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of the projects I've worked on recently
        </p>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image" onClick={() => openModal(project)}>
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <button className="project-link view-project">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <h3>Interested in working together?</h3>
          <p>Let's discuss your project and bring your ideas to life</p>
          <button 
            className="btn btn-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ✕
            </button>
            <div className="modal-image">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>
            <div className="modal-info">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <div className="modal-technologies">
                {selectedProject.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="modal-links">
                <button className="btn btn-primary" onClick={closeModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 