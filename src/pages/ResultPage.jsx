import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, CircularProgress, Card, CardContent, Button } from '@mui/material';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const { operation } = location.state || {};

  useEffect(() => {
    if (operation) {
      setLoading(true);
      const { endpoint, method, requestBody } = operation;

      const fetchData = async () => {
        try {
          let options = { method: method };
          if (requestBody && (method === "POST" || method === "PUT")) {
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify(requestBody);
          }
          const response = await fetch(endpoint, options);
          const data = await response.json().catch(() => null); // Por si la respuesta no es JSON
          setResult(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          setResult({ error: "Ocurrió un error en la consulta" });
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [operation]);

  if (!operation) {
    return (
      <Container sx={{ marginTop: 4 }}>
        <Typography variant="h6">No se seleccionó ninguna operación</Typography>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Volver
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ marginTop: 4 }}>
      <Button variant="outlined" onClick={() => navigate("/")}>Volver</Button>
      <Typography variant="h4" gutterBottom>Resultado de: {operation.name}</Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card>
          <CardContent>
            {result ? (
              <pre>{JSON.stringify(result, null, 2)}</pre>
            ) : (
              <Typography variant="body1">No hay datos para mostrar o la respuesta fue vacía.</Typography>
            )}
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default ResultPage;
