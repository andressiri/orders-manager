import { IOrder } from "../../../enterpriseBusinessRules/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrders = (ordersSearch: IOrder[]) => {
  if (ordersSearch.length < 1) {
    throwHTTPError(404, "No orders found");
  }
};

export default getOrders;
