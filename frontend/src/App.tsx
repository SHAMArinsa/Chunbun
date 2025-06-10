import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


// Section pages
import HomePage from './pages/index';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import CareersPage from './components/Careers/CareersPage';
import IndustriesPage from './components/Industries/IndustriesPage';
import InsightsPage from './components/Insights/InsightsPage';
import ServicesPage from './components/Services/ServicesPage';
import CoursesPage from './components/Courses/CoursesPage';
import LegalAndPrivacy from './components/Footer/LegalAndPrivacy';


// About Us internal pages
import ExploreAbout from './components/AboutUs/Pages/ExploreAbout';
import ConnectWithUs from './components/AboutUs/Pages/ConnectWithUs';


// Careers main section
import Careerall from './components/Careers/Pages/Careerall';



// Industries internal pages
import ExploreIndustry from './components/Industries/pages/IndustriesAll';

// Industry Detail Pages
import AdvancedManufacturing from './components/Industries/pages/Details/AdvancedManufacturing';
import Consumer from './components/Industries/pages/Details/Consumer';
import EnergyResources from './components/Industries/pages/Details/EnergyResources';
import GovernmentPublic from './components/Industries/pages/Details/GovernmentPublic';
import Health from './components/Industries/pages/Details/Health';
import TechnologyMedia from './components/Industries/pages/Details/TechnologyMedia';
import Education from './components/Industries/pages/Details/Education';
import Transportation from './components/Industries/pages/Details/Transportation';
import Agriculture from './components/Industries/pages/Details/Agriculture';
import RealEstate from './components/Industries/pages/Details/RealEstate';

// Industries Case Studies
import HealthCareAI from './components/Industries/casestudy/HealthCareAI';


// Insights Pages
import InsightsAll from './components/Insights/Pages/InsightsAll';

// Insights Spotlight
import CaseStudyAll from './components/AboutUs/Pages/case_study_all';


// Services Pages
import ServicesAll from './components/Services/Pages/ServicesAll';


// Course Pages
import ComparativeExamPreparation from './components/Courses/Pages/ComparativeExamPreparation';
import InterviewPreparationCourse from './components/Courses/Pages/InterviewPreparationCourse';
import NormalCertificationCourses from './components/Courses/Pages/NormalCertificationCourses';
import SpecialCourses from './components/Courses/Pages/SpecialCourses';
import ExploreCourses from './components/Courses/Pages/ExploreCourses';


//course spotlight
import StudentTestimonials from './components/Courses/spotlight/StudentTestimonials';
import SuccessStories from './components/Courses/spotlight/SuccessStories';
import AddYourCourse from './components/Courses/spotlight/AddYourCourse';
import TeachWithUs from './components/Courses/spotlight/TeachWithUs';
import RecruitmentFromUs from './components/Courses/spotlight/RecruitmentFromUs';


// Comparative Exam Preparation
import JeeMain from './components/Courses/Pages/Comparative_exam_preparation/JeeMain';
import Gate from './components/Courses/Pages/Comparative_exam_preparation/Gate';
import Cat from './components/Courses/Pages/Comparative_exam_preparation/cat';
import Mat from './components/Courses/Pages/Comparative_exam_preparation/mat';
import Sat from './components/Courses/Pages/Comparative_exam_preparation/sat';
import Ielts from './components/Courses/Pages/Comparative_exam_preparation/ielts';
import Toefl from './components/Courses/Pages/Comparative_exam_preparation/toefl';
import Pte from './components/Courses/Pages/Comparative_exam_preparation/pte';

// Interview Preparation Course
import CodingPracticeAndSoftSkill from './components/Courses/Pages/Interview_Preparation_Course/CodingPracticeAndSoftSkill';
import CodingPracticeAndMockTest from './components/Courses/Pages/Interview_Preparation_Course/CodingPracticeAndMockTest';

// Normal Courses
import DataAndAI from './components/Courses/Pages/NORMAL_COURSE/DataAndAI';
import ProgrammingFoundations from './components/Courses/Pages/NORMAL_COURSE/ProgrammingFoundations';
import FullStackDevelopment from './components/Courses/Pages/NORMAL_COURSE/FullStackDevelopment';
import CloudAndDevOps from './components/Courses/Pages/NORMAL_COURSE/CloudAndDevOps';
import DesignAndFrontend from './components/Courses/Pages/NORMAL_COURSE/DesignAndFrontend';
import EmergingTechAndSpecialized from './components/Courses/Pages/NORMAL_COURSE/EmergingTechAndSpecialized';

// Special Courses
import PaidCourseWithJobGuarantee from './components/Courses/Pages/SEPECIAL_Course/PaidCourseWithJobGuarantee';
import PaidCourseWithPerformanceJobOpportunity from './components/Courses/Pages/SEPECIAL_Course/PaidCourseWithPerformanceJobOpportunity';

// My ARINSA AI Minds
import MyArinsaPage from './components/MyArinsa/MyArinsaPage';
import Login from './components/MyArinsa/Auth/Login';
import Register from './components/MyArinsa/Auth/Register';
import CandidateHome from './components/MyArinsa/Dashboard/CandidateHome';
import JobSearch from './components/MyArinsa/Dashboard/JobSearch';
import LearningCorner from './components/MyArinsa/Learning/LearningCorner';


// Footer
import ConnectWithUsfooter from './components/AboutUs/Pages/ConnectWithUs';

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>

          {/* Main */}
          <Route path="/" element={<HomePage />} />
          

          {/* About Us */}
          <Route path="/about-us" element={<AboutUsPage closeDropdown={() => {}} />} />
          <Route path="/about-us/details" element={<ExploreAbout />} />
          <Route path="/about-us/connect" element={<ConnectWithUs />} />
          

          {/* Careers */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/careerall" element={<Careerall />} />
          
        
          {/* Industries */}
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/industries/details" element={<ExploreIndustry />} />
          <Route path="/industries/casestudy/HealthCareAI" element={<HealthCareAI />} />


          {/*Industries/Details */}

          <Route path="/industries/advanced-manufacturing" element={<AdvancedManufacturing />} />
          <Route path="/industries/consumer" element={<Consumer />} />
          <Route path="/industries/energy-resources" element={<EnergyResources />} />
          <Route path="/industries/government-public" element={<GovernmentPublic />} />
          <Route path="/industries/health" element={<Health />} />
          <Route path="/industries/technology-media" element={<TechnologyMedia />} />
          <Route path="/industries/education" element={<Education />} />
          <Route path="/industries/transportation" element={<Transportation />} />
          <Route path="/industries/agriculture" element={<Agriculture />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          

          {/* Insights */}
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/details" element={<InsightsAll />} />
          <Route path="/about-us/case-study-all" element={<CaseStudyAll />} />


          {/* Services */}
          <Route path="/services" element={<ServicesPage closeDropdown={() => {}} />} />
          <Route path="/services/details" element={<ServicesAll />} />


          {/* Courses */}
          <Route path="/courses" element={<CoursesPage closeDropdown={() => {}} />} />
          <Route path="/courses/comparative-exam-preparation" element={<ComparativeExamPreparation closeDropdown={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/courses/interview-preparation" element={<InterviewPreparationCourse closeDropdown={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/courses/normal-course" element={<NormalCertificationCourses closeDropdown={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/courses/special-course" element={<SpecialCourses closeDropdown={function (): void {
            throw new Error('Function not implemented.');
          } } />} />
          <Route path="/courses/explore" element={<ExploreCourses />} />

         
          <Route path="/courses/spotlight/student-testimonials" element={<StudentTestimonials />} />
          <Route path="/courses/spotlight/success-stories" element={<SuccessStories />} />
          <Route path="/teach-with-us/add-your-course" element={<AddYourCourse />} />
          <Route path="/teach-with-us" element={<TeachWithUs />} />
          <Route path="/teach-with-us/recruitment" element={<RecruitmentFromUs />} />

          {/* Comparative Exam Preparation Routes */}
          <Route path="/courses/comparative-exam-preparation/jeemain" element={<JeeMain />} />
          <Route path="/courses/comparative-exam-preparation/gate" element={<Gate />} />
          <Route path="/courses/comparative-exam-preparation/cat" element={<Cat />} />
          <Route path="/courses/comparative-exam-preparation/mat" element={<Mat />} />
          <Route path="/courses/comparative-exam-preparation/sat" element={<Sat />} />
          <Route path="/courses/comparative-exam-preparation/ielts" element={<Ielts />} />
          <Route path="/courses/comparative-exam-preparation/toefl" element={<Toefl />} />
          <Route path="/courses/comparative-exam-preparation/pte" element={<Pte />} />

          {/* Interview Preparation Course Routes */}
          <Route path="/courses/interview-preparation/coding-practice-soft-skill" element={<CodingPracticeAndSoftSkill />} />
          <Route path="/courses/interview-preparation/coding-practice-mock-test" element={<CodingPracticeAndMockTest />} />

          {/* Normal Courses Routes */}
          <Route path="/courses/normal-course/data-and-ai" element={<DataAndAI />} />
          <Route path="/courses/normal-course/programming-foundations" element={<ProgrammingFoundations />} />
          <Route path="/courses/normal-course/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/courses/normal-course/cloud-and-devops" element={<CloudAndDevOps />} />
          <Route path="/courses/normal-course/design-and-frontend" element={<DesignAndFrontend />} />
          <Route path="/courses/normal-course/emerging-tech-specialized" element={<EmergingTechAndSpecialized />} />

          {/* Special Courses Routes */}
          <Route path="/courses/special-course/paid-course-with-job-guarantee" element={<PaidCourseWithJobGuarantee />} />
          <Route path="/courses/special-course/paid-course-with-performance-job-opportunity" element={<PaidCourseWithPerformanceJobOpportunity />} />

 
          {/* My ARINSA (Candidate) */}
          <Route path="/my-arinsa" element={<MyArinsaPage />} />
          <Route path="/my-arinsa/auth/login" element={<Login />} />
          <Route path="/my-arinsa/auth/register" element={<Register />} />
          <Route path="/my-arinsa/dashboard" element={<CandidateHome />} />
          <Route path="/my-arinsa/job-search" element={<JobSearch />} />
          <Route path="/my-arinsa/learning-corner" element={<LearningCorner />} />

          {/* Footer */}
          <Route path="/connect" element={<ConnectWithUsfooter />} />
          <Route path="/legal-privacy" element={<LegalAndPrivacy />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
