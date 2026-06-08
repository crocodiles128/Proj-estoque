const { Router } = require('express');
const productController = require('../controllers/productController');

const productRoutes = Router();

productRoutes.get('/', productController.listProducts);
productRoutes.get('/:id', productController.getProduct);
productRoutes.post('/', productController.createProduct);
productRoutes.put('/:id', productController.updateProduct);
productRoutes.delete('/:id', productController.deleteProduct);

module.exports = productRoutes;
