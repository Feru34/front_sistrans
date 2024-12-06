import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActionArea, Grid } from '@mui/material';

const operations = [
  {
    name: "Crear una sucursal (RF1)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/sucursales/new/save",
    requiresInput: true
  },
  {
    name: "Crear una Bodega (RF2)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/bodegas/new/save",
    requiresInput: true
  },
  {
    name: "Borrar una Bodega (RF2)",
    method: "DELETE",
    endpoint: "http://localhost:8080/SuperAndes/bodegas/ID_A_ELIMINAR",
    requiresInput: true
  },
  {
    name: "Crear un Proveedor (RF3)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/proveedores/new/save",
    requiresInput: true
  },
  {
    name: "Actualizar un Proveedor (RF3)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/proveedores/{id}/edit/save",
    requiresInput: true
  },
  {
    name: "Crear una Categoría Producto (RF4)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/categorias/new/save",
    requiresInput: true
  },
  {
    name: "Crear un Producto (RF5)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/productos/new/save",
    requiresInput: true
  },
  {
    name: "Crear una Orden de Compra (RF6)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/ordenes/new/save",
    requiresInput: true
  },
  {
    name: "Leer una Orden de Compra (RF7)",
    method: "GET",
    endpoint: "http://localhost:8080/SuperAndes/ordenes/",
    requiresInput: true
  },
  {
    name: "Mostrar Productos Según Características (RFC1)",
    method: "GET",
    endpoint: "http://localhost:8080/SuperAndes/productos/productosSegunSpecs?precio_min=0&precio_max=100000&fecha=2024/11/14&categoria_id=674be5e74919601a45196336&sucursal_id=674bd732280b802a9e843f2a",
    requiresInput: false
  },
  {
    name: "Inventario de Productos en una Sucursal (RFC2)",
    method: "GET",
    endpoint: "http://localhost:8080/SuperAndes/productos/inventario?sucursal_id=674bf1d0169fe94ca13acaa5",
    requiresInput: false
  }
];

const Home = () => {
  const navigate = useNavigate();

  const handleSelectOperation = (op) => {
    if (op.requiresInput) {
      navigate("/form", { state: { operation: op } });
    } else {
      navigate("/results", { state: { operation: op } });
    }
  };

  return (
    <Container sx={{ marginTop: 4, backgroundColor: "#f9f9f9", padding: 3, borderRadius: 2 }}>
      <Typography variant="h2" gutterBottom sx={{ color: "#2c3e50", textAlign: "center"}}>
        Seleccione la Operación a Realizar
      </Typography>
      <Grid container spacing={2}>
        {operations.map((op, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ backgroundColor: index % 2 === 0 ? "#e3f2fd" : "#ffecb3", borderRadius: 2, boxShadow: 3 }}>
              <CardActionArea onClick={() => handleSelectOperation(op)}>
                <CardContent sx={{ minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="h6" sx={{ color: "#2c3e50" }}>{op.name}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
