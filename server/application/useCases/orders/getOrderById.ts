import { IOrder } from "../../../domain/typings/order";
import { throwHTTPError } from "../../helpers";

const getOrderById = (order: IOrder) => {
  if (!order) {
    throwHTTPError(404, "There is no order for that id");
  }
};

export default getOrderById;
