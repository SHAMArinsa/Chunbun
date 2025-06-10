// src/components/Careers/RightSpotlight.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const spotlightItems = [
  { label: 'Experienced professionals', path: '/careers/spotlight/experienced-professionals' },
  { label: 'Student and entry level programs', path: '/careers/spotlight/student-programs' },
  { label: 'Talent community', path: '/careers/spotlight/talent-community' },
];

const RightSpotlight: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  return (
    <div style={{ flex: 1 }}>
      <h3 style={{ color: '#ffd700' }}>Spotlight</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {spotlightItems.map((item) => (
          <li
            key={item.label}
            onClick={() => {
              closeDropdown?.();
              navigate(item.path);
            }}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #444',
              cursor: 'pointer',
              color: '#ccc',
              fontWeight: 'bold',
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSpotlight;
