import { IField } from "../../../typings/database";
import { dataTypesEnum } from ".";

const setupFieldType = (field: IField, isMigration?: boolean) => {
  const isInteger = field.type === "integer";

  if (field.primaryKey && !isMigration) {
    return {
      type: dataTypesEnum[field.type as keyof typeof dataTypesEnum],
      allowNull: false,
      primaryKey: true,
      autoIncrement: isInteger,
    };
  }

  if (field.type === "string" && field.maxLength) {
    return dataTypesEnum[field.type as keyof typeof dataTypesEnum](
      field.maxLength
    );
  }

  if (field.type === "float" && field.decimals) {
    return dataTypesEnum[field.type as keyof typeof dataTypesEnum](
      field.maxLength || null,
      field.decimals
    );
  }

  return dataTypesEnum[field.type as keyof typeof dataTypesEnum];
};

export default setupFieldType;
