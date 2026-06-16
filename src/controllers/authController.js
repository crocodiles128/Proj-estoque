const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { Usuario, Auth } = require('../models');
const authConfig = require('../config/auth');

function sanitizeUser(usuario) {
  return {
    id: usuario.id_usuarios,
    name: usuario.nome_usuarios,
    email: usuario.email_usuarios,
  };
}

function createToken(usuario) {
  return jwt.sign(
    {
      sub: String(usuario.id_usuarios),
      email: usuario.email_usuarios,
    },
    authConfig.jwtSecret,
    { expiresIn: authConfig.jwtExpiresIn }
  );
}

async function register(request, response) {
  const { nome, email, password, cargo } = request.body;

  if (!nome || !email || !password) {
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
  const userExists = await Usuario.findOne({
    where: { email_usuarios: normalizedEmail },
  });

  if (userExists) {
    return response.status(409).json({ message: 'Email ja cadastrado.' });
  }

  const senhaHash = await bcrypt.hash(password, authConfig.bcryptSaltRounds);

  const usuario = await Usuario.create({
    nome_usuarios: nome,
    email_usuarios: normalizedEmail,
    cargo_usuarios: cargo || null,
  });

  await Auth.create({
    id_usuarios: usuario.id_usuarios,
    senha_hash: senhaHash,
  });

  return response.status(201).json({
    user: sanitizeUser(usuario),
    token: createToken(usuario),
  });
}

async function login(request, response) {
  const { email, password } = request.body;

  if (!email || !password) {
    return response
      .status(400)
      .json({ message: 'Email e senha sao obrigatorios.' });
  }

  const usuario = await Usuario.findOne({
    where: { email_usuarios: email.toLowerCase().trim() },
    include: [{ model: Auth, required: true }],
  });

  if (!usuario) {
    return response.status(401).json({ message: 'Credenciais invalidas.' });
  }

  const authRecord = usuario.Auth;
  if (!authRecord || !(await bcrypt.compare(password, authRecord.senha_hash))) {
    return response.status(401).json({ message: 'Credenciais invalidas.' });
  }

  return response.json({
    user: sanitizeUser(usuario),
    token: createToken(usuario),
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
