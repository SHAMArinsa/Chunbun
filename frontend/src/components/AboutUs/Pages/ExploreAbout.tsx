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
    <div style={{ backgroundColor: '#000', color: '#fff' }}>
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
          }}
        >
          About ARINSA AI MINDS
        </div>
      </div>

      {/* Our Purpose Section */}
      <section id="our-purpose" style={{ marginBottom: '80px' }}>
        <div
          style={{
            backgroundColor: '#4B4B4B',
            minHeight: '50vh',
            width: '100%',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '40px 20px',
          }}
        >
          <div
            style={{
              color: '#fff',
              borderRadius: '16px',
              padding: '24px',
              flex: 1,
              maxWidth: isMobile ? '100%' : '400px',
              backgroundColor: 'transparent',
              textShadow: '1px 1px 3px rgba(255, 255, 255, 0.2)',
            }}
          >
            <h1 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem' }}>Our Purpose</h1>
            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem' }}>
              At ARINSA AI MINDS, our purpose is to build a better, smarter world through the power of AI...
            </p>
          </div>

          <div
            style={{
              borderRadius: '16px',
              padding: '24px',
              color: '#fff',
              flex: 1,
              maxWidth: isMobile ? '100%' : '700px',
            }}
          >
            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem' }}>Our Vision</h2>
            <p>
              We envision a world where artificial intelligence enhances every aspect of human life...
            </p>

            <h2 style={{ fontSize: isMobile ? '1.5rem' : '2rem', marginTop: '20px' }}>Our Mission</h2>
            <p>
              Our mission is simple yet impactful: to use AI to solve today’s most pressing challenges...
            </p>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section
        id="our-people"
        style={{
          padding: '0px',
          marginBottom: '10px',
          marginTop: '-60px',
          backgroundImage: 'url("/image/about4.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff',
          position: 'relative',
        }}
      >
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: isMobile ? '20px' : '40px',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '48%', marginBottom: isMobile ? '20px' : 0 }}>
            <h1>Our People</h1>
            <p>
              Our strength lies in our people. We are a team of passionate, innovative professionals...
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <div
        style={{
          backgroundImage: 'url("/image/about3.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: isMobile ? '20px' : '40px',
          borderRadius: '16px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div
            style={{
              flex: '1 1 300px',
              backgroundColor: '#f2f6fc80',
              borderRadius: '12px',
              padding: '20px',
              color: '#000',
              minWidth: '300px',
              width: isMobile ? '100%' : 'auto',
            }}
          >
            <h2>Our Core Values</h2>
            <p>We believe that our values define who we are and how we work...</p>
            <ul>
              <li><strong>Integrity:</strong> We operate with honesty and transparency.</li>
              <li><strong>Innovation:</strong> We push boundaries of creativity and tech.</li>
              <li><strong>Collaboration:</strong> Best results come from working together.</li>
              <li><strong>Respect:</strong> We treat each other with kindness.</li>
              <li><strong>Excellence:</strong> We strive for top standards always.</li>
            </ul>
          </div>
        


    {/* Diversity & Inclusion + Join Our Team */}
<div
  style={{
    flex: '1 1 300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: '300px',
    width: '100%',
  }}
>
  <div
    style={{
      backgroundColor: '#f2f6fc80',
      borderRadius: '12px',
      padding: '30px',
      color: '#000',
    }}
  >
    <h2>Our Diversity & Inclusion</h2>
    <p>
      We are proud of the diverse team we have built. We actively seek to create an inclusive environment where every individual feels valued and empowered to contribute their best work.
    </p>
  </div>

  <div
    style={{
      backgroundColor: '#f2f6fc80',
      borderRadius: '12px',
      padding: '20px',
      color: '#000',
    }}
  >
    <h2>Join Our Team</h2>
    <p>
      We are always on the lookout for talented individuals who share our values and passion for innovation.
      Check out our open positions!
    </p>
  </div>
</div>
</div>
</div>

{/* Our Values */}
<section
  id="our-values"
  style={{
    padding: '40px 20px',
    marginBottom: '80px',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '16px',
  }}
>
  <h1>Our Values</h1>
  <p>
    Integrity, innovation, inclusion, and impact are the core values that guide everything we do at ARINSA AI MINDS. These values are at the heart of our culture and drive us to create meaningful solutions with honesty, creativity, and a sense of purpose. We are committed to making a positive impact on the world through the responsible use of AI and fostering an environment where everyone is empowered to thrive.
  </p>

  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '20px',
      marginTop: '20px',
    }}
  >
    {[
      { title: 'Integrity', image: '/image/integrity.jpg' },
      { title: 'Innovation', image: '/image/innovation.jpg' },
      { title: 'Inclusion', image: '/image/inclusion.jpg' },
      { title: 'Impact', image: '/image/impact.jpg' },
      { title: 'Excellence', image: '/image/excellence.jpg' },
      { title: 'Collaboration', image: '/image/collaboration.jpg' },
    ].map(({ title, image }) => (
      <section
        key={title}
        style={{
          backgroundImage: `url("${image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '20px',
          borderRadius: '8px',
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      >
        <h2>{title}</h2>
        <p>
          {title === 'Integrity' && (
            <>
              Integrity is the foundation of everything we do. We believe in being transparent, ethical, and accountable...
              <br />
              <strong>Example:</strong> We maintain strict data privacy and security...
            </>
          )}
          {title === 'Innovation' && (
            <>
              Innovation is at the core of our mission...
              <br />
              <strong>Example:</strong> Our research and development teams...
            </>
          )}
          {title === 'Inclusion' && (
            <>
              Inclusion is central to our company culture...
              <br />
              <strong>Example:</strong> We actively promote diversity...
            </>
          )}
          {title === 'Impact' && (
            <>
              We are driven by the desire to make a positive impact...
              <br />
              <strong>Example:</strong> Our AI-driven sustainability solutions...
            </>
          )}
          {title === 'Excellence' && (
            <>
              We are committed to excellence in everything we do...
              <br />
              <strong>Example:</strong> We follow best practices in AI development...
            </>
          )}
          {title === 'Collaboration' && (
            <>
              Collaboration is key to our success...
              <br />
              <strong>Example:</strong> We regularly work alongside clients...
            </>
          )}
        </p>
      </section>
    ))}
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
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
      }}
    />
    <div
      style={{
        position: 'relative',
        color: '#fff',
        textAlign: 'center',
        padding: '0 20px',
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: '2rem' }}>Connecting Innovation Across The World</h2>
      <p>
        Our global presence empowers us to blend diverse perspectives with worldwide expertise to drive impactful results.
      </p>
    </div>
  </div>
</section>


    </div>
  );
};

export default ExploreAbout;
