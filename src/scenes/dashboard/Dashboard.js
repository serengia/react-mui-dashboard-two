import React from "react";
import { useProSidebar } from "react-pro-sidebar";

function Dashboard() {
  const { collapseSidebar } = useProSidebar();

  return (
    <div>
      <button onClick={() => collapseSidebar()}>Collapse</button>
      <h3>Dashboard</h3>
    </div>
  );
}

export default Dashboard;
