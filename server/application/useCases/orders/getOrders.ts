import { IOrderModel } from "../../../domain/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrders = async (Order: IOrderModel) => {
  const ordersSearch = await Order.getOrders();

  if (!ordersSearch || ordersSearch?.length < 1)
    throwHTTPError(404, "No orders found");

  return ordersSearch;
};

export default getOrders;
