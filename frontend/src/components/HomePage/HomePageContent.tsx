import React, { useEffect, useState } from 'react';
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
  whiteSpace: 'nowrap',
};

const HomePageContent: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sliderImages = [
    '/image/add1.png', // Corrected image paths for React public folder
    '/image/add2.png',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Fullscreen Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: isMobile ? '70vh' : '100vh',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', width: '100%', height: isMobile ? 'auto' : '100vh', overflow: 'hidden' }}>
          {/* Video remains same for both mobile and PC */}
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: isMobile ? 'auto' : '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src="/videos/ARINSA AI MINDS.mp4" type="video/mp4" />
          </video>

          {/* Text overlay on PC, below video in mobile */}
          {!isMobile ? (
            <div
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '5%',
                color: '#fff',
                padding: '1rem',
                maxWidth: '60%',
              }}
            >
              <h1 style={{ fontSize: '2rem' }}>Welcome to ARINSA AI MINDS PVT LTD</h1>
              <p>
                We specialize in delivering cutting-edge technologies and intelligent solutions powered by the latest
                advancements in Artificial Intelligence.
              </p>
              <p>Our mission is to build intelligent, scalable solutions that solve real-world problems and drive business growth.</p>
            </div>
          ) : (
            <div
              style={{
                marginTop: '2rem',
                marginBottom: '2rem',
                padding: '2.5rem',
                backgroundColor: '#5D758E',
                color: '#fff',
                textAlign: 'center',
              }}
            >
              <h1 style={{ fontSize: '1.5rem' }}>Welcome to ARINSA AI MINDS PVT LTD</h1>
              <p>
                We specialize in delivering cutting-edge technologies and intelligent solutions powered by the latest
                advancements in Artificial Intelligence.
              </p>
              <p>Our mission is to build intelligent, scalable solutions that solve real-world problems and drive business growth.</p>
            </div>
          )}
        </div>
      </div>

      {/* Company Message */}
      <div
        style={{
          padding: isMobile ? '1rem' : '2rem',
          marginTop: '2rem',
          backgroundImage: 'url("image/background7.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <p style={{ fontWeight: 'bold', color: '#000000' }}>
          Our approach is centered around innovation, creativity, and performance. We work tirelessly to ensure our clients
          achieve faster and smarter business solutions.
        </p>
        <p style={{ fontWeight: 'bold', color: '#000000' }}>
          With a passionate team of AI experts, data scientists, and engineers, ARINSA AI MINDS is helping businesses
          embrace AI and stay ahead in the digital world.
        </p>
        <p style={{ fontWeight: 'bold', color: '#000000' }}>
          We’re building a smarter future where organizations thrive using the power of artificial intelligence.
        </p>
      </div>

      {/* Our Services Section */}
      <div style={{ padding: isMobile ? '2rem 1rem' : '3rem 1rem', backgroundColor: '#fffaf0' }}>
        <h2 style={{ textAlign: 'center', fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '2rem' }}>Our Services</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '2rem',
            maxWidth: '1600px',
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
              description: 'Predictive Analytics, Forecasting, Data Analysis, Data Visualization (Power BI, Tableau)',
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
                textAlign: 'center',
              }}
            >
              <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '1rem' }}>
                <video
                  src={service.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{service.title}</h3>
              <p>{service.description}</p>
              <a
                href="/connect"
                style={{
                  marginTop: '1rem',
                  display: 'inline-block',
                  padding: '0.6rem 1.5rem',
                  backgroundColor: '#5D758E',
                  color: '#fff',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                }}
              >
                Contact Us
              </a>
            </div>
          ))}
        </div>
      </div>

      <div
  style={{
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: isMobile ? '0rem' : '2rem',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  }}
>
  {/* Left: Image Slider */}
  <div
    style={{
      flex: 1,
      width: '100%',
      maxWidth: isMobile ? '100%' : '50%',
      height: isMobile ? '220px' : '400px',
      minHeight: isMobile ? '220px' : '400px',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: isMobile ? '12px 12px 0 0' : '12px',
      backgroundColor: '#f0f0f0',
    }}
  >
    {sliderImages.map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Slide ${idx + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          position: 'absolute',
          top: 0,
          left: 0,
          transition: 'opacity 0.8s ease-in-out',
          opacity: currentSlide === idx ? 1 : 0,
          zIndex: currentSlide === idx ? 2 : 1,
          pointerEvents: currentSlide === idx ? 'auto' : 'none',
          display: 'block',
        }}
        draggable={false}
      />
    ))}
  </div>

  {/* Mobile: Get in Touch Button RIGHT BELOW Image */}
  {isMobile && (
    <Link to="/connect" style={{ width: '100%' }}>
      <button
        style={{
          width: '100%',
          backgroundColor: '#5D758E',
          color: '#fff',
          border: 'none',
          padding: '0.75rem',
          fontSize: '1rem',
          fontWeight: 'bold',
          borderBottomLeftRadius: '12px',
          borderBottomRightRadius: '12px',
          cursor: 'pointer',
        }}
      >
        Get in Touch
      </button>
    </Link>
  )}

  {/* PC: Contact Section on the right */}
  {!isMobile && (
    <div
      style={{
        flex: 1,
        width: '100%',
        backgroundColor: '#f5f5f5',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'left',
      }}
    >
      <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#333' }}>
        Contact Us 
      </h3>
      <p style={{ marginBottom: '1rem', fontSize: '1rem', color: '#555' }}>
        Want to join our company? Start by learning from our exclusive live training and placement courses at Arinsa AI Minds — join our courses today, reach us and only select the "SPECIAL LIVE AI COURSES" option from the below.
      </p>
      <Link to="/connect">
        <button
          style={{
            backgroundColor: '#5D758E',
            color: '#fff',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Get in Touch
        </button>
      </Link>
    </div>
  )}
</div>

      {/* Featured Case Studies */}
      <div style={{ backgroundColor: '#f8f9fa', padding: isMobile ? '2rem 1rem' : '2rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Featured Case Studies</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          {[
            {
              img: 'image/pic1.jpg',
              title: 'Generative AI Solutions',
              desc: 'Custom models, image & text generation, and AI creativity tools.',
              id: 'generative-ai',
            },
            {
              img: 'image/pic2.jpg',
              title: 'AI Agents for Business',
              desc: 'Virtual assistants, support bots & process automation.',
              id: 'ai-agent',
            },
            {
              img: 'image/pic3.jpg',
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
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
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

      {/* Case Studies Background Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/case_studies.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: isMobile ? '400px' : '100vh',
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
            maxWidth: isMobile ? '90%' : '500px',
          }}
        >
          <h2>Our Case Studies</h2>
          <p>Discover how we've delivered AI-driven results across industries.</p>
          <Link to="/about-us/case-study-all">
            <button
              style={{
                backgroundColor: '#5D758E',
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
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginTop: '3rem',
          marginBottom: '1rem',
        }}
      >
        <div style={{ flex: '1 1 100%', marginBottom: isMobile ? '1rem' : '0' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Discover More</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
            Explore how ARINSA AI MINDS can transform your business with next-gen AI solutions, automation workflows,
            and industry-specific strategies.
          </p>
        </div>

        <div style={{ flex: '1 1 auto' }}>
          <h3 style={{ marginBottom: '1rem' }}>Quick Search</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/careers/careerall">
                <button style={smallButtonStyle}>Careers</button>
              </Link>
              <Link to="/industries/details">
                <button style={smallButtonStyle}>Industries</button>
              </Link>
              <Link to="/insights/details">
                <button style={smallButtonStyle}>Insights</button>
              </Link>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Link to="/services/details">
                <button style={smallButtonStyle}>Services</button>
              </Link>
              <Link to="/courses/explore">
                <button style={smallButtonStyle}>Courses</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContent;
