import { IOrderModel } from "../../../domain/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrderById = async (id: string, Order: IOrderModel) => {
  const order = await Order.getOrderById(id);

  if (!order) throwHTTPError(404, `There is no order for the id ${id}`);

  return order;
};

export default getOrderById;
