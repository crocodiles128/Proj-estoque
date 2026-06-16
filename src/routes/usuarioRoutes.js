const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

const usuarioRoutes = Router();

usuarioRoutes.get('/', authMiddleware, usuarioController.listUsuarios);
usuarioRoutes.get('/:id', authMiddleware, usuarioController.getUsuario);
usuarioRoutes.post('/', authMiddleware, usuarioController.createUsuario);
usuarioRoutes.put('/:id', authMiddleware, usuarioController.updateUsuario);
usuarioRoutes.delete('/:id', authMiddleware, usuarioController.deleteUsuario);

module.exports = usuarioRoutes;