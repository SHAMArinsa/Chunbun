import React from 'react';
import { useNavigate } from 'react-router-dom';

const spotlightItems = [
  { label: 'Explore Cases', path: '/about-us/case-study-all' }, // correct path to the new blog-style page
];


const RightSpotlight: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  const navigate = useNavigate();

  return (
    <div style={{ flex: 1 }}>
      <h3 style={{ color: '#fff' }}>Case Study</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {spotlightItems.map(({ label, path }) => (
          <li
            key={label}
            onClick={() => {
              closeDropdown?.();
              navigate(path);
            }}
            style={{
              padding: '10px 0',
              borderBottom: '1px solid #444',
              cursor: 'pointer',
              color: '#ccc',
              fontWeight: 'bold',
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RightSpotlight;
