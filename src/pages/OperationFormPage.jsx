import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

import SucursalForm from '../components/SucursalForm';
import BodegaCreateForm from '../components/BodegaCreateForm';
import BodegaDeleteForm from '../components/BodegaDeleteForm';
import ProveedorForm from '../components/ProveedorForm';
// Podrías crear ProductFilterForm e InventoryForm si quieres pedir parámetros, por ahora no se requieren

const OperationFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { operation } = location.state || {};

  if (!operation) {
    return (
      <Container sx={{marginTop:4}}>
        <Typography variant="h6">No se seleccionó ninguna operación</Typography>
        <Button variant="outlined" onClick={() => navigate("/")}>Volver</Button>
      </Container>
    );
  }

  const renderForm = () => {
    switch(operation.name) {
      case "Crear una sucursal (RF1)":
        return <SucursalForm operation={operation} />;
      case "Crear una Bodega (RF2)":
        return <BodegaCreateForm operation={operation} />;
      case "Borrar una Bodega (RF2)":
        return <BodegaDeleteForm operation={operation} />;
      case "Crear un Proveedor (RF3)":
        return <ProveedorForm operation={operation} />;
      // Si quisieras pedir filtros en RFC1 o RFC2, aquí renderizas otro form
      default:
        return (
          <Typography variant="h6">
            Esta operación no requiere datos adicionales.
          </Typography>
        );
    }
  }

  return (
    <Container sx={{ marginTop:4 }}>
      <Button variant="outlined" onClick={() => navigate("/")}>Volver</Button>
      <Typography variant="h4" gutterBottom>Formulario para: {operation.name}</Typography>
      {renderForm()}
    </Container>
  );
};

export default OperationFormPage;
