import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Consumer: React.FC = () => {
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

  const consumerImages = [
    'consumer1.jpg', 'consumer2.jpg', 'consumer3.jpg',
    'consumer4.jpg', 'consumer5.jpg', 'consumer6.jpg',
    'consumer7.jpg', 'consumer8.jpg', 'consumer9.jpg',
    'consumer10.jpg',
  ];

  return (
    <div>
      {/* Consumer Banner */}
      <div
        className="consumer-banner"
        style={{
          backgroundImage: 'url("/image/consumer.jpg")',
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
          Consumer
        </h1>
      </div>

      {/* Consumer Content */}
      <section
        className="consumer-section"
        style={{
          padding: '60px 40px',
          backgroundColor: '#2c2c2c',
          color: '#fff',
          fontSize: '1.5rem',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
          Redefining Consumer Engagement in the Digital Era
        </h2>

        <div className="consumer-content-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Consumer Images */}
          <div className="consumer-images" style={{ flex: '1 1 40%' }}>
            {consumerImages.map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Consumer ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== consumerImages.length - 1 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Consumer Text */}
          <div className="consumer-text" style={{ flex: '1 1 55%' }}>
            {[
              {
                title: '',
                content: (
                  <>
                    <p style={{ fontSize: '2rem', lineHeight: '1.7' }}>
                      Consumer industries are experiencing unprecedented transformation driven by personalization, digital-first experiences, and conscious consumption. Arinsa empowers brands to adapt and thrive through AI, omnichannel strategies, and technology-led innovation.
                    </p>
                    <p>
                      Stay ahead by creating immersive shopping journeys, embracing sustainability, and using data to build customer-centric ecosystems.
                    </p>
                    <p>
                      Understand how shifting consumer behavior and digital disruption are reshaping the retail, consumer products, and e-commerce sectors.
                    </p>
                  </>
                ),
              },
              {
                title: 'Key Industry Drivers',
                list: [
                  'Digital-First Experiences: E-commerce, mobile apps, and virtual shopping are redefining convenience and speed.',
                  'Hyper-Personalization: AI and analytics enable brands to tailor experiences based on user preferences and behavior.',
                  'Sustainability Demand: Conscious consumers expect eco-friendly packaging, ethical sourcing, and transparent supply chains.',
                  'Omnichannel Retail: Seamless integration across online, offline, mobile, and social platforms is a business imperative.',
                  'Direct-to-Consumer (D2C) Growth: Brands bypass traditional retail to engage customers directly through digital platforms.',
                ],
              },
              {
                title: 'Strategic Benefits of Digital Transformation',
                list: [
                  'Enhanced Customer Engagement: Personalized content, offers, and support improve loyalty and lifetime value.',
                  'Operational Agility: Real-time data enables faster decision-making and better inventory management.',
                  'Brand Differentiation: Unique digital experiences and values-driven positioning attract new audiences.',
                  'Cost Efficiency: Automation and self-service tools reduce overhead in customer service and fulfillment.',
                ],
              },
              {
                title: 'Use Cases Across the Consumer Sector',
                list: [
                  'AI Chatbots: 24/7 customer support, personalized product recommendations, and post-purchase assistance.',
                  'Smart Shelves & Inventory: IoT-enabled systems in retail track stock levels and optimize restocking.',
                  'Virtual Try-Ons: Augmented Reality (AR) lets consumers visualize apparel, accessories, or furniture before purchase.',
                  'Subscription Models: Predictable, recurring revenue models supported by data insights and user behavior.',
                  'Loyalty & Rewards Platforms: Gamified programs increase repeat business and customer retention.',
                ],
              },
              {
                title: 'Challenges in the Consumer Sector',
                list: [
                  'Data Privacy & Compliance: Increasing regulations (e.g., GDPR, CCPA) require responsible data handling.',
                  'Channel Fragmentation: Balancing consistent messaging across various platforms can be complex.',
                  'Supply Chain Volatility: Disruptions require flexible logistics and supplier networks.',
                  'Rising Customer Expectations: Always-on, real-time service is now a baseline expectation.',
                  'Digital Fatigue: Overexposure to digital ads and content demands more creative, value-driven engagement strategies.',
                ],
              },
              {
                title: 'Emerging Trends & Technologies',
                list: [
                  'Voice Commerce: Smart assistants like Alexa and Google Home drive hands-free shopping experiences.',
                  'Live Commerce: Livestreamed product demos and influencer-led shopping events merge content and commerce.',
                  'AI-Powered Merchandising: Real-time inventory suggestions, demand forecasting, and price optimization.',
                  '3D/AR Product Visualization: Interactive models increase consumer confidence in product quality and fit.',
                  'Digital Wallets & BNPL: Flexible payment options like Apple Pay, Google Pay, and Buy Now Pay Later (BNPL) boost conversion.',
                ],
              },
              {
                title: 'Market Outlook & Growth Opportunities',
                content: (
                  <>
                    <p>
                      The global consumer industry is poised for steady growth, driven by evolving consumer preferences, emerging technologies, and sustainability initiatives. Markets in Asia-Pacific and Latin America are experiencing rapid digital adoption, presenting ripe opportunities for brands to expand.
                    </p>
                    <p>
                      Innovations in AI, blockchain for supply chain transparency, and next-gen logistics will redefine efficiency and consumer trust. Brands that invest in agile, data-driven models are expected to outperform in customer retention and revenue growth.
                    </p>
                  </>
                ),
              },
              {
                title: 'Case Studies & Success Stories',
                list: [
                  'Leading Retailer: Implemented AI-driven personalized marketing, increasing conversion rates by 25% and average order value by 15%.',
                  'Fashion Brand: Adopted AR virtual try-ons, reducing return rates by 30% and boosting customer satisfaction scores.',
                  'D2C Startup: Leveraged subscription models and loyalty programs, achieving 40% customer retention over 12 months.',
                ],
              },
              {
                title: 'Technology Partnerships & Ecosystem',
                content: (
                  <>
                    <p>
                      Arinsa collaborates with leading technology providers to deliver best-in-class solutions including AI platforms, cloud infrastructure, AR/VR toolkits, and analytics engines. Our ecosystem approach ensures seamless integration and rapid deployment.
                    </p>
                    <p>
                      Partnerships with payment gateways, logistics providers, and sustainability certifiers enable holistic support throughout the consumer value chain.
                    </p>
                  </>
                ),
              },
              {
                title: 'How Arinsa Enables Consumer Industry Innovation',
                list: [
                  'End-to-end support for digital commerce platforms, including design, development, and personalization engines.',
                  'AI-driven insights for buyer segmentation, pricing strategies, and marketing automation.',
                  'Implementation of AR/VR modules to enhance product experience in digital channels.',
                  'Analytics dashboards to track customer lifetime value, cart abandonment, and campaign ROI.',
                  'Integration of loyalty ecosystems and referral frameworks for sustained customer engagement.',
                ],
              },
              {
                title: 'Future Outlook',
                content: (
                  <>
                    <p>
                      The consumer sector is expected to become even more dynamic with the rise of Web3 technologies, decentralized marketplaces, and advanced AI-powered personalization engines. Companies that prioritize ethical innovation, sustainability, and immersive experiences will lead the next wave of growth.
                    </p>
                    <p>
                      Arinsa remains committed to driving this transformation by delivering cutting-edge solutions and empowering consumer brands to stay competitive in an ever-evolving landscape.
                    </p>
                    <p>
                      Arinsa empowers consumer-facing businesses to stay ahead of digital trends and customer expectations—delivering memorable experiences, operational excellence, and sustainable growth across channels.
                    </p>
                  </>
                ),
              },
            ].map((section, index) => (
              <div key={index} className="consumer-box" style={{ marginBottom: '50px' }}>
                {section.title && <h2>{section.title}</h2>}
                {section.content}
                {section.list && (
                  <ul>
                    {section.list.map((item, i) => (
                      <li key={i}><strong>{item.split(':')[0]}:</strong>{item.includes(':') ? item.split(':').slice(1).join(':') : ''}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile-only styling */}
      <style>
  {`
    @media (max-width: 768px) {
      .consumer-images {
        display: none !important;
      }

      .consumer-content-container {
        display: flex;
        flex-direction: column !important;
        gap: 30px;
      }

      .consumer-text {
        display: flex;
        flex-direction: column;
        gap: 30px;
        font-size: 1.5rem !important;
      }

      .consumer-box {
        padding: 25px;
        background-color: #1e1e1e;
        border-radius: 12px;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
        border: 1px solid #444;
      }

      .consumer-banner {
        height: 300px !important;
        padding: 0 20px !important;
        background-position: top !important;
      }

      .consumer-banner h1 {
        font-size: 2rem !important;
      }

      .consumer-section {
        padding: 30px 20px !important;
        font-size: 1.5rem !important;
      }

      .consumer-text ul {
        padding-left: 1.2em;
        margin-bottom: 1.5em;
      }

      .consumer-text p, .consumer-text li {
        line-height: 1.7;
        font-size: 1.5rem !important;
      }

      .consumer-text p strong {
        font-size: 2.5rem !important;
      }

      .consumer-section h2 {
        font-size: 2rem;
        margin-top: 2rem;
      }
    }
  `}
</style>

    </div>
  );
};

export default Consumer;
