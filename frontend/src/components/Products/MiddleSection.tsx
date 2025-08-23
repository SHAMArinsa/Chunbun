import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { label: 'Arinsa Multi Agent', hash: '#arinsamultiagent' },
  { label: 'Arinsa Campaign Agent', hash: '#arinsacampaignagent' },
  { label: 'Arinsa FinSecure Agent', hash: '#arinsafinsecureagent' },
  { label: 'Arinsa OpsMind Agent', hash: '#arinsaoperationsalagent' },
  { label: 'AutoDocQuery', hash: '#autodocquery' },
  { label: 'CodeSimplify', hash: '#codesimplify' },
  { label: 'InstaCoder', hash: '#instacoder' },
  { label: 'TransCoder', hash: '#transcoder' },
  { label: 'TextifyAI', hash: '#textifyai' },
  { label: 'Text2Vision', hash: '#text2vision' },
  { label: 'SummarizerPro', hash: '#summarizerpro' },
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
              to={`/products/details${hash}`} // Matches your route: /products/details
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
