// frontend/src/components/Industries/MiddleSection.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const industryLinks = [
  { label: 'Advanced Manufacturing', hash: '#advanced-manufacturing' },
  { label: 'Consumer', hash: '#consumer' },
  { label: 'Energy & Resources', hash: '#energy-resources' },
  { label: 'Government & Public', hash: '#government-public' },
  { label: 'Health', hash: '#health' },
  { label: 'Technology, Media & Telecom', hash: '#technology-media' },
  { label: 'Education', hash: '#education' },
  { label: 'Transportation', hash: '#transportation' },
  { label: 'Agriculture', hash: '#agriculture' },
  { label: 'Real Estate', hash: '#real-estate' },
];

const MiddleSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div style={{ flex: 1 }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {industryLinks.map(({ label, hash }) => (
          <li
            key={label}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #444',
            }}
          >
            <Link
              to={`/industries/details${hash}`}
              onClick={closeDropdown}
              style={{
                color: '#ccc',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
          <Link
            to="/connect"
            onClick={closeDropdown}
            style={{
              color: '#ccc',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Connect with us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleSection;
