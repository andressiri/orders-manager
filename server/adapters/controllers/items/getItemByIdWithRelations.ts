// @description Get item by id
// @route GET /api/v1/items/item/:id
// @access Public
import asyncHandler from "express-async-handler";
import { BY_ID } from "../../config/constants";
import { getItemByIdWithRelations as useCase } from "../../../application/useCases";

const getItemByIdWithRelations = asyncHandler(async (req, res) => {
  const id = req.params[BY_ID];
  const Item = req.db.Item;

  const item = await useCase(id, Item);

  res.status(200).json(item);
});

export default getItemByIdWithRelations;
