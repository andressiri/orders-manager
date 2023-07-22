"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
const orderItemsMigration = {
    async up(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.createTable("OrderItems", {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: sequelize_1.DataTypes.INTEGER,
                },
                createDate: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.DATE,
                },
                updateDate: {
                    allowNull: false,
                    type: sequelize_1.DataTypes.DATE,
                },
            }, {
                charset: "utf8mb4",
                collate: "utf8mb4_unicode_ci",
                transaction,
            });
        });
    },
    async down(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.dropTable("OrderItems", { transaction });
        });
    },
};
exports.default = orderItemsMigration;
