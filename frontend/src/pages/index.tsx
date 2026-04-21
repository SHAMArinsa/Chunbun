import HomePageContent from '../components/HomePage/HomePageContent';
import { Helmet } from "react-helmet-async";
<link rel="icon" type="image/jpeg" href="/images/logo.jpeg" />


const HomePage = () => {
  return (
    <>
      <HomePageContent />
    </>
  );
};


<Helmet>
  <title>Arinsa AI Minds | Generative AI & Automation Company</title>
  <meta 
    name="description" 
    content="Arinsa AI Minds provides AI automation, NLP, and LLM-based solutions to scale modern businesses." 
  />
</Helmet>

export default HomePage;

