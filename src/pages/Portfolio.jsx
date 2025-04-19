import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faExternalLinkAlt, faFile } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import capstoneProject from '../assets/capstoneProject.pdf';
import internshipCertification from '../assets/internshipCertification.pdf';
import summerInternshipFinal from '../assets/summerInternshipFinal.docx';
import resume from '../assets/resume.docx';
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: "Pharmaceutical Industry Analysis",
      category: "project",
      description: "Capstone project analyzing the current landscape of the pharmaceutical industry, focusing on digital transformation opportunities and challenges.",
      file: capstoneProject,
      fileType: "PDF"
    },
    {
      id: 2,
      title: "Summer Internship Report",
      category: "internship",
      description: "Comprehensive report on my internship experience at a pharmaceutical company, detailing roles, responsibilities, and key learnings.",
      file: summerInternshipFinal,
      fileType: "DOCX"
    },
    {
      id: 3,
      title: "Internship Certification",
      category: "certificate",
      description: "Official certification received upon successful completion of the internship program.",
      file: internshipCertification,
      fileType: "PDF"
    },
    {
      id: 4,
      title: "Professional Resume",
      category: "resume",
      description: "My current professional resume detailing education, skills, experiences, and achievements.",
      file: resume,
      fileType: "DOCX"
    }
  ];
  
  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio-page">
      <section className="portfolio-header section">
        <div className="container">
          <h1 className="section-title">Portfolio</h1>
          <p className="section-subtitle">My projects, reports, and professional documents</p>
          
          <div className="portfolio-filter">
            <button 
              className={filter === 'all' ? 'active' : ''} 
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={filter === 'project' ? 'active' : ''} 
              onClick={() => setFilter('project')}
            >
              Projects
            </button>
            <button 
              className={filter === 'internship' ? 'active' : ''} 
              onClick={() => setFilter('internship')}
            >
              Internship
            </button>
            <button 
              className={filter === 'certificate' ? 'active' : ''} 
              onClick={() => setFilter('certificate')}
            >
              Certificates
            </button>
            <button 
              className={filter === 'resume' ? 'active' : ''} 
              onClick={() => setFilter('resume')}
            >
              Resume
            </button>
          </div>
        </div>
      </section>

      <section className="portfolio-gallery section">
        <div className="container">
          <div className="portfolio-grid">
            {filteredItems.map(item => (
              <div className="portfolio-item" key={item.id}>
                <div className="portfolio-content">
                  <div className="document-icon">
                    <FontAwesomeIcon icon={faFile} />
                    <span>{item.fileType}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio-actions">
                    <a href={item.file} download className="btn btn-sm">
                      <FontAwesomeIcon icon={faDownload} /> Download
                    </a>
                    <a href={item.file} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="no-items-message">
              <p>No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="portfolio-contact section">
        <div className="container">
          <h2>Looking for Collaboration?</h2>
          <p>I'm open to discussing projects, opportunities, and ideas related to digital technologies in the pharmaceutical sector.</p>
          <Link to="/contact" className="btn">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;