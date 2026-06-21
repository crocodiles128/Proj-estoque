const { Router } = require('express');
const pedidoController = require('../controllers/pedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

const pedidoRoutes = Router();

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Lista todos os pedidos.
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pedido'
 */
pedidoRoutes.get('/', authMiddleware, pedidoController.listPedidos);

/**
 * @swagger
 * /pedidos/{id}:
 *   get:
 *     summary: Busca um pedido pelo ID.
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido.
 *     responses:
 *       200:
 *         description: Pedido encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       404:
 *         description: Pedido nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
pedidoRoutes.get('/:id', authMiddleware, pedidoController.getPedido);

/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Cria um pedido.
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoRequest'
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       400:
 *         description: Dados obrigatorios ausentes ou referencias invalidas.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
pedidoRoutes.post('/', authMiddleware, pedidoController.createPedido);

/**
 * @swagger
 * /pedidos/{id}:
 *   put:
 *     summary: Atualiza um pedido.
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PedidoRequest'
 *     responses:
 *       200:
 *         description: Pedido atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pedido'
 *       400:
 *         description: Referencia invalida.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Pedido nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
pedidoRoutes.put('/:id', authMiddleware, pedidoController.updatePedido);

/**
 * @swagger
 * /pedidos/{id}:
 *   delete:
 *     summary: Remove um pedido.
 *     tags:
 *       - Pedidos
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido.
 *     responses:
 *       204:
 *         description: Pedido removido com sucesso.
 *       404:
 *         description: Pedido nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
pedidoRoutes.delete('/:id', authMiddleware, pedidoController.deletePedido);

module.exports = pedidoRoutes;
