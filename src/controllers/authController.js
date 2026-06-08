const jwt = require('jsonwebtoken');
const { User } = require('../models');
const authConfig = require('../config/auth');

function sanitizeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
}

function createToken(user) {
  return jwt.sign(
    {
      sub: String(user.id),
      email: user.email,
    },
    authConfig.jwtSecret,
    { expiresIn: authConfig.jwtExpiresIn }
  );
}

async function register(request, response) {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response
      .status(400)
      .json({ message: 'Nome, email e senha sao obrigatorios.' });
  }

  if (password.length < 6) {
    return response
      .status(400)
      .json({ message: 'A senha deve ter pelo menos 6 caracteres.' });
  }

  const normalizedEmail = email.toLowerCase().trim();
  const userExists = await User.findOne({
    where: { email: normalizedEmail },
  });

  if (userExists) {
    return response.status(409).json({ message: 'Email ja cadastrado.' });
  }

  const user = await User.create({
    name,
    email: normalizedEmail,
    passwordHash: password,
  });

  return response.status(201).json({
    user: sanitizeUser(user),
    token: createToken(user),
  });
}

async function login(request, response) {
  const { email, password } = request.body;

  if (!email || !password) {
    return response
      .status(400)
      .json({ message: 'Email e senha sao obrigatorios.' });
  }

  const user = await User.unscoped().findOne({
    where: { email: email.toLowerCase().trim() },
  });

  if (!user || !(await user.checkPassword(password))) {
    return response.status(401).json({ message: 'Credenciais invalidas.' });
  }

  return response.json({
    user: sanitizeUser(user),
    token: createToken(user),
  });
}

async function profile(request, response) {
  return response.json({ user: sanitizeUser(request.user) });
}

module.exports = {
  register,
  login,
  profile,
};
