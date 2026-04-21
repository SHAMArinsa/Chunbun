import React from 'react';
import { Helmet } from "react-helmet-async"; // ✅ ADD THIS
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';

interface ServicesPageProps {
  closeDropdown: () => void;
}

const ServicesPage: React.FC<ServicesPageProps> = ({ closeDropdown }) => {
  return (
    <>
      {/* ✅ SEO START */}
      <Helmet>
        <title>AI Services | Arinsa AI Minds</title>

        <meta
          name="description"
          content="Explore AI automation, Generative AI, NLP, and LLM-based solutions offered by Arinsa AI Minds to scale your business."
        />

        <meta
          name="keywords"
          content="AI services, Generative AI, AI automation, NLP solutions, LLM development, AI company India"
        />

        <link
          rel="canonical"
          href="https://www.arinsaaiminds.com/services"
        />
      </Helmet>
      {/* ✅ SEO END */}

      <div
        className="services-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          padding: '20px',
          color: '#fff',
          flexWrap: 'wrap',
        }}
      >
        <LeftSection closeDropdown={closeDropdown} />
        <MiddleSection closeDropdown={closeDropdown} />

        {/* Responsive Styling */}
        <style>
          {`
            @media (max-width: 768px) {
              .services-container {
                flex-direction: column !important;
                padding: 20px !important;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default ServicesPage;
