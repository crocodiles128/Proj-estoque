const { Model, DataTypes } = require('sequelize');

class Auth extends Model {
  static init(sequelize) {
    super.init(
      {
        id_usuarios: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        senha_hash: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'auth',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'id_usuarios' });
  }
}

module.exports = Auth;