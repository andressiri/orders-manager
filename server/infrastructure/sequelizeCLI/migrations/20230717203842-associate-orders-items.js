"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
const associateOrdersItemsMigration = {
    async up(queryInterface) {
        queryInterface.sequelize.transaction(async () => {
            await queryInterface.addColumn("OrderItems", "orderId", {
                type: sequelize_1.DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "Orders",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            });
            await queryInterface.addColumn("OrderItems", "itemId", {
                type: sequelize_1.DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "Items",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            });
        });
    },
    async down(queryInterface) {
        queryInterface.sequelize.transaction(async () => {
            await queryInterface.removeColumn("OrderItems", "orderId");
            await queryInterface.removeColumn("OrderItems", "itemId");
        });
    },
};
exports.default = associateOrdersItemsMigration;
