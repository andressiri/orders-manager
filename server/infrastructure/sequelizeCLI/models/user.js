"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../repository/config");
const getEnterpriseBusinessRules_1 = require("../config/getEnterpriseBusinessRules");
const UserModel = (sequelize) => {
    class User extends sequelize_1.Model {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        static associate(models) {
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
    User.init({
        id: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.User.id),
        name: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.User.name),
        email: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.User.email),
        password: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.User.password),
        createDate: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.User.createDate),
        updateDate: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.User.updateDate),
    }, {
        sequelize,
        modelName: "User",
        tableName: "Users",
        timestamps: true,
        createdAt: "createDate",
        updatedAt: "updateDate",
    });
    return User;
};
exports.default = UserModel;
