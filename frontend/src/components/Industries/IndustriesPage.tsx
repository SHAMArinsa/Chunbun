// src/components/Industries/IndustriesPage.tsx

import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightCaseStudies from './RightCaseStudies';

const IndustriesPage: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div
      className="industries-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        padding: '20px',
        color: '#fff',
      }}
    >
      {/* Main Sections */}
      <LeftSection closeDropdown={closeDropdown} />
      <MiddleSection closeDropdown={closeDropdown} />
      <RightCaseStudies closeDropdown={closeDropdown} />

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .industries-container {
              flex-direction: column !important;
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IndustriesPage;
