import { createContext, FC, useState } from "react";
import {
  IContextProviderProps,
  IOrdersContext,
  Orders,
  OrdersWithRelations,
  Order,
  OrderWithRelations,
} from "../../typings/contexts";

export const OrdersContext = createContext<IOrdersContext>({
  orders: [],
  setOrders: () => [],
  ordersWithRelations: [],
  setOrdersWithRelations: () => [],
  order: {},
  setOrder: () => {
    return {};
  },
  orderWithRelations: {},
  setOrderWithRelations: () => {
    return {};
  },
});

export const OrdersContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const [orders, setOrders] = useState<Orders>([]);
  const [ordersWithRelations, setOrdersWithRelations] =
    useState<OrdersWithRelations>([]);
  const [order, setOrder] = useState<Order>({});
  const [orderWithRelations, setOrderWithRelations] =
    useState<OrderWithRelations>({});

  return (
    <OrdersContext.Provider
      value={{
        orders,
        setOrders,
        ordersWithRelations,
        setOrdersWithRelations,
        order,
        setOrder,
        orderWithRelations,
        setOrderWithRelations,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
