import { IncludeThroughOptions } from "sequelize";
import { throwHTTPError } from "../../../../../application/helpers";
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

    if (!results[0]?.id) throwHTTPError(404, "There are no items available");

    return results;
  };

  return getItemsWithRelations;
};

export default getItemsWithRelationsConstructor;
