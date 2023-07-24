// @route api/v1/items
import express from "express";
import { BY_ID, ITEMS_SINGULAR, WITH_RELATIONS } from "../config/constants";
import {
  getItemById,
  getItemByIdWithRelations,
  getItems,
  getItemsWithRelations,
} from "../controllers";

const itemsRouter = express.Router();

itemsRouter.get("/", getItems);

itemsRouter.get(`/${WITH_RELATIONS}`, getItemsWithRelations);

itemsRouter.get(`/${ITEMS_SINGULAR}/:${BY_ID}`, getItemById);

itemsRouter.get(
  `/${WITH_RELATIONS}/${ITEMS_SINGULAR}/:${BY_ID}`,
  getItemByIdWithRelations
);

export default itemsRouter;
