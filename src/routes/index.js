const { Router } = require('express');
const authRoutes = require('./authRoutes');
const productRoutes = require('./productRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

const routes = Router();

routes.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

routes.use('/auth', authRoutes);
routes.use('/products', authMiddleware, productRoutes);

module.exports = routes;
