import React from 'react';

const PreviousReports = ({ allData }) => { // Change `reports` prop to `allData`
    if (!allData || allData.length === 0) return <div>No previous reports available.</div>;
  
    return (
      <div>
        <h3>Previous Reports</h3>
        <ul>
          {allData.map((report, index) => (
            <li key={index}>
              {/* Display the report in a format of your choice */}
              Report from {report.date}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  

export default PreviousReports;
