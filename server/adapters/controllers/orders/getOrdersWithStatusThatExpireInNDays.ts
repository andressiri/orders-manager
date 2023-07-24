// @description Get order by id
// @route GET /api/v1/orders/search/order/:status/:days
// @access Public
import asyncHandler from "express-async-handler";
import { OrderStatus } from "../../../domain/typings/order";
import { getOrdersWithStatusThatExpireInNDays as useCase } from "../../../application/useCases";
import { STATUS, DAYS } from "../../config/constants";

const getOrdersWithStatusThatExpireInNDays = asyncHandler(async (req, res) => {
  const status = req.params[STATUS];
  const days = req.params[DAYS];
  const Order = req.db.Order;

  const order = await useCase(status as OrderStatus, Number(days), Order);

  res.status(200).json(order);
});

export default getOrdersWithStatusThatExpireInNDays;
