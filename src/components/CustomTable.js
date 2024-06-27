// src/components/CustomTable.js
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 150 },
  { field: "age", headerName: "Age", width: 110 },
];

const rows = [
  { id: 1, name: "kushagra shukla", age: 25 },
  { id: 2, name: "sarthak gupta", age: 42 },
  { id: 3, name: "jimmy sheikh", age: 28 },
  { id: 4, name: "salim Ahemad", age: 30 },
  { id: 5, name: "shreekant Ambekar", age: 32 },
];

const Root = styled("div")(({ theme }) => ({
  height: 400,
  width: "100%",
  background: "linear-gradient(to right, #6a11cb, #2575fc)",
  borderRadius: 15,
  padding: 16,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  "& .MuiDataGrid-root": {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background for the grid
    borderRadius: 8,
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#1976d2", // Blue background for headers
    color: "#fff", // White text for headers
    fontSize: 16,
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#155a9c",
    },
  },
  "& .MuiDataGrid-cell": {
    fontSize: 14,
    color: "#333",
    "&:hover": {
      color: "#1976d2",
    },
    transition: "color 0.3s ease-in-out",
  },
  "& .MuiDataGrid-row": {
    "&:nth-of-type(odd)": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)",
    },
    transition: "background-color 0.3s ease-in-out",
  },
}));

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function CustomTable() {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
        />
      </Root>
    </ThemeProvider>
  );
}

export default CustomTable;
