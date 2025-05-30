import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';
import macroEconomicsCert from '../assets/macroEconomicsCert.jpg';
import businessCaseDevCert from '../assets/businessCaseDevCert.jpg';
import googleCert from '../assets/google.jpg';
import michigan from '../assets/michigan.png';
import appreciationEntraMahindra from '../assets/appreciation_volunteer_entrepreneurship_mahindra.png';
import membershipCertMahindra from '../assets/membership_mahindra_entranapuer.png';
import './Certifications.css';

const Certifications = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const openImagePreview = (imageSrc) => {
    setPreviewImage(imageSrc);
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
  };

  return (
    <div className="certifications-page">
      <section className="certifications-header section">
        <div className="container">
          <h1 className="section-title">Certifications</h1>
          <p className="section-subtitle">Professional qualifications and achievements</p>
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

      <section className="certifications-content section">
        <div className="container">
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
              <div className="certificate-image" onClick={() => openImagePreview(appreciationEntraMahindra)}>
                <img src={appreciationEntraMahindra} alt="Google Crash Course Certificate" />
                <div className="view-certificate">Click to view</div>
              </div>
              <div className="certificate-content">
                <h3>Volunteer Certificate</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>April 2023</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <p>
                  This certificate acknowledges my contribution as a volunteer in the Entrepreneurship
                  Development Program at Mahindra University, where I assisted in organizing events and
                  workshops to promote entrepreneurial skills among students.
                </p>
              </div>
            </div>

            <div className="certificate-card">
              <div className="certificate-image" onClick={() => openImagePreview(membershipCertMahindra)}>
                <img src={membershipCertMahindra} alt="University of Michigan Certificate" />
                <div className="view-certificate">Click to view</div>
              </div>
              <div className="certificate-content">
                <h3>Membership Certificacte</h3>
                <div className="certificate-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>April 2025</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCertificate} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <p>
                  This certificate recognizes my active membership in the Entrepreneurship Development 
                  Cell at Mahindra University, where I engaged in various initiatives to foster innovation 
                  and entrepreneurship among students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;