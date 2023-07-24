import { IOrder } from "./orders";

export interface IItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  price: number;
  quantity: number;
  createDate: Date;
  updateDate: Date;
  vendorId: string;
}

export interface IItemWithRelations {
  Vendor?: IUser;
  Orders?: IOrder[];
}
