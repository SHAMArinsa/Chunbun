import React from 'react';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  { label: 'HealthCare AI Transformation', id: 'healthcare-ai-case-study' },
];

const RightCaseStudies: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/about-us/case-study-all#${id}`); // ✅ Use hash link
    closeDropdown?.(); // ✅ Close menu
  };

  return (
    <div style={{ flex: 1 }}>
      <h3 style={{ color: '#fff' }}>Case Studies</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {caseStudies.map((item) => (
          <li
            key={item.label}
            onClick={() => handleClick(item.id)}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #444',
              cursor: 'pointer',
              color: '#ccc',
              fontWeight: 'bold',
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightCaseStudies;
