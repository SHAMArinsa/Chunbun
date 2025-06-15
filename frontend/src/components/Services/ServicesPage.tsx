import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';

interface ServicesPageProps {
  closeDropdown: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ closeDropdown }) => {
  return (
    <div
      className="services-container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '20px',
        color: '#fff',
        flexWrap: 'wrap', // Important for responsiveness
      }}
    >
      <LeftSection closeDropdown={closeDropdown} />
      <MiddleSection closeDropdown={closeDropdown} />

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .services-container {
              flex-direction: column !important;
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ServicesPage;
