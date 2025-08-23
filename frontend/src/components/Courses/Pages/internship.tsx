import React from 'react';
import { Link } from 'react-router-dom';

const Internship: React.FC = () => {
  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Internship Programs at ARINSA AI MINDS</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
        Explore hands-on internships crafted to accelerate your learning journey in AI, Full Stack Development, UI/UX,
        and more. Whether you're looking for a short-term project-based internship or a long-term full-stack experience,
        we’ve got you covered.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#e8f0fe',
            borderLeft: '5px solid #1a73e8',
            borderRadius: '6px',
          }}
        >
          <h2 style={{ fontSize: '1.8rem' }}>Short-Term Internships</h2>
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            Boost your skills with focused 2–4 week training in key tech areas.
          </p>
          <Link
            to="/courses/internship/short-term"
            style={{
              textDecoration: 'none',
              color: '#fff',
              backgroundColor: '#1a73e8',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
          >
            View Short-Term Internships
          </Link>
        </div>

        <div
          style={{
            padding: '20px',
            backgroundColor: '#e6f4ea',
            borderLeft: '5px solid #34a853',
            borderRadius: '6px',
          }}
        >
          <h2 style={{ fontSize: '1.8rem' }}>Long-Term Internships</h2>
          <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
            Dive deep into full-stack, data science, or GenAI product development with 3-month programs.
          </p>
          <Link
            to="/courses/internship/long-term"
            style={{
              textDecoration: 'none',
              color: '#fff',
              backgroundColor: '#34a853',
              padding: '10px 20px',
              borderRadius: '4px',
              fontWeight: 'bold',
              display: 'inline-block',
            }}
          >
            View Long-Term Internships
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Internship;
