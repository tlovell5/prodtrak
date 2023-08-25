import React from "react";

function DataTables({ records }) {
  return (
    <div>
      <h1>Data Tables</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Line</th>
            <th>SKU</th>
            <th>Hour</th>
            <th>Operational Time</th>
            <th>Actual Run Time</th>
            <th>Head Count</th>
            <th>Expected Units</th>
            <th>Actual Units Produced</th>
            <th>Good Units</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.selectLine}</td>
              <td>{record.sku}</td>
              <td>{record.hour}</td>
              <td>{record.operationalTime}</td>
              <td>{record.actualRunTime}</td>
              <td>{record.headCount}</td>
              <td>{record.expectedUnits}</td>
              <td>{record.actualUnitsProduced}</td>
              <td>{record.goodUnitsProduced}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTables;
