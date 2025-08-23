import React from 'react';


const SpecialCourses: React.FC = () => {
  const sectionTitle = 'Job Guarantee Course';

  const courses = [
    {
      label: 'Job Guarantee Course',
      description:
        'Secure your career with guaranteed placement programs combining industry projects, mentorship, and intensive training.',
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
            Learn, Perform and Launch Your Career
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
                backgroundColor: '#f5f5dc',
                padding: '30px',
                borderRadius: '12px',
                minHeight: '300px',
                color: '#000',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <h2>{course.label}</h2>
                <p>{course.description}</p>

                <h3 style={{ marginTop: '20px' }}>📘 Fee Structure & Duration</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li><strong>B.Tech / M.Tech / MCA / PhD (Engineering) – Indian (in India):</strong> ₹40,000 + GST | Duration: 1 Year</li>
                  <li><strong>Non-Engineering Background – Indian (in India):</strong> ₹60,000 + GST | Duration: 1 Year 2 Months</li>
                  <li><strong>Engineering (International Students/Professional):</strong> $800 | Duration: 1 Year</li>
                  <li><strong>Non-Engineering (International Students/Professional):</strong> $1200 | Duration: 1 Year 2 Months</li>
                </ul>

                <h3 style={{ marginTop: '20px' }}>📅 Batch Timeline</h3>
                <p>
                  Our next batches begin in <strong>October 2025</strong> and <strong>December 2025</strong>.<br />
                  <strong>Seats Available:</strong> Only 300 (Strictly Limited)
                </p>

                <p style={{ marginTop: '20px' }}>
                  <strong>
                    ARINSA AI MINDS is where software products are born.<br />
                    If you're ready to think, code, and execute like a genius — "take the leap, not just a course"
                  </strong>
                </p>
              </div>

              {/* Replaced Button */}
              <button
                onClick={() => window.open('https://forms.gle/CVKGLuScE8vWgTg69', '_blank')}
                style={{
                  marginTop: '30px',
                  alignSelf: 'flex-start',
                  backgroundColor: '#4a5879',
                  color: '#fff',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  animation: 'blink 1s infinite',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                Fill the Job Guarantee Course Form
              </button>
            </section>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#000' }}>
        <h3>Where performance meets placement — only at ARINSA AI MINDS.</h3>
      </div>

      {/* Blinking animation keyframes */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0.3; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
};

export default SpecialCourses;
