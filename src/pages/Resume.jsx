// filepath: c:\Users\harsh\Documents\sricharan\src\pages\Resume.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faCertificate, faGamepad, faMusic, faBookReader, faPlane, faCode, faChess, faDumbbell, faBlog, faCamera, faDownload, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import macroEconomicsCert from '../assets/macroEconomicsCert.jpg';
import businessCaseDevCert from '../assets/businessCaseDevCert.jpg';
import googleCert from '../assets/google.jpg'
import michigan from '../assets/michigan.png';
import resume from '../assets/resume.docx';
import './Resume.css';

const Resume = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const openImagePreview = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="resume-page">
      <section className="resume-header section">
        <div className="container">
          <h1 className="section-title">Resume</h1>
          <p className="section-subtitle">My academic journey and qualifications</p>
          
          <div className="resume-actions">
            <a href={resume} download className="btn btn-primary">
              <FontAwesomeIcon icon={faDownload} /> Download Full Resume
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FontAwesomeIcon icon={faExternalLinkAlt} /> View Resume
            </a>
          </div>
        </div>
      </section>

      {previewImage && (
        <div className="image-preview-overlay" onClick={closeImagePreview}>
          <div className="image-preview-container">
            <img src={previewImage} alt="Certificate Preview" />
            <button className="close-preview" onClick={closeImagePreview}>×</button>
          </div>
        </div>
      )}

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

      <section className="certifications section">
        <div className="container">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Additional qualifications and achievements</p>

          <div className="certificates-container">
            <div className="certificate-card">
              <div className="certificate-image" onClick={() => openImagePreview(macroEconomicsCert)}>
                <img src={macroEconomicsCert} alt="Macroeconomics Certificate" />
                <div className="view-certificate">Click to view</div>
              </div>
              <div className="certificate-content">
                <h3>Macroeconomics Certification</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>Mar 2023</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>Online Course</span>
                  </div>
                </div>
                <p>
                  Completed a comprehensive course on macroeconomics, gaining insights into economic 
                  principles, market dynamics, and financial systems that are essential for understanding
                  the broader economic context of business operations.
                </p>
              </div>
            </div>

            <div className="certificate-card">
              <div className="certificate-image" onClick={() => openImagePreview(businessCaseDevCert)}>
                <img src={businessCaseDevCert} alt="Business Case Development Certificate" />
                <div className="view-certificate">Click to view</div>
              </div>
              <div className="certificate-content">
                <h3>Business Case Development</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>Feb 2025</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>Workshop Certification</span>
                  </div>
                </div>
                <p>
                  Participated in a workshop focused on developing effective business cases. Learned 
                  methodologies for analyzing market opportunities, evaluating business proposals, and 
                  presenting compelling business cases to stakeholders.
                </p>
              </div>
            </div>

            <div className="certificate-card">
              <div className="certificate-image" onClick={() => openImagePreview(googleCert)}>
                <img src={googleCert} alt="Business Case Development Certificate" />
                <div className="view-certificate">Click to view</div>
              </div>
              <div className="certificate-content">
                <h3>Google Crash Couse</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>Aug 2020</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>Python Certification</span>
                  </div>
                </div>
                <p>
                    Completed Google's comprehensive Python programming course, covering fundamental 
                    concepts including data structures, algorithms, and basic programming principles. 
                    Developed practical coding skills through hands-on projects and problem-solving exercises.
                </p>
              </div>
            </div>

            <div className="certificate-card">
              <div className="certificate-image" onClick={() => openImagePreview(michigan)}>
                <img src={michigan} alt="Business Case Development Certificate" />
                <div className="view-certificate">Click to view</div>
              </div>
              <div className="certificate-content">
                <h3>Writing and Editing: Structure and Organization</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>Aug 2020</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>University of Michigan</span>
                  </div>
                </div>
                <p>
                    The certificate verifies a strong foundation in professional writing techniques, editorial standards, and content clarity—skills applicable across academic, creative, and workplace communications
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