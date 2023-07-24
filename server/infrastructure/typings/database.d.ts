import { Dialect, ModelStatic, Sequelize } from "sequelize";
import {
  IItemModel,
  IOrderModel,
  IOrderItem,
  IUser,
} from "../../domain/typings/item";
import ItemModel from "../db/models/item";
import OrderModel from "../db/models/order";
import OrderItemModel from "../db/models/orderItem";
import UserModel from "../db/models/user";

export interface ItestConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

export interface IdevelopmentConfig extends ItestConfig {
  port: number;
}

export interface IproductionConfig {
  uri: string;
  dialect: Dialect;
  protocol: string;
  dialectOptions: {
    ssl: {
      require: boolean;
      rejectUnauthorized: boolean;
    };
  };
}

export interface IdbConfigs {
  development: IdevelopmentConfig;
  test: ItestConfig;
  production: IproductionConfig;
}

export interface IField {
  type: string;
  required?: boolean;
  unique?: boolean;
  primaryKey?: boolean;
  maxLength?: integer;
  decimals?: integer;
  values?: string[];
  isUrl?: boolean;
  isEmail?: boolean;
}

export interface DBModels {
  sequelize: Sequelize;
  Item: ModelStatic<ItemModel>;
  Order: ModelStatic<OrderModel>;
  OrderItem: ModelStatic<OrderItemModel>;
  User: ModelStatic<UserModel>;
}

export type Entity =
  | ModelStatic<ItemModel>
  | ModelStatic<OrderModel>
  | ModelStatic<OrderItemModel>
  | ModelStatic<UserModel>;

export interface IDB {
  sequelize: Sequelize;
  Item: IItemModel;
  Order: IOrderModel;
  OrderItem: IOrderItem; // update when repository is developed
  User: IUser; // update when repository is developed
}
