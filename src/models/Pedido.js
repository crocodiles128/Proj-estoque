const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        id_pedido: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        data_pedido: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        id_cliente: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        preco_total: {
          type: DataTypes.DECIMAL(10, 2),
        },
      },
      {
        sequelize,
        tableName: 'pedido',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'id_cliente' });
    this.belongsToMany(models.Item, {
      through: models.ItemPedido,
      foreignKey: 'id_pedido',
      otherKey: 'id_item',
    });
  }
}

module.exports = Pedido;