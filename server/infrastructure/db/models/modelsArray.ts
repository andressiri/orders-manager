import User from "./user";
import Order from "./order";
import Item from "./item";
import OrderItem from "./orderItem";

const modelsArray = [
  {
    name: "User",
    model: User,
  },
  {
    name: "Order",
    model: Order,
  },
  {
    name: "Item",
    model: Item,
  },
  {
    name: "OrderItem",
    model: OrderItem,
  },
];

export default modelsArray;
