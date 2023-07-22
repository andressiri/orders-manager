import { DataType, ModelValidateOptions } from "sequelize";
import { IField } from "../../../typings/database";
import setupFieldType from "./setupFieldType";

const setupMigrationField = (field: IField) => {
  const validate: ModelValidateOptions = {};
  let primaryAux = {};
  const isInteger = field.type === "integer";

  if (field.values) validate.isIn = [field.values];
  if (field.isUrl) validate.isUrl = field.isUrl;
  if (field.isEmail) validate.isEmail = field.isEmail;

  if (field.primaryKey) {
    primaryAux = {
      primaryKey: true,
      autoIncrement: isInteger,
    };

    if (!isInteger)
      primaryAux = {
        primaryKey: true,
        autoIncrement: isInteger,
        defaultValue: setupFieldType(field, true),
      };
  }

  return {
    ...primaryAux,
    allowNull: !field.required,
    unique: Boolean(field.unique),
    type: setupFieldType(field, true) as DataType,
    validate,
  };
};

export default setupMigrationField;
