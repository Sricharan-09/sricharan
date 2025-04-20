// filepath: c:\Users\harsh\Documents\sricharan\src\pages\Resume.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faGamepad, faMusic, faBookReader, faPlane, faCode, faChess, faDumbbell, faBlog, faCamera, faDownload, faExternalLinkAlt, faAward } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import resume from '../assets/resume.docx';
import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-page">
      <section className="resume-header section">
        <div className="container">
          <h1 className="section-title">Resume</h1>
          <p className="section-subtitle">My academic and professional journey</p>
          
          <div className="resume-actions">
            {/* <a href={resume} download className="btn btn-primary">
              <FontAwesomeIcon icon={faDownload} /> Download Full Resume
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> View Resume
            </a> */}
            {/* <Link to="/certifications" className="btn btn-secondary">
              <FontAwesomeIcon icon={faAward} /> View My Certifications
            </Link> */}
          </div>
        </div>
      </section>

      <section className="resume-timeline section">
        <div className="container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Bachelor of Business Administration - Digital Technologies</h3>
                <div className="timeline-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2022 - Present</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Mahindra University, Hyderabad</span>
                  </div>
                </div>
                <p>
                  Currently pursuing a BBA degree specializing in Digital Technologies. The program provides a strong 
                  foundation in business principles while incorporating digital technology aspects to prepare for the 
                  modern business landscape. Key subjects include business management, digital marketing, technology 
                  implementation, and entrepreneurship.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Senior Secondary Education (Class XI-XII)</h3>
                <div className="timeline-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2020 - 2022</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Delhi Public School, Hyderabad</span>
                  </div>
                </div>
                <p>
                  Completed senior secondary education with a focus on Commerce stream. Studied 
                  subjects including Business Studies, Accountancy, Economics, and Mathematics,
                  which built a strong foundation for further education in business administration.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Secondary Education (Class X)</h3>
                <div className="timeline-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2020</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Johnson Grammar School ICSE, Hyderabad</span>
                  </div>
                </div>
                <p>
                  Completed Class X with distinction under the ICSE board. Gained a comprehensive foundation
                  across various subjects and participated in several extracurricular activities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="interests-section section">
        <div className="container">
          <h2 className="section-title">Personal Interests</h2>
          <p className="section-subtitle">What I enjoy outside of work</p>

          <div className="interests-container">
            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faDumbbell} />
              </div>
              <h3>Sports & Fitness</h3>
              <p>Committed to maintaining an active lifestyle through various sports activities and regular fitness routines. Believe in the importance of physical well-being for overall productivity and mental clarity.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faBlog} />
              </div>
              <h3>Blogging</h3>
              <p>Passionate about sharing insights and experiences through blogging. Regularly write about business trends, digital technologies, and personal growth experiences to connect with like-minded individuals.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faCamera} />
              </div>
              <h3>Photography</h3>
              <p>Enjoy capturing moments and exploring visual storytelling through photography. Particularly interested in architectural photography and documenting urban landscapes.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faCode} />
              </div>
              <h3>Web Development</h3>
              <p>Passionate about creating responsive web applications and exploring new frontend technologies. Currently working with React and learning about modern UI/UX principles.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faBookReader} />
              </div>
              <h3>Reading</h3>
              <p>Avid reader of business literature, technology trends, and science fiction. Some favorite authors include Malcolm Gladwell, Eric Ries, and Neal Stephenson.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <h3>Music</h3>
              <p>Enjoy listening to and creating music. Play the guitar in my free time and have been experimenting with digital music production using various software tools.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faGamepad} />
              </div>
              <h3>Gaming</h3>
              <p>Enjoy strategy and simulation games that involve problem-solving and resource management. Participate in gaming communities and occasionally in e-sport competitions.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faPlane} />
              </div>
              <h3>Travel</h3>
              <p>Love exploring new cultures and destinations. Have visited several countries across Asia and Europe, with a particular interest in experiencing local cuisines and historical sites.</p>
            </div>

            <div className="interest-card">
              <div className="interest-icon">
                <FontAwesomeIcon icon={faChess} />
              </div>
              <h3>Chess</h3>
              <p>Enjoy playing chess both casually and competitively. Member of the university chess club and participate in local tournaments when time permits.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;