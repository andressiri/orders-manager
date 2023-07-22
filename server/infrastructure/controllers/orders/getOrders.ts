// @description Get orders
// @route GET /api/v1/orders
// @access Public
import asyncHandler from "express-async-handler";
import db from "../../../presentation/db/models";
import { getOrders as useCase } from "../../../application/useCases";

const { Order } = db;

const getOrders = asyncHandler(async (_req, res) => {
  const orders = await Order.findAll({ raw: true });

  useCase(orders);

  res.status(200).json(orders);
});

export default getOrders;
