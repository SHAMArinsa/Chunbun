// src/components/Industries/pages/Details/EnergyResources.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const EnergyResources: React.FC = () => {
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
      {/* Energy & Resources Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/energy.jpg")', // Replace with actual image path
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
          Energy & Resources
        </h1>
      </div>

      {/* Energy & Resources Content */}
      <section
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Driving Innovation in Sustainability, Digitalization, and Energy Transition
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Images Column */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'energy1.jpg',
              'energy2.jpg',
              'energy3.jpg',
              'energy4.jpg',
              'energy5.jpg',
            
            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Energy & Resources ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 6 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Text Content Column */}
          <div style={{ flex: '1 1 55%', lineHeight: 1.6 }}>
            <p style={{ fontSize: '2rem', marginBottom: '30px' }}>
              <strong>
                The Energy & Resources sector is undergoing a dynamic transformation driven by sustainability, decarbonization, and digital innovation. Arinsa helps businesses adapt and thrive in this rapidly evolving landscape.
              </strong>
            </p>

            <h3>Key Trends Shaping the Sector</h3>
            <ul>
              <li><strong>Energy Transition:</strong> Shift to renewables like solar, wind, hydrogen, and geothermal.</li>
              <li><strong>Decarbonization:</strong> Adoption of low-carbon tech to achieve net-zero goals.</li>
              <li><strong>Electrification:</strong> Increasing reliance on electricity in transport and industry.</li>
              <li><strong>Smart Grids:</strong> IoT and AI-powered real-time grid management.</li>
              <li><strong>Energy Storage:</strong> Advancements in batteries supporting renewable stability.</li>
            </ul>

            <h3>Benefits of Digital Innovation</h3>
            <ul>
              <li><strong>Operational Efficiency:</strong> Predictive maintenance and analytics reduce downtime.</li>
              <li><strong>Resource Optimization:</strong> AI models optimize consumption and supply chains.</li>
              <li><strong>Sustainability Insights:</strong> Real-time emissions and ESG tracking.</li>
              <li><strong>Transparency & Compliance:</strong> Blockchain ensures traceability and adherence.</li>
              <li><strong>Worker Safety:</strong> Wearables and automation lower hazards.</li>
            </ul>

            <h3>Emerging Technologies</h3>
            <ul>
              <li><strong>AI & Machine Learning:</strong> Demand forecasting and decentralized system management.</li>
              <li><strong>Digital Twins:</strong> Virtual replicas for performance simulation.</li>
              <li><strong>IoT & Sensors:</strong> Real-time data from energy assets.</li>
              <li><strong>Blockchain:</strong> Secure trading and carbon credit tracking.</li>
              <li><strong>Hydrogen Economy:</strong> Critical for clean energy integration.</li>
            </ul>

            <h3>Challenges</h3>
            <ul>
              <li><strong>Infrastructure Modernization:</strong> Upgrading aging grids for digital and green tech.</li>
              <li><strong>Regulatory Complexity:</strong> Navigating evolving policies worldwide.</li>
              <li><strong>Cybersecurity Risks:</strong> Protecting critical infrastructure digitally.</li>
              <li><strong>Supply Chain Volatility:</strong> Raw material availability and costs.</li>
              <li><strong>Renewable Intermittency:</strong> Managing unpredictable energy output.</li>
            </ul>

            <h3>Use Cases & Applications</h3>
            <ul>
              <li><strong>Renewable Asset Management:</strong> AI monitoring of wind and solar farms.</li>
              <li><strong>Smart Metering:</strong> Dynamic pricing and usage analytics.</li>
              <li><strong>Carbon Tracking:</strong> Emission dashboards across operations.</li>
              <li><strong>Remote Site Monitoring:</strong> Drones and robotics for inspections.</li>
              <li><strong>Virtual Power Plants:</strong> Aggregating distributed energy sources.</li>
            </ul>

            <h3>How Arinsa Powers the Industry</h3>
            <ul>
              <li>AI-driven predictive maintenance and analytics.</li>
              <li>Renewable integration on digital platforms.</li>
              <li>Blockchain tools for energy trading and transparency.</li>
              <li>IoT dashboards for environmental monitoring.</li>
              <li>End-to-end sustainability and ESG compliance solutions.</li>
            </ul>

            <p style={{ marginTop: '40px' }}>
              At Arinsa, we empower energy leaders to navigate the transition to a cleaner, smarter, and more resilient future through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnergyResources;
