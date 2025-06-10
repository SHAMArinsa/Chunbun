// src/components/Industries/pages/Details/AdvancedManufacturing.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


const AdvancedManufacturing: React.FC = () => {
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
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url("/image/AdvancedManufacturing.jpg")',
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
          Advanced Manufacturing
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
          Transforming Industry Through Innovation
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Left Images */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'advancedmanufacturing1.jpg',
              'advancedmanufacturing2.jpg',
              'advancedmanufacturing3.jpg',
              'advancedmanufacturing4.jpg',
              'advancedmanufacturing5.jpg',
              'advancedmanufacturing6.jpg',
           
            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Advanced Manufacturing ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 6 ? '80px' : '0', // No margin after last image
                }}
              />
            ))}
          </div>

          {/* Right Text */}
          <div style={{ flex: '1 1 55%' }}>
            <p style={{ fontSize: '2.5rem', lineHeight: '1.7' }}></p>
            <strong>Advanced Manufacturing</strong>
            <p>
              Advanced Manufacturing integrates modern technologies and smart processes to enhance productivity, efficiency, and sustainability across industrial operations. Below are the key components and benefits:
            </p>

            <h2>Key Elements of Advanced Manufacturing</h2>
            <ul>
              <li><strong>Automation & Robotics:</strong> Improves precision, speed, and consistency while reducing labor costs.</li>
              <li><strong>Artificial Intelligence & Machine Learning:</strong> Enables predictive maintenance, demand forecasting, and real-time process optimization.</li>
              <li><strong>Industrial Internet of Things (IIoT):</strong> Connects machines, systems, and sensors for enhanced monitoring and control.</li>
              <li><strong>3D Printing (Additive Manufacturing):</strong> Allows rapid prototyping, customization, and reduction in material waste.</li>
              <li><strong>Digital Twin Technology:</strong> Creates virtual models of physical assets for simulation, testing, and performance enhancement.</li>
              <li><strong>Advanced Materials:</strong> Incorporation of composites, nanomaterials, and lightweight alloys for superior product capabilities.</li>
            </ul>

            <h2>Strategic Benefits</h2>
            <ul>
              <li><strong>Increased Productivity:</strong> Faster production cycles and streamlined workflows through digitization.</li>
              <li><strong>Enhanced Quality Control:</strong> Data-driven quality monitoring reduces defects and ensures consistency.</li>
              <li><strong>Cost Efficiency:</strong> Reduced waste, energy usage, and maintenance expenses over time.</li>
              <li><strong>Supply Chain Resilience:</strong> Real-time visibility, traceability, and adaptability to disruptions using AI and blockchain.</li>
              <li><strong>Environmental Sustainability:</strong> Energy-efficient operations, reduced carbon footprint, and compliance with green regulations.</li>
            </ul>

            <h2>Industry Applications</h2>
            <ul>
              <li>Aerospace: Lightweight materials, precision manufacturing, and simulation testing.</li>
              <li>Automotive: Smart factories, autonomous quality inspection, and EV battery production.</li>
              <li>Healthcare: Custom implants, surgical tools via 3D printing, and sterile automated production lines.</li>
              <li>Electronics: Miniaturized components, automated assembly, and defect detection.</li>
            </ul>

            <h2>Future Outlook</h2>
            <ul>
              <li><strong>Workforce Evolution:</strong> Demand for digitally skilled workers and reskilling of traditional manufacturing roles.</li>
              <li><strong>Collaborative Innovation:</strong> Ecosystems of manufacturers, tech providers, and research institutes driving continuous improvement.</li>
              <li><strong>AI-Driven Factories:</strong> Intelligent, self-optimizing facilities powered by data and machine learning.</li>
            </ul>

            <p>
              At <strong>Arinsa</strong>, we empower manufacturers to embrace digital transformation by offering strategic consulting, implementation support, and technology enablement tailored to the specific demands of the advanced manufacturing ecosystem.
            </p>

            <h2>Challenges and Considerations</h2>
            <ul>
              <li><strong>High Initial Investment:</strong> Transitioning to advanced manufacturing often requires significant capital for infrastructure, training, and integration.</li>
              <li><strong>Cybersecurity Risks:</strong> As connectivity increases, so does the vulnerability to cyber threats. Securing operational technology (OT) environments is crucial.</li>
              <li><strong>Data Management:</strong> The explosion of machine and sensor data requires robust data governance, storage, and real-time analytics strategies.</li>
              <li><strong>Change Management:</strong> Organizational resistance to technological shifts can hinder implementation and ROI. Strong leadership and stakeholder alignment are vital.</li>
            </ul>

            <h2>Technologies Driving the Shift</h2>
            <ul>
              <li><strong>Edge Computing:</strong> Real-time processing at the machine level to reduce latency and improve responsiveness.</li>
              <li><strong>Cloud-Based MES:</strong> Manufacturing Execution Systems hosted on the cloud offer scalability and integration across sites.</li>
              <li><strong>AR/VR in Training and Maintenance:</strong> Augmented and Virtual Reality are increasingly used for worker training, equipment simulations, and remote maintenance assistance.</li>
              <li><strong>Zero-Defect Manufacturing:</strong> Combining quality analytics and real-time monitoring to aim for error-free production lines.</li>
            </ul>

            <h2>How Arinsa Can Help</h2>
            <ul>
              <li>Assessment of digital maturity and readiness across your manufacturing value chain.</li>
              <li>Custom roadmap for smart factory transformation aligned with business goals.</li>
              <li>Integration of AI, IoT, and cloud platforms to enhance operations and monitoring.</li>
              <li>Training and upskilling of your workforce to adapt to new technologies and tools.</li>
              <li>Ongoing support, maintenance, and performance optimization for long-term success.</li>
            </ul>

            <p>
              Whether you're initiating your digital journey or optimizing an existing smart factory setup, Arinsa is your trusted partner in shaping a future-ready manufacturing enterprise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdvancedManufacturing;
