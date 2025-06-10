import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const IndustriesAll: React.FC = () => {
  const {hash} = useLocation();
  const navigate = useNavigate();

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

  const industries = [
    {
      id: 'advanced-manufacturing',
      path: '/industries/advanced-manufacturing',
      title: 'Advanced Manufacturing',
      description:
        'Explore how innovative technologies, automation, and supply chain optimization are transforming advanced manufacturing industries worldwide.',
      image: '/image/industry1.jpg',
    },
    {
      id: 'consumer',
      path: '/industries/consumer',
      title: 'Consumer',
      description:
        'Understand how shifting consumer behavior and digital disruption are reshaping the retail, consumer products, and e-commerce sectors.',
      image: '/image/industry2.jpg',
    },
    {
      id: 'energy-resources',
      path: '/industries/energy-resources',
      title: 'Energy & Resources',
      description:
        'Dive into the latest trends in sustainability, decarbonization, and the energy transition impacting the global energy and resources market.',
      image: '/image/industry3.jpg',
    },
    {
      id: 'government-public',
      path: '/industries/government-public',
      title: 'Government & Public',
      description:
        'Discover strategies for modernizing public services, improving citizen engagement, and enabling digital transformation in government.',
      image: '/image/industry5.jpg',
    },
    {
      id: 'health',
      path: '/industries/health',
      title: 'Health',
      description:
        'Examine how healthcare providers, payers, and life sciences companies are embracing technology to deliver better patient outcomes.',
      image: '/image/industry6.jpg',
    },
    {
      id: 'technology-media',
      path: '/industries/technology-media',
      title: 'Technology, Media & Telecom',
      description:
        'Stay ahead with insights on innovation, digital platforms, content consumption, and connectivity in a converging TMT sector.',
      image: '/image/industry8.jpg',
    },
    {
      id: 'education',
      path: '/industries/education',
      title: 'Education',
      description:
        'AI and data-driven personalization are revolutionizing learning methods, content delivery, and student engagement.',
      image: '/image/industry9.jpg',
    },
    {
      id: 'transportation',
      path: '/industries/transportation',
      title: 'Transportation',
      description:
        'Optimizing logistics, autonomous systems, and mobility experiences through intelligent analytics and smart infrastructure.',
      image: '/image/industry10.jpg',
    },
    {
      id: 'agriculture',
      path: '/industries/agriculture',
      title: 'Agriculture',
      description:
        'Empowering farmers with precision farming tools, drone monitoring, and data insights for yield improvement.',
      image: '/image/industry11.jpg',
    },
    {
      id: 'real-estate',
      path: '/industries/real-estate',
      title: 'Real Estate',
      description:
        'Real estate platforms and AI models provide accurate valuations, predictive demand, and enhanced customer experiences.',
      image: '/image/industry12.jpg',
    },
  ];

  const handleClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ color: '#000' }}>
      {/* Banner */}
      <div
        style={{
          backgroundImage: 'url("/image/industries-cover.jpg")',
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
            fontSize: '2.5rem',
            color: '#fff',
            margin: 0,
          }}
        >
          Explore Industries with Us
        </h1>
        <button
      onClick={() => window.location.href = '/contact'} // Adjust URL as needed
      style={{
        padding: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      Contact Us
    </button>
    </div>
      </div>

      {/* Introduction Section */}
      <div
        style={{
          backgroundColor: '#777',
          color: '#111',
          padding: '60px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Industries We Serve</h2>
          <p style={{ fontSize: '1.2rem' }}>
            At ARINSA AI MINDS, we specialize in providing transformative technology solutions across a variety of industries. 
            Whether it's advanced manufacturing, healthcare, or education, we bring innovative solutions to help businesses evolve.
          </p>
        </div>
      </div>

      {/* Industry Grid */}
      <div style={{ padding: '80px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
          }}
        >
          {industries.map((industry) => (
            <section
              key={industry.id}
              id={industry.id}
              style={{
                backgroundImage: `url("${industry.image}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '30px',
                borderRadius: '12px',
                position: 'relative',
                minHeight: '300px',
                color: '#fff',
                cursor: 'pointer',
              }}
              onClick={() => handleClick(industry.path)}
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
                  <h2>{industry.title}</h2>
                  <p>{industry.description}</p>
                </div>
                <button
                  style={{
                    marginTop: '20px',
                    alignSelf: 'flex-start',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    padding: '10px 24px',
                    border: '2px solid #fff',
                    borderRadius: '30px',
                    cursor: 'pointer',
                    fontWeight: 600,
                    fontSize: '1rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#000';
                    (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                    (e.currentTarget as HTMLButtonElement).style.border = '2px solid #000';
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#fff';
                    (e.currentTarget as HTMLButtonElement).style.color = '#000';
                    (e.currentTarget as HTMLButtonElement).style.border = '2px solid #fff';
                  }}
                  onClick={() => {
                    const industryId = industry.id;
                    window.location.hash = industryId;
                    setTimeout(() => {
                      const element = document.getElementById(industryId);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                >
                  Read more 
                </button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesAll;
