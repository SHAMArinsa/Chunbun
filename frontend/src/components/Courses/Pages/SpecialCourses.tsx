import React from 'react';
import { Link } from 'react-router-dom';

const SpecialCourses: React.FC = () => {
  const sectionTitle = 'Special Courses';
  const courses = [
    {
      label: 'Paid Courses with Job Guarantee',
      image: '/image/job-guarantee.jpg',
      description:
        'Secure your career with guaranteed placement programs combining industry projects, mentorship, and intensive training.',
    },
    {
      label: 'Paid Courses with Performance Job Opportunity',
      image: '/image/performance-job.jpg',
      description:
        'Excel in your learning and unlock job offers based on your performance. Includes AI-powered progress tracking and project-based assessment.',
    },
  ];

  return (
    <div style={{ color: '#000' }}>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url("/image/special-banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          width: '94.5%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '40px',
          borderRadius: '12px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: 0 }}>
          {sectionTitle} at ARINSA AI MINDS
        </h1>
      </div>

      {/* Intro Section */}
      <div
        style={{
          backgroundColor: '#eee',
          color: '#222',
          padding: '60px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Learn, Perform, and Launch Your Career
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            ARINSA AI MINDS offers outcome-driven special courses that guarantee or incentivize job opportunities based on your performance.
            These programs include real-world projects, expert mentorship, and measurable skill development to ensure you're not just learning,
            but also landing a career.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ padding: '80px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '100px',
          }}
        >
          {courses.map(course => (
            <section
              key={course.label}
              style={{
                backgroundImage: `url("${course.image}")`,
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
                  <h2>{course.label}</h2>
                  <p>{course.description}</p>
                </div>
                <Link
                  to="/connect"
                  style={{
                    marginTop: '20px',
                    alignSelf: 'flex-start',
                    backgroundColor: '#fff',
                    color: '#000',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  Click to know more
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#000' }}>
        <h3>Where performance meets placement — only at ARINSA AI MINDS.</h3>
      </div>
    </div>
  );
};

export default SpecialCourses;
