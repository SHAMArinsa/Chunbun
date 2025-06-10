import React from 'react';
import { Link } from 'react-router-dom';

const InterviewPreparationCourse: React.FC = () => {
  const sectionTitle = 'Interview Preparation Courses';
  const courses = [
    {
      label: 'Coding Practice & Soft Skill',
      image: '/image/coding-softskill.jpg',
      description:
        'Enhance your coding abilities while refining communication and presentation skills essential for interviews.',
    },
    {
      label: 'Coding Practice & Mock Test',
      image: '/image/coding-mocktest.jpg',
      description:
        'Simulate real-world coding interviews with hands-on practice and mock sessions to boost confidence.',
    },
  ];

  return (
    <div style={{ color: '#000' }}>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url("/image/interview-banner.jpg")',
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
            Build Confidence and Skills for Your Dream Job
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            ARINSA AI MINDS offers targeted interview preparation courses to sharpen both your technical and interpersonal skills.
            With AI-powered feedback, practical mock interviews, and soft skills coaching, you'll enter every interview room prepared and confident.
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
        <h3>Step into your next interview with confidence – only at ARINSA AI MINDS.</h3>
      </div>
    </div>
  );
};

export default InterviewPreparationCourse;
