import { DataTypes, Model, Sequelize } from "sequelize";
import { IOrderItem } from "../../../enterpriseBusinessRules/typings/orderItem";

const OrderItemModel = (sequelize: Sequelize) => {
  class OrderItem extends Model<IOrderItem> implements IOrderItem {
    declare id: number;
    declare orderId: string;
    declare itemId: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
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
    },
    {
      sequelize,
      modelName: "OrderItem",
      tableName: "OrderItems",
    }
  );

  return OrderItem;
};

export default OrderItemModel;