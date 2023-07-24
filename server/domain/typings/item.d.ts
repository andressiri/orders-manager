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
}

export interface IItemWithRelations {
  Vendor?: IUser;
  Orders?: IOrder[];
}

export interface IItemRepository {
  getItems: () => Promise<IItem[] | null>;
  getItemsWithRelations: () => Promise<IItemWithRelations[] | null>;
  getItemById: (id: string) => Promise<IItem | null>;
  getItemByIdWithRelations: (id: string) => Promise<IItemWithRelations | null>;
}

export interface IItemModel extends IItemWithRelations, IItemRepository {}
