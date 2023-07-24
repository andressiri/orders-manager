// @description Get order by id
// @route GET /api/v1/orders/order/:id
// @access Public
import asyncHandler from "express-async-handler";
import { ReqWithDB } from "../../../typings/express";
import { BY_ID } from "../../config/constants";
import { getOrderById as useCase } from "../../../application/useCases";

const getOrderById = asyncHandler(async (req: ReqWithDB, res) => {
  const id = req.params[BY_ID];
  const Order = req.db.Order;

  const order = await useCase(id, Order);

  res.status(200).json(order);
});

export default getOrderById;
