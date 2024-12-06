import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BodegaDeleteForm = ({ operation }) => {
  const navigate = useNavigate();
  const [bodegas, setBodegas] = useState([]);
  const [selectedBodega, setSelectedBodega] = useState("");

  useEffect(() => {
    // Obtener la lista de bodegas
    const fetchBodegas = async () => {
      try {
        const res = await fetch("http://localhost:8080/SuperAndes/bodegas"); // Ajustar endpoint según tu API
        const data = await res.json();
        setBodegas(data);
      } catch (error) {
        console.error("Error al obtener bodegas:", error);
      }
    };

    fetchBodegas();
  }, []);

  const handleDelete = () => {
    if (!selectedBodega) return;
    const updatedOperation = {
      ...operation,
      endpoint: `http://localhost:8080/SuperAndes/bodegas/${selectedBodega}`,
      requestBody: null
    };

    navigate("/results", { state: { operation: updatedOperation } });
  };

  return (
    <>
      <FormControl fullWidth margin="normal">
        <InputLabel id="bodega-select-label">Seleccione la Bodega a Eliminar</InputLabel>
        <Select
          labelId="bodega-select-label"
          value={selectedBodega}
          label="Seleccione la Bodega a Eliminar"
          onChange={(e) => setSelectedBodega(e.target.value)}
        >
          {bodegas.map((b) => (
            <MenuItem key={b.id} value={b.id}>
              {b.nombre} - {b.id}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="error" onClick={handleDelete} disabled={!selectedBodega}>
        Borrar Bodega
      </Button>
    </>
  );
};

export default BodegaDeleteForm;
