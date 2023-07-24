// @description Get orders with theirs Items and Vendor and Client
// @route GET /api/v1/orders/all
// @access Public
import asyncHandler from "express-async-handler";
import { Request } from "express";
import { getOrdersWithRelations as useCase } from "../../../application/useCases";

const getOrders = asyncHandler(async (req: Request, res) => {
  const Order = req.db.Order;

  const orders = await useCase(Order);

  res.status(200).json(orders);
});

export default getOrders;
