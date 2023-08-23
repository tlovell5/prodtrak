import React from 'react';

const ProductionSummary = ({ data }) => {
  return (
    <div>
      <h3>Production Summary</h3>
      {/* Display the data in a format of your choice */}
      <p>SKU: {data.sku}</p>
      {/* ... other data points ... */}
    </div>
  );
};

export default ProductionSummary;
