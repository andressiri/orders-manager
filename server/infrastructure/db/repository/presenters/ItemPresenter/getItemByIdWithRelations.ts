import { IncludeThroughOptions } from "sequelize";
import { DBModels } from "../../../../typings/database";

const getItemByIdWithRelationsConstructor = (models: DBModels) => {
  const getItemByIdWithRelations = async (id: string) => {
    const { Item, Order, User, OrderItem } = models;

    const result = await Item.findByPk(id, {
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

    if (!result?.id) return null;

    return result;
  };

  return getItemByIdWithRelations;
};

export default getItemByIdWithRelationsConstructor;
