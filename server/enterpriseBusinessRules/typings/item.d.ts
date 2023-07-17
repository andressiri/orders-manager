import { IOrder } from "./order";

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
  Orders?: IOrder[];
}
