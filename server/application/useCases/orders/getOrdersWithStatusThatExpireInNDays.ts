import { statusValuesArray } from "../../../domain/entities/Order";
import { IOrderModel, OrderStatus } from "../../../domain/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrdersWithStatusThatExpireInNDays = async (
  status: OrderStatus,
  days: number,
  Order: IOrderModel,
) => {
  if (!statusValuesArray.includes(status))
    throwHTTPError(400, "The order status sent is invalid");

  if (typeof days !== "number")
    throwHTTPError(400, "The days value is invalid");

  const ordersSearch = await Order.getOrdersWithStatusThatExpireInNDays(
    status,
    days,
  );

  if (!ordersSearch || ordersSearch?.length < 1)
    throwHTTPError(404, "There are no approved orders that expire soon");

  return ordersSearch;
};

export default getOrdersWithStatusThatExpireInNDays;
