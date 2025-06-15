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
    <div
      style={{
        flex: 1,
        padding: '10px',
      }}
    >
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {menuItems.map(({ label, hash }) => (
          <li
            key={label}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #444',
            }}
          >
            <Link
              to={`/careers/careerall${hash}`}
              onClick={closeDropdown}
              style={{
                color: '#ccc',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '16px',
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
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
            }}
          >
            Connect with us
          </Link>
        </li>
      </ul>

      {/* Responsive inline styles */}
      <style>
        {`
          @media (max-width: 768px) {
            a {
              font-size: 14px !important;
            }

            li {
              padding: 8px 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MiddleSection;
