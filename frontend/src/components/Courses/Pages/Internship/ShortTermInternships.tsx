import React from 'react';

const ShortTermInternships: React.FC = () => {
  const internships = [
    { program: 'UI/UX Design', duration: '2 Weeks', focus: 'Wireframes, Prototyping, Figma', price: '₹750' },
    { program: 'Backend Development', duration: '2 Weeks', focus: 'APIs, Databases, Django/FastAPI', price: '₹750' },
    { program: 'Full Stack Web Development', duration: '2 Weeks', focus: 'React + Backend', price: '₹1000' },
    { program: 'Full Stack Web Development + ML/DL', duration: '2 Weeks', focus: 'Web + AI Model Integration', price: '₹1000' },
    { program: 'Machine Learning', duration: '2 Weeks', focus: 'Regression, Classification', price: '₹750' },
    { program: 'Deep Learning', duration: '2 Weeks', focus: 'NN, CNN, RNN', price: '₹750' },
    { program: 'Natural Language Processing (NLP)', duration: '2 Weeks', focus: 'Text Classification, Transformers', price: '₹750' },
    { program: 'Computer Vision', duration: '2 Weeks', focus: 'Object Detection, OpenCV, CNN', price: '₹750' },
    { program: 'Data Science (ML + DL)', duration: '2 Weeks', focus: 'EDA, ML, DL', price: '₹1000' },
    { program: 'Data Science (ML, DL + NLP)', duration: '2 Weeks', focus: 'Data + NLP', price: '₹1000' },
    { program: 'Data Science (ML, DL + CV)', duration: '2 Weeks', focus: 'Data + Computer Vision', price: '₹1000' },
    { program: 'Data Science (ML, DL + NLP + CV)', duration: '2 Weeks', focus: 'Data + NLP + Computer Vision', price: '₹1000' },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Short-Term Internship Programs</h1>

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
  backgroundColor: '#493c56ff',
  color: '#fff',
  border: 'none',
  borderRadius: '10px',
  fontWeight: 'bold',
  fontSize: '20px',
  cursor: 'pointer',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease',
};

export default ShortTermInternships;
