const sequelize = require('./connection');
const { Product } = require('../models');

async function syncDatabase() {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  console.log('Banco sincronizado com sucesso.');
  console.log(`Model carregada: ${Product.name}`);

  await sequelize.close();
}

syncDatabase().catch(async (error) => {
  console.error('Erro ao sincronizar banco:', error.message);
  await sequelize.close();
  process.exit(1);
});
