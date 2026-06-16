const { Router } = require('express');
const authRoutes = require('./authRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const itemRoutes = require('./itemRoutes');
const pedidoRoutes = require('./pedidoRoutes');
const itemPedidoRoutes = require('./itemPedidoRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

const routes = Router();

routes.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

routes.use('/auth', authRoutes);
routes.use('/usuarios', authMiddleware, usuarioRoutes);
routes.use('/itens', authMiddleware, itemRoutes);
routes.use('/pedidos', authMiddleware, pedidoRoutes);
routes.use('/itens-pedido', authMiddleware, itemPedidoRoutes);

module.exports = routes;
