import { IItemModel } from "../../../domain/typings/item";
import { throwHTTPError, validateUUID } from "../../helpers";

const getItemById = async (id: string, Item: IItemModel) => {
  if (!validateUUID(id)) throwHTTPError(400, `The id ${id} is invalid`);

  const item = await Item.getItemById(id);

  if (!item) throwHTTPError(404, `There is no item for the id ${id}`);

  return item;
};

export default getItemById;
