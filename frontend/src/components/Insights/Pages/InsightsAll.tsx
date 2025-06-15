import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const InsightsAll: React.FC = () => {
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
      {/* Background Image Banner with Left-Aligned Heading */}
      <div
        style={{
          backgroundImage: 'url("/image/insights1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          padding: '0 40px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px',
            textAlign: 'left',
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
            Explore Insights
          </h1>

          <Link to="/connect">
            <button
              style={{
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#fff',
                backgroundColor: '#5D758E',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Section: AI */}
      <section
        id="ai"
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          marginTop: '20px',
          marginBottom: '20px',
          fontSize: '2.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>ARTIFICIAL INTELLIGENCE</h2>
        <div className="section-flex" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img src="/image/insightsai.jpg" alt="AI Illustration" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '1 1 50%' }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
              Artificial Intelligence (AI) is no longer a futuristic concept—it's a transformative force reshaping every
              industry. From intelligent automation to personalized customer experiences, AI is empowering organizations
              to unlock new efficiencies and make smarter decisions at unprecedented speed and scale.
              <br /><br />
              Businesses are leveraging machine learning, computer vision, and natural language processing to streamline
              operations, detect patterns, and deliver predictive insights. Whether it's improving supply chains,
              optimizing risk management, or driving innovation, AI is at the heart of the digital revolution.
              <br /><br />
              As adoption accelerates, it’s critical to embed ethical considerations and responsible AI frameworks to
              ensure trust, transparency, and fairness. Embracing AI is not just about adopting technology—it's about
              reimagining the future of work, value creation, and human potential.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Risk */}
      <section
        id="risk"
        style={{
          padding: '60px 40px',
          backgroundColor: '#3a3a3a',
          color: '#fff',
          marginBottom: '40px',
          fontSize: '2.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>RISK</h2>
        <div className="section-flex" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img src="/image/insightsrisk.jpg" alt="Risk Illustration" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '1 1 50%' }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
              In today’s volatile world, managing risk has become more complex than ever. From regulatory changes to
              cybersecurity threats, organizations must adopt robust strategies to safeguard their assets and reputation.
              By understanding potential risks and preparing for them, companies can mitigate their exposure and maintain
              operational resilience.
              <br /><br />
              Risk management frameworks must evolve to account for rapidly changing environments. Integrating new
              technologies like AI can help predict risks more accurately and provide timely solutions to prevent
              business disruptions.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Technology */}
      <section
        id="technology"
        style={{
          padding: '60px 40px',
          backgroundColor: '#4a4a4a',
          color: '#fff',
          marginBottom: '40px',
          fontSize: '2.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>TECHNOLOGY</h2>
        <div className="section-flex" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img src="/image/insightstechnology.jpg" alt="Technology Illustration" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '1 1 50%' }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
              The future of business lies in embracing emerging technologies that drive innovation and competitive
              advantage. From cloud computing to blockchain, digital transformation is enabling businesses to enhance
              their operations, scale rapidly, and improve customer experiences.
              <br /><br />
              Staying ahead of the curve means understanding how technology impacts every aspect of business. Companies
              need to invest in technology that not only solves problems but also anticipates future challenges and fosters
              long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Transformation */}
      <section
        id="transformation"
        style={{
          padding: '60px 40px',
          backgroundColor: '#5a5a5a',
          color: '#fff',
          marginBottom: '40px',
          fontSize: '2.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>TRANSFORMATION</h2>
        <div className="section-flex" style={{ display: 'flex', alignItems: 'flex-start', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 40%' }}>
            <img src="/image/insightstransformation.jpg" alt="Transformation Illustration" style={{ width: '100%', borderRadius: '8px' }} />
          </div>
          <div style={{ flex: '1 1 50%' }}>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.6' }}>
              Organizational transformation is about embracing change to thrive in an ever-evolving business landscape.
              Whether it’s through adopting new technologies, redefining business models, or reshaping culture,
              transformation is key to staying competitive in today’s fast-paced world.
              <br /><br />
              Successful transformations require strong leadership, effective change management, and a focus on people.
              Aligning strategy, operations, and culture is crucial to ensuring that organizations remain agile and
              responsive to emerging opportunities and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Media Query */}
      <style>
        {`
          @media (max-width: 768px) {
            .section-flex {
              flex-direction: column !important;
            }

            .section-flex > div {
              flex: 1 1 100% !important;
            }

            h1 {
              font-size: 2rem !important;
            }

            h2 {
              font-size: 2rem !important;
            }

            p {
              font-size: 1.2rem !important;
            }

            button {
              font-size: 0.9rem !important;
              padding: 8px 16px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InsightsAll;
