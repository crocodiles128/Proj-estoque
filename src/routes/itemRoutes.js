const { Router } = require('express');
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middlewares/authMiddleware');

const itemRoutes = Router();

/**
 * @swagger
 * /itens:
 *   get:
 *     summary: Lista todos os itens.
 *     tags:
 *       - Itens
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de itens.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
itemRoutes.get('/', authMiddleware, itemController.listItems);

/**
 * @swagger
 * /itens/{id}:
 *   get:
 *     summary: Busca um item pelo ID.
 *     tags:
 *       - Itens
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item.
 *     responses:
 *       200:
 *         description: Item encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemRoutes.get('/:id', authMiddleware, itemController.getItem);

/**
 * @swagger
 * /itens:
 *   post:
 *     summary: Cria um item.
 *     tags:
 *       - Itens
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemRequest'
 *     responses:
 *       201:
 *         description: Item criado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       400:
 *         description: Dados obrigatorios ausentes.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemRoutes.post('/', authMiddleware, itemController.createItem);

/**
 * @swagger
 * /itens/{id}:
 *   put:
 *     summary: Atualiza um item.
 *     tags:
 *       - Itens
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ItemRequest'
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemRoutes.put('/:id', authMiddleware, itemController.updateItem);

/**
 * @swagger
 * /itens/{id}:
 *   delete:
 *     summary: Remove um item.
 *     tags:
 *       - Itens
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do item.
 *     responses:
 *       204:
 *         description: Item removido com sucesso.
 *       404:
 *         description: Item nao encontrado.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
itemRoutes.delete('/:id', authMiddleware, itemController.deleteItem);

module.exports = itemRoutes;
