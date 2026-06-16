const { Router } = require('express');
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middlewares/authMiddleware');

const itemRoutes = Router();

itemRoutes.get('/', authMiddleware, itemController.listItems);
itemRoutes.get('/:id', authMiddleware, itemController.getItem);
itemRoutes.post('/', authMiddleware, itemController.createItem);
itemRoutes.put('/:id', authMiddleware, itemController.updateItem);
itemRoutes.delete('/:id', authMiddleware, itemController.deleteItem);

module.exports = itemRoutes;