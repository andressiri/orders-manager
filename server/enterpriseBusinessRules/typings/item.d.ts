import { IOrder } from "./order";

export interface IItem {
  id: string;
  title: string;
  description?: string;
  url: string;
  price: number;
  quantity: integer;
  createDate: Date;
  updateDate: Date;
  Vendor: IUser;
  Orders?: IOrder[];
}
