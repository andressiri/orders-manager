import { IItemModel } from "../../../domain/typings/item";
import { throwHTTPError } from "../../helpers";

const getItems = async (Item: IItemModel) => {
  const itemsSearch = await Item.getItems();

  if (!itemsSearch || itemsSearch?.length < 1)
    throwHTTPError(404, "No items found");

  return itemsSearch;
};

export default getItems;
