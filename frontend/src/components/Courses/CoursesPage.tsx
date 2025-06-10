import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';

interface Props {
  closeDropdown: () => void;
}

const CoursesPage = ({ closeDropdown }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '30px', paddingTop: '20px', color:'#ccc' }}>
      <LeftSection closeDropdown={closeDropdown} />
      <MiddleSection closeDropdown={closeDropdown} />
      
    </div>
  );
};

export default CoursesPage;
