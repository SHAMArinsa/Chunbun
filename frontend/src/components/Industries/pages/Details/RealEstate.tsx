// src/components/Industries/pages/Details/RealEstate.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RealEstate: React.FC = () => {
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
      {/* Real Estate Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/real.jpg")', // Replace with actual image path
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
          Real Estate
        </h1>
      </div>

      {/* Real Estate Content */}
      <section
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Revolutionizing Real Estate Through AI and Automation
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Real Estate Images */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'real1.jpg',
              'real2.jpg',
              'real3.jpg',
              'real4.jpg',
              'real5.jpg',
              'real6.jpg',
              'real7.jpg',
              
            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Real Estate ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 7 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Real Estate Text */}
          <div style={{ flex: '1 1 55%' }}>
            <p style={{ fontSize: '2.5rem', lineHeight: '1.7' }}>
              <strong>Real estate is transforming</strong> through digital innovation. AI, blockchain, and immersive technologies are driving efficiency, trust, and engagement across property markets.
            </p>
            <p>
              From virtual tours to smart contracts, Arinsa delivers cutting-edge digital tools to modernize the real estate journey for buyers, sellers, and agents.
            </p>

            <h2>Key Innovations in the Real Estate Industry</h2>
            <ul>
              <li>
                <strong>AI-driven Property Valuation:</strong> Machine learning models analyze market data, property history, and local trends to provide accurate and dynamic property valuations.
                <ul>
                  <li><strong>Example:</strong> Zillow's Zestimate feature uses AI to predict home values by analyzing millions of data points.</li>
                </ul>
              </li>
              <li>
                <strong>Predictive Analytics:</strong> Anticipate demand, pricing, and investment opportunities through data trends.
                <ul>
                  <li><strong>Example:</strong> Redfin’s tools forecast price changes to optimize investment timing.</li>
                </ul>
              </li>
              <li>
                <strong>Virtual Tours and Augmented Reality (AR):</strong> Allow buyers to explore properties remotely in immersive 3D.
                <ul>
                  <li><strong>Example:</strong> Matterport’s 3D walkthroughs replicate real-life visits online.</li>
                </ul>
              </li>
              <li>
                <strong>Blockchain for Transactions:</strong> Secure, fast, and transparent property deals without middlemen.
                <ul>
                  <li><strong>Example:</strong> Propy enables fully digital, blockchain-secured real estate transactions.</li>
                </ul>
              </li>
              <li>
                <strong>Smart Contracts:</strong> Automate legal agreements to minimize fraud and delays.
                <ul>
                  <li><strong>Example:</strong> Ethereum-based contracts streamline property closings.</li>
                </ul>
              </li>
              <li>
                <strong>Internet of Things (IoT):</strong> Smart sensors and devices monitor building health, optimize energy use, and enhance security.
                <ul>
                  <li><strong>Example:</strong> Smart buildings adjust HVAC and lighting automatically for efficiency and comfort.</li>
                </ul>
              </li>
              <li>
                <strong>Big Data & Customer Insights:</strong> Leverage vast datasets to personalize marketing, predict buyer preferences, and optimize asset management.
                <ul>
                  <li><strong>Example:</strong> Real estate platforms use data-driven insights to tailor property suggestions.</li>
                </ul>
              </li>
            </ul>

            <h2>Benefits of Digital Transformation in Real Estate</h2>
            <ul>
              <li>
                <strong>Increased Efficiency:</strong> Automate listings, queries, and transactions to save time and cost.
                <ul>
                  <li><strong>Example:</strong> AI chatbots manage customer queries 24/7.</li>
                </ul>
              </li>
              <li>
                <strong>Better Customer Experience:</strong> Data-driven personalization improves property recommendations.
                <ul>
                  <li><strong>Example:</strong> Realtor.com matches buyers with tailored listings.</li>
                </ul>
              </li>
              <li>
                <strong>Improved Transparency:</strong> Blockchain ensures historical accuracy and trust.
                <ul>
                  <li><strong>Example:</strong> RealT offers verifiable ownership records via blockchain.</li>
                </ul>
              </li>
              <li><strong>Enhanced Market Insights:</strong> Analytics empower strategic buying and selling decisions.</li>
              <li>
                <strong>Sustainability and Smart Buildings:</strong> Digital tech enables eco-friendly construction and operations.
                <ul>
                  <li><strong>Example:</strong> IoT-enabled smart meters reduce energy waste in commercial properties.</li>
                </ul>
              </li>
            </ul>

            <h2>Challenges Facing the Real Estate Industry</h2>
            <ul>
              <li><strong>Data Privacy & Security:</strong> Protecting sensitive transaction and customer data from breaches.</li>
              <li><strong>Regulatory Compliance:</strong> Navigating complex legal environments for blockchain and AI usage.</li>
              <li><strong>Technology Adoption:</strong> Resistance from traditional stakeholders in adopting new digital tools.</li>
              <li><strong>Market Volatility:</strong> Unpredictable economic conditions affecting property values and demand.</li>
              <li><strong>Infrastructure Gaps:</strong> Limited broadband and IoT infrastructure in emerging markets.</li>
            </ul>

            <h2>How Arinsa Empowers Real Estate Innovation</h2>
            <ul>
              <li>End-to-end property platforms with integrated AI and analytics.</li>
              <li>Virtual and AR-based walkthrough solutions for remote engagement.</li>
              <li>Smart contract frameworks to accelerate closing processes securely.</li>
              <li>Blockchain-based asset tracking and digital title management.</li>
              <li>Custom dashboards for agents, investors, and brokers with real-time metrics.</li>
              <li>IoT integrations for smart building management and sustainability.</li>
              <li>Advanced predictive analytics for market forecasting and risk management.</li>
            </ul>

            <h2>Future Outlook: The Digital Real Estate Ecosystem</h2>
            <p style={{ marginBottom: '20px', lineHeight: '1.7' }}>
              The real estate industry is poised for continued transformation as technologies converge to create a more efficient, transparent, and customer-centric ecosystem. AI, blockchain, IoT, and immersive experiences will redefine property development, investment, and management.
            </p>
            <p style={{ lineHeight: '1.7' }}>
              Arinsa is committed to pioneering these innovations, enabling stakeholders to navigate the digital property era with confidence, agility, and insight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
