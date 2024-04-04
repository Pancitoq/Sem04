const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

app.get('/clientes', (req, res) => {
  const clientes = ['Ragde', 'Luis', 'Melendez'];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Gaeeosa', 'Galleta', 'Chicle'];
  res.json(productos);
});

const PORT = 13500;
app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});
