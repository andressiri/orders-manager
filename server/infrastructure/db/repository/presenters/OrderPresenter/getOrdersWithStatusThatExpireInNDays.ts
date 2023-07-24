import { IncludeThroughOptions, Op } from "sequelize";
import { DBModels } from "../../../../typings/database";
import { OrderStatus } from "../../../../../domain/typings/order";

const getOrdersWithStatusThatExpireInNDaysConstructor = (models: DBModels) => {
  const getOrdersWithStatusThatExpireInNDays = async (
    status: OrderStatus,
    days: number,
  ) => {
    const { Order, User, Item, OrderItem } = models;
    const auxDate = Date.now() + 1000 * 60 * 60 * 24 * days;

    const results = await Order.findAll({
      where: {
        status,
        shippingPromise: {
          [Op.gt]: Date.now(),
          [Op.lt]: auxDate,
        },
      },
      include: [
        {
          model: User,
          foreignKey: "vendorId",
          as: "Vendor",
        },
        {
          model: User,
          foreignKey: "clientId",
          as: "Client",
        },
        {
          model: Item,
          through: OrderItem as IncludeThroughOptions,
          foreignKey: "orderId",
          as: "Items",
        },
      ],
    });

    if (!results[0]?.id) return null;

    return results;
  };

  return getOrdersWithStatusThatExpireInNDays;
};

export default getOrdersWithStatusThatExpireInNDaysConstructor;
