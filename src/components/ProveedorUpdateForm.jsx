import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProveedorUpdateForm = ({ operation }) => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [nit, setNit] = useState("");
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono_contacto, setTelefono] = useState("");
  const [nombre_contacto, setNombreContacto] = useState("");

  const handleSubmit = () => {
    const updatedOperation = {
      ...operation,
      endpoint: `http://localhost:8080/SuperAndes/proveedores/${id}/edit/save`,
      requestBody: {
        nit,
        nombre,
        direccion,
        telefono_contacto: parseInt(telefono_contacto,10),
        nombre_contacto
      }
    };
    navigate("/results", { state: { operation: updatedOperation } });
  };

  return (
    <>
      <TextField
        fullWidth
        label="ID del Proveedor a Actualizar"
        variant="outlined"
        margin="normal"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <TextField
        fullWidth
        label="NIT"
        variant="outlined"
        margin="normal"
        value={nit}
        onChange={(e) => setNit(e.target.value)}
      />
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
        label="Dirección"
        variant="outlined"
        margin="normal"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <TextField
        fullWidth
        label="Teléfono Contacto"
        variant="outlined"
        margin="normal"
        type="number"
        value={telefono_contacto}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <TextField
        fullWidth
        label="Nombre Contacto"
        variant="outlined"
        margin="normal"
        value={nombre_contacto}
        onChange={(e) => setNombreContacto(e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Actualizar Proveedor
      </Button>
    </>
  );
};

export default ProveedorUpdateForm;
