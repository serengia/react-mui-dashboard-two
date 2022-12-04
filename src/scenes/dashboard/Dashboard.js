import { Box } from "@mui/material";
import React from "react";
import Header from "../../components/Header";

function Dashboard() {
  return (
    <Box sx={{ m: 2 }}>
      <Header title="Dashboard" subtitle="Welcome to your dashboard." />
    </Box>
  );
}

export default Dashboard;
