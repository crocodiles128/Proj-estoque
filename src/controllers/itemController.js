const { Item } = require('../models');

async function listItems(request, response) {
  const items = await Item.findAll({ order: [['id_item', 'ASC']] });
  return response.json(items);
}

async function getItem(request, response) {
  const item = await Item.findByPk(request.params.id);

  if (!item) {
    return response.status(404).json({ message: 'Item nao encontrado.' });
  }

  return response.json(item);
}

async function createItem(request, response) {
  const { nome_item, descricao_item, quantidade_item, preco_item } = request.body;

  if (!nome_item) {
    return response
      .status(400)
      .json({ message: 'Nome do item é obrigatorio.' });
  }

  const item = await Item.create({
    nome_item,
    descricao_item: descricao_item || null,
    quantidade_item: quantidade_item || 0,
    preco_item: preco_item || 0,
  });

  return response.status(201).json(item);
}

async function updateItem(request, response) {
  const item = await Item.findByPk(request.params.id);

  if (!item) {
    return response.status(404).json({ message: 'Item nao encontrado.' });
  }

  await item.update(request.body);
  return response.json(item);
}

async function deleteItem(request, response) {
  const item = await Item.findByPk(request.params.id);

  if (!item) {
    return response.status(404).json({ message: 'Item nao encontrado.' });
  }

  await item.destroy();
  return response.status(204).send();
}

module.exports = {
  listItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};