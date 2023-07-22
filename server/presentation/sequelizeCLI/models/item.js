"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../repository/config");
const getEnterpriseBusinessRules_1 = require("../config/getEnterpriseBusinessRules");
const ItemModel = (sequelize) => {
    class Item extends sequelize_1.Model {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        static associate(models) {
            Item.belongsTo(models.User, {
                foreignKey: "vendorId",
                as: "Vendor",
            });
            Item.belongsToMany(models.Order, {
                through: models.OrderItem,
                foreignKey: "orderId",
                as: "Orders",
            });
            Item.hasMany(models.OrderItem, {
                foreignKey: "itemId",
                as: "hasManyOrders",
            });
        }
    }
    Item.init({
        id: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.id),
        title: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.title),
        description: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.description),
        url: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.url),
        price: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.price),
        quantity: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.quantity),
        createDate: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.createDate),
        updateDate: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Item.updateDate),
        vendorId: sequelize_1.DataTypes.UUID,
    }, {
        sequelize,
        modelName: "Item",
        tableName: "Items",
        timestamps: true,
        createdAt: "createDate",
        updatedAt: "updateDate",
    });
    return Item;
};
exports.default = ItemModel;
