const { Pedido, Usuario, Item, ItemPedido } = require('../models');

async function listPedidos(request, response) {
  const pedidos = await Pedido.findAll({
    order: [['id_pedido', 'ASC']],
    include: [
      { model: Usuario, attributes: ['id_usuarios', 'nome_usuarios', 'email_usuarios'] },
      { model: Item, through: { attributes: ['quantidade_produto', 'valor_unitario'] } },
    ],
  });
  return response.json(pedidos);
}

async function getPedido(request, response) {
  const pedido = await Pedido.findByPk(request.params.id, {
    include: [
      { model: Usuario, attributes: ['id_usuarios', 'nome_usuarios', 'email_usuarios'] },
      { model: Item, through: { attributes: ['quantidade_produto', 'valor_unitario'] } },
    ],
  });

  if (!pedido) {
    return response.status(404).json({ message: 'Pedido nao encontrado.' });
  }

  return response.json(pedido);
}

async function createPedido(request, response) {
  const { data_pedido, id_usuarios, itens } = request.body;

  if (!data_pedido || !id_usuarios) {
    return response
      .status(400)
      .json({ message: 'Data do pedido e id do cliente sao obrigatorios.' });
  }

  const cliente = await Usuario.findByPk(id_usuarios);
  if (!cliente) {
    return response.status(400).json({ message: 'Cliente nao encontrado.' });
  }

  let precoTotal = 0;

  if (itens && itens.length > 0) {
    for (const itemPedido of itens) {
      const item = await Item.findByPk(itemPedido.id_item);
      if (!item) {
        return response
          .status(400)
          .json({ message: `Item ${itemPedido.id_item} nao encontrado.` });
      }
      precoTotal += Number(itemPedido.valor_unitario) * Number(itemPedido.quantidade_produto);
    }
  }

  const pedido = await Pedido.create({
    data_pedido,
    id_usuarios,
    preco_total: precoTotal,
  });

  if (itens && itens.length > 0) {
    const itensPedidoData = itens.map((itemPedido) => ({
      id_pedido: pedido.id_pedido,
      id_item: itemPedido.id_item,
      quantidade_produto: itemPedido.quantidade_produto,
      valor_unitario: itemPedido.valor_unitario,
    }));

    await ItemPedido.bulkCreate(itensPedidoData);
  }

  const pedidoCompleto = await Pedido.findByPk(pedido.id_pedido, {
    include: [
      { model: Usuario, attributes: ['id_usuarios', 'nome_usuarios', 'email_usuarios'] },
      { model: Item, through: { attributes: ['quantidade_produto', 'valor_unitario'] } },
    ],
  });

  return response.status(201).json(pedidoCompleto);
}

async function updatePedido(request, response) {
  const pedido = await Pedido.findByPk(request.params.id);

  if (!pedido) {
    return response.status(404).json({ message: 'Pedido nao encontrado.' });
  }

  const { data_pedido, id_usuarios, itens } = request.body;

  if (id_usuarios) {
    const cliente = await Usuario.findByPk(id_usuarios);
    if (!cliente) {
      return response.status(400).json({ message: 'Cliente nao encontrado.' });
    }
  }

  await pedido.update({
    data_pedido: data_pedido || pedido.data_pedido,
    id_usuarios: id_usuarios || pedido.id_usuarios,
  });

  if (itens && itens.length > 0) {
    await ItemPedido.destroy({ where: { id_pedido: pedido.id_pedido } });

    let precoTotal = 0;
    const itensPedidoData = itens.map((itemPedido) => {
      precoTotal += Number(itemPedido.valor_unitario) * Number(itemPedido.quantidade_produto);
      return {
        id_pedido: pedido.id_pedido,
        id_item: itemPedido.id_item,
        quantidade_produto: itemPedido.quantidade_produto,
        valor_unitario: itemPedido.valor_unitario,
      };
    });

    await ItemPedido.bulkCreate(itensPedidoData);
    await pedido.update({ preco_total: precoTotal });
  }

  const pedidoCompleto = await Pedido.findByPk(pedido.id_pedido, {
    include: [
      { model: Usuario, attributes: ['id_usuarios', 'nome_usuarios', 'email_usuarios'] },
      { model: Item, through: { attributes: ['quantidade_produto', 'valor_unitario'] } },
    ],
  });

  return response.json(pedidoCompleto);
}

async function deletePedido(request, response) {
  const pedido = await Pedido.findByPk(request.params.id);

  if (!pedido) {
    return response.status(404).json({ message: 'Pedido nao encontrado.' });
  }

  await ItemPedido.destroy({ where: { id_pedido: pedido.id_pedido } });
  await pedido.destroy();
  return response.status(204).send();
}

module.exports = {
  listPedidos,
  getPedido,
  createPedido,
  updatePedido,
  deletePedido,
};