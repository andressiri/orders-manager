import { DataTypes, Model, Sequelize } from "sequelize";
import { setupFieldType } from "../repository/config";
import { OrderStatus, IOrder } from "../../../domain/typings/order";
import { Order as order } from "../config/getDomainRules";
import { DBModels } from "../../typings/database";

const OrderModel = (sequelize: Sequelize) => {
  class Order extends Model<IOrder> implements IOrder {
    declare id: string;
    declare status: OrderStatus;
    declare shippingAddress: string;
    declare shippingPromise: Date;
    declare vendorId: string;
    declare clientId: string;
    declare createDate: Date;
    declare updateDate: Date;

    static associate(models: DBModels) {
      Order.belongsTo(models.User, {
        foreignKey: "vendorId",
        as: "Vendor",
      });

      Order.belongsTo(models.User, {
        foreignKey: "clientId",
        as: "Client",
      });

      Order.belongsToMany(models.Item, {
        through: models.OrderItem,
        foreignKey: "orderId",
        as: "Items",
      });
    }
  }

  Order.init(
    {
      id: setupFieldType(order.id),
      status: setupFieldType(order.status),
      shippingAddress: setupFieldType(order.shippingAddress),
      shippingPromise: setupFieldType(order.shippingPromise),
      createDate: setupFieldType(order.createDate),
      updateDate: setupFieldType(order.updateDate),
      vendorId: DataTypes.UUID,
      clientId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "Orders",
      timestamps: true,
      createdAt: "createDate",
      updatedAt: "updateDate",
    }
  );

  return Order;
};

export default OrderModel;
