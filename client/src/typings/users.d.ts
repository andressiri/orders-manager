import { IOrder } from "./orders";

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createDate: Date;
  updateDate: Date;
}

export interface IUserWithRelations {
  VendorOrders?: IOrder[];
  ClientOrders?: IOrder[];
}
