// @route api/v1/orders
import express from "express";
import { BY_ID, ORDERS_SINGULAR, WITH_RELATIONS } from "../config/constants";
import {
  getOrderById,
  getOrders,
  getOrdersWithRelations,
} from "../controllers";

const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);

ordersRouter.get(`/${WITH_RELATIONS}`, getOrdersWithRelations);

ordersRouter.get(`/${ORDERS_SINGULAR}/:${BY_ID}`, getOrderById);

export default ordersRouter;