import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sricharan Gajavelli</h3>
            <p>BBA Student specializing in Digital Technologies</p>
          </div>
          
          <div className="footer-contact">
            <h3>Contact</h3>
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:honeysricharan@gmail.com">honeysricharan@gmail.com</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+919618888708">+91 9618888708</a>
            </div>
          </div>
          
          <div className="footer-social">
            <h3>Connect</h3>
            <div className="social-icons">
              <a href="https://linkedin.com/in/sricharan-g-a372481a1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a> */}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sricharan Gajavelli. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;