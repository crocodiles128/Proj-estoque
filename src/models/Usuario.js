const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        id_usuarios: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome_usuarios: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        email_usuarios: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true,
        },
        cargo_usuarios: {
          type: DataTypes.STRING(50),
        },
      },
      {
        sequelize,
        tableName: 'usuarios',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.hasOne(models.Auth, { foreignKey: 'id_usuarios' });
    this.hasMany(models.Pedido, { foreignKey: 'id_cliente' });
  }
}

module.exports = Usuario;