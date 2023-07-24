import { IOrderModel } from "../../../domain/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrdersWithRelations = async (Order: IOrderModel) => {
  const ordersSearch = await Order.getOrdersWithRelations();

  if (!ordersSearch || ordersSearch?.length < 1)
    throwHTTPError(404, "No orders found");

  return ordersSearch;
};

export default getOrdersWithRelations;
