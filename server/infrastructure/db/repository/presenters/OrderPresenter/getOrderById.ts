import { ModelStatic } from "sequelize";
import { throwHTTPError } from "../../../../../application/helpers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getOrderByIdConstructor = (Order: ModelStatic<any>) => {
  const getOrderById = async (id: string) => {
    const result = await Order.findByPk(id, { raw: true });

    if (!result?.id) throwHTTPError(404, `There is no Order for the id ${id}`);

    return result;
  };

  return getOrderById;
};

export default getOrderByIdConstructor;
