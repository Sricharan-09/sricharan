import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-page">
      <section className="contact-header section">
        <div className="container">
          <h1 className="section-title">Contact Me</h1>
          <p className="section-subtitle">Get in touch for opportunities, collaborations, or just to say hello</p>
        </div>
      </section>

      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email</h3>
              <p>
                <a href="mailto:honeysricharan@gmail.com">honeysricharan@gmail.com</a>
              </p>
              <p className="info-note">Feel free to email me anytime!</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919618888708">+91 9618888708</a>
              </p>
              <p className="info-note">Available on weekdays 10am-6pm IST</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <h3>LinkedIn</h3>
              <p>
                <a href="https://linkedin.com/in/sricharan-g-a372481a1" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/sricharan-g-a372481a1
                </a>
              </p>
              <p className="info-note">Let's connect professionally!</p>
            </div>

            <div className="contact-info-card">
              <div className="info-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>Location</h3>
              <p>Hyderabad, Telangana</p>
              <p className="info-note">Currently based in Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="contact-form-section section">
        <div className="container">
          <div className="contact-form-container">
            <div className="form-header">
              <h2>Send Me a Message</h2>
              <p>I'll get back to you as soon as possible</p>
            </div>

            {formStatus.submitted ? (
              <div className="form-success-message">
                <h3>Thank you for your message!</h3>
                <p>I'll get back to you as soon as possible.</p>
                <button 
                  className="btn" 
                  onClick={() => setFormStatus({ submitting: false, submitted: false, error: false })}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn submit-btn" 
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;