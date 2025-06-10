// src/components/Insights/LeftSection.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LeftSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    closeDropdown?.();
    navigate('/insights/details');
  };

  return (
    <div style={{ flex: 1, paddingRight: '2rem' }}>
      <h2 style={{ color: '#fff', fontSize: '28px', fontWeight: 'bold' }}>Insights</h2>
      <p style={{ color: '#ccc', lineHeight: '1.6', marginTop: '1rem' }}>
        Discover our latest perspectives on the issues that matter most.
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
