import { IOrder } from "./order";

export interface IUser {
  id: string;
  email: string;
  password: string;
  createDate: Date;
  updateDate: Date;
  VendorOrders?: IOrder[];
  ClientOrders?: IOrder[];
}
