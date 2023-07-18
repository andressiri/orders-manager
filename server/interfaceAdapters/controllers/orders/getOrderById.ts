// @description Get order by id
// @route GET /api/v1/orders/order/:id
// @access Public
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import db from "../../../frameworksAndDrivers/db/models";
import { getOrderById as useCase } from "../../../applicationBusinessRules/useCases";

const { Order } = db;

const getOrderById = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];

  const orderData = await Order.findByPk(id);

  useCase(orderData);

  res.status(200).json(orderData);
});

export default getOrderById;
