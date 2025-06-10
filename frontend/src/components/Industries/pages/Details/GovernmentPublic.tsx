// src/components/Industries/pages/Details/GovernmentPublic.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GovernmentPublic: React.FC = () => {
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
      {/* Government & Public Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/gov.jpg")', // Replace with actual banner image path
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
          Government & Public
        </h1>
      </div>

      {/* Government & Public Content */}
      <section
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Modernizing Governance Through Technology, Transparency & Inclusion
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Government Images */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'gov1.jpg',
              'gov3.jpg',
              'gov4.jpg',
              'gov5.jpg',
              'gov6.jpg',
              'gov7.jpg',
            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Government ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 6 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Government Text */}
          <div style={{ flex: '1 1 55%' }}>
            <p style={{ fontSize: '2.5rem', lineHeight: '1.7' }}>
              <strong>Governments globally</strong> are embracing digital transformation to deliver transparent, efficient, and citizen-centric services. Arinsa partners with public sector entities to accelerate innovation and foster inclusive growth.
            </p>
            <p>
              Empowering governance with secure digital platforms, AI-driven insights, and scalable infrastructure for better public service delivery.
            </p>

            <h2>Key Trends Transforming Government & Public Sector</h2>
            <ul>
              <li><strong>Digital Governance:</strong> E-governance platforms offer faster, transparent, and accessible services.</li>
              <li><strong>Open Data Initiatives:</strong> Enhancing accountability and innovation through open government data.</li>
              <li><strong>Smart Cities:</strong> IoT, AI, and big data optimize city infrastructure and citizen safety.</li>
              <li><strong>Cloud-first Policy:</strong> Enables resilient, scalable digital services and operations.</li>
              <li><strong>Cybersecurity & Sovereign Data Protection:</strong> Strengthens national security and public trust.</li>
            </ul>

            <h2>Benefits of Digital Transformation in Public Services</h2>
            <ul>
              <li><strong>Efficient Service Delivery:</strong> Reduces delays and improves access via automation and self-service portals.</li>
              <li><strong>Increased Transparency:</strong> Real-time tracking, online grievance systems, and RTI portals build citizen confidence.</li>
              <li><strong>Cost Reduction:</strong> Digital workflows and shared infrastructure cut administrative costs.</li>
              <li><strong>Inclusive Governance:</strong> Tech enables outreach to rural and underserved communities.</li>
              <li><strong>Crisis Management:</strong> Data-driven response systems for emergencies and disaster management.</li>
            </ul>

            <h2>Emerging Technologies Driving Public Sector Innovation</h2>
            <ul>
              <li><strong>AI Chatbots & Virtual Assistants:</strong> 24/7 support for citizen services and queries.</li>
              <li><strong>Blockchain for Public Records:</strong> Secures land, identity, and finance data with transparency.</li>
              <li><strong>Facial Recognition & Biometrics:</strong> Enhances security in public safety and welfare programs.</li>
              <li><strong>Geospatial Analytics:</strong> Aids urban planning and disaster response.</li>
              <li><strong>Digital ID & E-KYC:</strong> Streamlines access to benefits, subsidies, and services.</li>
            </ul>

            <h2>Challenges in Public Sector Digitalization</h2>
            <ul>
              <li><strong>Legacy Infrastructure:</strong> Outdated systems delay integration and agility.</li>
              <li><strong>Data Privacy & Ethics:</strong> Balancing innovation with citizens’ rights and privacy.</li>
              <li><strong>Digital Literacy:</strong> Need for training across citizen and workforce levels.</li>
              <li><strong>Inter-agency Coordination:</strong> Ensuring seamless service across departments.</li>
              <li><strong>Procurement Bottlenecks:</strong> Traditional procurement processes slow down innovation.</li>
            </ul>

            <h2>Use Cases in Government & Public Services</h2>
            <ul>
              <li><strong>Digital Passport & Identity Management:</strong> Simplified global travel and authentication.</li>
              <li><strong>Online Tax Portals:</strong> Automated filing and refund processes for citizens and businesses.</li>
              <li><strong>Real-Time Crime Mapping:</strong> Predictive policing with data-driven crime tracking.</li>
              <li><strong>E-Governance Portals:</strong> One-stop access to certificates, schemes, and land records.</li>
              <li><strong>AI-Powered Welfare Disbursement:</strong> Fraud detection and streamlined subsidy delivery.</li>
            </ul>

            <h2>How Arinsa Supports Government Modernization</h2>
            <ul>
              <li>Custom e-governance portal development and citizen dashboards.</li>
              <li>AI-enabled data analytics for policy impact and public sentiment analysis.</li>
              <li>Secure cloud and hybrid infrastructure deployments for public services.</li>
              <li>Blockchain-based document management and verification systems.</li>
              <li>Mobile-first public apps and multilingual accessibility tools.</li>
            </ul>

            <p>
              Arinsa enables public sector transformation with citizen-first innovation, scalable platforms, and future-ready digital solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovernmentPublic;
