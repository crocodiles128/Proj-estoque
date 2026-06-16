const sequelize = require('../database/connection');
const Usuario = require('./Usuario');
const Auth = require('./Auth');
const Pedido = require('./Pedido');
const Item = require('./Item');
const ItemPedido = require('./ItemPedido');

Usuario.init(sequelize);
Auth.init(sequelize);
Pedido.init(sequelize);
Item.init(sequelize);
ItemPedido.init(sequelize);

Usuario.associate({ Auth, Pedido });
Auth.associate({ Usuario });
Pedido.associate({ Usuario, Item, ItemPedido });
Item.associate({ Pedido, ItemPedido });
ItemPedido.associate({ Pedido, Item });

module.exports = {
  Usuario,
  Auth,
  Pedido,
  Item,
  ItemPedido,
};