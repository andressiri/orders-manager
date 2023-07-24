import { Order } from "../entities";
import { IItem } from "./item";
import { IUser } from "./user";

export type OrderStatus = typeof Order.status.values;

export interface IOrder {
  id: string;
  status: OrderStatus;
  shippingAddress: string;
  shippingPromise: Date;
  createDate: Date;
  updateDate: Date;
  vendorId: string;
  clientId: string;
}

export interface IOrderWithRelations extends IOrder {
  Items?: IItem[];
  Vendor?: IUser;
  Client?: IUser;
}
export interface IOrderRepository {
  getOrders: () => Promise<IOrder[] | null>;
  getOrdersWithRelations: () => Promise<IOrderWithRelations[] | null>;
  getOrderById: (id: string) => Promise<IOrder | null>;
  getOrderByIdWithRelations: (
    id: string,
  ) => Promise<IOrderWithRelations | null>;
}

export interface IOrderModel extends IOrderWithRelations, IOrderRepository {}
