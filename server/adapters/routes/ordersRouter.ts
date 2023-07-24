// @route api/v1/orders
import express from "express";
import {
  BY_ID,
  DAYS,
  ORDERS_SINGULAR,
  SEARCH,
  STATUS,
  WITH_RELATIONS,
} from "../config/constants";
import {
  getOrderById,
  getOrderByIdWithRelations,
  getOrders,
  getOrdersWithRelations,
  getOrdersWithStatusThatExpireInNDays,
} from "../controllers";

const ordersRouter = express.Router();

ordersRouter.get("/", getOrders);

ordersRouter.get(`/${WITH_RELATIONS}`, getOrdersWithRelations);

ordersRouter.get(`/${ORDERS_SINGULAR}/:${BY_ID}`, getOrderById);

ordersRouter.get(
  `/${WITH_RELATIONS}/${ORDERS_SINGULAR}/:${BY_ID}`,
  getOrderByIdWithRelations,
);

ordersRouter.get(
  `/${SEARCH}/${ORDERS_SINGULAR}/:${STATUS}/:${DAYS}`,
  getOrdersWithStatusThatExpireInNDays,
);

export default ordersRouter;
