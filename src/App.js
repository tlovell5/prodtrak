import React, { useState } from 'react';
import HourlyDataInput from './components/HourlyDataInput';
import MetricsCalculator from './components/MetricsCalculator';
import ProductionSummary from './components/ProductionSummary';
import PreviousReports from './components/PreviousReports';
import ProductionLineSelector from './components/ProductionLineSelector';

function App() {
  const [productionLine, setProductionLine] = useState("");
  const [data, setData] = useState({
    sku: "",
    operationalTime: 0,
    actualRunTime: 0,
    headCount: 0,
    expectedUnits: 0,
    actualUnitsProduced: 0,
    goodUnitsProduced: 0,
  });

  return (
    <div className="App">
      <ProductionLineSelector setProductionLine={setProductionLine} />
      <HourlyDataInput data={data} setData={setData} />
      <MetricsCalculator data={data} />
      <ProductionSummary data={data} />
      {/* You will need to pass the reports as a prop to PreviousReports. For now, I'm just passing an empty array */}
      <PreviousReports reports={[]} />
    </div>
  );
}

export default App;
