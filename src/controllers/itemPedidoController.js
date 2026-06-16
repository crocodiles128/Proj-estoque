const { ItemPedido, Pedido, Item } = require('../models');
const sequelize = require('../database/connection');

async function listItensPedido(request, response) {
  const itensPedido = await ItemPedido.findAll({
    order: [['id_pedido', 'ASC'], ['id_item', 'ASC']],
    include: [
      { model: Pedido, attributes: ['id_pedido', 'data_pedido', 'preco_total'] },
      { model: Item, attributes: ['id_item', 'nome_item', 'preco_item'] },
    ],
  });
  return response.json(itensPedido);
}

async function getItemPedido(request, response) {
  const { id_pedido, id_item } = request.params;

  const itemPedido = await ItemPedido.findOne({
    where: { id_pedido, id_item },
    include: [
      { model: Pedido, attributes: ['id_pedido', 'data_pedido', 'preco_total'] },
      { model: Item, attributes: ['id_item', 'nome_item', 'preco_item'] },
    ],
  });

  if (!itemPedido) {
    return response.status(404).json({ message: 'Item do pedido nao encontrado.' });
  }

  return response.json(itemPedido);
}

async function createItemPedido(request, response) {
  const { id_pedido, id_item, quantidade_produto, valor_unitario } = request.body;

  if (!id_pedido || !id_item || !quantidade_produto || !valor_unitario) {
    return response
      .status(400)
      .json({ message: 'id_pedido, id_item, quantidade_produto e valor_unitario sao obrigatorios.' });
  }

  const pedido = await Pedido.findByPk(id_pedido);
  if (!pedido) {
    return response.status(400).json({ message: 'Pedido nao encontrado.' });
  }

  const item = await Item.findByPk(id_item);
  if (!item) {
    return response.status(400).json({ message: 'Item nao encontrado.' });
  }

  const existing = await ItemPedido.findOne({
    where: { id_pedido, id_item },
  });

  if (existing) {
    return response
      .status(409)
      .json({ message: 'Este item ja esta vinculado a este pedido.' });
  }

  const itemPedido = await ItemPedido.create({
    id_pedido,
    id_item,
    quantidade_produto,
    valor_unitario,
  });

  // Atualiza preco_total do pedido
  const total = await ItemPedido.sum(
    sequelize.literal('quantidade_produto * valor_unitario'),
    { where: { id_pedido } }
  );
  await pedido.update({ preco_total: total });

  return response.status(201).json(itemPedido);
}

async function updateItemPedido(request, response) {
  const { id_pedido, id_item } = request.params;
  const { quantidade_produto, valor_unitario } = request.body;

  const itemPedido = await ItemPedido.findOne({
    where: { id_pedido, id_item },
  });

  if (!itemPedido) {
    return response.status(404).json({ message: 'Item do pedido nao encontrado.' });
  }

  await itemPedido.update({
    quantidade_produto: quantidade_produto !== undefined ? quantidade_produto : itemPedido.quantidade_produto,
    valor_unitario: valor_unitario !== undefined ? valor_unitario : itemPedido.valor_unitario,
  });

  // Atualiza preco_total do pedido
  const total = await ItemPedido.sum(
    sequelize.literal('quantidade_produto * valor_unitario'),
    { where: { id_pedido } }
  );
  const pedido = await Pedido.findByPk(id_pedido);
  await pedido.update({ preco_total: total });

  return response.json(itemPedido);
}

async function deleteItemPedido(request, response) {
  const { id_pedido, id_item } = request.params;

  const itemPedido = await ItemPedido.findOne({
    where: { id_pedido, id_item },
  });

  if (!itemPedido) {
    return response.status(404).json({ message: 'Item do pedido nao encontrado.' });
  }

  await itemPedido.destroy();

  // Atualiza preco_total do pedido
  const total = await ItemPedido.sum(
    sequelize.literal('quantidade_produto * valor_unitario'),
    { where: { id_pedido } }
  );
  const pedido = await Pedido.findByPk(id_pedido);
  await pedido.update({ preco_total: total || 0 });

  return response.status(204).send();
}

module.exports = {
  listItensPedido,
  getItemPedido,
  createItemPedido,
  updateItemPedido,
  deleteItemPedido,
};