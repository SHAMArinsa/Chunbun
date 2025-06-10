// src/components/Insights/MiddleSection.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const insightLinks = [
  { label: 'AI', hash: '#ai' },
  { label: 'Risk', hash: '#risk' },
  { label: 'Technology', hash: '#technology' },
  { label: 'Transformation', hash: '#transformation' },
];

const MiddleSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div style={{ flex: 1 }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {insightLinks.map(({ label, hash }) => (
          <li
            key={label}
            style={{ padding: '10px 0', borderBottom: '1px solid #444' }}
          >
            <Link
              to={`/insights/details${hash}`}
              onClick={closeDropdown}
              style={{ color: '#ccc', fontWeight: 'bold', textDecoration: 'none' }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
          <Link
            to="/connect"
            onClick={closeDropdown}
            style={{ color: '#ccc', fontWeight: 'bold', textDecoration: 'none' }}
          >
            Connect with us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleSection;
