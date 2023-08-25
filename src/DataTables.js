import React, { useState } from "react";

function DataTables({ records }) {
  const [dateFilter, setDateFilter] = useState("");
  const [lineFilter, setLineFilter] = useState("");
  const [skuFilter, setSkuFilter] = useState("");
  const [hourFilter, setHourFilter] = useState("");

  const filteredRecords = records.filter((record) => {
    return (
      (dateFilter ? record.date === dateFilter : true) &&
      (lineFilter ? record.selectLine.includes(lineFilter) : true) &&
      (skuFilter ? record.sku.includes(skuFilter) : true) &&
      (hourFilter ? record.hour.includes(hourFilter) : true)
    );
  });

  return (
    <div>
      <h1>Data Tables</h1>
      <table>
        <thead>
          <tr>
            <td>
              <input
                type="date"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Filter Line"
                value={lineFilter}
                onChange={(e) => setLineFilter(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Filter SKU"
                value={skuFilter}
                onChange={(e) => setSkuFilter(e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Filter Hour"
                value={hourFilter}
                onChange={(e) => setHourFilter(e.target.value)}
              />
            </td>
            {/* Remaining filter inputs */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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
            <th>TPH</th>
            <th>Availability (%)</th>
            <th>Performance (%)</th>
            <th>Quality (%)</th>
            <th>OEE (%)</th>
          </tr>
        </thead>
        <tbody>
          {filteredRecords.map((record, index) => (
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
              <td>{parseFloat(record.TPH).toFixed(1)}</td>
              <td>{(record.Availability * 100).toFixed(1)}%</td>
              <td>{(record.Performance * 100).toFixed(1)}%</td>
              <td>{(record.Quality * 100).toFixed(1)}%</td>
              <td>{(record.OEE * 100).toFixed(1)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTables;
