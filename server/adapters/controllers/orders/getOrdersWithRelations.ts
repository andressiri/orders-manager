// @description Get orders with theirs Items and Vendor and Client
// @route GET /api/v1/orders/all
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../../infrastructure/db/models";
import { getOrders as useCase } from "../../../application/useCases";

const { Order, Item, User } = db;

const getOrdersWithRelations = asyncHandler(async (_req, res) => {
  const orders = await Order.findAll({
    include: [
      { model: Item, as: "Items" },
      { model: User, as: "Vendor" },
      { model: User, as: "Client" },
    ],
  });

  useCase(orders);

  res.status(200).json(orders);
});

export default getOrdersWithRelations;
