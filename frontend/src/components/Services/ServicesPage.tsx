import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';


interface ServicesPageProps {
  closeDropdown: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ closeDropdown }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
      <LeftSection closeDropdown={closeDropdown} />
      <MiddleSection closeDropdown={closeDropdown} />
    </div>
  );
};

export default ServicesPage;
