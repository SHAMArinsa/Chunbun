import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Transportation: React.FC = () => {
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
      {/* Transportation Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/trans.jpg")', // update with actual banner image path
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
          Transportation
        </h1>
      </div>

      {/* Transportation Content */}
      <section
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
          lineHeight: '1.6',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Revolutionizing Transportation Through AI and Smart Technologies
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Images Column */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'trans1.jpg',
              'trans2.jpg',
              'trans3.jpg',
              'trans4.jpg',
              'trans5.jpg',
              'trans6.jpg',
              'trans7.jpg'
              
            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Transportation ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 6 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Text Column */}
          <div style={{ flex: '1 1 55%' }}>
            <p style={{ fontSize: '2.2rem', lineHeight: '1.7' }}>
              Optimizing logistics, autonomous systems, and mobility experiences through intelligent analytics and smart infrastructure.
            </p>

            <h3>Key Innovations in Transportation</h3>
            <p>
              The transportation industry is undergoing a transformative phase with the integration of cutting-edge technologies. These innovations are reshaping logistics, passenger services, and infrastructure management:
            </p>
            <ul>
              <li><strong>Autonomous Vehicles:</strong> Self-driving cars, trucks, and drones are set to revolutionize mobility, promising increased safety and efficiency by reducing human error.</li>
              <li><strong>Electric Vehicles (EVs):</strong> Reducing fossil fuel dependence through advanced EV technology, battery innovations, and expanding charging infrastructure.</li>
              <li><strong>Smart Infrastructure:</strong> Intelligent traffic lights, smart highways, and IoT-enabled sensors are improving traffic flow and reducing congestion in urban environments.</li>
              <li><strong>Mobility-as-a-Service (MaaS):</strong> Integration of various transportation modes into unified, user-friendly digital platforms enabling seamless travel planning and payment.</li>
              <li><strong>Data-Driven Logistics:</strong> Leveraging AI and big data analytics to optimize route planning, fuel consumption, fleet management, and supply chain efficiency.</li>
            </ul>

            <h3>Emerging Trends Shaping the Future</h3>
            <p>
              Several key trends are driving the evolution of transportation towards smarter, cleaner, and more connected systems:
            </p>
            <ul>
              <li><strong>Urbanization and Smart Cities:</strong> Increased urban populations require intelligent traffic management and integrated public transit to reduce congestion and pollution.</li>
              <li><strong>Sustainability Initiatives:</strong> Governments and companies are committing to net-zero emissions goals, accelerating adoption of EVs and renewable energy-powered transport.</li>
              <li><strong>Artificial Intelligence Integration:</strong> AI enables predictive maintenance, autonomous decision-making, and enhanced safety protocols across the transportation network.</li>
              <li><strong>On-Demand and Shared Mobility:</strong> Ride-sharing, micro-mobility (e-scooters, bikes), and subscription-based transportation services are reshaping how people move.</li>
              <li><strong>5G and Connectivity:</strong> Faster, reliable connectivity supports vehicle-to-vehicle (V2V) and vehicle-to-infrastructure (V2I) communication for real-time traffic management and safety.</li>
            </ul>

            <h3>Real-World Applications and Case Studies</h3>
            <ul>
              <li><strong>Tesla Autopilot:</strong> Tesla’s advanced driver assistance system enhances vehicle autonomy and safety through AI-powered sensor fusion and computer vision.</li>
              <li><strong>Waymo Self-Driving Taxis:</strong> Waymo is pioneering fully autonomous ride-hailing services in select cities, reducing the need for human drivers.</li>
              <li><strong>Siemens Smart Traffic Systems:</strong> Siemens develops smart traffic lights and control centers that dynamically adjust signals based on traffic patterns.</li>
              <li><strong>Amazon Robotics in Logistics:</strong> Amazon leverages autonomous robots and AI-driven logistics to optimize warehouse operations and last-mile delivery.</li>
            </ul>

            <h3>How Arinsa AI MINDS Supports Transportation Professionals</h3>
            <p>
              To empower individuals and companies to thrive in this rapidly changing industry, Arinsa AI MINDS offers tailored educational programs:
            </p>
            <ul>
              <li><strong>AI and Machine Learning for Autonomous Systems:</strong> Hands-on courses to develop algorithms powering self-driving vehicles and drones.</li>
              <li><strong>Electric Vehicle Technologies:</strong> Training on battery chemistry, EV design, and charging infrastructure planning.</li>
              <li><strong>Smart Infrastructure and IoT:</strong> Learn to deploy IoT sensors, smart traffic control systems, and real-time analytics platforms.</li>
              <li><strong>Data Analytics for Logistics:</strong> Courses on leveraging big data to optimize supply chains and fleet management.</li>
              <li><strong>Mobility-as-a-Service Platform Development:</strong> Build integrated digital solutions that unify multiple transport modes into seamless user experiences.</li>
            </ul>

            <h3 style={{ marginTop: '40px' }}>Looking Ahead: The Future of Transportation</h3>
            <p>
              The future of transportation promises exciting advances with AI at its core — from fully autonomous urban mobility to sustainable smart cities. Continuous innovation, coupled with thoughtful regulation and collaboration, will pave the way for safer, greener, and more efficient transportation ecosystems worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transportation;
