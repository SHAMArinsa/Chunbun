import React from 'react';
import LeftSection from './LeftSection';
import MiddleSection from './MiddleSection';

interface ProductsPageProps {
  closeDropdown: () => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ closeDropdown }) => {
  return (
    <div
      className="products-container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '20px',
        color: '#fff',
        flexWrap: 'wrap', // Important for responsiveness
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
  );
};

export default ProductsPage;
