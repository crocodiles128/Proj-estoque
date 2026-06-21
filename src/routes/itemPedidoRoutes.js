const { Router } = require('express');
const itemPedidoController = require('../controllers/itemPedidoController');
const authMiddleware = require('../middlewares/authMiddleware');

const itemPedidoRoutes = Router();

/**
 * @swagger
 * /itens-pedido:
 *   get:
 *     summary: Lista os itens vinculados aos pedidos.
 *     tags:
 *       - Itens do Pedido
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de itens de pedido.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ItemPedido'
 */
itemPedidoRoutes.get('/', authMiddleware, itemPedidoController.listItensPedido);

/**
 * @swagger
 * /itens-pedido/{id_pedido}/{id_item}:
 *   get:
 *     summary: Busca um item de pedido pela chave composta.
 *     tags:
 *       - Itens do Pedido
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido.
 *       - in: path
 *         name: id_item
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item.
 *     responses:
 *       200:
 *         description: Item de pedido encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ItemPedido'
 *       404:
 *         description: Item do pedido nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemPedidoRoutes.get('/:id_pedido/:id_item', authMiddleware, itemPedidoController.getItemPedido);

/**
 * @swagger
 * /itens-pedido:
 *   post:
 *     summary: Vincula um item a um pedido.
 *     tags:
 *       - Itens do Pedido
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemPedidoRequest'
 *     responses:
 *       201:
 *         description: Item vinculado ao pedido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ItemPedido'
 *       400:
 *         description: Dados obrigatorios ausentes ou referencias invalidas.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       409:
 *         description: Item ja vinculado ao pedido.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemPedidoRoutes.post('/', authMiddleware, itemPedidoController.createItemPedido);

/**
 * @swagger
 * /itens-pedido/{id_pedido}/{id_item}:
 *   put:
 *     summary: Atualiza um item vinculado a um pedido.
 *     tags:
 *       - Itens do Pedido
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido.
 *       - in: path
 *         name: id_item
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantidade_produto:
 *                 type: integer
 *                 example: 3
 *               valor_unitario:
 *                 type: number
 *                 format: float
 *                 example: 79.9
 *     responses:
 *       200:
 *         description: Item de pedido atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ItemPedido'
 *       404:
 *         description: Item do pedido nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemPedidoRoutes.put('/:id_pedido/:id_item', authMiddleware, itemPedidoController.updateItemPedido);

/**
 * @swagger
 * /itens-pedido/{id_pedido}/{id_item}:
 *   delete:
 *     summary: Remove um item vinculado a um pedido.
 *     tags:
 *       - Itens do Pedido
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id_pedido
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do pedido.
 *       - in: path
 *         name: id_item
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item.
 *     responses:
 *       204:
 *         description: Item removido do pedido com sucesso.
 *       404:
 *         description: Item do pedido nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemPedidoRoutes.delete('/:id_pedido/:id_item', authMiddleware, itemPedidoController.deleteItemPedido);

module.exports = itemPedidoRoutes;
