import { useNavigate } from 'react-router-dom';

interface Props {
  closeDropdown: () => void;
}

const LeftSection = ({ closeDropdown }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/courses/explore');
    closeDropdown();
  };

  return (
    <div style={{ flex: 1, paddingRight: '20px' }}>
      <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Know More About Courses</h3>
      <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
        Discover our professional and technical courses across key domains like Data Science, AI, Cloud, and Full Stack.
      </p>
      <button
        onClick={handleClick}
        style={{
          marginTop: '20px',
          backgroundColor: '#ffffff',
          color: '#000000',
          border: '1px solid #ccc',
          padding: '10px 16px',
          fontWeight: 600,
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Know More
      </button>
    </div>
  );
};

export default LeftSection;
