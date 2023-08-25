import React, { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Sidebar from "./Sidebar";
import DataEntryForm from "./DataEntryForm";
import DataTables from "./DataTables";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("Data Entry");

  // New state for storing fetched records
  const [records, setRecords] = useState([]);

  const [formData, setFormData] = useState({
    date: null,
    selectLine: "",
    sku: "",
    hour: "",
    operationalTime: null,
    actualRunTime: null,
    headCount: null,
    expectedUnits: null,
    actualUnitsProduced: null,
    goodUnitsProduced: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value ? value : null }));
  };

  const calculateMetrics = () => {
    const actualRunTimeHours = formData.actualRunTime / 60;
    const TPH = formData.actualUnitsProduced / actualRunTimeHours;
    const Availability = formData.actualRunTime / formData.operationalTime;
    const Performance = formData.actualUnitsProduced / formData.expectedUnits;
    const Quality = formData.goodUnitsProduced / formData.actualUnitsProduced;
    const OEE = Availability * Performance * Quality;

    return {
      TPH,
      Availability,
      Performance,
      Quality,
      OEE,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedData = Object.fromEntries(
      Object.entries(formData).map(([key, value]) => {
        if (
          [
            "operationalTime",
            "actualRunTime",
            "headCount",
            "expectedUnits",
            "actualUnitsProduced",
            "goodUnitsProduced",
          ].includes(key) &&
          value
        ) {
          return [key, parseInt(value, 10)];
        }
        return [key, value === "" ? null : value];
      })
    );

    const metrics = calculateMetrics();
    const dataToSend = { ...sanitizedData, ...metrics };

    const response = await supabase.from("records").insert([dataToSend]);

    if (response.status >= 200 && response.status < 300) {
      alert("Record saved!");
      setFormData({
        date: null,
        sku: "",
        hour: "",
        operationalTime: null,
        actualRunTime: null,
        headCount: null,
        expectedUnits: null,
        actualUnitsProduced: null,
        goodUnitsProduced: null,
      });
    } else if (response.error) {
      alert("Error saving record: " + response.error.message);
    } else {
      alert("Unknown error occurred.");
    }
  };

  // Function to fetch records for the DataTables page
  const fetchRecords = async () => {
    const { data, error } = await supabase.from("records").select("*");
    if (data) {
      setRecords(data);
    } else if (error) {
      console.error("Error fetching records:", error);
      alert("Error fetching records: " + error.message);
    }
  };

  // UseEffect to fetch records when DataTables page is active
  useEffect(() => {
    if (currentPage === "Data Tables") {
      fetchRecords();
    }
  }, [currentPage]);

  return (
    <div className="App">
      <Sidebar setCurrentPage={setCurrentPage} />

      <div className="content">
        {currentPage === "Data Entry" && (
          <>
            <h1>ProdTrak Entry</h1>
            <DataEntryForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </>
        )}
        {currentPage === "Data Tables" && <DataTables records={records} />}
      </div>
    </div>
  );
}

export default App;
