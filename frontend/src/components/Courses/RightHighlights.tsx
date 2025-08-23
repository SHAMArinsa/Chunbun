import { useNavigate } from 'react-router-dom';

interface Props {
  closeDropdown: () => void;
}

const RightHighlights = ({ closeDropdown }: Props) => {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path);
    closeDropdown();
  };

  return (
    <div style={{ flex: 1 }}>
      <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Spotlight</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '10px' }}>
          <span
            onClick={() => handleRedirect('/courses/spotlight/student-testimonials')}
            style={{ cursor: 'pointer', color: '#ccc' }}
          >
            Student Testimonials
          </span>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span
            onClick={() => handleRedirect('/courses/spotlight/success-stories')}
            style={{ cursor: 'pointer', color: '#ccc' }}
          >
            Success Stories
          </span>
        </li>
        {/* New Links */}
        <li style={{ marginBottom: '10px' }}>
          <span
            onClick={() => handleRedirect('/teach-with-us/add-your-course')}
            style={{ cursor: 'pointer', color: '#ccc' }}
          >
            Add Your Course
          </span>
        </li>
        <li style={{ marginBottom: '10px' }}>
          <span
            onClick={() => handleRedirect('/teach-with-us')}
            style={{ cursor: 'pointer', color: '#ccc' }}
          >
            Teach With Us
          </span>
        </li>
        <li>
          <span
            onClick={() => handleRedirect('/teach-with-us/recruitment')}
            style={{ cursor: 'pointer', color: '#ccc' }}
          >
            Recruitment From Us
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RightHighlights;
