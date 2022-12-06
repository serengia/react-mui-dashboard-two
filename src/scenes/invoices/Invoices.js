import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { mockDataInvoices } from "../../data/mockData";

function Invoices() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    { field: "phone", headerName: "Phone No.", flex: 1 },
    { field: "date", headerName: "Date" },
  ];

  return (
    <Box>
      <Header title="Invoices" subtitle="Full list of Invoices." />
      <Box m="20px" p="5px" height="75vh">
        <DataGrid rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
}

export default Invoices;
