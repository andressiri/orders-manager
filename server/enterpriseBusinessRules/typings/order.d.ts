import { Order } from "../entities";
import { IItem } from "./item";
import { IUser } from "./user";

export type OrderStatus = typeof Order.status.values;

export interface IOrder {
  id: string;
  status: OrderStatus;
  shippingAddres: string;
  shippingPromise: Date;
  createDate: Date;
  updateDate: Date;
  Vendor: IUser;
  Client: IUser;
  Items: IItem[];
}
