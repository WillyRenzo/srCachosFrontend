import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import api from "../api/api.js";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "id", headerName: "ID", type: "string", width: 150, hide: true },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "celular", headerName: "Celular", width: 130 },
  { field: "cpf", headerName: "CPF", width: 130 },
  {
    field: "rg",
    headerName: "RG",
    width: 90,
  },
  { field: "email", headerName: "Email", width: 150 },
  { field: "aniversario", headerName: "Aniversario", width: 20 },
  { field: "endereco", headerName: "Endereco", width: 150 },
  { field: "observacoes", headerName: "Observacoes", width: 250 },
];

export default function DataTable({ clients, setClients }) {
  let navigate = useNavigate();

  const [selectedID, setSelectedID] = React.useState("");
  const [rowSelected, setRowSelected] = React.useState({});
  const [searchText, setSearchText] = React.useState("");

  const handleAddClick = (e) => {
    navigate("/cadastros/clientes");
  };
  const handleDeleteClick = async () => {
    await api.delete(`/clientes/${selectedID}`);
  };
  const handleEditClick = (e) => {
    console.log("Clicou para alterar");
  };
  const handleRowClick = (e) => {
    setSelectedID(e.id);
    setRowSelected(e.row);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div style={{ height: 400, width: "80%", margin: "auto", marginTop: 25 }}>
      <DataGrid
        rows={clients}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onCellClick={handleRowClick}
      />
      <div style={{ marginTop: 25 }}>
        <Button variant="text" onClick={handleAddClick}>
          <AddIcon />
        </Button>
        <Button variant="text" onClick={handleDeleteClick}>
          <DeleteIcon />
        </Button>
        <Button variant="text" onClick={handleEditClick}>
          <EditIcon />
        </Button>
        <TextField
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
}
