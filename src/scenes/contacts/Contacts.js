import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

function Contacts() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      align: "left",
      headerAlign: "left",
    },
    { field: "phone", headerName: "Phone No." },
    { field: "address", headerName: "Address" },
    { field: "city", headerName: "City" },
    { field: "zipCode", headerName: "Zip Code" },
    { field: "registrarId", headerName: "Registrar ID" },
  ];

  return (
    <Box>
      <Header title="Contact List" subtitle="A full list of users." />
      <Box m="20px" p="5px" height="75vh">
        <DataGrid rows={mockDataContacts} columns={columns} />
      </Box>
    </Box>
  );
}

export default Contacts;
