import React from "react";

function DataEntryForm({ formData, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Select Line:</label>
        <select
          name="selectLine"
          value={formData.selectLine}
          onChange={handleChange}
          required
        >
          <option value="Sweetener Line 1">Sweetener Line 1</option>
          <option value="Sweetener Line 2">Sweetener Line 2</option>
          <option value="Non Allergen Mix">Non Allergen Mix</option>
          <option value="Allergen Mix">Allergen Mix</option>
          <option value="Handfill 1">Handfill 1</option>
          <option value="Handfill 2">Handfill 2</option>
        </select>
      </div>

      <div>
        <label>SKU:</label>
        <input
          type="text"
          name="sku"
          value={formData.sku}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Hour:</label>
        <input
          type="text"
          name="hour"
          value={formData.hour}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Operational Time (mins):</label>
        <input
          type="number"
          name="operationalTime"
          value={formData.operationalTime || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Actual Run Time (mins):</label>
        <input
          type="number"
          name="actualRunTime"
          value={formData.actualRunTime || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Head Count:</label>
        <input
          type="number"
          name="headCount"
          value={formData.headCount || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Expected Units:</label>
        <input
          type="number"
          name="expectedUnits"
          value={formData.expectedUnits || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Actual Units Produced:</label>
        <input
          type="number"
          name="actualUnitsProduced"
          value={formData.actualUnitsProduced || ""}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Good Units Produced:</label>
        <input
          type="number"
          name="goodUnitsProduced"
          value={formData.goodUnitsProduced || ""}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Save Record</button>
    </form>
  );
}

export default DataEntryForm;
