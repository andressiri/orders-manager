import { IncludeThroughOptions } from "sequelize";
import { DBModels } from "../../../../typings/database";

const getItemsWithRelationsConstructor = (models: DBModels) => {
  const getItemsWithRelations = async () => {
    const { Order, User, Item, OrderItem } = models;

    const results = await Item.findAll({
      include: [
        { model: User, foreignKey: "vendorId", as: "Vendor" },
        {
          model: Order,
          through: OrderItem as IncludeThroughOptions,
          foreignKey: "itemId",
          as: "Orders",
        },
      ],
    });

    if (!results[0]?.id) return null;

    return results;
  };

  return getItemsWithRelations;
};

export default getItemsWithRelationsConstructor;
