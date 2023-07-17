import { IOrder } from "./order";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createDate: Date;
  updateDate: Date;
  VendorOrders?: IOrder[];
  ClientOrders?: IOrder[];
}
