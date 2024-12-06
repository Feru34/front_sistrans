import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BodegaCreateForm = ({ operation }) => {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [sucursalId, setSucursalId] = useState("");

  const handleSubmit = () => {
    const updatedOperation = {
      ...operation,
      requestBody: {
        nombre,
        tamanio: parseInt(tamanio, 10),
        ubicacion,
        sucursal_id: { id: sucursalId }
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
        label="Ubicación"
        variant="outlined"
        margin="normal"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
      />
      <TextField
        fullWidth
        label="ID de la Sucursal"
        variant="outlined"
        margin="normal"
        value={sucursalId}
        onChange={(e) => setSucursalId(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Crear Bodega
      </Button>
    </>
  );
};

export default BodegaCreateForm;
