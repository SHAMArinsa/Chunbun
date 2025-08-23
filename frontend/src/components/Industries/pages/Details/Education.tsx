// src/components/Industries/pages/Details/Education.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Education: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div>
      {/* Responsive Styling */}
      <style>{`
        @media (max-width: 768px) {
          .education-banner {
            height: 300px !important;
            padding: 0 20px !important;
          }
          .education-banner h1 {
            font-size: 2rem !important;
          }
          .education-section {
            padding: 30px 20px !important;
            font-size: 1rem !important;
          }
          .education-flex {
            flex-direction: column !important;
          }
          .education-images {
            display: none !important;
          }
          .education-text p,
          .education-text ul,
          .education-text h2 {
            font-size: 1.25rem !important;
          }
          .education-mobile-box {
            background-color: #1a1a1a;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.4);
          }
        }
      `}</style>

      {/* Education Banner */}
      <div
        className="education-banner"
        style={{
          backgroundImage: 'url("/image/education.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          padding: '0 40px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            color: '#fff',
            margin: 0,
            fontWeight: 'bold',
          }}
        >
          Education
        </h1>
      </div>

      {/* Education Content */}
      <section
        className="education-section"
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Transforming Learning with Technology and Personalization
        </h2>

        <div className="education-flex" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Education Images - Hidden on mobile */}
          <div className="education-images" style={{ flex: '1 1 40%' }}>
            {[...Array(8)].map((_, index) => (
              <img
                key={index}
                src={`/image/edu${index + 1}.jpg`}
                alt={`Education ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 7 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Education Text - with mobile box wrapping */}
          <div className="education-text" style={{ flex: '1 1 55%' }}>
            {[...document.querySelectorAll('.education-text').values()].length === 0 ? null : null}
            <div className="education-mobile-box">
              <p><strong>Education is evolving</strong> rapidly through AI, personalization, and immersive technologies. Arinsa drives this evolution with innovative solutions tailored for institutions, students, and educators globally.</p>
              <p>Empower students with adaptive learning, increase institutional reach, and deliver inclusive, impactful education using emerging digital tools.</p>
            </div>
            <div className="education-mobile-box">
              <h2>Key Trends Driving the Education Sector</h2>
              <ul>
                <li><strong>EdTech Expansion:</strong> Online platforms, mobile learning, and digital repositories redefine global learning access.</li>
                <li><strong>AI-Powered Personalization:</strong> Adaptive learning paths based on individual performance and behavior.</li>
                <li><strong>Blended & Hybrid Learning:</strong> Combining physical and digital classrooms enhances flexibility.</li>
                <li><strong>Gamification of Learning:</strong> Rewards and interactive learning improve engagement.</li>
                <li><strong>Microlearning:</strong> Short, focused content for skill-based upskilling and better retention.</li>
              </ul>
            </div>
            <div className="education-mobile-box">
              <h2>Benefits of Digital Transformation in Education</h2>
              <ul>
                <li><strong>Accessibility:</strong> Bridging education gaps in underserved and rural areas.</li>
                <li><strong>Real-Time Feedback:</strong> Analytics-driven tracking and performance insights for personalized intervention.</li>
                <li><strong>Student-Centric Learning:</strong> Self-paced modules that enhance comprehension and success rates.</li>
                <li><strong>Cost Efficiency:</strong> Minimizing overhead through digital content and administration.</li>
                <li><strong>Scalability:</strong> Reach large learner bases without compromising quality.</li>
              </ul>
            </div>
            <div className="education-mobile-box">
              <h2>Use Cases Across Education</h2>
              <ul>
                <li><strong>AI Tutors:</strong> On-demand academic assistance tailored to student needs.</li>
                <li><strong>Virtual Labs:</strong> Hands-on learning in simulated environments for science, coding, and engineering.</li>
                <li><strong>Learning Management Systems (LMS):</strong> Centralized platforms for course management, assessments, and communication.</li>
                <li><strong>Remote Proctoring:</strong> Secure, AI-based exam monitoring ensuring academic integrity.</li>
                <li><strong>Interactive Content:</strong> AR/VR-powered modules that enhance concept clarity and engagement.</li>
              </ul>
            </div>
            <div className="education-mobile-box">
              <h2>Challenges in the Education Sector</h2>
              <ul>
                <li><strong>Digital Divide:</strong> Limited access to devices and the internet impacts learning equality.</li>
                <li><strong>Teacher Training:</strong> Need for digital literacy and adoption of AI tools in teaching.</li>
                <li><strong>Student Attention Span:</strong> Digital distractions pose challenges in sustained focus.</li>
                <li><strong>Assessment Validity:</strong> Ensuring credibility and anti-cheating measures during online exams.</li>
                <li><strong>Content Quality Assurance:</strong> Maintaining consistent, up-to-date, and verified learning content.</li>
              </ul>
            </div>
            <div className="education-mobile-box">
              <h2>Emerging Technologies in Education</h2>
              <ul>
                <li><strong>AI-Driven Curriculum Mapping:</strong> Automating course creation based on industry trends and student needs.</li>
                <li><strong>Immersive Learning:</strong> AR/VR-based simulations for interactive subject exploration.</li>
                <li><strong>Blockchain Credentials:</strong> Secure, tamper-proof digital certifications and transcripts.</li>
                <li><strong>Predictive Analytics:</strong> Early warning systems to prevent dropouts and improve student outcomes.</li>
                <li><strong>Language Processing Tools:</strong> Real-time translation and accessibility support for diverse learners.</li>
              </ul>
            </div>
            <div className="education-mobile-box">
              <h2>Industry Statistics & Market Outlook</h2>
              <p>According to HolonIQ, the global EdTech market is expected to exceed $404 billion by 2025, growing at a CAGR of over 16%. Digital adoption is accelerating, especially in emerging economies, where mobile learning is surging.</p>
              <p>Increased investments in AI and immersive technologies are transforming how institutions deliver curriculum, assess students, and foster lifelong learning.</p>
            </div>
            <div className="education-mobile-box">
              <h2>How Arinsa Empowers Educational Innovation</h2>
              <ul>
                <li>Custom LMS design and integration tailored for K-12, higher education, and corporate training.</li>
                <li>AI-based content personalization, student progress tracking, and adaptive learning modules.</li>
                <li>Immersive AR/VR experiences to deepen engagement and hands-on learning.</li>
                <li>Robust analytics dashboards for administrators and educators.</li>
                <li>Digital certification and blockchain credentialing frameworks for academic records.</li>
                <li>Comprehensive remote proctoring with AI-driven suspicious activity detection.</li>
                <li>Multi-language support and accessibility enhancements for global reach.</li>
              </ul>
              <p>Arinsa supports institutions, educators, and learners in embracing a smarter, more inclusive, and impactful educational future.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;