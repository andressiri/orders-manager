import { ModelStatic } from "sequelize";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getOrderByIdConstructor = (Order: ModelStatic<any>) => {
  const getOrderById = async (id: string) => {
    const result = await Order.findByPk(id, { raw: true });

    if (!result?.id) return null;

    return result;
  };

  return getOrderById;
};

export default getOrderByIdConstructor;
