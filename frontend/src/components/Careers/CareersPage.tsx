// src/components/Careers/CareersPage.tsx

import React from 'react';
import CareersLeftSection from './LeftSection';
import CareersMiddleSection from './MiddleSection';

interface CareersPageProps {
  closeDropdown?: () => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ closeDropdown }) => (
  <div className="careers-container" style={{ display: 'flex', color: '#fff' }}>
    <CareersLeftSection closeDropdown={closeDropdown} />
    <CareersMiddleSection closeDropdown={closeDropdown} />

    {/* Responsive Styling */}
    <style>
      {`
        @media (max-width: 768px) {
          .careers-container {
            flex-direction: column !important;
            padding: 20px !important;
          }
        }
      `}
    </style>
  </div>
);

export default CareersPage;
