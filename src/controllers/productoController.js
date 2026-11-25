const Producto = require('../models/Producto');

const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: 'Error interno' });
  }
};

const crearProducto = async (req, res) => {
  try {
    const nuevo = await Producto.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { obtenerProductos, crearProducto };
