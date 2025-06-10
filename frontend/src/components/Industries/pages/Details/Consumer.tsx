// src/components/Industries/pages/Details/Consumer.tsx
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
  return (
    <div>
      {/* Consumer Banner */}
      <div
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

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Consumer Images */}
          <div style={{ flex: '1 1 40%' }}>
            {[
              'consumer1.jpg',
              'consumer2.jpg',
              'consumer3.jpg',
              'consumer4.jpg',
              'consumer5.jpg',
              'consumer6.jpg',
              'consumer7.jpg',
              'consumer8.jpg',
              'consumer9.jpg',
              'consumer10.jpg',
              'consumer11.jpg',
              

            ].map((src, index) => (
              <img
                key={index}
                src={`/image/${src}`}
                alt={`Consumer ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: '8px',
                  marginBottom: index !== 10 ? '80px' : '0',
                }}
              />
            ))}
          </div>

          {/* Consumer Text */}
          <div style={{ flex: '1 1 55%' }}>
            <p style={{ fontSize: '2.5rem', lineHeight: '1.7' }}>
              <strong>Consumer industries</strong> are experiencing unprecedented transformation driven by personalization, digital-first experiences, and conscious consumption. Arinsa empowers brands to adapt and thrive through AI, omnichannel strategies, and technology-led innovation.
            </p>
            <p>
              Stay ahead by creating immersive shopping journeys, embracing sustainability, and using data to build customer-centric ecosystems.
            </p>
            <p>
              Understand how shifting consumer behavior and digital disruption are reshaping the retail, consumer products, and e-commerce sectors.
            </p>

            <h2>Key Industry Drivers</h2>
            <ul>
              <li><strong>Digital-First Experiences:</strong> E-commerce, mobile apps, and virtual shopping are redefining convenience and speed.</li>
              <li><strong>Hyper-Personalization:</strong> AI and analytics enable brands to tailor experiences based on user preferences and behavior.</li>
              <li><strong>Sustainability Demand:</strong> Conscious consumers expect eco-friendly packaging, ethical sourcing, and transparent supply chains.</li>
              <li><strong>Omnichannel Retail:</strong> Seamless integration across online, offline, mobile, and social platforms is a business imperative.</li>
              <li><strong>Direct-to-Consumer (D2C) Growth:</strong> Brands bypass traditional retail to engage customers directly through digital platforms.</li>
            </ul>

            <h2>Strategic Benefits of Digital Transformation</h2>
            <ul>
              <li><strong>Enhanced Customer Engagement:</strong> Personalized content, offers, and support improve loyalty and lifetime value.</li>
              <li><strong>Operational Agility:</strong> Real-time data enables faster decision-making and better inventory management.</li>
              <li><strong>Brand Differentiation:</strong> Unique digital experiences and values-driven positioning attract new audiences.</li>
              <li><strong>Cost Efficiency:</strong> Automation and self-service tools reduce overhead in customer service and fulfillment.</li>
            </ul>

            <h2>Use Cases Across the Consumer Sector</h2>
            <ul>
              <li><strong>AI Chatbots:</strong> 24/7 customer support, personalized product recommendations, and post-purchase assistance.</li>
              <li><strong>Smart Shelves & Inventory:</strong> IoT-enabled systems in retail track stock levels and optimize restocking.</li>
              <li><strong>Virtual Try-Ons:</strong> Augmented Reality (AR) lets consumers visualize apparel, accessories, or furniture before purchase.</li>
              <li><strong>Subscription Models:</strong> Predictable, recurring revenue models supported by data insights and user behavior.</li>
              <li><strong>Loyalty & Rewards Platforms:</strong> Gamified programs increase repeat business and customer retention.</li>
            </ul>

            <h2>Challenges in the Consumer Sector</h2>
            <ul>
              <li><strong>Data Privacy & Compliance:</strong> Increasing regulations (e.g., GDPR, CCPA) require responsible data handling.</li>
              <li><strong>Channel Fragmentation:</strong> Balancing consistent messaging across various platforms can be complex.</li>
              <li><strong>Supply Chain Volatility:</strong> Disruptions require flexible logistics and supplier networks.</li>
              <li><strong>Rising Customer Expectations:</strong> Always-on, real-time service is now a baseline expectation.</li>
              <li><strong>Digital Fatigue:</strong> Overexposure to digital ads and content demands more creative, value-driven engagement strategies.</li>
            </ul>

            <h2>Emerging Trends & Technologies</h2>
            <ul>
              <li><strong>Voice Commerce:</strong> Smart assistants like Alexa and Google Home drive hands-free shopping experiences.</li>
              <li><strong>Live Commerce:</strong> Livestreamed product demos and influencer-led shopping events merge content and commerce.</li>
              <li><strong>AI-Powered Merchandising:</strong> Real-time inventory suggestions, demand forecasting, and price optimization.</li>
              <li><strong>3D/AR Product Visualization:</strong> Interactive models increase consumer confidence in product quality and fit.</li>
              <li><strong>Digital Wallets & BNPL:</strong> Flexible payment options like Apple Pay, Google Pay, and Buy Now Pay Later (BNPL) boost conversion.</li>
            </ul>

            <h2>Market Outlook & Growth Opportunities</h2>
            <p>
              The global consumer industry is poised for steady growth, driven by evolving consumer preferences, emerging technologies, and sustainability initiatives. Markets in Asia-Pacific and Latin America are experiencing rapid digital adoption, presenting ripe opportunities for brands to expand.
            </p>
            <p>
              Innovations in AI, blockchain for supply chain transparency, and next-gen logistics will redefine efficiency and consumer trust. Brands that invest in agile, data-driven models are expected to outperform in customer retention and revenue growth.
            </p>

            <h2>Case Studies & Success Stories</h2>
            <ul>
              <li><strong>Leading Retailer:</strong> Implemented AI-driven personalized marketing, increasing conversion rates by 25% and average order value by 15%.</li>
              <li><strong>Fashion Brand:</strong> Adopted AR virtual try-ons, reducing return rates by 30% and boosting customer satisfaction scores.</li>
              <li><strong>D2C Startup:</strong> Leveraged subscription models and loyalty programs, achieving 40% customer retention over 12 months.</li>
            </ul>

            <h2>Technology Partnerships & Ecosystem</h2>
            <p>
              Arinsa collaborates with leading technology providers to deliver best-in-class solutions including AI platforms, cloud infrastructure, AR/VR toolkits, and analytics engines. Our ecosystem approach ensures seamless integration and rapid deployment.
            </p>
            <p>
              Partnerships with payment gateways, logistics providers, and sustainability certifiers enable holistic support throughout the consumer value chain.
            </p>

            <h2>How Arinsa Enables Consumer Industry Innovation</h2>
            <ul>
              <li>End-to-end support for digital commerce platforms, including design, development, and personalization engines.</li>
              <li>AI-driven insights for buyer segmentation, pricing strategies, and marketing automation.</li>
              <li>Implementation of AR/VR modules to enhance product experience in digital channels.</li>
              <li>Analytics dashboards to track customer lifetime value, cart abandonment, and campaign ROI.</li>
              <li>Integration of loyalty ecosystems and referral frameworks for sustained customer engagement.</li>
            </ul>

            <h2>Future Outlook</h2>
            <p>
              The consumer sector is expected to become even more dynamic with the rise of Web3 technologies, decentralized marketplaces, and advanced AI-powered personalization engines. Companies that prioritize ethical innovation, sustainability, and immersive experiences will lead the next wave of growth.
            </p>
            <p>
              Arinsa remains committed to driving this transformation by delivering cutting-edge solutions and empowering consumer brands to stay competitive in an ever-evolving landscape.
            </p>

            <p>
              Arinsa empowers consumer-facing businesses to stay ahead of digital trends and customer expectations—delivering memorable experiences, operational excellence, and sustainable growth across channels.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consumer;
