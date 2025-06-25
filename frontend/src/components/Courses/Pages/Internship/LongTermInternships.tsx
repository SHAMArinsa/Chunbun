import React from 'react';

const LongTermInternships: React.FC = () => {
  const internships = [
    {
      program: 'Full Stack AI Product Development',
      duration: '3 Months',
      focus: 'React, FastAPI, OpenAI, Deployment',
      price: '₹12000 + GST',
    },
    {
      program: 'Applied Data Science',
      duration: '3 Months',
      focus: 'ML, DL, NLP/CV, EDA, Dashboarding',
      price: '₹15000 + GST',
    },
    {
      program: 'GenAI / LLM Application Development',
      duration: '3 Months',
      focus: 'Transformers, RAG, LangChain, OpenAI',
      price: '₹15000 + GST',
    },
    {
      program: 'Frontend UI/UX + Systems Engineering',
      duration: '3 Months',
      focus: 'Figma, React, Tailwind, A/B testing',
      price: '₹12000 + GST',
    },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Long-Term Internship Programs</h1>

      {/* Desktop Table */}
      <div className="table-container">
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr style={{ backgroundColor: '#ddd' }}>
              <th style={thStyle}>Internship Program</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Focus Area</th>
              <th style={thStyle}>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {internships.map((item, index) => (
              <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                <td style={tdStyle}>{item.program}</td>
                <td style={tdStyle}>{item.duration}</td>
                <td style={tdStyle}>{item.focus}</td>
                <td style={tdStyle}>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked View */}
      <div className="mobile-table">
        {internships.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
              padding: '15px',
              marginBottom: '15px',
              borderRadius: '8px',
              border: '1px solid #ddd',
            }}
          >
            <p><strong>Internship Program:</strong> {item.program}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
            <p><strong>Focus Area:</strong> {item.focus}</p>
            <p><strong>Price:</strong> {item.price}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button
          onClick={() => window.open('https://forms.gle/jxgFPuxUrGD5T9U99', '_blank')}
          style={buttonStyle}
        >
          Fill Internship Form
        </button>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .table-container {
              display: none;
            }
            .mobile-table {
              display: block;
            }
          }

          @media (min-width: 769px) {
            .table-container {
              display: block;
            }
            .mobile-table {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: '12px',
  textAlign: 'left',
  borderBottom: '2px solid #ccc',
};

const tdStyle: React.CSSProperties = {
  padding: '10px',
  borderBottom: '1px solid #ddd',
};

const buttonStyle: React.CSSProperties = {
  padding: '18px 36px',
  backgroundColor: '#4a5879',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease',
};

export default LongTermInternships;
