const express = require('express');
const cors = require('cors');
const productoRoutes = require('./routes/productoRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/api/salud', (req, res) => {
  res.json({ ok: true, mensaje: 'Hola desde Node' });
});

app.use('/api/productos', productoRoutes);

module.exports = app;
