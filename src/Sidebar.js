import React from "react";

function Sidebar({ setCurrentPage }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setCurrentPage("Data Entry")}>Data Entry</li>
        <li onClick={() => setCurrentPage("Data Tables")}>Data Tables</li>
        {/* Add more li elements as you add more pages */}
      </ul>
    </div>
  );
}

export default Sidebar;
