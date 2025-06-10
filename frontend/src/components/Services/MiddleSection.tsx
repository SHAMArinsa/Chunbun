import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Consulting', hash: '#consulting' },
  { label: 'Technology', hash: '#technology' },
  { label: 'Managed Services', hash: '#managed-services' },
  { label: 'People and workforce', hash: '#people-and-workforce' },
];

const MiddleSection: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <div style={{ flex: 1 }}>
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
              to={`/services/details${hash}`}
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
