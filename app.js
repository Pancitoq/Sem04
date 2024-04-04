const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido a mi aplicación Express');
});

app.get('/clientes', (req, res) => {
    res.send('Mostrando 3 clientes');
});

app.get('/productos', (req, res) => {
    res.send('Mostrando 3 productos');
});

const PORT = 13500;
app.listen(PORT, () => {
    console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});

