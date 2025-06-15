import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    closeDropdown?.(); // Close dropdown first
    navigate('/careers/careerall');
  };

  return (
    <div className="left-section" style={{ flex: 1, paddingRight: '2rem' }}>
      <h2 className="career-heading" style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}>
        Careers
      </h2>
      <p className="career-text" style={{ color: '#ccc', lineHeight: '1.6', marginTop: '1rem' }}>
        We bring together extraordinary people, like you, to build a better working world.
      </p>
      <button
        onClick={handleExploreClick}
        className="career-button"
        style={{
          marginTop: '1.5rem',
          padding: '10px 20px',
          backgroundColor: '#fff',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Explore
      </button>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            .left-section {
              padding-right: 0 !important;
              margin-bottom: 20px;
            }
            .career-heading {
              font-size: 22px !important;
            }
            .career-text {
              font-size: 14px !important;
            }
            .career-button {
              padding: 8px 16px !important;
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LeftSection;
