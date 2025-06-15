import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const CareerAll: React.FC = () => {
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
    <div style={{ color: '#000' }}>
      {/* Banner */}
      <div
        className="career-banner"
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
          className="career-title"
          style={{
            fontSize: '2.5rem',
            color: '#fff',
            margin: 0,
          }}
        >
          Explore Careers with Us
        </h1>
      </div>

      {/* About Section */}
      <div
        style={{
          backgroundColor: '#777',
          color: '#111',
          padding: '60px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2 className="career-heading" style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Careers at ARINSA AI MINDS
          </h2>
          <p className="career-description" style={{ fontSize: '1.2rem' }}>
            At ARINSA AI MINDS, we believe in building a future driven by innovation, technology, and talent.
            Join our dynamic team of professionals working at the forefront of AI, education, and digital transformation.
            Whether you're a developer, educator, strategist, or visionary, there's a place for you in our mission to
            empower minds through next-gen learning and impactful tech solutions.
          </p>
        </div>
      </div>

      {/* Career Grid */}
      <div style={{ padding: '80px 40px' }}>
        <div
          className="career-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          <Section
            id="job-search"
            image="/image/career5.jpg"
            title="Job Search"
            description="Find open positions and apply today."
          />
          <Section
            id="careers-in-arinsa"
            image="/image/career6.jpg"
            title="Careers in ARINSA"
            description="Discover exciting opportunities and growth pathways."
          />
          <Section
            id="how-to-join-us"
            image="/image/career7.jpg"
            title="How to Join Us"
            description="See the steps to become part of our innovative team."
          />
          <Section
            id="internships"
            image="/image/career8.jpg"
            title="Internships"
            description="Gain real-world experience and grow with industry mentors."
          />
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', color: '#000' }}>
          <h3>Your journey to a smarter career begins here at ARINSA AI MINDS.</h3>
        </div>
      </div>

      {/* Mobile-Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .career-banner {
              height: 400px !important;
              padding: 20px !important;
              width: 100% !important;
            }
            .career-title {
              font-size: 1.8rem !important;
            }
            .career-heading {
              font-size: 1.5rem !important;
            }
            .career-description {
              font-size: 1rem !important;
            }
            .career-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            section[id] {
              min-height: 250px !important;
              padding: 20px !important;
            }
            a {
              font-size: 0.9rem !important;
              padding: 8px 16px !important;
            }
          }
        `}
      </style>
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
