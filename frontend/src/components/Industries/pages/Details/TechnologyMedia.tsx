import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TechnologyMedia: React.FC = () => {
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
      {/* Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/tmt.jpg")',
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
          Technology, Media & Telecom
        </h1>
      </div>

      {/* Content Section */}
      <section
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Revolutionizing TMT through Innovation & Connectivity
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Images Column */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'tmt1.jpg',
              'tmt2.jpg',
              'tmt3.jpg',
              'tmt4.jpg',
              'tmt5.jpg',
              'tmt6.jpg',
              'tmt7.jpg',
              'tmt8.jpg',

            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Technology Media Telecom ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 7 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Text Content Column */}
          <div style={{ flex: '1 1 55%' }}>
            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Key Innovations in TMT
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>
                  <strong>5G Networks:</strong> Enabling innovations like autonomous vehicles, smart cities, and high-definition content streaming.
                </li>
                <li>
                  <strong>AI & ML:</strong> Powering personalization, customer service, and real-time content optimization.
                </li>
                <li>
                  <strong>Blockchain Technology:</strong> Increasing transparency in media rights, secure telecom, and decentralization.
                </li>
                <li>
                  <strong>AR & VR:</strong> Transforming content consumption through immersive experiences and visualizations.
                </li>
                <li>
                  <strong>Quantum Computing:</strong> Promising breakthroughs in encryption, data processing, and telecom performance.
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Key Trends Driving the TMT Industry
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>
                  <strong>Digital Transformation in Media:</strong> Streaming services and CDNs dominate digital-first content consumption.
                </li>
                <li>
                  <strong>Consumer-Centricity in Telecom:</strong> Cloud-based networks, personalized data plans, and AI-driven customer support.
                </li>
                <li>
                  <strong>Data Privacy and Security:</strong> Growing demand for secure, compliant handling of personal data.
                </li>
                <li>
                  <strong>Subscription-Based Models:</strong> Shifting from pay-per-view to user-personalized subscription ecosystems.
                </li>
                <li>
                  <strong>Edge Computing:</strong> Powering real-time applications through low-latency localized processing.
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Real-Life Examples of TMT Innovation
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>
                  <strong>Waymo:</strong> Self-driving cars utilizing AI and 5G for safe navigation.
                </li>
                <li>
                  <strong>Netflix:</strong> Uses ML to personalize content and boost engagement.
                </li>
                <li>
                  <strong>Spotify:</strong> Delivers personalized music recommendations via big data and AI.
                </li>
                <li>
                  <strong>Amazon:</strong> Powers global commerce and cloud computing with AWS and AI-driven interfaces.
                </li>
                <li>
                  <strong>IKEA:</strong> Enhances shopping with AR apps for virtual furniture visualization.
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Research & Development in TMT: Advancing the Future
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>
                  <strong>5G Network Research:</strong> Focused on scale, density, and urban performance.
                </li>
                <li>
                  <strong>AI for Content Creation:</strong> Automates video summaries, articles, and more.
                </li>
                <li>
                  <strong>Blockchain in DRM:</strong> Ensures ownership tracking and rights management.
                </li>
                <li>
                  <strong>Quantum Telecom:</strong> Advancing secure communication with quantum key distribution.
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                The Future of TMT: Challenges and Opportunities
              </h3>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>
                  <strong>Privacy & Security:</strong> Critical investments needed in protecting consumer data.
                </li>
                <li>
                  <strong>Digital Divide:</strong> Bridging access gaps between developed and underserved communities.
                </li>
                <li>
                  <strong>Ethical AI:</strong> Addressing bias, surveillance concerns, and automation-driven job shifts.
                </li>
                <li>
                  <strong>Environmental Impact:</strong> Shifting toward sustainable data centers and energy-efficient tech.
                </li>
              </ul>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Workforce Transformation in TMT
              </h3>
              <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                The rapid evolution of TMT technologies requires a highly skilled, adaptable workforce. Professionals must develop expertise in AI, cybersecurity, cloud computing, and data science to stay competitive. Continuous learning and upskilling are essential for embracing automation, hybrid work models, and cross-disciplinary collaboration.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>Reskilling initiatives for AI and ML proficiency.</li>
                <li>Emphasis on cybersecurity awareness and response.</li>
                <li>Agile methodologies and digital-first mindsets.</li>
                <li>Collaborative platforms enhancing remote teamwork.</li>
              </ul>
            </section>

            <section style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                Sustainability in Technology, Media & Telecom
              </h3>
              <p style={{ lineHeight: '1.7', marginBottom: '20px' }}>
                As TMT industries grow, sustainability remains a key priority. Energy-efficient data centers, eco-friendly hardware, and responsible e-waste management are critical. Innovations like AI-powered energy management and green cloud computing contribute to reducing the sector's carbon footprint.
              </p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.7' }}>
                <li>Renewable energy integration for data centers.</li>
                <li>Optimizing network energy consumption via AI.</li>
                <li>Extending device lifecycles through circular economy practices.</li>
                <li>Regulatory compliance with evolving environmental standards.</li>
              </ul>
            </section>

            <section>
              <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
                How Arinsa AI MINDS Supports TMT Professionals
              </h3>
              <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>
                At Arinsa AI MINDS, we provide cutting-edge training, workshops, and certification programs tailored to the TMT sector. Our courses cover AI, 5G technology, blockchain applications, cybersecurity, and more, empowering professionals to lead digital transformation initiatives.
              </p>
              <p style={{ lineHeight: '1.7' }}>
                Join our community to access expert mentorship, industry collaborations, and hands-on projects that prepare you for the future of technology, media, and telecom.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyMedia;
