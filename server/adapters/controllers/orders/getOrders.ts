// @description Get orders
// @route GET /api/v1/orders
// @access Public
import asyncHandler from "express-async-handler";
import { Request } from "express";
import { getOrders as useCase } from "../../../application/useCases";

const getOrders = asyncHandler(async (req: Request, res) => {
  const Order = req.db.Order;

  const orders = await useCase(Order);

  res.status(200).json(orders);
});

export default getOrders;
