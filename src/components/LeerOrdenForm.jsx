import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LeerOrdenForm = ({ operation }) => {
  const navigate = useNavigate();
  const [ordenId, setOrdenId] = useState("");

  const handleSubmit = () => {
    if (!ordenId) return;
    const updatedOperation = {
      ...operation,
      endpoint: `http://localhost:8080/SuperAndes/ordenes/${ordenId}`
    };
    navigate("/results", { state: { operation: updatedOperation } });
  };

  return (
    <>
      <TextField
        fullWidth
        label="ID de la Orden"
        variant="outlined"
        margin="normal"
        value={ordenId}
        onChange={(e) => setOrdenId(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Leer Orden
      </Button>
    </>
  );
};

export default LeerOrdenForm;
