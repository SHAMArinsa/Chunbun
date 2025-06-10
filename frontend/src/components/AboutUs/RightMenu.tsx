//frontend\src\components\AboutUs\RightMenu.tsx

import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Our purpose', hash: '#our-purpose' },
  { name: 'Our people', hash: '#our-people' },
  { name: 'Our values', hash: '#our-values' },
  { name: 'Locations', hash: '#locations' },
];

const RightMenu: React.FC<{ closeDropdown: () => void }> = ({ closeDropdown }) => {
  return (
    <div style={{ flex: 1 }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map(({ name, hash }) => (
          <li key={name} style={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
            <Link
              to={`/about-us/details${hash}`}
              onClick={closeDropdown}
              style={{ color: '#ccc', textDecoration: 'none', fontWeight: 'bold' }}
            >
              {name}
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

export default RightMenu;
