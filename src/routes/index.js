const { Router } = require('express');
const authRoutes = require('./authRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const itemRoutes = require('./itemRoutes');
const pedidoRoutes = require('./pedidoRoutes');
const itemPedidoRoutes = require('./itemPedidoRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

const routes = Router();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: Verifica se a API esta online.
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: API em funcionamento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 */
routes.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

routes.use('/auth', authRoutes);
routes.use('/usuarios', authMiddleware, usuarioRoutes);
routes.use('/itens', authMiddleware, itemRoutes);
routes.use('/pedidos', authMiddleware, pedidoRoutes);
routes.use('/itens-pedido', authMiddleware, itemPedidoRoutes);

module.exports = routes;
