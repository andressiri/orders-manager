import { IOrderModel } from "../../../domain/typings/order";
import { throwHTTPError, validateUUID } from "../../helpers";

const getOrderByIdWithRelations = async (id: string, Order: IOrderModel) => {
  if (!validateUUID(id)) throwHTTPError(400, `The id ${id} is invalid`);

  const order = await Order.getOrderByIdWithRelations(id);

  if (!order) throwHTTPError(404, `There is no order for the id ${id}`);

  return order;
};

export default getOrderByIdWithRelations;
