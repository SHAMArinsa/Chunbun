// frontend/src/components/AboutUs/AboutUsPage.tsx
import React, { useEffect, useState } from 'react';
import LeftSection from './LeftSection';
import RightMenu from './RightMenu';

interface AboutUsPageProps {
  closeDropdown: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ closeDropdown }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // initial load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        padding: isMobile ? '20px' : '40px',
        gap: isMobile ? '20px' : '40px',
        color: '#fff',
        height: isMobile ? 'auto' : '60vh',
        overflowY: 'auto',
      }}
    >
      <LeftSection closeDropdown={closeDropdown} />
      <RightMenu closeDropdown={closeDropdown} />
    </div>
  );
};

export default AboutUsPage;
