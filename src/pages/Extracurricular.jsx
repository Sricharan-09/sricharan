import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faTrophy, faUsers, faBriefcase, faGraduationCap, faHandshake, faMicrophoneAlt } from '@fortawesome/free-solid-svg-icons';
import './Extracurricular.css';

const Extracurricular = () => {
  return (
    <div className="extracurricular-page">
      <section className="extracurricular-header section">
        <div className="container">
          <h1 className="section-title">Extracurricular Activities</h1>
          <p className="section-subtitle">Leadership, Community Engagement, and Personal Development</p>
        </div>
      </section>

      <section className="activities-section leadership-section section">
        <div className="container">
          <h2 className="section-title">Leadership & Organizational Experience</h2>
          
          <div className="activities-container">
            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="activity-content">
                <h3>Business Club Secretary</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2023 - Present</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Organized monthly guest speaker sessions with industry leaders from various business sectors</li>
                  <li>Coordinated business case competitions with participation from 10+ colleges</li>
                  <li>Managed a team of 8 club representatives and a budget of ₹50,000 for annual events</li>
                  <li>Increased club membership by 40% through strategic recruitment campaigns</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faBriefcase} />
              </div>
              <div className="activity-content">
                <h3>Entrepreneurship Cell Member</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2022 - Present</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Contributed to organizing the annual startup fair featuring 25+ emerging startups</li>
                  <li>Participated in ideation workshops and business model development sessions</li>
                  <li>Assisted in mentoring junior students on startup pitches and business plan creation</li>
                  <li>Collaborated on developing a university incubation program proposal</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faMicrophoneAlt} />
              </div>
              <div className="activity-content">
                <h3>Event Coordinator - Business Conclave</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2023</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Led a cross-functional team of 12 student volunteers to organize the annual business conclave</li>
                  <li>Secured sponsorships worth ₹75,000 from 5 corporate partners</li>
                  <li>Coordinated panel discussions on pharmaceutical industry innovations and healthcare entrepreneurship</li>
                  <li>Achieved 95% positive feedback from 300+ attendees through post-event surveys</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="activities-section competitions-section section">
        <div className="container">
          <h2 className="section-title">Competitions & Achievements</h2>
          
          <div className="activities-container">
            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div className="activity-content">
                <h3>National Business Case Competition Finalist</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>March 2024</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>IIM Bangalore</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Selected among top 10 teams out of 200+ national participants</li>
                  <li>Developed a comprehensive market entry strategy for a pharmaceutical startup</li>
                  <li>Presented solutions addressing supply chain challenges in healthcare distribution</li>
                  <li>Received commendation for innovative use of digital technology in inventory management</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div className="activity-content">
                <h3>Inter-University Business Plan Competition - 2nd Place</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>November 2023</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>XLRI Jamshedpur</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Led a team of 3 to develop a business plan for an AI-driven pharmaceutical supply chain solution</li>
                  <li>Created detailed financial projections showing a 30% efficiency improvement</li>
                  <li>Conducted market research with 50+ industry professionals to validate the business concept</li>
                  <li>Awarded ₹50,000 prize money and mentorship opportunity with a venture capitalist</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faTrophy} />
              </div>
              <div className="activity-content">
                <h3>Digital Marketing Challenge - 1st Place</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>February 2023</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Designed a comprehensive digital marketing campaign for a healthcare brand</li>
                  <li>Created content strategy across multiple platforms achieving 45% engagement in test trials</li>
                  <li>Implemented SEO strategies resulting in a 60% increase in organic search rankings</li>
                  <li>Pitched the marketing plan to a panel of industry professionals from leading agencies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="activities-section volunteer-section section">
        <div className="container">
          <h2 className="section-title">Volunteering & Community Engagement</h2>
          
          <div className="activities-container">
            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faHandshake} />
              </div>
              <div className="activity-content">
                <h3>Health Awareness Campaign Volunteer</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2023 - Present</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Hyderabad</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Participated in organizing health camps in 5 underserved communities</li>
                  <li>Created educational materials on preventive healthcare and medication adherence</li>
                  <li>Assisted in coordinating logistics for mobile medical teams serving 500+ beneficiaries</li>
                  <li>Collaborated with local NGOs to ensure sustainable healthcare support systems</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <div className="activity-content">
                <h3>Peer Mentoring Program</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2023 - Present</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Mahindra University</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Mentor to 3 first-year students in academic and professional development</li>
                  <li>Conducted weekly sessions on study techniques and time management</li>
                  <li>Assisted mentees in selecting specializations and exploring career opportunities</li>
                  <li>All mentees improved their academic performance by at least one grade level</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="activity-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="activity-content">
                <h3>Digital Literacy Program Volunteer</h3>
                <div className="activity-info">
                  <div className="info-item">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    <span>2022 - 2023</span>
                  </div>
                  <div className="info-item">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span>Rural Hyderabad District</span>
                  </div>
                </div>
                <ul className="activity-details">
                  <li>Taught basic computer skills to 30+ senior citizens and rural youth</li>
                  <li>Developed simplified learning materials for digital tools and online services</li>
                  <li>Organized workshops on using digital healthcare services and telemedicine platforms</li>
                  <li>Coordinated with local community centers to establish sustainable learning programs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extracurricular;