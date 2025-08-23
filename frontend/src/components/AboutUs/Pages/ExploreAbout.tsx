//frontend\src\components\AboutUs\Pages\ExploreAbout.tsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ExploreAbout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const isMobile = window.innerWidth <= 768;

  return (
    <div style={{ backgroundColor: '#fafafa', color: '#1a1a1a' }}>
      {/* Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/about2.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: isMobile ? '300px' : '600px',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            color: '#fff',
            padding: '10px 20px',
            fontSize: isMobile ? '1.2rem' : '2rem',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
          }}
        >
          About ARINSA AI MINDS
        </div>
      </div>

      {/* Our Purpose Section */}
<section
  id="our-purpose"
  style={{
    padding: '60px 20px',
    backgroundColor: '#444247ff', // soft light background
    backgroundImage: 'linear-gradient(135deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
    backgroundSize: '40px 40px', // subtle diagonal pattern
    color: '#1a1a1a', // dark text for readability
    marginBottom: '80px', // ← Added gap here
  }}
>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
      gap: '40px',
      alignItems: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    }}
  >
    {/* Purpose Card */}
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        padding: '30px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
      }}
    >
      <h1 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', marginBottom: '20px' }}>
        Our Purpose
      </h1>
      <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: '1.6', color: '#333' }}>
        At <strong>ARINSA AI MINDS</strong>, our purpose is to build a smarter, better world
        through the transformative power of AI. We aim to create technology that not only drives
        innovation but also positively impacts people’s lives and the future of work.
      </p>
    </div>

    {/* Vision & Mission */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '15px' }}>
          Our Vision
        </h2>
        <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: '1.6', color: '#333' }}>
          We envision a future where artificial intelligence enhances every aspect of human life —
          making industries smarter, societies more inclusive, and opportunities more accessible.
        </p>
      </div>

      <div
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
        }}
      >
        <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginBottom: '15px' }}>
          Our Mission
        </h2>
        <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', lineHeight: '1.6', color: '#333' }}>
          Our mission is to leverage AI to solve today’s most pressing challenges while
          building sustainable solutions that empower individuals, organizations, and
          communities worldwide.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Core Values + Diversity + Join Our Team + Our Values */}
<section
  id="core-values"
  style={{
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #71526aff, #565256ff)', // light, modern gradient
    color: '#1a1a1a',
    borderRadius: '16px',
    maxWidth: '1200px',
    margin: '0 auto 80px auto',
    position: 'relative',
    overflow: 'hidden',
  }}
>
  {/* Optional subtle animated background */}
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage:
        'linear-gradient(45deg, rgba(255,255,255,0.05) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, transparent 75%, transparent)',
      backgroundSize: '40px 40px',
      pointerEvents: 'none',
      animation: 'movePattern 20s linear infinite',
    }}
  ></div>

  <h1 style={{ textAlign: 'center', marginBottom: '40px', fontSize: isMobile ? '1.8rem' : '2.5rem' }}>
    Our Values & Team Culture
  </h1>

  <div
    style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '30px' : '60px', // increased gap for larger screens
      flexWrap: 'wrap',
      position: 'relative', // to appear above animated background
    }}
  >
    {/* Values Grid */}
    <div
      style={{
        flex: isMobile ? '1 1 100%' : '2 1 0',
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '20px',
      }}
    >
      {[
        { title: 'Integrity', desc: 'We operate with honesty, transparency, and accountability.', icon: '🛡️' },
        { title: 'Innovation', desc: 'We push the boundaries of technology and creativity.', icon: '💡' },
        { title: 'Inclusion', desc: 'We foster diversity and an environment where everyone feels valued.', icon: '🤝' },
        { title: 'Impact', desc: 'We create solutions that positively influence lives and communities.', icon: '🌍' },
        { title: 'Excellence', desc: 'We strive for the highest standards in everything we do.', icon: '🏆' },
        { title: 'Collaboration', desc: 'The best outcomes are achieved through teamwork and shared vision.', icon: '🧩' },
      ].map(({ title, desc, icon }) => (
        <div
          key={title}
          style={{
            background: 'linear-gradient(145deg, #ffffff, #f0f0ff)',
            borderRadius: '16px',
            padding: '25px',
            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
            e.currentTarget.style.background = 'linear-gradient(145deg, #f0f0ff, #ffffff)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
            e.currentTarget.style.background = 'linear-gradient(145deg, #ffffff, #f0f0ff)';
          }}
        >
          <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{icon}</div>
          <h3 style={{ marginBottom: '10px' }}>{title}</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.5', color: '#1a1a1a' }}>{desc}</p>
        </div>
      ))}
    </div>

    {/* Diversity & Join Our Team Column */}
    <div
      style={{
        flex: isMobile ? '1 1 100%' : '1 1 300px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
        }}
      >
        <h2>Diversity & Inclusion</h2>
        <p>
          We are proud of the diverse team we have built and actively create an inclusive environment where everyone feels valued and empowered.
        </p>
      </div>

      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          padding: '30px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
        }}
      >
        <h2>Join Our Team</h2>
        <p>
          We welcome talented individuals who share our passion for innovation and collaboration. Check out our open positions!
        </p>
      </div>
    </div>
  </div>

  {/* Animated gradient keyframes */}
  <style>
    {`
      @keyframes movePattern {
        0% { background-position: 0 0; }
        100% { background-position: 40px 40px; }
      }
    `}
  </style>
</section>


{/* Meet Our Co-Founders and CEO */}
<section
  id="leadership"
  style={{
    padding: '60px 20px',
    backgroundColor: '#f7f7f7', // light background
    color: '#333',
    borderRadius: '16px',
    marginBottom: '80px',
  }}
>
  <h1
    style={{
      textAlign: 'center',
      fontSize: isMobile ? '2rem' : '2.8rem',
      marginBottom: '40px',
    }}
  >
    Meet Our Co-Founders & CEO
  </h1>

  <div
    style={{
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
    }}
  >
    {/* Person 1 */}
    <div
      style={{
        flex: '1',
        maxWidth: '400px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src="/image/Sayan.png"
        alt="Co-Founder 1"
        style={{
          width: isMobile ? '50%' : '200px', // responsive width
          height: isMobile ? 'auto' : '200px', // maintain aspect ratio
          objectFit: 'contain', // do not crop
          borderRadius: '12px',
          marginBottom: '20px',
          backgroundColor: '#f0f0f0', // optional for transparent PNGs
        }}
      />
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Sayan Banerjee</h2>
      <h4 style={{ fontWeight: '400', marginBottom: '15px', color: '#555' }}>
        Co-Founder & CEO
      </h4>
      <p>
        Sayan is a visionary leader passionate about AI and technology, driving innovation and shaping the future of intelligent solutions.
      </p>
    </div>

    {/* Person 2 */}
    <div
      style={{
        flex: '1',
        maxWidth: '400px',
        textAlign: 'center',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 14px 30px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.1)';
      }}
    >
      <img
        src="/image/Aritri.png"
        alt="Co-Founder 2"
        style={{
          width: isMobile ? '50%' : '200px', // responsive width
          height: isMobile ? 'auto' : '200px', // maintain aspect ratio
          objectFit: 'contain', // do not crop
          borderRadius: '12px',
          marginBottom: '20px',
          backgroundColor: '#f0f0f0', // optional
        }}
      />
      <h2 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Aritri Chakraborty</h2>
      <h4 style={{ fontWeight: '400', marginBottom: '15px', color: '#555' }}>
        Co-Founder & Director
      </h4>
      <p>
        Aritri is an innovative strategist focused on building intelligent AI solutions and driving the company’s vision forward.
      </p>
    </div>
  </div>
</section>


{/* Locations */}
<section
  id="locations"
  style={{
    padding: '40px 20px',
    marginBottom: '80px',
  }}
>
  <h1 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Our Ethics and Locations</h1>
  <p
    style={{
      marginBottom: '40px',
      fontSize: '1.25rem',
      lineHeight: '1.6',
    }}
  >
    ARINSA AI MINDS operates fully remotely across continents...
  </p>

  <div
    style={{
      position: 'relative',
      backgroundImage: `url('/image/global.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '300px',
      borderRadius: '16px',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    }}
  >
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(137, 133, 137, 0.4)',
      }}
    />
    <div
      style={{
        position: 'relative',
        color: '#faf1f8ff',
        textAlign: 'center',
        padding: '0 20px',
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: '4rem' }}>Connecting Innovation Across The World</h2>
      
    </div>
  </div>
</section>


    </div>
  );
};

export default ExploreAbout;
