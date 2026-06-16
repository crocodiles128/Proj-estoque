const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        id_item: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nome_item: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        descricao_item: {
          type: DataTypes.TEXT,
        },
        quantidade_item: {
          type: DataTypes.INTEGER,
        },
        preco_item: {
          type: DataTypes.DECIMAL(10, 2),
        },
      },
      {
        sequelize,
        tableName: 'item',
        timestamps: false,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Pedido, {
      through: models.ItemPedido,
      foreignKey: 'id_item',
      otherKey: 'id_pedido',
    });
  }
}

module.exports = Item;