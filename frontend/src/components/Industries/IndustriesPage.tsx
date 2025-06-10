// frontend/src/components/Industries/IndustriesPage.tsx

import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightCaseStudies from './RightCaseStudies';

const IndustriesPage: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => (
  <div style={{ display: 'flex', color: '#fff' }}>
    <LeftSection closeDropdown={closeDropdown} />
    <MiddleSection closeDropdown={closeDropdown} />
    <RightCaseStudies closeDropdown={closeDropdown} />
  </div>
);

export default IndustriesPage;
