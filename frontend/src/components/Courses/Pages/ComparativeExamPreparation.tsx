import React from 'react';
import { Link } from 'react-router-dom';

const ComparativeExamAll: React.FC = () => {
  const courses = [
    {
      label: 'JEE MAIN',
      image: '/image/jeemain.jpg',
      description:
        'Step into the world of engineering with confidence. Strengthen your foundation in Physics, Chemistry, and Mathematics with AI-powered analytics and mock tests.',
    },
    {
      label: 'GATE',
      image: '/image/gate.jpg',
      description:
        'Advance your engineering career. Our GATE course offers in-depth technical training, smart revision, and expert mentoring.',
    },
    {
      label: 'CAT',
      image: '/image/cat.jpg',
      description:
        'Get into top B-schools. CAT coaching at ARINSA covers Quant, VARC, and DILR with adaptive practice and AI performance tracking.',
    },
    {
      label: 'MAT',
      image: '/image/mat.jpg',
      description:
        'Crack the MAT with focused modules in Language, Reasoning, Data Analysis, and Math, supported by expert-led practice sessions.',
    },
    {
      label: 'SAT',
      image: '/image/sat.jpg',
      description:
        'Boost your global academic journey with SAT prep in Reading, Writing, and Math. Includes strategy coaching and adaptive testing.',
    },
    {
      label: 'IELTS',
      image: '/image/ielts.jpg',
      description:
        'Master IELTS for study, work, or migration. We cover all four modules with certified trainers and AI-supported practice.',
    },
    {
      label: 'TOEFL',
      image: '/image/toefl.jpg',
      description:
        'Improve English proficiency and score high in TOEFL with structured learning, mock tests, and expert guidance.',
    },
    {
      label: 'PTE',
      image: '/image/pte.jpg',
      description:
        'Achieve fluency and confidence with PTE prep across Speaking, Writing, Reading, and Listening, powered by real-time feedback tools.',
    },
  ];

  return (
    <div style={{ color: '#000' }}>
      {/* Banner Section */}
      <div
        style={{
          backgroundImage: 'url("/image/ComparativeExam.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '700px',
          width: '94.5%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          padding: '40px',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', color: '#fff', margin: 0 }}>
          Comparative Exam Preparation at ARINSA AI MINDS
        </h1>
      </div>

      {/* Introductory Text Section */}
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
            Empowering Students for Success
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            At ARINSA AI MINDS, we empower ambitious learners to excel in some of the most competitive national and international exams.
            Our expertly crafted courses combine advanced teaching methodologies, AI-driven learning support, and personalized mentoring
            to ensure each student reaches their full potential. Whether you're aiming for a top engineering college, a premier B-school,
            or global university admissions — we’ve got you covered.
          </p>
        </div>
      </div>

      {/* Courses Grid Section */}
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

      {/* Footer Note */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#000' }}>
        <h3>Shape your future with expert guidance at ARINSA AI MINDS.</h3>
      </div>
    </div>
  );
};

export default ComparativeExamAll;
