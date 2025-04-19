import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/profilePic.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Sricharan Gajavelli</span></h1>
            <h2>BBA Student with a Focus on Digital Technologies</h2>
            <p>
              I'm passionate about entrepreneurship and aim to establish a company in the 
              pharmaceutical sector, combining business knowledge with technology-driven solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn">
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <a 
                href="https://linkedin.com/in/sricharan-g-a372481a1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={profilePic} alt="Sricharan Gajavelli" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-preview-content">
            <p>
              I am a motivated BBA student specializing in Digital Technologies with a strong 
              interest in entrepreneurship. I've gained valuable experience through an internship 
              in the pharmaceutical industry and I'm passionate about combining business knowledge 
              with tech-driven solutions.
            </p>
            <Link to="/about" className="btn">
              Read More <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      <section className="education-preview section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-card">
            <h3>Mahindra University, Hyderabad</h3>
            <p className="degree">Bachelor of Business Administration (BBA) – Digital Technologies</p>
            <Link to="/education" className="read-more">
              View All Education <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </div>
      </section>

      <section className="skills-preview section">
        <div className="container">
          <h2 className="section-title">Skills & Interests</h2>
          <div className="skills-content">
            <div className="skill-category">
              <h3>Skills</h3>
              <ul className="skill-list">
                <li>Digital Technologies (basic)</li>
                <li>Business Strategy (developing)</li>
                <li>Communication</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Interests</h3>
              <ul className="skill-list">
                <li>Sports & Fitness</li>
                <li>Blogging</li>
                <li>Photography</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;