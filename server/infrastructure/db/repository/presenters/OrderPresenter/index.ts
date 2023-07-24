import { DBModels } from "../../../../typings/database";
import { IOrderRepository } from "../../../../../domain/typings/order";
import { getAllFromEntity } from "../../helpers";
import getOrdersWithRelations from "./getOrdersWithRelations";
import getOrderById from "./getOrderById";
import getOrderByIdWithRelationsConstructor from "./getOrderByIdWithRelations";

const OrderPresenterConstructor = (db: DBModels) => {
  const OrderPresenter: IOrderRepository = {
    getOrders: getAllFromEntity(db.Order),
    getOrdersWithRelations: getOrdersWithRelations(db),
    getOrderById: getOrderById(db.Order),
    getOrderByIdWithRelations: getOrderByIdWithRelationsConstructor(db),
  };

  return OrderPresenter;
};

export default OrderPresenterConstructor;
