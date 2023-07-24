import { DataTypes } from "sequelize";

const DataTypesEnum = {
  string: DataTypes.STRING,
  uuid: DataTypes.UUID,
  date: DataTypes.DATE,
  integer: DataTypes.INTEGER,
  float: DataTypes.FLOAT,
};

export default DataTypesEnum;
