import React from 'react';

const ProductionSummary = ({ allData }) => { // Change `data` prop to `allData`
    if (!allData || allData.length === 0) return <div>No summary data available.</div>;
  
    const latestData = allData[allData.length - 1]; // Assuming you want to display the most recent entry's summary
  
    return (
      <div>
        <h3>Production Summary</h3>
        {/* Display the data in a format of your choice */}
        <p>SKU: {latestData.SKU}</p>
        {/* ... other data points ... */}
      </div>
    );
  };

export default ProductionSummary;
