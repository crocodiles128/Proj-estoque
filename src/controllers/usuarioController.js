const { Usuario } = require('../models');

async function listUsuarios(request, response) {
  const usuarios = await Usuario.findAll({ order: [['id_usuarios', 'ASC']] });
  return response.json(usuarios);
}

async function getUsuario(request, response) {
  const usuario = await Usuario.findByPk(request.params.id);

  if (!usuario) {
    return response.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  return response.json(usuario);
}

async function createUsuario(request, response) {
  const { nome_usuarios, email_usuarios, cargo_usuarios } = request.body;

  if (!nome_usuarios || !email_usuarios) {
    return response
      .status(400)
      .json({ message: 'Nome e email sao obrigatorios.' });
  }

  const emailExists = await Usuario.findOne({
    where: { email_usuarios: email_usuarios.toLowerCase().trim() },
  });

  if (emailExists) {
    return response.status(409).json({ message: 'Email ja cadastrado.' });
  }

  const usuario = await Usuario.create({
    nome_usuarios,
    email_usuarios: email_usuarios.toLowerCase().trim(),
    cargo_usuarios: cargo_usuarios || null,
  });

  return response.status(201).json(usuario);
}

async function updateUsuario(request, response) {
  const usuario = await Usuario.findByPk(request.params.id);

  if (!usuario) {
    return response.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  const { nome_usuarios, email_usuarios, cargo_usuarios } = request.body;

  if (email_usuarios) {
    const emailExists = await Usuario.findOne({
      where: {
        email_usuarios: email_usuarios.toLowerCase().trim(),
        id_usuarios: { [require('sequelize').Op.ne]: usuario.id_usuarios },
      },
    });

    if (emailExists) {
      return response.status(409).json({ message: 'Email ja cadastrado.' });
    }
  }

  await usuario.update({
    nome_usuarios: nome_usuarios || usuario.nome_usuarios,
    email_usuarios: email_usuarios
      ? email_usuarios.toLowerCase().trim()
      : usuario.email_usuarios,
    cargo_usuarios: cargo_usuarios !== undefined ? cargo_usuarios : usuario.cargo_usuarios,
  });

  return response.json(usuario);
}

async function deleteUsuario(request, response) {
  const usuario = await Usuario.findByPk(request.params.id);

  if (!usuario) {
    return response.status(404).json({ message: 'Usuario nao encontrado.' });
  }

  await usuario.destroy();
  return response.status(204).send();
}

module.exports = {
  listUsuarios,
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};