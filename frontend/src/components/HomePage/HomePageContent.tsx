// frontend\src\components\HomePage\HomePageContent.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const buttonStyle: React.CSSProperties = {
  marginTop: '0.5rem',
  padding: '0.75rem 1rem',
  backgroundColor: '#4a5879',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const smallButtonStyle: React.CSSProperties = {
  padding: '0.3rem 0.6rem',
  fontSize: '0.8rem',
  backgroundColor: '#4a5879',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textDecoration: 'none',
};

const HomePageContent: React.FC = () => {
  return (
    <div>
      {/* Fullscreen Banner */}
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/ARINSA AI MINDS.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '5%',
            color: '#fff',
            padding: '1rem',
            maxWidth: '90%',
          }}
        >
          <h1 style={{ fontSize: '2rem' }}>Welcome to ARINSA AI MINDS PVT LTD</h1>
          <p>We specialize in cutting-edge technologies like Generative AI, Machine Learning, Deep Learning, and NLP.</p>
          <p>Our mission is to build intelligent, scalable solutions that solve real-world problems and drive business growth.</p>
        </div>
      </div>

      {/* Company Message */}
      <div
        style={{
          padding: '2rem',
          marginTop: '2rem',
          backgroundImage: 'url("image/background7.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p style={{ fontWeight: 'bold', color: '#000000' }}>
          Our approach is centered around innovation, creativity, and performance. We work tirelessly to ensure our clients achieve faster and smarter business solutions.
        </p>
        <p style={{ fontWeight: 'bold', color: '#000000' }}>
          With a passionate team of AI experts, data scientists, and engineers, ARINSA AI MINDS is helping businesses embrace AI and stay ahead in the digital world.
        </p>
        <p style={{ fontWeight: 'bold', color: '#000000' }}>
          We’re building a smarter future where organizations thrive using the power of artificial intelligence.
        </p>
      </div>
      {/* Our Services Section (2-Column Grid with Larger Videos & Wider Grid) */}
<div style={{ padding: '3rem 1rem', backgroundColor: '#fffaf0' }}>
  <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>Our Services</h2>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '3rem',
      maxWidth: '1600px', // Increased from 1400px
      margin: '0 auto',
      fontSize: '1.1rem',
      color: '#333',
    }}
  >
    {[
      {
        title: 'Generative AI & Agentic AI',
        description:
          'Custom Generative AI (Text, Code, Image, Audio) + Agentic AI for Business Automation & Intelligent Customer Interaction',
        videoSrc: '/videos/About_service1.mp4',
      },
      {
        title: 'Full Stack Web Development',
        description:
          'End-to-End + Full Stack Web Development (React, Node.js, FastAPI, Flask, Django, HTML, CSS, JavaScript)',
        videoSrc: '/videos/About_service2.mp4',
      },
      {
        title: 'ML, DL, NLP & CV',
        description:
          'Machine Learning, Deep Learning, NLP (Chatbots, Document AI, Sentiment Analysis), Computer Vision (Detection, Segmentation, OCR)',
        videoSrc: '/videos/MLDL.mp4',
      },
      {
        title: 'AI SaaS + Automation + Hyper automation',
        description:
          'End-to-end AI SaaS product development, intelligent workflow automation, and hyperautomation solutions empowering businesses with custom AI tools, optimized processes, and strategic AI deployment.',
        videoSrc: '/videos/Saas.mp4',
      },
      {
        title: 'Predictive Analytics & Visualization',
        description:
          'Predictive Analytics, Forecasting, Data Analysis, Data Visualization (Power BI, Tableau)',
        videoSrc: '/videos/Predictive Analytics.mp4',
      },
      {
        title: 'Data Engineering',
        description: 'End-to-End Data Engineering Pipelines + SQL + NoSQL',
        videoSrc: '/videos/Data Engineering.mp4',
      },
    ].map((service, idx) => (
      <div
        key={idx}
        style={{
          backgroundColor: '#fff',
          padding: '1.5rem',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
        }}
      >
        <video
          src={service.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '340px', // Increased from 280px
            objectFit: 'cover',
            borderRadius: '10px',
            marginBottom: '1.5rem',
          }}
        />
        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.75rem' }}>{service.title}</h3>
        <p>{service.description}</p>
        <a
          href="/connect"
          style={{
            marginTop: '1.2rem',
            padding: '0.6rem 1.5rem',
            backgroundColor: '#5D758E',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#5D758E')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#007bff')}
        >
          Contact Us
        </a>
      </div>
    ))}
  </div>
</div>


      {/* Featured Solutions Cards */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '2rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Featured Case Studies</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {[
            {
              img: '/src/assets/pic1.jpg',
              title: 'Generative AI Solutions',
              desc: 'Custom models, image & text generation, and AI creativity tools.',
              id: 'generative-ai',
            },
            {
              img: '/src/assets/pic2.jpg',
              title: 'AI Agents for Business',
              desc: 'Virtual assistants, support bots & process automation.',
              id: 'ai-agent',
            },
            {
              img: '/src/assets/pic3.jpg',
              title: 'AI Automation',
              desc: 'Smart automation using ML, NLP, and Computer Vision.',
              id: 'ai-automation',
            },
          ].map((service, idx) => (
            <div
              key={idx}
              style={{
                flex: '1 1 300px',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                padding: '1rem',
                textAlign: 'center',
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <h3 style={{ marginTop: '1rem' }}>{service.title}</h3>
              <p>{service.desc}</p>
              <Link to={`/about-us/case-study-all#${service.id}`}>
                <button style={buttonStyle}>Read More</button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Case Studies */}
      <div
        style={{
          backgroundImage: 'url("src/assets/case_studies.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          position: 'relative',
          color: '#fff',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            padding: '2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '10px',
            maxWidth: '500px',
          }}
        >
          <h2>Our Case Studies</h2>
          <p>
            Discover how we've delivered AI-driven results across industries.
          </p>
          <Link to="/about-us/case-study-all">
            <button
              style={{
                backgroundColor: '#2563eb',
                color: '#fff',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Know More
            </button>
          </Link>
        </div>
      </div>

      {/* Discover More Section */}
      <div
        style={{
          backgroundColor: '#FFE4E1',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '3rem',
          marginBottom: '1rem',
        }}
      >
        <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Discover More</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Explore how ARINSA AI MINDS can transform your business with next-gen AI solutions, automation workflows, and industry-specific strategies.
          </p>
        </div>

        <div
          style={{
            flex: '0 1 20%',
            minWidth: '200px',
            marginTop: '2rem',
            marginLeft: 'auto',
          }}
        >
          <h3 style={{ marginBottom: '1rem' }}>Quick Search</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/careers/careerall"><button style={smallButtonStyle}>Careers</button></Link>
              <Link to="/industries/details"><button style={smallButtonStyle}>Industries</button></Link>
              <Link to="/insights/details"><button style={smallButtonStyle}>Insights</button></Link>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <Link to="/services/details"><button style={smallButtonStyle}>Services</button></Link>
              <Link to="/courses/explore"><button style={smallButtonStyle}>Courses</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
