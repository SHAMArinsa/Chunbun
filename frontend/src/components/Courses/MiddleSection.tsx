import { useNavigate } from 'react-router-dom';

interface Props {
  closeDropdown: () => void;
}

const MiddleSection = ({ closeDropdown }: Props) => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    navigate(path);
    closeDropdown();
  };

  const links = [
    {
      section: 'Course Categories',
      items: [
        { label: 'Comparative Exam Preparation', path: '/courses/comparative-exam-preparation' },
        { label: 'Interview Preparation', path: '/courses/interview-preparation' },
        { label: 'Normal Certification Courses', path: '/courses/normal-course' },
        { label: 'Special Courses', path: '/courses/special-course' },
      ],
    },
    {
      section: 'Support',
      items: [
        { label: 'Connect with us', path: '/connect' },
      ],
    },
  ];

  return (
    <div style={{ flex: 1 }}>
      <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Course Categories</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map(section => (
          <div key={section.section}>
            <h4
              style={{
                fontSize: '18px',
                marginTop: '20px',
                marginBottom: '5px',
                color: '#ccc',
                borderBottom: '2px solid #ccc',
                paddingBottom: '5px',
              }}
            >
              {section.section}
            </h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {section.items.map(link => (
                <li key={link.path} style={{ marginBottom: '10px' }}>
                  <span
                    onClick={() => handleClick(link.path)}
                    style={{
                      cursor: 'pointer',
                      color: '#ccc',
                      fontWeight: 500,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span>{link.label}</span>
                    <span style={{ fontSize: '18px' }}>→</span>
                  </span>
                </li>
              ))}
            </ul>
            <hr style={{ margin: '10px 0', borderTop: '1px solid #ddd' }} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MiddleSection;
