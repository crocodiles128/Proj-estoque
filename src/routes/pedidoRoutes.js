const { Router } = require('express');
const pedidoController = require('../controllers/pedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

const pedidoRoutes = Router();

pedidoRoutes.get('/', authMiddleware, pedidoController.listPedidos);
pedidoRoutes.get('/:id', authMiddleware, pedidoController.getPedido);
pedidoRoutes.post('/', authMiddleware, pedidoController.createPedido);
pedidoRoutes.put('/:id', authMiddleware, pedidoController.updatePedido);
pedidoRoutes.delete('/:id', authMiddleware, pedidoController.deletePedido);

module.exports = pedidoRoutes;