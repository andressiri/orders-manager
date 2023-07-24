"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const setupFieldType = (field, isMigration) => {
    const isInteger = field.type === "integer";
    if (field.primaryKey && !isMigration) {
        return {
            type: _1.dataTypesEnum[field.type],
            allowNull: false,
            primaryKey: true,
            autoIncrement: isInteger,
        };
    }
    if (field.type === "string" && field.maxLength) {
        return _1.dataTypesEnum[field.type](field.maxLength);
    }
    if (field.type === "float" && field.decimals) {
        return _1.dataTypesEnum[field.type](field.maxLength || null, field.decimals);
    }
    return _1.dataTypesEnum[field.type];
};
exports.default = setupFieldType;
