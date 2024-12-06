import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

import SucursalForm from '../components/SucursalForm';
import BodegaCreateForm from '../components/BodegaCreateForm';
import BodegaDeleteForm from '../components/BodegaDeleteForm';
import ProveedorForm from '../components/ProveedorForm';
import ProveedorUpdateForm from '../components/ProveedorUpdateForm';
import CategoriaForm from '../components/CategoriaForm';
import ProductoForm from '../components/ProductoForm';
import OrdenCompraForm from '../components/OrdenCompraForm';
import LeerOrdenForm from '../components/LeerOrdenForm';

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
      case "Actualizar un Proveedor (RF3)":
        return <ProveedorUpdateForm operation={operation} />;
      case "Crear una Categoría Producto (RF4)":
        return <CategoriaForm operation={operation} />;
      case "Crear un Producto (RF5)":
        return <ProductoForm operation={operation} />;
      case "Crear una Orden de Compra (RF6)":
        return <OrdenCompraForm operation={operation} />;
      case "Leer una Orden de Compra (RF7)":
        return <LeerOrdenForm operation={operation} />;
      default:
        return <Typography variant="h6">No hay formulario configurado para esta operación.</Typography>;
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
