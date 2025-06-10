import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LeftSectionProps {
  closeDropdown: () => void;
}

const LeftSection: React.FC<LeftSectionProps> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    closeDropdown(); // Close dropdown first
    navigate('/about-us/details');
  };

  return (
    <div style={{ flex: 1, paddingRight: '2rem' }}>
      <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}>About us</h2>
      <p style={{ color: '#ccc', lineHeight: '1.6', marginTop: '1rem' }}>
        At ARINSA AI MINDS, our purpose is building a better working world...
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
    </div>
  );
};

export default LeftSection;
