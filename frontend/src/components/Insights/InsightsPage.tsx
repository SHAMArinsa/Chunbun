// src/components/Insights/InsightsPage.tsx

import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSpotlight from './RightSpotlight';

const InsightsPage: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div
      className="insights-container"
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
      <RightSpotlight closeDropdown={closeDropdown} />

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .insights-container {
              flex-direction: column !important;
              padding: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InsightsPage;
