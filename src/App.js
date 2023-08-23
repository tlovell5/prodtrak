import React, { useState } from 'react';
import HourlyDataInput from './components/HourlyDataInput';
import MetricsCalculator from './components/MetricsCalculator';
import ProductionSummary from './components/ProductionSummary';
import PreviousReports from './components/PreviousReports';
import ProductionLineSelector from './components/ProductionLineSelector';
import './App.css';

function App() {
  const [selectedLine, setSelectedLine] = useState(null);
  const [hourlyData, setHourlyData] = useState(null);
  const [allData, setAllData] = useState([]); // To collect all hourly data

  const handleHourlyDataSubmit = (data) => {
    setHourlyData(data);
    setAllData(prevData => [...prevData, data]);
  };

  return (
    <div className="App">
      <h1>Production Tracker</h1>
      
      <ProductionLineSelector onSelectLine={setSelectedLine} />
      
      {selectedLine && (
        <div>
          <h2>Selected Line: {selectedLine}</h2>
          <HourlyDataInput onDataSubmit={handleHourlyDataSubmit} />
          <MetricsCalculator hourlyData={hourlyData} />
          <ProductionSummary allData={allData} />
          <PreviousReports allData={allData} />
        </div>
      )}
    </div>
  );
}

export default App;
