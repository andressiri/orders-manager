import { IncludeThroughOptions } from "sequelize";
import { DBModels } from "../../../../typings/database";
import { throwHTTPError } from "../../../../../application/helpers";

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

    if (!result?.id) throwHTTPError(404, `There is no Order for the id ${id}`);

    return result;
  };

  return getOrderByIdWithRelations;
};

export default getOrderByIdWithRelationsConstructor;
