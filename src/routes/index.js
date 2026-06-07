const { Router } = require('express');
const productRoutes = require('./productRoutes');

const routes = Router();

routes.get('/health', (request, response) => {
  response.json({ status: 'ok' });
});

routes.use('/products', productRoutes);

module.exports = routes;
