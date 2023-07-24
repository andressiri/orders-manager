import { IItem } from "./items";
import { IUser } from "./users";
export type OrderStatus = "Approve" | "Cancel" | "Delivery" | "Traveling";

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
