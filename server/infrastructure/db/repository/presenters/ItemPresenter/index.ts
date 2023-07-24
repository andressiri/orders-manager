import { DBModels } from "../../../../typings/database";
import { IItemRepository } from "../../../../../domain/typings/item";
import { getAllFromEntity } from "../../helpers";
import getItemsWithRelations from "./getItemsWithRelations";
import getItemById from "./getItemById";
import getItemByIdWithRelationsConstructor from "./getItemByIdWithRelations";

const ItemPresenterConstructor = (db: DBModels) => {
  const ItemPresenter: IItemRepository = {
    getItems: getAllFromEntity(db.Item),
    getItemsWithRelations: getItemsWithRelations(db),
    getItemById: getItemById(db.Item),
    getItemByIdWithRelations: getItemByIdWithRelationsConstructor(db),
  };

  return ItemPresenter;
};

export default ItemPresenterConstructor;
