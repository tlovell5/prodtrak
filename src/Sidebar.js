import React from "react";
import logo from "./prodtraklogo.png"; // Importing the logo

function Sidebar({ setCurrentPage }) {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="ProdTrak Logo" className="sidebar-logo" />
      </div>
      <ul>
        <li onClick={() => setCurrentPage("Data Entry")}>Data Entry</li>
        <li onClick={() => setCurrentPage("Data Tables")}>Data Tables</li>
        {/* Add more li elements as you add more pages */}
      </ul>
    </div>
  );
}

export default Sidebar;
