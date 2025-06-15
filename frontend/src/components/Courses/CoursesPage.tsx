// src/components/Courses/CoursesPage.tsx

import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';

interface Props {
  closeDropdown: () => void;
}

const CoursesPage: React.FC<Props> = ({ closeDropdown }) => {
  return (
    <div className="courses-container" style={{ display: 'flex', gap: '30px', paddingTop: '20px', color: '#ccc' }}>
      <LeftSection closeDropdown={closeDropdown} />
      <MiddleSection closeDropdown={closeDropdown} />

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 768px) {
            .courses-container {
              flex-direction: column !important;
              padding: 20px !important;
              gap: 20px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default CoursesPage;
