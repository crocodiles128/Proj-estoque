const { Model, DataTypes } = require('sequelize');

class ItemPedido extends Model {
  static init(sequelize) {
    super.init(
      {
        id_pedido: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        id_item: {
          type: DataTypes.INTEGER,
          primaryKey: true,
        },
        quantidade_produto: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        valor_unitario: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'item_pedido',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Pedido, { foreignKey: 'id_pedido' });
    this.belongsTo(models.Item, { foreignKey: 'id_item' });
  }
}

module.exports = ItemPedido;