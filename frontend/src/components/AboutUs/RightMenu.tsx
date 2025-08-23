import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { name: 'Our purpose', hash: '#our-purpose' },
  { name: 'Our people', hash: '#our-people' },
  { name: 'Our values', hash: '#our-values' },
  { name: 'Locations', hash: '#locations' },
];

const RightMenu: React.FC<{ closeDropdown: () => void }> = ({ closeDropdown }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {menuItems.map(({ name, hash }) => (
          <li
            key={name}
            style={{
              padding: isMobile ? '8px 0' : '10px 0',
              borderBottom: '1px solid #444',
            }}
          >
            <Link
              to={`/about-us/details${hash}`}
              onClick={closeDropdown}
              style={{
                color: '#ccc',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: isMobile ? '0.95rem' : '1rem',
                display: 'block',
              }}
            >
              {name}
            </Link>
          </li>
        ))}
        <li
          style={{
            padding: isMobile ? '8px 0' : '10px 0',
            borderBottom: '1px solid #444',
          }}
        >
          <Link
            to="/connect"
            onClick={closeDropdown}
            style={{
              color: '#ccc',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: isMobile ? '0.95rem' : '1rem',
              display: 'block',
            }}
          >
            Connect with us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default RightMenu;
