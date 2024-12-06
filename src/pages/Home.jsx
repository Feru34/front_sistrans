import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardActionArea, Grid } from '@mui/material';

const operations = [
  {
    name: "Crear una sucursal (RF1)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/sucursales/new/save",
    requestBody: {
      nombre: "Sucursal La Calera",
      tamanio: 300,
      direccion: "Av. Principal 123",
      telefono: 3201234567
    }
  },
  {
    name: "Crear una Bodega (RF2)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/bodegas/new/save",
    requestBody: {
      nombre: "Bodega Tercera",
      tamanio: 200,
      ubicacion: "Av. Principal 123",
      sucursal_id: {
        id: "674be8ab4919601a4519633d"
      }
    }
  },
  {
    name: "Borrar una Bodega (RF2)",
    method: "DELETE",
    endpoint: "http://localhost:8080/SuperAndes/bodegas/ID_A_ELIMINAR",
    requestBody: null
  },
  {
    name: "Crear un Proveedor (RF3)",
    method: "POST",
    endpoint: "http://localhost:8080/SuperAndes/proveedores/new/save",
    requestBody: {
      nit: "900123498",
      nombre: "Proveedor 4 S.A.",
      direccion: "Calle 123.5 #45-67",
      telefono_contacto: 3201234532,
      nombre_contacto: "Carlos Alcaraz"
    }
  },
  {
    name: "Mostrar Productos Según Características (RFC1)",
    method: "GET",
    endpoint: "http://localhost:8080/SuperAndes/productos/productosSegunSpecs?precio_min=0&precio_max=100000&fecha=2024/11/14&categoria_id=674be5e74919601a45196336&sucursal_id=674bd732280b802a9e843f2a",
    requestBody: null
  },
  {
    name: "Inventario de Productos en una Sucursal (RFC2)",
    method: "GET",
    endpoint: "http://localhost:8080/SuperAndes/productos/inventario?sucursal_id=674bf1d0169fe94ca13acaa5",
    requestBody: null
  }
];

const Home = () => {
  const [selectedOperation, setSelectedOperation] = useState(null);
  const navigate = useNavigate();

  const handleSelectOperation = (op) => {
    setSelectedOperation(op);
    navigate("/results", { state: { operation: op } });
  };

  return (
    <Container sx={{ marginTop: 4, backgroundColor: "#f9f9f9", padding: 3, borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#2c3e50", textAlign: "center" }}>
        Seleccione la Operación a Realizar
      </Typography>
      <Grid container spacing={2}>
        {operations.map((op, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ backgroundColor: index % 2 === 0 ? "#e3f2fd" : "#ffecb3", borderRadius: 2, boxShadow: 3 }}>
              <CardActionArea onClick={() => handleSelectOperation(op)}>
                <CardContent sx={{ minHeight: 120, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <Typography variant="h6" sx={{ color: "#2c3e50" }}>{op.name}</Typography>
                  <Typography variant="body2" sx={{ color: "#616161" }}>{op.method} - {op.endpoint}</Typography>
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
