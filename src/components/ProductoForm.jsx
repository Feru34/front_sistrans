import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductoForm = ({ operation }) => {
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [nombre, setNombre] = useState("");
  const [costo_bodega, setCostoBodega] = useState("");
  const [precio_unidad, setPrecioUnidad] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [unidad_medida, setUnidadMedida] = useState("");
  const [especificacion, setEspecificacion] = useState("");
  const [proveedor_id, setProveedorId] = useState("");
  const [categoria_id, setCategoriaId] = useState("");
  const [fecha, setFecha] = useState("");
  const [sucursal_id, setSucursalId] = useState("");

  const handleSubmit = () => {
    const updatedOperation = {
      ...operation,
      requestBody: {
        codigo,
        nombre,
        costo_bodega: parseFloat(costo_bodega),
        precio_unidad: parseFloat(precio_unidad),
        presentacion,
        cantidad,
        unidad_medida,
        especificacion,
        proveedor_id: { id: proveedor_id },
        categoria_id: { id: categoria_id },
        fecha,
        sucursal_id: { id: sucursal_id }
      }
    };

    navigate("/results", { state: { operation: updatedOperation } });
  };

  return (
    <>
      <TextField fullWidth label="Código" variant="outlined" margin="normal" value={codigo} onChange={(e)=>setCodigo(e.target.value)} />
      <TextField fullWidth label="Nombre" variant="outlined" margin="normal" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
      <TextField fullWidth label="Costo Bodega" type="number" variant="outlined" margin="normal" value={costo_bodega} onChange={(e)=>setCostoBodega(e.target.value)} />
      <TextField fullWidth label="Precio Unidad" type="number" variant="outlined" margin="normal" value={precio_unidad} onChange={(e)=>setPrecioUnidad(e.target.value)} />
      <TextField fullWidth label="Presentación" variant="outlined" margin="normal" value={presentacion} onChange={(e)=>setPresentacion(e.target.value)} />
      <TextField fullWidth label="Cantidad" variant="outlined" margin="normal" value={cantidad} onChange={(e)=>setCantidad(e.target.value)} />
      <TextField fullWidth label="Unidad Medida" variant="outlined" margin="normal" value={unidad_medida} onChange={(e)=>setUnidadMedida(e.target.value)} />
      <TextField fullWidth label="Especificación" variant="outlined" margin="normal" value={especificacion} onChange={(e)=>setEspecificacion(e.target.value)} />
      <TextField fullWidth label="Proveedor ID" variant="outlined" margin="normal" value={proveedor_id} onChange={(e)=>setProveedorId(e.target.value)} />
      <TextField fullWidth label="Categoría ID" variant="outlined" margin="normal" value={categoria_id} onChange={(e)=>setCategoriaId(e.target.value)} />
      <TextField fullWidth label="Fecha (YYYY-MM-DD)" variant="outlined" margin="normal" value={fecha} onChange={(e)=>setFecha(e.target.value)} />
      <TextField fullWidth label="Sucursal ID" variant="outlined" margin="normal" value={sucursal_id} onChange={(e)=>setSucursalId(e.target.value)} />

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Crear Producto
      </Button>
    </>
  );
};

export default ProductoForm;
