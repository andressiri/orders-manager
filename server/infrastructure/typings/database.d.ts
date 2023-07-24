import { Dialect, ModelStatic, Sequelize } from "sequelize";
import Item from "../db/models/item";
import Order from "../db/models/order";
import OrderItem from "../db/models/orderItem";
import User from "../db/models/user";

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
  Item: ModelStatic<Item>;
  Order: ModelStatic<>;
  OrderItem: ModelStatic<OrderItem>;
  User: ModelStatic<User>;
}

export type Entity =
  | ModelStatic<Item>
  | ModelStatic<Order>
  | ModelStatic<OrderItem>
  | ModelStatic<User>;
