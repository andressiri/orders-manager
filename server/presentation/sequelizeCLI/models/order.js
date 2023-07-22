"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../repository/config");
const getEnterpriseBusinessRules_1 = require("../config/getEnterpriseBusinessRules");
const OrderModel = (sequelize) => {
    class Order extends sequelize_1.Model {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        static associate(models) {
            Order.belongsTo(models.User, {
                foreignKey: "vendorId",
                as: "Vendor",
            });
            Order.belongsTo(models.User, {
                foreignKey: "clientId",
                as: "Client",
            });
            Order.belongsToMany(models.Item, {
                through: models.OrderItem,
                foreignKey: "itemId",
                as: "Items",
            });
            Order.hasMany(models.Item, {
                foreignKey: "orderId",
                as: "hasManyItems",
            });
        }
    }
    Order.init({
        id: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Order.id),
        status: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Order.status),
        shippingAddress: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Order.shippingAddress),
        shippingPromise: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Order.shippingPromise),
        createDate: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Order.createDate),
        updateDate: (0, config_1.setupFieldType)(getEnterpriseBusinessRules_1.Order.updateDate),
        vendorId: sequelize_1.DataTypes.UUID,
        clientId: sequelize_1.DataTypes.UUID,
    }, {
        sequelize,
        modelName: "Order",
        tableName: "Orders",
        timestamps: true,
        createdAt: "createDate",
        updatedAt: "updateDate",
    });
    return Order;
};
exports.default = OrderModel;
