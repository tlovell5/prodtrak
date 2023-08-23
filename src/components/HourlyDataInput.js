import React from 'react';

const HourlyDataInput = ({ data, setData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: Number(value)
    }));
  };

  return (
    <div>
      <div>
        <label>SKU:</label>
        <input type="text" name="sku" onChange={handleInputChange} />
      </div>
      <div>
        <label>Operational Time:</label>
        <input type="number" name="operationalTime" onChange={handleInputChange} />
      </div>
      <div>
        <label>Actual Run Time:</label>
        <input type="number" name="actualRunTime" onChange={handleInputChange} />
      </div>
      <div>
        <label>Head Count:</label>
        <input type="number" name="headCount" onChange={handleInputChange} />
      </div>
      <div>
        <label>Expected Units:</label>
        <input type="number" name="expectedUnits" onChange={handleInputChange} />
      </div>
      <div>
        <label>Actual Units Produced:</label>
        <input type="number" name="actualUnitsProduced" onChange={handleInputChange} />
      </div>
      <div>
        <label>Good Units Produced:</label>
        <input type="number" name="goodUnitsProduced" onChange={handleInputChange} />
      </div>
    </div>
  );
};

export default HourlyDataInput;
