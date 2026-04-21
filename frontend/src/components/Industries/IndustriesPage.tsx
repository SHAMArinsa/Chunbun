import React from 'react';
import { Helmet } from "react-helmet-async"; // ✅ SEO
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';
import RightCaseStudies from './RightCaseStudies';

const IndustriesPage: React.FC<{ closeDropdown?: () => void }> = ({ closeDropdown }) => {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>Industries We Serve | Arinsa AI Minds</title>

        <meta
          name="description"
          content="Explore how Arinsa AI Minds delivers AI solutions across industries like healthcare, finance, manufacturing, and education."
        />

        <link
          rel="canonical"
          href="https://www.arinsaaiminds.com/industries"
        />
      </Helmet>

      <div
        className="industries-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: '20px',
          color: '#fff',
        }}
      >
        <LeftSection closeDropdown={closeDropdown} />
        <MiddleSection closeDropdown={closeDropdown} />
        <RightCaseStudies closeDropdown={closeDropdown} />

        <style>
          {`
            @media (max-width: 768px) {
              .industries-container {
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

export default IndustriesPage;
