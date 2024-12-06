import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SucursalForm = ({ operation }) => {
  const navigate = useNavigate();
  
  const [nombre, setNombre] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = () => {
    const updatedOperation = {
      ...operation,
      requestBody: {
        nombre,
        tamanio: parseInt(tamanio, 10),
        direccion,
        telefono: parseInt(telefono, 10)
      }
    };

    navigate("/results", { state: { operation: updatedOperation } });
  };

  return (
    <>
      <TextField
        fullWidth
        label="Nombre"
        variant="outlined"
        margin="normal"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <TextField
        fullWidth
        label="Tamaño"
        type="number"
        variant="outlined"
        margin="normal"
        value={tamanio}
        onChange={(e) => setTamanio(e.target.value)}
      />
      <TextField
        fullWidth
        label="Dirección"
        variant="outlined"
        margin="normal"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <TextField
        fullWidth
        label="Teléfono"
        type="number"
        variant="outlined"
        margin="normal"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Crear Sucursal
      </Button>
    </>
  );
};

export default SucursalForm;
