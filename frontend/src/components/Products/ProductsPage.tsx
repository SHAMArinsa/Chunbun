import React from 'react';
import { Helmet } from "react-helmet-async"; // ✅ SEO
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';

interface ProductsPageProps {
  closeDropdown: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ closeDropdown }) => {
  return (
    <>
      {/* 🔥 SEO */}
      <Helmet>
        <title>AI Products | Arinsa AI Minds</title>

        <meta
          name="description"
          content="Explore AI products by Arinsa AI Minds including generative AI tools, automation platforms, and intelligent SaaS solutions."
        />

        <meta
          name="keywords"
          content="AI products, generative AI tools, AI automation, SaaS AI solutions, NLP tools"
        />

        <link
          rel="canonical"
          href="https://www.arinsaaiminds.com/products"
        />
      </Helmet>

      <div
        className="products-container"
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
              .products-container {
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

export default ProductsPage;
