import React from 'react';
import { Link } from 'react-router-dom';

const NormalCertificationCourses: React.FC = () => {
  const sectionTitle = 'Certification Courses';
  const courses = [
    {
      label: 'Data & AI',
      image: '/image/data-ai.jpg',
      description:
        'Master data analysis, machine learning, and AI tools through hands-on projects and real-world case studies.',
    },
    {
      label: 'Programming Foundations',
      image: '/image/programming-foundations.jpg',
      description:
        'Build a solid foundation in coding with structured learning in Python, Java, C++, and problem-solving.',
    },
    {
      label: 'Full Stack Development',
      image: '/image/fullstack.jpg',
      description:
        'Become a job-ready developer by mastering frontend, backend, databases, and deployment technologies.',
    },
    {
      label: 'Cloud & DevOps',
      image: '/image/cloud-devops.jpg',
      description:
        'Learn AWS, Azure, CI/CD, Docker, and Kubernetes to thrive in modern cloud-native environments.',
    },
    {
      label: 'Design & Frontend',
      image: '/image/design-frontend.jpg',
      description:
        'Enhance user experiences with skills in UI/UX design, HTML/CSS, JavaScript, and modern frontend frameworks.',
    },
    {
      label: 'Emerging Tech & Specialized',
      image: '/image/emerging-tech.jpg',
      description:
        'Explore cutting-edge fields like blockchain, quantum computing, and cybersecurity with expert-led courses.',
    },
  ];

  return (
    <div style={{ color: '#000' }}>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url("/image/certification-banner.jpg")',
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
            Industry-Aligned Learning for Every Career Stage
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            Whether you’re starting out or upskilling for your next opportunity, ARINSA AI MINDS offers tech-driven certification courses
            tailored to the modern digital workforce. From foundational programming to emerging technologies, each course is designed to provide
            practical skills and expert guidance.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <div style={{ padding: '80px 40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '125px',
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
        <h3>Learn the skills of tomorrow, today — with ARINSA AI MINDS.</h3>
      </div>
    </div>
  );
};

export default NormalCertificationCourses;
