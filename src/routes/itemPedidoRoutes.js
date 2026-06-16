const { Router } = require('express');
const itemPedidoController = require('../controllers/itemPedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

const itemPedidoRoutes = Router();

itemPedidoRoutes.get('/', authMiddleware, itemPedidoController.listItensPedido);
itemPedidoRoutes.get('/:id_pedido/:id_item', authMiddleware, itemPedidoController.getItemPedido);
itemPedidoRoutes.post('/', authMiddleware, itemPedidoController.createItemPedido);
itemPedidoRoutes.put('/:id_pedido/:id_item', authMiddleware, itemPedidoController.updateItemPedido);
itemPedidoRoutes.delete('/:id_pedido/:id_item', authMiddleware, itemPedidoController.deleteItemPedido);

module.exports = itemPedidoRoutes;