import { IItemModel } from "../../../domain/typings/item";
import { throwHTTPError, validateUUID } from "../../helpers";

const getItemByIdWithRelations = async (id: string, Item: IItemModel) => {
  if (!validateUUID(id)) throwHTTPError(400, `The id ${id} is invalid`);

  const item = await Item.getItemByIdWithRelations(id);

  if (!item) throwHTTPError(404, `There is no item for the id ${id}`);

  return item;
};

export default getItemByIdWithRelations;
