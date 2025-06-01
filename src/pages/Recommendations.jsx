import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Recommendations.css';
import professorEndorsement from '../assets/professor endorcement.png';
import rohithEndorsement from '../assets/rohith endorcement.png';

const Recommendations = () => {
  return (
    <div className="recommendations-page">
      <section className="recommendations-header section">
        <div className="container">
          <h1 className="section-title">Endorsements</h1>
          <p className="section-subtitle">Professional Endorsements and References</p>
        </div>
      </section>      <section className="recommendations-section section">
        <div className="container">
          <div className="recommendations-content">
            <div className="recommendation-card">
              <div className="recommendation-image">
                <a 
                  href="https://www.linkedin.com/in/sricharan-g-a372481a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={professorEndorsement} alt="Recommendation from Professor Mukesh Narmetta" className="endorsement-image" />
                </a>
              </div>
              <div className="recommendation-icons">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon left" />
              </div>
              <p className="recommendation-text">
                View my professional recommendation from Mukesh Narmetta, accessible via my LinkedIn profile.
              </p>
              <div className="recommendation-icons">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right" />
              </div>
              <div className="recommendation-footer">
                <a 
                  href="https://www.linkedin.com/in/sricharan-g-a372481a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> View on LinkedIn
                </a>
              </div>
            </div>
            
            <div className="recommendation-card">
              <div className="recommendation-image">
                <a 
                  href="https://www.linkedin.com/in/sricharan-g-a372481a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src={rohithEndorsement} alt="Recommendation from Rohith Gurrapu" className="endorsement-image" />
                </a>
              </div>
              <div className="recommendation-icons">
                <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon left" />
              </div>
              <p className="recommendation-text">
                Access a professional endorsement from Rohith Gurrapu regarding our collaborative experiences.
              </p>
              <div className="recommendation-icons">
                <FontAwesomeIcon icon={faQuoteRight} className="quote-icon right" />
              </div>
              <div className="recommendation-footer">
                <a 
                  href="https://www.linkedin.com/in/sricharan-g-a372481a1/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                >
                  <FontAwesomeIcon icon={faLinkedin} /> View on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recommendations;
