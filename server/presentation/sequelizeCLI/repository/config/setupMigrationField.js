"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const setupFieldType_1 = __importDefault(require("./setupFieldType"));
const setupMigrationField = (field) => {
    const validate = {};
    let primaryAux = {};
    const isInteger = field.type === "integer";
    if (field.values)
        validate.isIn = [field.values];
    if (field.isUrl)
        validate.isUrl = field.isUrl;
    if (field.isEmail)
        validate.isEmail = field.isEmail;
    if (field.primaryKey) {
        primaryAux = {
            primaryKey: true,
            autoIncrement: isInteger,
        };
        if (!isInteger)
            primaryAux = {
                primaryKey: true,
                autoIncrement: isInteger,
                defaultValue: (0, setupFieldType_1.default)(field, true),
            };
    }
    return {
        ...primaryAux,
        allowNull: !field.required,
        unique: Boolean(field.unique),
        type: (0, setupFieldType_1.default)(field, true),
        validate,
    };
};
exports.default = setupMigrationField;
