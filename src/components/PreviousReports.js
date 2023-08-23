import React from 'react';

const PreviousReports = ({ reports }) => {
  return (
    <div>
      <h3>Previous Reports</h3>
      <ul>
        {reports.map((report, index) => (
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
