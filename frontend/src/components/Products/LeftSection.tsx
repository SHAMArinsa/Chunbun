import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  closeDropdown: () => void;
}

const LeftSection: React.FC<Props> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/products/details');
    closeDropdown();
  };

  return (
    <div style={{ flex: 1, paddingRight: '20px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Products</h2>
      <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#ccc' }}>
        At ARINSA AI MINDS, we empower businesses to innovate, scale, and operate with agility through intelligent, cloud-native solutions. Our platforms drive transformation, streamline operations, and deliver measurable impact.
      </p>
      <button
        onClick={handleExploreClick}
        style={{
          marginTop: '20px',
          padding: '10px 16px',
          backgroundColor: '#ffffff',
          color: '#000000',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          borderRadius: '4px',
        }}
      >
        Explore
      </button>
    </div>
  );
};

export default LeftSection;
