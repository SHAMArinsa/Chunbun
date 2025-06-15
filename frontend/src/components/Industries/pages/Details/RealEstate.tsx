import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RealEstate: React.FC = () => {
  const { hash } = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <div>
      {/* Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/real.jpg")',
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

      {/* Content Section */}
      <section
        style={{
          padding: isMobile ? '30px 20px' : '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: isMobile ? '1rem' : '1.5rem', // keep PC size 1.5rem as original
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            marginBottom: '40px',
            fontSize: isMobile ? '1.5rem' : '2rem', // keep PC original 2rem
          }}
        >
          Revolutionizing Real Estate Through AI and Automation
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '40px',
          }}
        >
          {/* Images on PC only */}
          {!isMobile && (
            <div style={{ flex: '1 1 40%' }}>
              {[
                'real1.jpg',
                'real2.jpg',
                'real3.jpg',
                'real5.jpg',
                'real6.jpg',
                'real7.jpg',
              ].map((src, idx) => (
                <img
                  key={idx}
                  src={`/image/${src}`}
                  alt={`Real Estate ${idx + 1}`}
                  style={{
                    width: '100%',
                    borderRadius: '8px',
                    marginBottom: idx !== 5 ? '80px' : '0',
                  }}
                />
              ))}
            </div>
          )}

          {/* Text content */}
          <div style={{ flex: '1 1 55%' }}>
            {[
              {
                title: '',
                content: (
                  <>
                    <p style={{ fontSize: isMobile ? '1.1rem' : '2.5rem', lineHeight: '1.7' }}>
                      <strong>Real estate is transforming</strong> through
                      digital innovation. AI, blockchain, and immersive
                      technologies are driving efficiency, trust, and engagement
                      across property markets.
                    </p>
                    <p style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                      From virtual tours to smart contracts, Arinsa delivers
                      cutting-edge digital tools to modernize the real estate
                      journey for buyers, sellers, and agents.
                    </p>
                  </>
                ),
              },
              {
                title: 'Key Innovations in the Real Estate Industry',
                content: (
                  <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                    <li>
                      <strong>AI-driven Property Valuation:</strong> Machine
                      learning models analyze market data, property history, and
                      local trends to provide accurate and dynamic property
                      valuations.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Zillow's Zestimate feature
                          uses AI to predict home values by analyzing millions
                          of data points.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Predictive Analytics:</strong> Anticipate demand,
                      pricing, and investment opportunities through data trends.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Redfin’s tools forecast
                          price changes to optimize investment timing.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Virtual Tours and AR:</strong> Allow buyers to
                      explore properties remotely in immersive 3D.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Matterport’s 3D walkthroughs
                          replicate real-life visits online.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Blockchain for Transactions:</strong> Secure,
                      fast, and transparent property deals without middlemen.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Propy enables fully digital,
                          blockchain-secured real estate transactions.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Smart Contracts:</strong> Automate legal
                      agreements to minimize fraud and delays.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Ethereum-based contracts
                          streamline property closings.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>IoT:</strong> Smart sensors monitor buildings,
                      optimize energy, enhance security.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Smart buildings adjust HVAC
                          and lighting automatically.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Big Data & Customer Insights:</strong> Personalize
                      marketing, predict preferences, optimize asset management.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Platforms use insights to
                          tailor property suggestions.
                        </li>
                      </ul>
                    </li>
                  </ul>
                ),
              },
              {
                title: 'Benefits of Digital Transformation in Real Estate',
                content: (
                  <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                    <li>
                      <strong>Increased Efficiency:</strong> Automate listings,
                      queries, transactions.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> AI chatbots manage customer
                          queries 24/7.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Better Customer Experience:</strong> Personalized
                      recommendations.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> Realtor.com matches buyers
                          with listings.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Improved Transparency:</strong> Blockchain ensures
                      historical accuracy.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> RealT offers verifiable
                          ownership records.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Enhanced Market Insights:</strong> Analytics
                      empower strategic buying and selling.
                    </li>
                    <li>
                      <strong>Sustainability and Smart Buildings:</strong>{' '}
                      Eco-friendly tech.
                      <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                        <li>
                          <strong>Example:</strong> IoT smart meters reduce
                          energy waste.
                        </li>
                      </ul>
                    </li>
                  </ul>
                ),
              },
              {
                title: 'Challenges Facing the Real Estate Industry',
                content: (
                  <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                    <li>
                      <strong>Data Privacy & Security:</strong> Protecting
                      sensitive transaction and customer data.
                    </li>
                    <li>
                      <strong>Regulatory Compliance:</strong> Navigating legal
                      environments.
                    </li>
                    <li>
                      <strong>Technology Adoption:</strong> Resistance from
                      traditional stakeholders.
                    </li>
                    <li>
                      <strong>Market Volatility:</strong> Unpredictable economic
                      conditions.
                    </li>
                    <li>
                      <strong>Infrastructure Gaps:</strong> Limited broadband
                      and IoT.
                    </li>
                  </ul>
                ),
              },
              {
                title: 'How Arinsa Empowers Real Estate Innovation',
                content: (
                  <ul style={{ fontSize: isMobile ? '1.1rem' : undefined }}>
                    <li>
                      End-to-end property platforms with integrated AI and
                      analytics.
                    </li>
                    <li>
                      Virtual and AR-based walkthroughs for remote engagement.
                    </li>
                    <li>
                      Smart contract frameworks to accelerate closings.
                    </li>
                    <li>
                      Blockchain asset tracking and digital title management.
                    </li>
                    <li>
                      Custom dashboards for agents, investors, brokers.
                    </li>
                    <li>
                      IoT for smart building management.
                    </li>
                    <li>
                      Predictive analytics for forecasting and risk management.
                    </li>
                  </ul>
                ),
              },
              {
                title: 'Future Outlook: The Digital Real Estate Ecosystem',
                content: (
                  <>
                    <p
                      style={{
                        marginBottom: '20px',
                        lineHeight: '1.7',
                        fontSize: isMobile ? '1.1rem' : undefined,
                      }}
                    >
                      The real estate industry is evolving rapidly with
                      converging technologies creating a more efficient,
                      transparent, and customer-centric ecosystem.
                    </p>
                    <p style={{ lineHeight: '1.7', fontSize: isMobile ? '1.1rem' : undefined }}>
                      Arinsa is pioneering these innovations, empowering
                      stakeholders to thrive in the digital era with confidence,
                      agility, and insight.
                    </p>
                  </>
                ),
              },
            ].map(({ title, content }, index) => {
              if (isMobile) {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#1e1e1e',
                      padding: '20px',
                      marginBottom: '20px',
                      borderRadius: '12px',
                      boxShadow: '0 0 15px rgba(255,255,255,0.1)',
                      fontFamily: 'Arial, sans-serif',
                      fontSize: '1.1rem',
                      lineHeight: 1.6,
                      color: '#fff',
                    }}
                  >
                    {title && (
                      <h2
                        style={{
                          fontWeight: 'bold',
                          marginBottom: '10px',
                          fontSize: '1.1rem',
                        }}
                      >
                        {title}
                      </h2>
                    )}
                    <div
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        fontFamily: 'Arial, sans-serif',
                      }}
                    >
                      {content}
                    </div>
                  </div>
                );
              }

              // PC version: no box, keep original sizes and spacing
              return (
                <div key={index}>
                  {title && (
                    <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
                      {title}
                    </h2>
                  )}
                  <div style={{ fontSize: '1.5rem' }}>{content}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RealEstate;
