const { Product } = require('../models');

async function listProducts(request, response) {
  const products = await Product.findAll({ order: [['id', 'ASC']] });
  return response.json(products);
}

async function getProduct(request, response) {
  const product = await Product.findByPk(request.params.id);

  if (!product) {
    return response.status(404).json({ message: 'Produto nao encontrado.' });
  }

  return response.json(product);
}

async function createProduct(request, response) {
  const product = await Product.create(request.body);
  return response.status(201).json(product);
}

async function updateProduct(request, response) {
  const product = await Product.findByPk(request.params.id);

  if (!product) {
    return response.status(404).json({ message: 'Produto nao encontrado.' });
  }

  await product.update(request.body);
  return response.json(product);
}

async function deleteProduct(request, response) {
  const product = await Product.findByPk(request.params.id);

  if (!product) {
    return response.status(404).json({ message: 'Produto nao encontrado.' });
  }

  await product.destroy();
  return response.status(204).send();
}

module.exports = {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
