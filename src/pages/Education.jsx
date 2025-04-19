import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';
import macroEconomicsCert from '../assets/macroEconomicsCert.jpg';
import businessCaseDevCert from '../assets/businessCaseDevCert.jpg';
import './Education.css';

const Education = () => {
  return (
    <div className="education-page">
      <section className="education-header section">
        <div className="container">
          <h1 className="section-title">Education</h1>
          <p className="section-subtitle">My academic journey and qualifications</p>
        </div>
      </section>

      <section className="education-timeline section">
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
              <div className="certificate-image">
                <img src={macroEconomicsCert} alt="Macroeconomics Certificate" />
              </div>
              <div className="certificate-content">
                <h3>Macroeconomics Certification</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>July 2023</span>
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
              <div className="certificate-image">
                <img src={businessCaseDevCert} alt="Business Case Development Certificate" />
              </div>
              <div className="certificate-content">
                <h3>Business Case Development</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>October 2023</span>
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;