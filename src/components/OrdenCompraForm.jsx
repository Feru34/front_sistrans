import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrdenCompraForm = ({ operation }) => {
  const navigate = useNavigate();
  
  const [estado, setEstado] = useState("");
  // Datos Proveedor
  const [provId, setProvId] = useState("");
  const [provNit, setProvNit] = useState("");
  const [provNombre, setProvNombre] = useState("");
  const [provDireccion, setProvDireccion] = useState("");
  const [provTelefono, setProvTelefono] = useState("");
  const [provContacto, setProvContacto] = useState("");

  // Datos Sucursal
  const [sucNombre, setSucNombre] = useState("");
  const [sucTamanio, setSucTamanio] = useState("");
  const [sucDireccion, setSucDireccion] = useState("");
  const [sucTelefono, setSucTelefono] = useState("");
  const [sucCiudadCodigo, setSucCiudadCodigo] = useState("");
  const [sucCiudadNombre, setSucCiudadNombre] = useState("");

  // Datos Bodega
  const [bodegaId, setBodegaId] = useState("");
  const [bodegaNombre, setBodegaNombre] = useState("");
  const [bodegaTamanio, setBodegaTamanio] = useState("");
  const [bodegaUbicacion, setBodegaUbicacion] = useState("");

  const handleSubmit = () => {
    const updatedOperation = {
      ...operation,
      requestBody: {
        estado,
        proveedor_id: {
          id: provId,
          nit: provNit,
          nombre: provNombre,
          direccion: provDireccion,
          telefono_contacto: parseInt(provTelefono,10),
          nombre_contacto: provContacto
        },
        sucursal_id: {
          nombre: sucNombre,
          tamanio: parseInt(sucTamanio,10),
          direccion: sucDireccion,
          telefono: parseInt(sucTelefono,10),
          ciudad_codigo: {
            codigo: sucCiudadCodigo,
            nombre: sucCiudadNombre
          }
        },
        bodega_id: {
          id: bodegaId,
          nombre: bodegaNombre,
          tamanio: parseInt(bodegaTamanio,10),
          ubicacion: bodegaUbicacion,
          sucursal_nombre: {
            nombre: sucNombre,
            tamanio: parseInt(sucTamanio,10),
            direccion: sucDireccion,
            telefono: parseInt(sucTelefono,10),
            ciudad_codigo: {
                codigo: sucCiudadCodigo,
                nombre: sucCiudadNombre
            }
          }
        }
      }
    };

    navigate("/results", { state: { operation: updatedOperation } });
  };

  return (
    <>
      <TextField fullWidth label="Estado" value={estado} onChange={(e)=>setEstado(e.target.value)} margin="normal"/>

      <Typography variant="h6" sx={{marginTop:2}}>Datos Proveedor</Typography>
      <TextField fullWidth label="Proveedor ID" value={provId} onChange={(e)=>setProvId(e.target.value)} margin="normal"/>
      <TextField fullWidth label="NIT" value={provNit} onChange={(e)=>setProvNit(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Nombre" value={provNombre} onChange={(e)=>setProvNombre(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Dirección" value={provDireccion} onChange={(e)=>setProvDireccion(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Teléfono Contacto" value={provTelefono} onChange={(e)=>setProvTelefono(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Nombre Contacto" value={provContacto} onChange={(e)=>setProvContacto(e.target.value)} margin="normal"/>

      <Typography variant="h6" sx={{marginTop:2}}>Datos Sucursal</Typography>
      <TextField fullWidth label="Sucursal Nombre" value={sucNombre} onChange={(e)=>setSucNombre(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Sucursal Tamaño" value={sucTamanio} onChange={(e)=>setSucTamanio(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Sucursal Dirección" value={sucDireccion} onChange={(e)=>setSucDireccion(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Sucursal Teléfono" value={sucTelefono} onChange={(e)=>setSucTelefono(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Sucursal Ciudad Código" value={sucCiudadCodigo} onChange={(e)=>setSucCiudadCodigo(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Sucursal Ciudad Nombre" value={sucCiudadNombre} onChange={(e)=>setSucCiudadNombre(e.target.value)} margin="normal"/>

      <Typography variant="h6" sx={{marginTop:2}}>Datos Bodega</Typography>
      <TextField fullWidth label="Bodega ID" value={bodegaId} onChange={(e)=>setBodegaId(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Bodega Nombre" value={bodegaNombre} onChange={(e)=>setBodegaNombre(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Bodega Tamaño" value={bodegaTamanio} onChange={(e)=>setBodegaTamanio(e.target.value)} margin="normal"/>
      <TextField fullWidth label="Bodega Ubicación" value={bodegaUbicacion} onChange={(e)=>setBodegaUbicacion(e.target.value)} margin="normal"/>

      <Button variant="contained" color="primary" sx={{marginTop:2}} onClick={handleSubmit}>
        Crear Orden de Compra
      </Button>
    </>
  );
};

export default OrdenCompraForm;
