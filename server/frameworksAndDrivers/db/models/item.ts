import { DataTypes, Model, Sequelize } from "sequelize";
import { setupFieldType } from "../repository/config";
import { IItem } from "../../../enterpriseBusinessRules/typings/item";
import { Item as item } from "../config/getEnterpriseBusinessRules";

const ItemModel = (sequelize: Sequelize) => {
  class Item extends Model<IItem> implements IItem {
    declare id: string;
    declare title: string;
    declare description: string;
    declare url: string;
    declare price: number;
    declare quantity: number;
    declare createDate: Date;
    declare updateDate: Date;
    declare vendorId: string;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      Item.belongsTo(models.User, {
        foreignKey: "vendorId",
        as: "Vendor",
      });
      Item.belongsToMany(models.Order, {
        through: "OrdersItems",
        foreignKey: "itemId",
        as: "Items",
      });
    }
  }

  Item.init(
    {
      id: setupFieldType(item.id),
      title: setupFieldType(item.title),
      description: setupFieldType(item.description),
      url: setupFieldType(item.url),
      price: setupFieldType(item.price),
      quantity: setupFieldType(item.quantity),
      createDate: setupFieldType(item.createDate),
      updateDate: setupFieldType(item.updateDate),
      vendorId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "Items",
      timestamps: true,
      createdAt: "createDate",
      updatedAt: "updateDate",
    }
  );

  return Item;
};

export default ItemModel;
