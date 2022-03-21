import { Box, Container, TextField, Button, Typography } from "@mui/material";
import React from "react";
import api from '../api/api.js';

const Client = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [rg, setRg] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [birthday, setBirthday] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const [obs, setObs] = React.useState("");

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
      observacoes: obs
    };

    const response = await api.post('/clientes', newClient);

    console.log('====================================');
    console.log(response);
    console.log('====================================');
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
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </Container>
    </Box>
  );
};

export default Client;
