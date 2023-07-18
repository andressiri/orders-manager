"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const DataTypesEnum = {
    string: sequelize_1.DataTypes.STRING,
    uuid: sequelize_1.DataTypes.UUID,
    date: sequelize_1.DataTypes.DATE,
    integer: sequelize_1.DataTypes.INTEGER,
    float: sequelize_1.DataTypes.FLOAT,
};
exports.default = DataTypesEnum;
