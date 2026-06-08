const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ message: 'Erro interno do servidor.' });
});

module.exports = app;
