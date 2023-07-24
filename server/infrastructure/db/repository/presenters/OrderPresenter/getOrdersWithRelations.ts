import { IncludeThroughOptions } from "sequelize";
import { DBModels } from "../../../../typings/database";

const getOrdersWithRelationsConstructor = (models: DBModels) => {
  const getOrdersWithRelations = async () => {
    const { Order, User, Item, OrderItem } = models;

    const results = await Order.findAll({
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

  return getOrdersWithRelations;
};

export default getOrdersWithRelationsConstructor;
