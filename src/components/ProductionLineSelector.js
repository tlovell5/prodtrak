import React from 'react';

const lines = [
  "Sweet Line 1", 
  "Sweet Line 2", 
  "Non Allergen Mix", 
  "Allergen Mix", 
  "Handfill 1", 
  "Handfill 2"
];

function ProductionLineSelector({ onSelectLine }) {

  const onChange = (event) => {
    const selectedLine = event.target.value;
    onSelectLine(selectedLine);
  };

  return (
    <div>
      <label>Select Production Line: </label>
      <select onChange={onChange}>
        <option value="">-- Select a line --</option>
        {lines.map(line => (
          <option key={line} value={line}>
            {line}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductionLineSelector;
