import { Dialect } from "sequelize";

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
