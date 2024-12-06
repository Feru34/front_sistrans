import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CategoriaForm = ({ operation }) => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [almacenamiento, setAlmacenamiento] = useState("");

  const handleSubmit = () => {
    const updatedOperation = {
      ...operation,
      requestBody: {
        nombre,
        descripcion,
        almacenamiento
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
        label="Descripción"
        variant="outlined"
        margin="normal"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <TextField
        fullWidth
        label="Almacenamiento"
        variant="outlined"
        margin="normal"
        value={almacenamiento}
        onChange={(e) => setAlmacenamiento(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Crear Categoría
      </Button>
    </>
  );
};

export default CategoriaForm;
