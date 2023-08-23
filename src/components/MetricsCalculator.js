import React from 'react';

const MetricsCalculator = ({ data }) => {
  let TPH, availability, performance, quality, OEE;

  try {
    TPH = data.headCount !== 0 ? data.actualUnitsProduced / data.headCount : 0;
    availability = data.actualRunTime / data.operationalTime || 0;
    performance = data.expectedUnits !== 0 ? data.actualUnitsProduced / data.expectedUnits : 0;
    quality = data.actualUnitsProduced !== 0 ? data.goodUnitsProduced / data.actualUnitsProduced : 0;
    OEE = availability * performance * quality;
  } catch (error) {
    console.error("Error in calculations:", error);
  }

  return (
    <div>
      <p>TPH (Units per Person per Hour): {TPH}</p>
      <p>Availability: {availability}</p>
      <p>Performance: {performance}</p>
      <p>Quality: {quality}</p>
      <p>OEE: {OEE}</p>
    </div>
  );
};

export default MetricsCalculator;
