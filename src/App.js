import React, { useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [formData, setFormData] = useState({
    date: null,
    sku: "",
    hour: "",
    operationalTime: null,
    actualRunTime: null,
    headCount: null,
    expectedUnits: null,
    actualUnitsProduced: null,
    goodUnitsProduced: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value ? value : null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const sanitizedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        if (["operationalTime", "actualRunTime", "headCount", "expectedUnits", "actualUnitsProduced", "goodUnitsProduced"].includes(key) && value) {
          return [key, parseInt(value, 10)];
        }
        return [key, value === "" ? null : value];
      })
    );
    
    console.log("Sending data to Supabase:", sanitizedData);

    const response = await supabase
      .from('records') 
      .insert([sanitizedData]);

    if (response.status >= 200 && response.status < 300) {
      alert('Record saved!');
      setFormData({
        date: null,
        sku: "",
        hour: "",
        operationalTime: null,
        actualRunTime: null,
        headCount: null,
        expectedUnits: null,
        actualUnitsProduced: null,
        goodUnitsProduced: null
      });
    } else if (response.error) {
      console.error("Supabase Error:", response.error);
      alert('Error saving record: ' + response.error.message);
    } else {
      console.error("Unknown error or response:", response);
      alert('Unknown error occurred.');
    }
  };

  return (
    <div className="App">
      <h1>ProdTrak Entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date || ''} onChange={handleChange} required />
        </div>
        <div>
          <label>SKU:</label>
          <input type="text" name="sku" value={formData.sku} onChange={handleChange} required />
        </div>
        <div>
          <label>Hour:</label>
          <input type="text" name="hour" value={formData.hour} onChange={handleChange} required />
        </div>
        <div>
          <label>Operational Time (mins):</label>
          <input type="number" name="operationalTime" value={formData.operationalTime || ''} onChange={handleChange} required />
        </div>
        <div>
          <label>Actual Run Time (mins):</label>
          <input type="number" name="actualRunTime" value={formData.actualRunTime || ''} onChange={handleChange} required />
        </div>
        <div>
          <label>Head Count:</label>
          <input type="number" name="headCount" value={formData.headCount || ''} onChange={handleChange} required />
        </div>
        <div>
          <label>Expected Units:</label>
          <input type="number" name="expectedUnits" value={formData.expectedUnits || ''} onChange={handleChange} required />
        </div>
        <div>
          <label>Actual Units Produced:</label>
          <input type="number" name="actualUnitsProduced" value={formData.actualUnitsProduced || ''} onChange={handleChange} required />
        </div>
        <div>
          <label>Good Units Produced:</label>
          <input type="number" name="goodUnitsProduced" value={formData.goodUnitsProduced || ''} onChange={handleChange} required />
        </div>
        <button type="submit">Save Record</button>
      </form>
    </div>
  );
}

export default App;
