import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import api from "../api/api.js";
import DataTable from "../components/DataTable.jsx";

const Client = () => {
  const [clients, setClients] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [rg, setRg] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [obs, setObs] = React.useState("");

  const [requestSuccess, setRequestSuccess] = React.useState(false);


  useEffect(() => {
    async function fetchData(){
      const response = await api.get('/clientes');

      setClients(response.data);
    }

    fetchData();
  }, [clients])

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleRgChange = (event) => {
    setRg(event.target.value);
  };

  const handleCpfChange = (event) => {
    setCpf(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const handleObsChange = (event) => {
    setObs(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newClient = {
      nome: name,
      celular: phone,
      cpf,
      rg,
      email,
      aniversario: birthday,
      endereco,
      observacoes: obs,
    };

    const response = await api.post("/clientes", newClient);

    if (response.status === 201) {
      setRequestSuccess(true);
    } else {
      setRequestSuccess(false);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setRequestSuccess(false);
    setOpen(false);
  };

  return (
    <Box
      component="div"
      sx={{
        m: 10,
      }}
    >
      <Typography variant="h4">Formulário de Cadastros de Clientes</Typography>
      <Container
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          type="text"
          required
          value={name}
          onChange={handleNameChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Celular"
          variant="outlined"
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="CPF"
          variant="outlined"
          type="text"
          value={cpf}
          onChange={handleCpfChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="RG"
          variant="outlined"
          type="text"
          value={rg}
          onChange={handleRgChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="text"
          value={email}
          onChange={handleEmailChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Aniversario"
          variant="outlined"
          type="text"
          value={birthday}
          onChange={handleBirthdayChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Endereco"
          variant="outlined"
          type="text"
          value={endereco}
          onChange={handleEnderecoChange}
          sx={{
            my: 1.5,
          }}
        />
        <TextField
          id="outlined-basic"
          label="Observações"
          variant="outlined"
          type="text"
          value={obs}
          onChange={handleObsChange}
          sx={{
            my: 1.5,
          }}
        />
        <Button variant="contained" type="submit" onClick={handleOpen}>
          Enviar
        </Button>
      </Container>

      {/* {requestSuccess ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Alert severity="success">Cliente Inserido com sucesso!</Alert>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Alert severity="error">This is an error alert — check it out!</Alert>
        </Modal>
      )} */}

      <DataTable clients={clients} setClients={setClients}/>
    </Box>
  );
};

export default Client;
