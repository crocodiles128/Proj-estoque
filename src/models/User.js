const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const authConfig = require('../config/auth');

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(160),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'password_hash',
    },
  },
  {
    tableName: 'users',
    underscored: true,
    defaultScope: {
      attributes: { exclude: ['passwordHash'] },
    },
    hooks: {
      beforeValidate(user) {
        if (user.email) {
          user.email = user.email.toLowerCase().trim();
        }
      },
      async beforeCreate(user) {
        if (user.passwordHash) {
          user.passwordHash = await bcrypt.hash(
            user.passwordHash,
            authConfig.bcryptSaltRounds
          );
        }
      },
      async beforeUpdate(user) {
        if (user.changed('passwordHash')) {
          user.passwordHash = await bcrypt.hash(
            user.passwordHash,
            authConfig.bcryptSaltRounds
          );
        }
      },
    },
  }
);

User.prototype.checkPassword = function checkPassword(password) {
  return bcrypt.compare(password, this.passwordHash);
};

module.exports = User;
