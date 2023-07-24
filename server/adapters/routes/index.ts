// @route /api/v1
import express from "express";
import itemsRouter from "./itemsRouter";
import ordersRouter from "./ordersRouter";
import { ITEMS_ROUTE, ORDERS_ROUTE } from "../config/constants";

const router = express.Router();

router.use(`/${ITEMS_ROUTE}`, itemsRouter);
router.use(`/${ORDERS_ROUTE}`, ordersRouter);

export default router;
