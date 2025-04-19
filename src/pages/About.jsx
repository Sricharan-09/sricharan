import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faIdCard, faBriefcase, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import profilePic from '../assets/profilePic.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-header section">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <div className="about-intro">
            <div className="about-image">
              <img src={profilePic} alt="Sricharan Gajavelli" />
            </div>
            <div className="about-text">
              <h2>Sricharan Gajavelli</h2>
              <p className="subtitle">BBA Student - Digital Technologies</p>
              <p>
                I am a motivated BBA student specializing in Digital Technologies with a strong interest in 
                entrepreneurship and a vision to establish a company in the pharmaceutical sector. 
                I have gained hands-on experience through an internship in a pharmaceutical company 
                and am passionate about combining business knowledge with tech-driven solutions.
              </p>
              <div className="quick-info">
                <div className="info-item">
                  <strong>Email:</strong> <a href="mailto:honeysricharan@gmail.com">honeysricharan@gmail.com</a>
                </div>
                <div className="info-item">
                  <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sricharan-g-a372481a1" target="_blank" rel="noopener noreferrer">linkedin.com/in/sricharan-g-a372481a1</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-details section">
        <div className="container">
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faIdCard} />
              </div>
              <h3>Professional Summary</h3>
              <p>
                I am a dedicated student with a focus on Digital Technologies in my BBA program.
                I am developing a strong foundation in business principles while exploring how digital
                solutions can transform traditional business models, particularly in the pharmaceutical industry.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <h3>Education Background</h3>
              <p>
                Currently pursuing my Bachelor of Business Administration with a specialization in Digital Technologies
                at Mahindra University, Hyderabad. I completed my senior secondary education at Delhi Public School, 
                and my secondary education at Johnson Grammar School ICSE, both in Hyderabad.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <h3>Work Experience</h3>
              <p>
                I have completed an internship at a pharmaceutical company where I gained exposure to the industry
                and business operations. During this experience, I assisted in market research and documentation, 
                providing me with valuable insights into the pharmaceutical sector.
              </p>
            </div>

            <div className="about-card">
              <div className="card-icon">
                <FontAwesomeIcon icon={faLaptopCode} />
              </div>
              <h3>Skills & Interests</h3>
              <p>
                My skills include basic Digital Technologies, developing Business Strategy knowledge, and strong 
                Communication abilities. Outside of academics, I am passionate about Sports & Fitness, Blogging, 
                and Photography.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-section section">
        <div className="container">
          <h2 className="section-title">My Vision</h2>
          <div className="vision-content">
            <p>
              My long-term goal is to establish a company in the pharmaceutical sector that leverages digital 
              technologies to improve healthcare delivery and patient outcomes. I believe that combining traditional 
              pharmaceutical knowledge with innovative digital solutions can lead to more accessible and effective healthcare.
            </p>
            <p>
              Through my education and experiences, I am building the foundation needed to realize this vision, 
              focusing on developing both business acumen and technological understanding to create sustainable 
              and impactful solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;