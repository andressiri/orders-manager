import { IncludeThroughOptions } from "sequelize";
import { DBModels } from "../../../../typings/database";

const getOrderByIdWithRelationsConstructor = (models: DBModels) => {
  const getOrderByIdWithRelations = async (id: string) => {
    const { Order, User, Item, OrderItem } = models;

    const result = await Order.findByPk(id, {
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

    if (!result?.id) return null;

    return result;
  };

  return getOrderByIdWithRelations;
};

export default getOrderByIdWithRelationsConstructor;
