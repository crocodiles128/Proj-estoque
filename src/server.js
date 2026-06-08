require('dotenv/config');

const app = require('./app');
const sequelize = require('./database/connection');

const port = process.env.PORT || 3000;

async function startServer() {
  await sequelize.authenticate();

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error('Erro ao iniciar servidor:', error.message);
  process.exit(1);
});
