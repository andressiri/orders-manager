"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getEnterpriseBusinessRules_1 = require("../config/getEnterpriseBusinessRules");
const config_1 = require("../repository/config");
/** @type {import('sequelize-cli').Migration} */
const ordersMigration = {
    async up(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.createTable("Orders", {
                id: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Order.id),
                status: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Order.status),
                shippingAddress: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Order.shippingAddress),
                shippingPromise: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Order.shippingPromise),
                createDate: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Order.createDate),
                updateDate: (0, config_1.setupMigrationField)(getEnterpriseBusinessRules_1.Order.updateDate),
            }, {
                charset: "utf8mb4",
                collate: "utf8mb4_unicode_ci",
                transaction,
            });
        });
    },
    async down(queryInterface) {
        queryInterface.sequelize.transaction(async (transaction) => {
            await queryInterface.dropTable("Orders", { transaction });
        });
    },
};
exports.default = ordersMigration;
