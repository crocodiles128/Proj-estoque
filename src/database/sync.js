const sequelize = require('./connection');
const { Usuario, Auth, Pedido, Item, ItemPedido } = require('../models');

async function syncDatabase() {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  console.log('Banco sincronizado com sucesso.');
  console.log(`Model carregada: ${Usuario.name}`);
  console.log(`Model carregada: ${Auth.name}`);
  console.log(`Model carregada: ${Pedido.name}`);
  console.log(`Model carregada: ${Item.name}`);
  console.log(`Model carregada: ${ItemPedido.name}`);

  await sequelize.close();
}

syncDatabase().catch(async (error) => {
  console.error('Erro ao sincronizar banco:', error.message);
  await sequelize.close();
  process.exit(1);
});
