// @route /api/v1
import express from "express";
import ordersRouter from "./ordersRouter";
import { ORDERS_ROUTE } from "../config/constants";

const router = express.Router();

router.use(`/${ORDERS_ROUTE}`, ordersRouter);

export default router;
