import { DataTypes, Model, Sequelize } from "sequelize";
import { setupFieldType } from "../repository/config";
import {
  OrderStatus,
  IOrder,
} from "../../../enterpriseBusinessRules/typings/order";
import { Order as order } from "../config/getEnterpriseBusinessRules";

const OrderModel = (sequelize: Sequelize) => {
  class Order extends Model<IOrder> implements IOrder {
    declare id: string;
    declare status: OrderStatus;
    declare shippingAddress: string;
    declare shippingPromise: Date;
    declare Vendor: string;
    declare Client: string;
    declare createDate: Date;
    declare updateDate: Date;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // eslint-disable-next-line
    static associate(models: any) {}
  }

  Order.init(
    {
      id: setupFieldType(order.id),
      status: setupFieldType(order.status),
      shippingAddress: setupFieldType(order.shippingAddress),
      shippingPromise: setupFieldType(order.shippingPromise),
      createDate: setupFieldType(order.createDate),
      updateDate: setupFieldType(order.updateDate),
      Vendor: DataTypes.UUID,
      Client: DataTypes.UUID,
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
