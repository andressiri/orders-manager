import { IOrder, IOrderWithRelations } from "./orders";

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
