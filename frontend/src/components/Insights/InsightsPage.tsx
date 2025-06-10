// src/components/Insights/InsightsPage.tsx

import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightSpotlight from './RightSpotlight';

const InsightsPage: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <LeftSection closeDropdown={closeDropdown} />
      <MiddleSection closeDropdown={closeDropdown} />
      <RightSpotlight closeDropdown={closeDropdown} />
    </div>
  );
};

export default InsightsPage;
