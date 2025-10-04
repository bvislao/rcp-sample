// Importar dependencias
const express = require('express');
const app = express();
const port = 3000; // puedes cambiar el puerto si lo deseas

// Endpoint Hola Mundo
app.get('/hola', (req, res) => {
  res.send('Hola Mundo');
});

// Endpoint para sumar dos valores
app.get('/sumar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Por favor envía dos números válidos en los parámetros a y b' });
  }

  const resultado = a + b;
  res.json({ resultado });
});

// Endpoint para restar dos valores
app.get('/restar', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Por favor envía dos números válidos en los parámetros a y b' });
  }

  const resultado = a - b;
  res.json({ resultado });
});


// Endpoint para multiplicar N valores
app.get('/multiplicar',(req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Por favor envía dos números válidos en los parámetros a y b' });
  }

  const resultado = a * b;
  res.json({ resultado });
});


// Endpoint para dividir N valores
app.get('/dividir',(req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Por favor envía dos números válidos en los parámetros a y b' });
  }

  const resultado = a * b;
  res.json({ resultado });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});