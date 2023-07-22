import { Model, Sequelize } from "sequelize";
import { setupFieldType } from "../repository/config";
import { IUser } from "../../../domain/typings/user";
import { User as user } from "../config/getEnterpriseBusinessRules";

const UserModel = (sequelize: Sequelize) => {
  class User extends Model<IUser> implements IUser {
    declare id: string;
    declare name: string;
    declare email: string;
    declare password: string;
    declare createDate: Date;
    declare updateDate: Date;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static associate(models: any) {
      User.hasMany(models.Order, {
        foreignKey: "vendorId",
        as: "VendorOrders",
      });
      User.hasMany(models.Order, {
        foreignKey: "clientId",
        as: "ClientOrders",
      });
      User.hasMany(models.Item, {
        foreignKey: "vendorId",
        as: "SellingItems",
      });
    }
  }

  User.init(
    {
      id: setupFieldType(user.id),
      name: setupFieldType(user.name),
      email: setupFieldType(user.email),
      password: setupFieldType(user.password),
      createDate: setupFieldType(user.createDate),
      updateDate: setupFieldType(user.updateDate),
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true,
      createdAt: "createDate",
      updatedAt: "updateDate",
    }
  );

  return User;
};

export default UserModel;
