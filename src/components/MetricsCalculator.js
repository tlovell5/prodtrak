import React from 'react';

function MetricsCalculator({ hourlyData }) {
  // Safety check for hourlyData
  if (!hourlyData) {
    return <div>No data provided.</div>;
  }

  // Extracting values from hourlyData
  const {
    actualUnitsProduced,
    headCount,
    actualRunTime,
    operationalTime,
    expectedUnits,
    goodUnitsProduced,
  } = hourlyData;

  // Calculations
  const TPH = actualUnitsProduced / headCount || 0;
  const availability = (actualRunTime / operationalTime) || 0;
  const performance = (actualUnitsProduced / expectedUnits) || 0;
  const quality = (goodUnitsProduced / actualUnitsProduced) || 0;
  const OEE = availability * performance * quality;

  return (
    <div>
      <p>TPH: {TPH}</p>
      <p>Availability: {availability * 100} %</p>
      <p>Performance: {performance * 100} %</p>
      <p>Quality: {quality * 100} %</p>
      <p>OEE: {OEE * 100} %</p>
    </div>
  );
}

export default MetricsCalculator;
