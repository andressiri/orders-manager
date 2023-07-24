import { IncludeThroughOptions } from "sequelize";
import { DBModels } from "../../../../typings/database";
import { throwHTTPError } from "../../../../../application/helpers";

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

    if (!result?.id) throwHTTPError(404, `There is no Item for the id ${id}`);

    return result;
  };

  return getItemByIdWithRelations;
};

export default getItemByIdWithRelationsConstructor;
