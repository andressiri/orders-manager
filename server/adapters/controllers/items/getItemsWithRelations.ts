// @description Get items with theirs Items and Vendor and Client
// @route GET /api/v1/items/all
// @access Public
import asyncHandler from "express-async-handler";
import { getItemsWithRelations as useCase } from "../../../application/useCases";

const getItems = asyncHandler(async (req, res) => {
  const Item = req.db.Item;

  const items = await useCase(Item);

  res.status(200).json(items);
});

export default getItems;
