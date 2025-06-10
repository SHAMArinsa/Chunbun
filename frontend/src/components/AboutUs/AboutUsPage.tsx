// frontend/src/components/AboutUs/AboutUsPage.tsx
import React from 'react';
import LeftSection from './LeftSection';
import RightMenu from './RightMenu';

interface AboutUsPageProps {
  closeDropdown: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ closeDropdown }) => {
  return (
    <div
      style={{
        display: 'flex',
        padding: '40px',
        gap: '40px',
        color: '#fff',
        height: '60vh',
        overflowY: 'auto',
        
      }}
    >
      <LeftSection closeDropdown={closeDropdown} />
      <RightMenu closeDropdown={closeDropdown} />
    </div>
  );
};

export default AboutUsPage;
