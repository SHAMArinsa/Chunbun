import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ExploreCourses: React.FC = () => {
  const { hash } = useLocation();
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

  const courses = [
    {
      label: 'Comparative Exam Preparation',
      path: '/courses/comparative-exam-preparation',
      image: '/image/ComparativeExam.jpg',
      description:
        'Prepare for top competitive exams like JEE, GATE, CAT, and SAT with our structured curriculum, expert mentors, and mock tests tailored to each exam.',
      external: false,
    },
    {
      label: 'Interview Preparation',
      path: '/courses/interview-preparation',
      image: '/image/interview-banner.jpg',
      description:
        'Sharpen your technical, HR, and behavioral interview skills with real-world practice sessions, resume building, and personalized feedback.',
      external: false,
    },
    {
      label: 'Normal Certification Courses',
      path: '/courses/normal-course',
      image: '/image/certification-banner.jpg',
      description:
        'Build your foundational and professional skill set with our range of industry-relevant certification courses across various domains.',
      external: false,
    },
    {
      label: 'Special Courses',
      path: '/courses/special-course',
      image: '/image/special-banner.jpg',
      description:
        'Explore unique, niche-focused programs designed to give you an edge in emerging fields like blockchain, quantum computing, and more.',
      external: false,
    },
  ];

  const handleClick = (path: string, external: boolean) => {
    if (external) {
      window.open(path, '_blank');
    } else {
      navigate(path);
    }
  };

  return (
    <div style={{ color: '#000' }}>
      {/* Banner */}
      <div
        className="explore-banner"
        style={{
          backgroundImage: 'url("/image/explore-banner.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '600px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          textAlign: 'left',
          padding: '0 40px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: 0 }}>
          Explore Our Course Categories
        </h1>
      </div>

      {/* Intro */}
      <div
        className="explore-intro"
        style={{
          backgroundColor: '#eee',
          color: '#222',
          padding: '60px 40px',
          textAlign: 'left',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            One Platform, Many Learning Paths
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            Whether you're aiming for exams, interviews, or certifications, our curated course categories guide your journey with precision. Click on any category to discover a range of courses tailored to your aspirations.
          </p>
        </div>
      </div>

      {/* Course Sections */}
      <div>
        {courses.map((course) => (
          <div
            key={course.label}
            onClick={() => handleClick(course.path, course.external)}
            className="course-section"
            style={{
              backgroundImage: `url("${course.image}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '60px 40px',
              minHeight: '300px',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              cursor: 'pointer',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                maxWidth: '900px',
                backgroundColor: 'rgba(0,0,0,0.6)',
                padding: '30px',
                borderRadius: '12px',
              }}
            >
              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{course.label}</h2>
              <p style={{ fontSize: '1.1rem' }}>{course.description}</p>
              <div
                style={{
                  marginTop: '20px',
                  display: 'inline-block',
                  backgroundColor: '#fff',
                  color: '#000',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                }}
              >
                {course.external ? 'Visit Site →' : 'Explore →'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#000' }}>
        <h3>Start your learning journey with ARINSA AI MINDS today.</h3>
      </div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .explore-banner {
              height: 300px !important;
              padding: 0 20px !important;
            }

            .explore-banner h1 {
              font-size: 1.8rem !important;
            }

            .explore-intro {
              padding: 40px 20px !important;
            }

            .explore-intro h2 {
              font-size: 1.5rem !important;
            }

            .explore-intro p {
              font-size: 1rem !important;
            }

            .course-section {
              padding: 40px 20px !important;
            }

            .course-section h2 {
              font-size: 1.5rem !important;
            }

            .course-section p {
              font-size: 1rem !important;
            }

            .course-section div[style*="padding: '10px 20px'"] {
              padding: 8px 16px !important;
              font-size: 0.95rem !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ExploreCourses;
