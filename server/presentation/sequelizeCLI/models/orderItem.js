"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const OrderItemModel = (sequelize) => {
    class OrderItem extends sequelize_1.Model {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        static associate(models) {
            OrderItem.belongsTo(models.Order, {
                foreignKey: "orderId",
                as: "hasOrderItems",
            });
            OrderItem.belongsTo(models.Item, {
                foreignKey: "itemId",
                as: "hasItemOrders",
            });
        }
    }
    OrderItem.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: sequelize_1.DataTypes.INTEGER,
        },
        orderId: sequelize_1.DataTypes.UUID,
        itemId: sequelize_1.DataTypes.UUID,
        createDate: sequelize_1.DataTypes.DATE,
        updateDate: sequelize_1.DataTypes.DATE,
    }, {
        sequelize,
        modelName: "OrderItem",
        tableName: "OrderItems",
        timestamps: true,
        createdAt: "createDate",
        updatedAt: "updateDate",
    });
    return OrderItem;
};
exports.default = OrderItemModel;
