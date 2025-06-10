// src/components/Careers/CareersPage.tsx

import CareersLeftSection from './LeftSection';
import CareersMiddleSection from './MiddleSection';


interface CareersPageProps {
  closeDropdown?: () => void;
}

const CareersPage: React.FC<CareersPageProps> = ({ closeDropdown }) => (
  <div style={{ display: 'flex',  color: '#fff' }}>
    <CareersLeftSection closeDropdown={closeDropdown} />
    <CareersMiddleSection closeDropdown={closeDropdown} />
    
  </div>
);

export default CareersPage;
