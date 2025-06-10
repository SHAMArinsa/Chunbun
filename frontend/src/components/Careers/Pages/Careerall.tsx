// frontend/src/components/Careers/pages/CareerAll.tsx
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CareerAll: React.FC = () => {
  const {hash} = useLocation();

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
    <div style={{ color: '#000' }}>
      {/* Background Image Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/career1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '700px',
          width: '94.7%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '40px',
          textAlign: 'left',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            color: '#fff',
            margin: 0,
          }}
        >
          Explore Careers with Us
        </h1>
      </div>

      {/* About Careers at ARINSA AI MINDS Section */}
      <div
        style={{
          backgroundColor: '#777',
          color: '#111',
          padding: '60px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Careers at ARINSA AI MINDS</h2>
          <p style={{ fontSize: '1.2rem' }}>
            At ARINSA AI MINDS, we believe in building a future driven by innovation, technology, and talent.
            Join our dynamic team of professionals working at the forefront of AI, education, and digital transformation.
            Whether you're a developer, educator, strategist, or visionary, there's a place for you in our mission to
            empower minds through next-gen learning and impactful tech solutions.
          </p>
        </div>
      </div>

      {/* Grid with Career Options */}
      <div style={{ padding: '80px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {/* Job Search */}
          <Section
            id="job-search"
            image="/image/career5.jpg"
            title="Job Search"
            description="Find open positions and apply today."
          />

          {/* Careers in ARINSA */}
          <Section
            id="careers-in-arinsa"
            image="/image/career6.jpg"
            title="Careers in ARINSA"
            description="Discover exciting opportunities and growth pathways."
          />

          {/* How to Join Us */}
          <Section
            id="how-to-join-us"
            image="/image/career7.jpg"
            title="How to Join Us"
            description="See the steps to become part of our innovative team."
          />

          {/* Internships */}
          <Section
            id="internships"
            image="/image/career8.jpg"
            title="Internships"
            description="Gain real-world experience and grow with industry mentors."
          />
        </div>

        {/* Caption below grid */}
        <div style={{ marginTop: '40px', textAlign: 'center', color: '#000' }}>
          <h3>Your journey to a smarter career begins here at ARINSA AI MINDS.</h3>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{
  id: string;
  image: string;
  title: string;
  description: string;
}> = ({ id, image, title, description }) => {
  const readMoreStyle: React.CSSProperties = {
    marginTop: '20px',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    color: '#000',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  return (
    <section
      id={id}
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '30px',
        borderRadius: '12px',
        position: 'relative',
        minHeight: '300px',
        color: '#fff',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          borderRadius: '12px',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Link to="/connect" style={readMoreStyle}>
          Know More
        </Link>
      </div>
    </section>
  );
};

export default CareerAll;
