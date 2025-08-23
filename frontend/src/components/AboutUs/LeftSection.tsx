import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LeftSectionProps {
  closeDropdown: () => void;
}

const LeftSection: React.FC<LeftSectionProps> = ({ closeDropdown }) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleExploreClick = () => {
    closeDropdown();
    navigate('/about-us/details');
  };

  return (
    <div style={{ flex: 1, paddingRight: isMobile ? '0' : '2rem' }}>
      <h2
        style={{
          color: '#fff',
          fontSize: isMobile ? '22px' : '28px',
          fontWeight: 'bold',
        }}
      >
        About us
      </h2>
      <p
        style={{
          color: '#ccc',
          lineHeight: '1.6',
          marginTop: '1rem',
          fontSize: isMobile ? '0.95rem' : '1rem',
        }}
      >
        At ARINSA AI MINDS, our purpose is building a better working world...
      </p>
      <button
        onClick={handleExploreClick}
        style={{
          marginTop: '1.5rem',
          padding: isMobile ? '8px 16px' : '10px 20px',
          backgroundColor: '#fff',
          color: '#000',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold',
          width: isMobile ? '100%' : 'auto',
          borderRadius: '6px',
        }}
      >
        Explore
      </button>
    </div>
  );
};

export default LeftSection;
