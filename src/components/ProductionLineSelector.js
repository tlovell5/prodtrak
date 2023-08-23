import React from 'react';

const ProductionLineSelector = ({ setProductionLine }) => {
  const lines = [
    'Sweet Line 1', 'Sweet Line 2', 'Non Allergen Mix', 'Allergen Mix', 
    'Handfill 1', 'Handfill 2'
  ];

  return (
    <select onChange={(e) => setProductionLine(e.target.value)}>
      {lines.map((line, index) => (
        <option key={index} value={line}>{line}</option>
      ))}
    </select>
  );
};

export default ProductionLineSelector;

