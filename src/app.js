const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');
const swaggerSpec = require('./config/swagger');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ message: 'Erro interno do servidor.' });
});

module.exports = app;
