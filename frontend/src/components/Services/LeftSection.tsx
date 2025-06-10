import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  closeDropdown: () => void;
}

const LeftSection: React.FC<Props> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/services/details');
    closeDropdown();
  };

  return (
    <div style={{ flex: 1, paddingRight: '20px' }}>
      <h2 style={{ fontSize: '20px', marginBottom: '10px' }}>Services</h2>
      <p style={{ fontSize: '14px', lineHeight: '1.5', color: '#ccc' }}>
        We help clients create long-term value for all stakeholders. Enabled by data and technology, our services provide trust through assurance and help clients transform, grow and operate.
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
