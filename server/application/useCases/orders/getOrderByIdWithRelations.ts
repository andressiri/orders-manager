import { IOrderModel } from "../../../domain/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrderByIdWithRelations = async (id: string, Order: IOrderModel) => {
  const order = await Order.getOrderByIdWithRelations(id);

  if (!order) throwHTTPError(404, `There is no order for the id ${id}`);

  return order;
};

export default getOrderByIdWithRelations;
