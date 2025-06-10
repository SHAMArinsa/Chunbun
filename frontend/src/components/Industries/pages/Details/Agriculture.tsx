// src/components/Industries/pages/Details/Agriculture.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Agriculture: React.FC = () => {
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
          backgroundImage: 'url("/image/agriculture.jpg")',
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
          Agriculture
        </h1>
      </div>

      {/* Image + Content Section */}
      <section
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Empowering Agriculture with Smart Technologies
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Left Images */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'agriculture1.jpg',
              'agriculture2.jpg',
              'agriculture3.jpg',
              'agriculture4.jpg',
              'agriculture5.jpg',
              'agriculture6.jpg',
              
            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Agriculture ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 6 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Right Text */}
          <div style={{ flex: '1 1 55%' }}>
            <p style={{ fontSize: '2.5rem', lineHeight: '1.7' }}>
              <strong>Agriculture</strong> is being revolutionized through data-driven decisions, AI tools, and smart devices to sustainably increase yield, manage risk, and ensure food security across the globe.
            </p>
            <p>
              Empowering farmers with precision farming tools, drone monitoring, and data insights for yield improvement.
            </p>

            <h2>Key Components of Modern Agriculture</h2>
            <ul>
              <li><strong>Precision Farming:</strong> Utilizes GPS, sensors, and IoT devices to optimize planting, irrigation, and harvesting.</li>
              <li><strong>Remote Sensing & Drones:</strong> Enable aerial monitoring of crop health, pest infestation, and soil conditions.</li>
              <li><strong>AI and Predictive Analytics:</strong> Forecast weather, predict crop diseases, and guide planting cycles using historical and real-time data.</li>
              <li><strong>Smart Irrigation Systems:</strong> Automated, sensor-driven water delivery systems that minimize waste and increase water efficiency.</li>
              <li><strong>Automated Machinery:</strong> Autonomous tractors and robotic harvesters reduce labor dependency and enhance productivity.</li>
              <li><strong>Blockchain in Agri-Supply Chains:</strong> Enhances traceability and transparency from farm to fork.</li>
            </ul>

            <h2>Strategic Benefits</h2>
            <ul>
              <li><strong>Higher Yields:</strong> Optimized planting and harvesting methods lead to increased productivity per acre.</li>
              <li><strong>Cost Efficiency:</strong> Precision tools reduce overuse of water, fertilizers, and pesticides, cutting down expenses.</li>
              <li><strong>Risk Reduction:</strong> AI-powered weather and market predictions help farmers make informed decisions.</li>
              <li><strong>Climate Resilience:</strong> Sustainable farming practices mitigate the effects of changing weather patterns.</li>
              <li><strong>Market Access:</strong> Digital platforms connect farmers to buyers directly, improving profit margins and eliminating middlemen.</li>
            </ul>

            <h2>Use Cases Across Agriculture</h2>
            <ul>
              <li><strong>Crop Monitoring:</strong> Drones and satellite imaging detect crop stress early for timely intervention.</li>
              <li><strong>Soil Health Management:</strong> Sensor data enables tailored fertilizer application based on nutrient mapping.</li>
              <li><strong>Livestock Management:</strong> Wearables and RFID tags track animal health, location, and breeding cycles.</li>
              <li><strong>Post-Harvest Logistics:</strong> Cold chain monitoring and IoT sensors reduce spoilage during transport and storage.</li>
            </ul>

            <h2>Challenges and Considerations</h2>
            <ul>
              <li><strong>Technology Accessibility:</strong> Smallholder farmers in rural regions may lack the infrastructure or funds to adopt smart tools.</li>
              <li><strong>Data Literacy:</strong> Farmers may require training to interpret analytics and use digital platforms effectively.</li>
              <li><strong>Connectivity Gaps:</strong> Limited internet coverage in remote areas restricts the potential of real-time monitoring tools.</li>
              <li><strong>Scalability:</strong> Customization of solutions is needed to suit different geographies, soil types, and crop varieties.</li>
              <li><strong>Initial Investment:</strong> Cost of deploying IoT devices, drones, and analytics tools may be a barrier for marginal farmers.</li>
            </ul>

            <h2>Emerging Technologies in AgTech</h2>
            <ul>
              <li><strong>Agri-Drones:</strong> Spray fertilizers and pesticides with precision and monitor crop conditions from the air.</li>
              <li><strong>AI-Based Decision Platforms:</strong> Offer real-time recommendations for irrigation, pest control, and harvesting.</li>
              <li><strong>Vertical Farming:</strong> Uses controlled environments to grow crops in urban areas with minimal land usage.</li>
              <li><strong>Satellite Crop Intelligence:</strong> Provides macro-level insights on drought risk, crop coverage, and growth patterns.</li>
              <li><strong>Bioengineering:</strong> Develops drought- and pest-resistant seed varieties tailored to specific environments.</li>
            </ul>

            <h2>How Arinsa Supports Agricultural Transformation</h2>
            <ul>
              <li>End-to-end implementation of precision agriculture systems customized for your crop and region.</li>
              <li>Integration of drone surveillance, IoT soil sensors, and real-time dashboards for field monitoring.</li>
              <li>Data-driven advisory services powered by AI to assist in planning, cultivation, and distribution.</li>
              <li>Training programs for farmers on digital tools and best practices for sustainable agriculture.</li>
              <li>Post-harvest supply chain optimization using sensor-based tracking and blockchain-based traceability.</li>
            </ul>

            <p>
              Arinsa is committed to modernizing agriculture by making smart farming tools and technologies accessible, scalable, and impactful — ensuring food security, farmer profitability, and environmental balance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Agriculture;
