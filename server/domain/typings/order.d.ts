import { Order } from "../entities";
import { IItem } from "./item";

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
  Items?: IItem[];
}
