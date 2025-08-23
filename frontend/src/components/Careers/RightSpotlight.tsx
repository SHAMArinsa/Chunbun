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
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
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
              fontSize: '16px',
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>

      {/* Mobile-specific adjustments */}
      <style>
        {`
          @media (max-width: 768px) {
            li {
              padding: 8px 0 !important;
              font-size: 14px !important;
            }
            h3 {
              font-size: 18px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default RightSpotlight;
