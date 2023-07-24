"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
const associateItemUserMigration = {
    async up(queryInterface) {
        queryInterface.sequelize.transaction(async () => {
            await queryInterface.addColumn("Items", "vendorId", {
                type: sequelize_1.DataTypes.UUID,
                allowNull: false,
                references: {
                    model: "Users",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            });
        });
    },
    async down(queryInterface) {
        queryInterface.sequelize.transaction(async () => {
            await queryInterface.removeColumn("Items", "vendorId");
        });
    },
};
exports.default = associateItemUserMigration;
