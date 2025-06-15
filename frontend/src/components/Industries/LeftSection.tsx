import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/industries/details');
    closeDropdown?.();
  };

  return (
    <div className="industries-left-section" style={{ flex: 1, paddingRight: '2rem' }}>
      <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}>Explore Industries</h2>
      <p style={{ color: '#ccc', lineHeight: '1.6', marginTop: '1rem' }}>
        Explore the sectors we serve and the tailored solutions we offer.
      </p>
      <button
        onClick={handleExploreClick}
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
            .industries-left-section {
              padding-right: 0;
              margin-bottom: 2rem;
              text-align: center;
            }

            .industries-left-section h2 {
              font-size: 24px;
            }

            .industries-left-section p {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LeftSection;
