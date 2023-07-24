import { IOrder, IOrderWithRelations } from "./orders";
import { IItem, IItemWithRelations } from "./items";

export interface IContextProviderProps {
  children: React.ReactNode;
}

// Orders
export type Orders = IOrder[] | IOrderWithRelations[] | [];
export type SetOrders = React.Dispatch<React.SetStateAction<IOrder[] | []>>;

export type OrdersWithRelations = IOrderWithRelations[] | [];
export type SetOrdersWithRelations = React.Dispatch<
  React.SetStateAction<IOrderWithRelations[] | []>
>;

export type Order = IOrder | object;
export type SetOrder = React.Dispatch<React.SetStateAction<IOrder | object>>;

export type OrderWithRelations = IOrderWithRelations | object;
export type SetOrderWithRelations = React.Dispatch<
  React.SetStateAction<IOrderWithRelations | object>
>;
export interface IOrdersContext {
  orders: Orders;
  setOrders: SetOrders;
  ordersWithRelations: OrdersWithRelations;
  setOrdersWithRelations: SetOrdersWithRelations;
  order: Order;
  setOrder: SetOrder;
  orderWithRelations: OrderWithRelations;
  setOrderWithRelations: SetOrderWithRelations;
}

// Items
export type Items = IItem[] | IItemWithRelations[] | [];
export type SetItems = React.Dispatch<React.SetStateAction<IItem[] | []>>;

export type ItemsWithRelations = IItemWithRelations[] | [];
export type SetItemsWithRelations = React.Dispatch<
  React.SetStateAction<IItemWithRelations[] | []>
>;

export type Item = IItem | object;
export type SetItem = React.Dispatch<React.SetStateAction<IItem | object>>;

export type ItemWithRelations = IItemWithRelations | object;
export type SetItemWithRelations = React.Dispatch<
  React.SetStateAction<IItemWithRelations | object>
>;
export interface IItemsContext {
  items: Items;
  setItems: SetItems;
  itemsWithRelations: ItemsWithRelations;
  setItemsWithRelations: SetItemsWithRelations;
  item: Item;
  setItem: SetItem;
  itemWithRelations: ItemWithRelations;
  setItemWithRelations: SetItemWithRelations;
}

// Entities
export type EntitiesState =
  | Orders
  | OrdersWithRelations
  | Order
  | OrderWithRelations
  | Items
  | ItemsWithRelations
  | Item
  | ItemWithRelations;
