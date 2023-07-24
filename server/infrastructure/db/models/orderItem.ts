import { DataTypes, Model, Sequelize } from "sequelize";
import { IOrderItem } from "../../../domain/typings/orderItem";
import { DBModels } from "../../typings/database";

const OrderItemModel = (sequelize: Sequelize) => {
  class OrderItem extends Model<IOrderItem> implements IOrderItem {
    declare id: number;
    declare orderId: string;
    declare itemId: string;
    declare createDate: Date;
    declare updateDate: Date;

    static associate(models: DBModels) {
      OrderItem.belongsTo(models.Order, {
        foreignKey: "orderId",
        as: "hasOrderItems",
      });

      OrderItem.belongsTo(models.Item, {
        foreignKey: "itemId",
        as: "hasItemOrders",
      });
    }
  }

  OrderItem.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      orderId: DataTypes.UUID,
      itemId: DataTypes.UUID,
      createDate: DataTypes.DATE,
      updateDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "OrderItem",
      tableName: "OrderItems",
      timestamps: true,
      createdAt: "createDate",
      updatedAt: "updateDate",
    }
  );

  return OrderItem;
};

export default OrderItemModel;
