const jwt = require('jsonwebtoken');
const { User } = require('../models');
const authConfig = require('../config/auth');

async function authMiddleware(request, response, next) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: 'Token nao informado.' });
  }

  const [scheme, token] = authHeader.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return response.status(401).json({ message: 'Token invalido.' });
  }

  try {
    const payload = jwt.verify(token, authConfig.jwtSecret);
    const user = await User.findByPk(payload.sub);

    if (!user) {
      return response.status(401).json({ message: 'Usuario nao encontrado.' });
    }

    request.user = user;
    request.userId = user.id;

    return next();
  } catch (error) {
    return response.status(401).json({ message: 'Token invalido ou expirado.' });
  }
}

module.exports = authMiddleware;
