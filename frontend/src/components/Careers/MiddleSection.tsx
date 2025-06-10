// src/components/Careers/MiddleSection.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Join us', hash: '#how-to-join-us' },
  { label: 'Job search', hash: '#job-search' },
  { label: 'Careers with ARINSA', hash: '#careers-in-arinsa' },
  { label: 'Internship', hash: '#internships' },
];

const MiddleSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div style={{ flex: 1 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map(({ label, hash }) => (
          <li key={label} style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
            <Link
              to={`/careers/careerall${hash}`}
              onClick={closeDropdown}
              style={{ color: '#ccc', textDecoration: 'none', fontWeight: 'bold' }}
            >
              {label}
            </Link>
          </li>
        ))}
        <li style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
          <Link
            to="/connect"
            onClick={closeDropdown}
            style={{ color: '#ccc', textDecoration: 'none', fontWeight: 'bold' }}
          >
            Connect with us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MiddleSection;
